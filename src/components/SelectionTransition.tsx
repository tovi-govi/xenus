import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { soundFx } from '../utils/sound';

interface SelectionTransitionProps {
  isActive: boolean;
  stampText?: string;
  onTransitionComplete?: () => void;
  onReverseComplete?: () => void;
  children: React.ReactNode;
}

export const SelectionTransition: React.FC<SelectionTransitionProps> = ({
  isActive,
  stampText = 'PATH SELECTED',
  onTransitionComplete,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const bar4Ref = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onTransitionComplete) onTransitionComplete();
      return;
    }

    soundFx.playSlash();

    // Lifecycle-safe GSAP context creation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onTransitionComplete) onTransitionComplete();
        },
      });

      // 1. Wipe Bars sweep across the viewport
      tl.set(wipeRef.current, { display: 'block', opacity: 1 })
        .fromTo(
          [bar1Ref.current, bar2Ref.current, bar3Ref.current, bar4Ref.current],
          { scaleX: 0, transformOrigin: '0% 50%' },
          {
            scaleX: 1,
            duration: 0.35,
            stagger: 0.05,
            ease: 'power3.inOut',
          }
        )
        // 2. Clear Wipe Bars to reveal content
        .to([bar1Ref.current, bar2Ref.current, bar3Ref.current, bar4Ref.current], {
          scaleX: 0,
          transformOrigin: '100% 50%',
          duration: 0.3,
          stagger: 0.04,
          ease: 'power3.inOut',
        })
        .set(wipeRef.current, { display: 'none' })
        // 3. Stamp Effect
        .fromTo(
          stampRef.current,
          { scale: 3, opacity: 0, rotate: -12 },
          {
            scale: 1,
            opacity: 1,
            rotate: -4,
            duration: 0.25,
            ease: 'back.out(2)',
            onStart: () => soundFx.playSelect(),
          }
        )
        .to(stampRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          delay: 0.4,
        });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* GSAP Diagonal Wipe Screen Overlay */}
      <div
        ref={wipeRef}
        className="fixed inset-0 z-[9000] pointer-events-none hidden overflow-hidden"
      >
        <div
          ref={bar1Ref}
          className="absolute -top-[20%] -left-[20%] w-[150%] h-[50%] bg-[#E60012] skew-y-[-12deg] shadow-[0_0_40px_#E60012]"
        />
        <div
          ref={bar2Ref}
          className="absolute top-[20%] -left-[20%] w-[150%] h-[40%] bg-black skew-y-[-12deg] border-y-4 border-[#00E5FF]"
        />
        <div
          ref={bar3Ref}
          className="absolute top-[50%] -left-[20%] w-[150%] h-[40%] bg-[#00FF88] skew-y-[-12deg]"
        />
        <div
          ref={bar4Ref}
          className="absolute top-[80%] -left-[20%] w-[150%] h-[40%] bg-[#08080A] skew-y-[-12deg]"
        />
      </div>

      {/* Dramatic Stamp Overlay */}
      <div
        ref={stampRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[8500] pointer-events-none opacity-0 select-none"
      >
        <div className="bg-[#E60012] text-black font-bebas text-5xl sm:text-7xl lg:text-9xl px-8 py-3 font-black tracking-widest uppercase border-4 border-white shadow-[12px_12px_0px_#FFFFFF] skew-x-[-12deg]">
          {stampText}
        </div>
      </div>

      {children}
    </div>
  );
};
