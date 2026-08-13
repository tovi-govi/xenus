import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { ShieldCheck, Lock, Terminal, Sparkles, X, Cpu, Zap } from 'lucide-react';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

interface ClassifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
  discoveredSecretsCount: number;
}

export const ClassifiedModal: React.FC<ClassifiedModalProps> = ({
  isOpen,
  onClose,
  discoveredSecretsCount,
}) => {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[800] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 select-none overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-[#08080A] border-4 border-[#00FF88] shadow-[12px_12px_0px_#E60012] p-6 sm:p-8 clip-card my-auto"
        >
          {/* Halftone & Grid overlay inside modal */}
          <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-grid-lines opacity-15 pointer-events-none" />

          {/* Close Action Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="absolute top-4 right-4 z-20 p-2.5 bg-black text-[#E60012] border-2 border-[#E60012] hover:bg-[#E60012] hover:text-black font-bebas text-lg uppercase transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header Banner */}
          <div className="relative z-10 space-y-3 border-b-2 border-white/20 pb-5">
            <div className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-space text-xs font-bold px-3 py-1 skew-x-[-10deg] shadow-[4px_4px_0px_#FFFFFF]">
              <ShieldCheck className="w-4 h-4" /> CLEARANCE LEVEL 5 GRANTED
            </div>

            <h2 className="font-bebas text-5xl sm:text-7xl font-black text-white tracking-widest uppercase leading-none">
              XENUS // <span className="text-[#00FF88] animate-pulse">CLASSIFIED</span>
            </h2>

            <p className="font-space text-xs sm:text-sm text-[#00E5FF] font-bold uppercase tracking-wider">
              SECRET CYBERNETIC ARCHIVES & PROJECT DIRECTIVES UNLOCKED
            </p>
          </div>

          {/* Lore Body Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {/* Intel Box 1 */}
            <div className="bg-black/90 border border-white/20 p-4 space-y-2 clip-card">
              <div className="flex items-center gap-2 font-bebas text-2xl text-[#E60012]">
                <Terminal className="w-5 h-5" /> PROJECT NEMESIS PROTOCOL
              </div>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                Xenus Consultancy operates high-speed training simulations engineered to bridge zero-to-one industry gaps in 6 months flat (3M Train + 3M Intern).
              </p>
              <div className="font-space text-[10px] text-[#00FF88] font-bold uppercase">
                STATUS: 100% PLACEMENT EFFICIENCY
              </div>
            </div>

            {/* Intel Box 2 */}
            <div className="bg-black/90 border border-white/20 p-4 space-y-2 clip-card">
              <div className="flex items-center gap-2 font-bebas text-2xl text-[#00E5FF]">
                <Cpu className="w-5 h-5" /> AUTONOMOUS CYPHER AGENTS
              </div>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                Students acquire production-grade RAG architectures, neural pipelines, AWS DevOps automation, and enterprise VLSI silicon logic.
              </p>
              <div className="font-space text-[10px] text-[#00E5FF] font-bold uppercase">
                CYPHER CORE: VERIFIED
              </div>
            </div>
          </div>

          {/* Discovery Progress Badges */}
          <div className="relative z-10 border-t border-white/15 pt-4 space-y-3">
            <div className="flex items-center justify-between font-space text-xs text-gray-300 font-bold uppercase">
              <span>EASTER EGG EXPLORATION STATS:</span>
              <span className="text-[#00FF88]">{discoveredSecretsCount} / 3 SECRETS DISCOVERED</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-black p-3 border border-white/20 text-center font-space text-[11px]">
                <Sparkles className="w-4 h-4 text-[#00FF88] mx-auto mb-1" />
                <span className="text-gray-300 font-bold">LOGO RAPID CLICK</span>
              </div>

              <div className="bg-black p-3 border border-white/20 text-center font-space text-[11px]">
                <Zap className="w-4 h-4 text-[#00E5FF] mx-auto mb-1" />
                <span className="text-gray-300 font-bold">X-E-N-U-S CYPHER</span>
              </div>

              <div className="bg-black p-3 border border-white/20 text-center font-space text-[11px]">
                <Lock className="w-4 h-4 text-[#E60012] mx-auto mb-1" />
                <span className="text-gray-300 font-bold">WORLD MAP SECRETS</span>
              </div>
            </div>
          </div>

          {/* Action Close Footer */}
          <div className="relative z-10 pt-6 text-center">
            <button
              onClick={() => {
                soundFx.playSlash();
                onClose();
              }}
              data-cursor="RETURN"
              className="bg-[#00FF88] text-black font-bebas text-2xl px-10 py-3 uppercase font-black skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF] hover:bg-white transition-colors"
            >
              <span className="skew-x-[10deg]">RESUME EXPLORATION →</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
