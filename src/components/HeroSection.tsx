import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface HeroSectionProps {
  onOpenEnroll: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll: _onOpenEnroll }) => {
  return (
    <section id="home" className="relative min-h-[85vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-lines opacity-15 pointer-events-none" />

      {/* Red Ambient Glow */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#E60012]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 text-left space-y-8">
        
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-black text-[#00FF88] border border-[#00FF88]/40 px-3.5 py-1 font-space text-xs font-bold tracking-widest uppercase skew-x-[-10deg] shadow-[4px_4px_0px_#00FF88]"
        >
          <Sparkles className="w-4 h-4 text-[#00FF88]" />
          <span>XENUS ACADEMY // LEARN TODAY, LEAD TOMORROW</span>
        </motion.div>

        {/* Main Clean Persona Headline */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bebas text-6xl sm:text-8xl lg:text-9xl font-black tracking-wider text-white uppercase leading-none"
          >
            BECOME A <br />
            <span className="text-[#E60012] drop-shadow-[6px_6px_0px_#FFFFFF]">TECH EXPERT</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bebas text-2xl sm:text-4xl text-yellow-300 tracking-wider uppercase pt-2"
          >
            3 MONTHS TRAINING + 3 MONTHS INTERNSHIP
          </motion.div>
        </div>

        {/* Clean Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          Master Artificial Intelligence, Full Stack Architecture, Cloud Infrastructure, Cyber Security, or Specialized Sciences with live industry project deployments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-5 pt-4"
        >
          <a
            href="#programs"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            data-cursor="EXPLORE"
            className="group relative bg-[#E60012] text-black font-bebas text-2xl px-8 py-3.5 font-black uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-black shadow-[6px_6px_0px_#FFFFFF] skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              EXPLORE PROGRAMS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href="mailto:xenusconsultancy12@gmail.com"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            data-cursor="CONTACT"
            className="group relative bg-black text-white border-2 border-white font-bebas text-2xl px-7 py-3.5 font-bold uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-black hover:border-black shadow-[6px_6px_0px_#00E5FF] skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00E5FF] group-hover:text-black" />
              CONTACT XENUS
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
