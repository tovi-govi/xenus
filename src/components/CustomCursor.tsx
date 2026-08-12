import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check what element is under the cursor for text customization
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('[data-cursor]');
        if (interactive) {
          const text = interactive.getAttribute('data-cursor') || 'SELECT';
          setCursorText(text);
          setIsHovered(true);
        } else if (target.closest('a, button, input, select, textarea, [role="button"]')) {
          setCursorText('GO →');
          setIsHovered(true);
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  // Calculate dynamic dimensions & clamp position within viewport boundaries
  const estimatedHalfWidth = isHovered ? Math.max(54, cursorText.length * 6 + 18) : 16;
  const estimatedHalfHeight = isHovered ? 28 : 16;
  const margin = 12;

  const clampedX = Math.max(
    estimatedHalfWidth + margin,
    Math.min(window.innerWidth - estimatedHalfWidth - margin, position.x)
  );

  const clampedY = Math.max(
    estimatedHalfHeight + margin,
    Math.min(window.innerHeight - estimatedHalfHeight - margin, position.y)
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Dot - exact mouse position */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-[#E60012] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_12px_#E60012]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Expanding Persona Target Ring / Label - clamped inside visible viewport */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out border-2 ${
          isHovered
            ? 'px-3.5 h-10 min-w-[96px] w-auto whitespace-nowrap bg-black/90 border-[#E60012] shadow-[4px_4px_0px_#E60012]'
            : 'w-8 h-8 bg-transparent border-white/40 rounded-full scale-100 opacity-60'
        }`}
        style={{
          transform: `translate3d(${clampedX}px, ${clampedY}px, 0) ${
            isHovered ? 'rotate(-4deg)' : ''
          }`,
        }}
      >
        {isHovered && (
          <span className="font-bebas text-xs tracking-widest text-[#E60012] uppercase px-1 animate-pulse font-bold">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
