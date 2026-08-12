import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Mail, ArrowUpRight, Trophy } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenEnroll: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#08080A] border-t-4 border-[#E60012] overflow-hidden text-center">
      {/* Halftone Dot Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E60012]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        
        {/* Top Game Stage Banner */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-4 py-1.5 skew-x-[-12deg] shadow-[6px_6px_0px_#FFFFFF]"
        >
          <Trophy className="w-4 h-4 fill-black" /> STAGE CLEAR // READY FOR THE NEXT LEVEL?
        </motion.div>

        {/* Main Huge Typography */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-wider uppercase leading-none">
            YOUR NEXT MOVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-[#E60012] drop-shadow-[6px_6px_0px_#E60012]">
              STARTS HERE.
            </span>
          </h2>
        </motion.div>

        {/* Tagline Callout */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-black border-2 border-white px-6 py-2 skew-x-[-10deg] shadow-[6px_6px_0px_#00FF88]"
        >
          <span className="font-bebas text-3xl sm:text-4xl text-white tracking-widest uppercase">
            LEARN TODAY. <span className="text-[#00FF88]">LEAD TOMORROW.</span>
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-6"
        >
          <button
            onClick={() => {
              soundFx.playSelect();
              onOpenEnroll();
            }}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor="ENROLL!"
            className="group relative bg-[#E60012] text-black font-bebas text-3xl px-10 py-4 font-black uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-[#E60012] shadow-[8px_8px_0px_#FFFFFF] hover:shadow-[10px_10px_0px_#E60012] skew-x-[-10deg] active:translate-x-1 active:translate-y-1"
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              ENROLL TODAY
              <ArrowUpRight className="w-7 h-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>

          <a
            href="mailto:xenusconsultancy12@gmail.com"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            data-cursor="EMAIL"
            className="group relative bg-black text-white border-2 border-white font-bebas text-3xl px-9 py-3.5 font-black uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-black shadow-[8px_8px_0px_#E60012] skew-x-[-10deg] active:translate-x-1 active:translate-y-1"
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#E60012] group-hover:text-black" />
              CONTACT XENUS
            </span>
          </a>
        </motion.div>

        <div className="pt-4 font-space text-xs text-gray-400">
          OFFICIAL INQUIRIES & ADMISSIONS: <a href="mailto:xenusconsultancy12@gmail.com" className="text-[#00FF88] underline font-bold">xenusconsultancy12@gmail.com</a>
        </div>

      </div>
    </section>
  );
};
