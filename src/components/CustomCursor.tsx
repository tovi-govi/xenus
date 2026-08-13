import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  // Positional and state refs for zero React re-render overhead
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const magneticOffset = useRef({ x: 0, y: 0 });
  const hoverState = useRef({ isHovered: false, text: '' });

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 1024;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setIsMobile(isTouch || isCoarsePointer || isSmallScreen || isReducedMotion);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      let actionText = '';
      let hovering = false;
      let magX = 0;
      let magY = 0;

      if (target) {
        const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
        const magneticTarget = target.closest('[data-magnetic], button, a') as HTMLElement | null;

        if (cursorTarget) {
          actionText = cursorTarget.getAttribute('data-cursor') || 'INTERACT';
          hovering = true;
        } else if (target.closest('a, button, input, select, textarea, [role="button"]')) {
          actionText = 'ENTER';
          hovering = true;
        }

        if (magneticTarget) {
          const rect = magneticTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

          if (dist < 60) {
            magX = (centerX - mouseX) * 0.35;
            magY = (centerY - mouseY) * 0.35;
          }
        }
      }

      targetPos.current = { x: mouseX, y: mouseY };
      magneticOffset.current = { x: magX, y: magY };
      hoverState.current = { isHovered: hovering, text: actionText };
    };

    // Smooth Lerp Render Loop (60 FPS) with direct DOM updates
    let prevHovered = false;
    let prevText = '';

    const render = () => {
      const lerpFactor = 0.18;
      const targetX = targetPos.current.x + magneticOffset.current.x;
      const targetY = targetPos.current.y + magneticOffset.current.y;

      currentPos.current.x += (targetX - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetY - currentPos.current.y) * lerpFactor;

      const isHovered = hoverState.current.isHovered;
      const cursorText = hoverState.current.text;

      // Direct DOM transforms
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetPos.current.x}px, ${targetPos.current.y}px, 0) scale(${isHovered ? 0.6 : 1})`;
      }

      if (ringRef.current) {
        const clampedX = Math.max(20, Math.min(window.innerWidth - 20, currentPos.current.x));
        const clampedY = Math.max(20, Math.min(window.innerHeight - 20, currentPos.current.y));
        ringRef.current.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0) ${
          isHovered ? 'rotate(-4deg)' : ''
        }`;

        // Class update on hover state change
        if (isHovered !== prevHovered) {
          if (isHovered) {
            ringRef.current.className =
              'fixed top-0 left-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out border-2 px-3.5 h-10 min-w-[100px] w-auto whitespace-nowrap bg-black/90 border-[#E60012] shadow-[4px_4px_0px_#E60012]';
          } else {
            ringRef.current.className =
              'fixed top-0 left-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out border-2 w-8 h-8 bg-transparent border-white/40 rounded-full opacity-60';
          }
          prevHovered = isHovered;
        }
      }

      if (textRef.current) {
        if (isHovered) {
          textRef.current.style.display = 'inline';
          if (cursorText !== prevText) {
            textRef.current.textContent = cursorText;
            prevText = cursorText;
          }
        } else {
          textRef.current.style.display = 'none';
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Primary Dot - exact mouse coordinates */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-[#E60012] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_12px_#E60012]"
      />

      {/* Outer Interpolated Reticle / Tag Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out border-2 w-8 h-8 bg-transparent border-white/40 rounded-full opacity-60"
      >
        <span
          ref={textRef}
          style={{ display: 'none' }}
          className="font-bebas text-xs tracking-widest text-[#E60012] uppercase px-1 font-bold animate-pulse"
        />
      </div>
    </div>
  );
};
