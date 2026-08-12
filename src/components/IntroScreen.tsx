import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Zap, Play } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    soundFx.playSlash();

    const t1 = setTimeout(() => {
      setStep(1);
      soundFx.playHover();
    }, 400);

    const t2 = setTimeout(() => {
      setStep(2);
      soundFx.playHover();
    }, 900);

    const t3 = setTimeout(() => {
      setStep(3);
      soundFx.playSelect();
    }, 1400);

    const autoClose = setTimeout(() => {
      handleEnter();
    }, 2200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(autoClose);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleEnter = () => {
    soundFx.playSlash();
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, y: -40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#08080A] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Persona Halftone Background Overlay */}
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

          {/* Animated Red Slash Backdrop Panels */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute h-48 w-[150%] bg-[#E60012] rotate-[-12deg] z-0 shadow-[0_0_50px_rgba(230,0,18,0.5)]"
          />

          <div className="relative z-10 text-center max-w-2xl w-full">
            {/* Top Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-black text-[#E60012] font-space text-xs tracking-widest px-4 py-1 border border-[#E60012] skew-x-[-12deg] mb-6 shadow-[4px_4px_0px_#FFFFFF]"
            >
              <Zap className="w-3.5 h-3.5 animate-bounce" />
              SYSTEM INITIALIZATION // 2026
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-bebas text-5xl md:text-7xl font-extrabold text-white tracking-wider uppercase drop-shadow-[4px_4px_0px_#000000] mb-2"
            >
              XENUS CONSULTANCY SERVICES
            </motion.h1>

            {/* Step Indicators */}
            <div className="h-16 flex flex-col items-center justify-center my-4">
              {step === 0 && (
                <motion.p
                  key="step0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-space text-[#00FF88] text-sm tracking-widest uppercase font-bold"
                >
                  &gt; INITIALIZING CORE SYSTEMS...
                </motion.p>
              )}
              {step === 1 && (
                <motion.p
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-space text-yellow-300 text-sm tracking-widest uppercase font-bold"
                >
                  &gt; LOADING TECH PROTOCOLS...
                </motion.p>
              )}
              {step >= 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 font-bebas text-2xl md:text-3xl text-white tracking-wider"
                >
                  <span className="text-[#E60012] bg-black px-2 py-0.5 skew-x-[-8deg]">LEARN</span>
                  <span>•</span>
                  <span className="text-black bg-white px-2 py-0.5 skew-x-[-8deg]">BUILD</span>
                  <span>•</span>
                  <span className="text-[#00E5FF] bg-black px-2 py-0.5 skew-x-[-8deg]">CREATE</span>
                  <span>•</span>
                  <span className="text-[#00FF88] bg-black px-2 py-0.5 skew-x-[-8deg]">LEAD</span>
                </motion.div>
              )}
            </div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <button
                onClick={handleEnter}
                data-cursor="ENTER!"
                className="group relative inline-flex items-center gap-3 bg-[#E60012] text-black font-bebas text-2xl tracking-wider px-8 py-3.5 font-bold uppercase transition-all duration-150 hover:bg-white hover:text-[#E60012] shadow-[6px_6px_0px_#FFFFFF] hover:shadow-[8px_8px_0px_#E60012] skew-x-[-10deg] active:translate-x-1 active:translate-y-1"
              >
                <Play className="w-5 h-5 fill-current transition-transform group-hover:scale-125" />
                <span className="skew-x-[10deg] inline-block">[ ENTER XENUS ]</span>
              </button>
            </motion.div>

            {/* Skip Hint */}
            <div className="mt-8 text-xs font-space text-gray-400 tracking-wider">
              PRESS <span className="text-white border border-gray-600 px-1.5 py-0.5 rounded">ESC</span> OR CLICK TO SKIP INTRO
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
