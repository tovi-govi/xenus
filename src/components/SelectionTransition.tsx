import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { soundFx } from '../utils/sound';

interface SelectionTransitionProps {
  isActive: boolean;
  stampText?: string;
  onTransitionComplete?: () => void;
  children: React.ReactNode;
}

export const SelectionTransition: React.FC<SelectionTransitionProps> = ({
  isActive,
  onTransitionComplete,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion) {
      if (onTransitionComplete) onTransitionComplete();
      return;
    }

    soundFx.playSlash();

    const sweepDuration = isMobile ? 0.09 : 0.12;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onTransitionComplete) onTransitionComplete();
        },
      });

      // Rapid CUT -> SNAP -> REVEAL (220ms total sweep)
      tl.set(wipeRef.current, { display: 'block', opacity: 1 })
        .fromTo(
          [bar1Ref.current, bar2Ref.current, bar3Ref.current],
          { scaleX: 0, transformOrigin: '0% 50%' },
          {
            scaleX: 1,
            duration: sweepDuration,
            stagger: 0.02,
            ease: 'power3.in',
          }
        )
        .to([bar1Ref.current, bar2Ref.current, bar3Ref.current], {
          scaleX: 0,
          transformOrigin: '100% 50%',
          duration: sweepDuration,
          stagger: 0.02,
          ease: 'power3.out',
        })
        .set(wipeRef.current, { display: 'none' });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isActive, onTransitionComplete]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Xenus Fast Geometric Snap Wipe Overlay */}
      <div
        ref={wipeRef}
        className="fixed inset-0 z-[9000] pointer-events-none hidden overflow-hidden select-none"
      >
        <div
          ref={bar1Ref}
          className="absolute -top-[25%] -left-[20%] w-[150%] h-[60%] bg-[#E60012] skew-y-[-14deg] shadow-[0_0_30px_#E60012]"
        />
        <div
          ref={bar2Ref}
          className="absolute top-[25%] -left-[20%] w-[150%] h-[50%] bg-black skew-y-[-14deg] border-y-4 border-[#00E5FF]"
        />
        <div
          ref={bar3Ref}
          className="absolute top-[65%] -left-[20%] w-[150%] h-[60%] bg-[#00FF88] skew-y-[-14deg]"
        />
      </div>

      {children}
    </div>
  );
};
