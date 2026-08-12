import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Terminal, Cpu, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface HeroSectionProps {
  onOpenEnroll: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-lines opacity-20 pointer-events-none" />

      {/* Red Graphic Slash Background Accent */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#E60012]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -left-40 bottom-10 w-[120%] h-48 bg-[#E60012] rotate-[-6deg] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Asymmetrical Editorial Typography */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-black text-[#00FF88] border border-[#00FF88]/40 px-3 py-1 font-space text-xs tracking-widest uppercase skew-x-[-12deg] shadow-[4px_4px_0px_#00FF88]"
          >
            <Sparkles className="w-4 h-4 text-[#00FF88] animate-spin" />
            <span>REINVENTING TECH EDUCATION // 2026</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bebas text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-wider leading-none"
            >
              BECOME A
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bebas text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider text-white uppercase leading-none"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-[#E60012] drop-shadow-[4px_4px_0px_#E60012]">
                TECH EXPERT
              </span>
            </motion.div>

            {/* Dominant "IN JUST 3 MONTHS" Persona Banner */}
            <motion.div
              initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
              animate={{ scale: 1, rotate: -3, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
              className="inline-block my-3 bg-[#E60012] text-black font-bebas text-4xl sm:text-6xl lg:text-7xl px-6 py-2 font-black uppercase tracking-wider skew-x-[-12deg] shadow-[8px_8px_0px_#FFFFFF] hover:rotate-0 transition-transform cursor-pointer"
              onClick={() => {
                soundFx.playSlash();
                onOpenEnroll();
              }}
              data-cursor="3 MONTHS!"
            >
              <span className="skew-x-[12deg] inline-block text-black">
                IN JUST <span className="text-white underline decoration-black underline-offset-4">3 MONTHS</span>
              </span>
            </motion.div>
          </div>

          {/* Supporting Tech Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 font-bebas text-xl sm:text-2xl text-[#00E5FF] tracking-widest pt-1"
          >
            <span className="bg-black/80 px-3 py-1 border border-[#00E5FF]/30 skew-x-[-6deg]">AI</span>
            <span className="text-gray-500">•</span>
            <span className="bg-black/80 px-3 py-1 border border-[#00E5FF]/30 skew-x-[-6deg]">FULL STACK</span>
            <span className="text-gray-500">•</span>
            <span className="bg-black/80 px-3 py-1 border border-[#00E5FF]/30 skew-x-[-6deg]">CLOUD</span>
            <span className="text-gray-500">•</span>
            <span className="bg-black/80 px-3 py-1 border border-[#00E5FF]/30 skew-x-[-6deg]">DATA SCIENCE</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-sans text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            Build real-world skills. Work on live projects. Learn technologies that actually matter with <strong className="text-white">3 Months Training + 3 Months Internship</strong>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#programs"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              data-cursor="EXPLORE"
              className="group relative bg-[#E60012] text-black font-bebas text-2xl px-8 py-3.5 font-bold uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-[#E60012] shadow-[6px_6px_0px_#FFFFFF] hover:shadow-[8px_8px_0px_#E60012] skew-x-[-10deg] active:translate-x-1 active:translate-y-1"
            >
              <span className="skew-x-[10deg] inline-flex items-center gap-2">
                ENTER PROGRAMS
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="mailto:xenusconsultancy12@gmail.com"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              data-cursor="CONTACT"
              className="group relative bg-black text-white border-2 border-white font-bebas text-2xl px-7 py-3 font-bold uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-black hover:border-black shadow-[6px_6px_0px_#E60012] skew-x-[-10deg] active:translate-x-1 active:translate-y-1"
            >
              <span className="skew-x-[10deg] inline-flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#E60012] group-hover:text-black" />
                CONTACT XENUS
              </span>
            </a>
          </motion.div>

          {/* Key Guarantee Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-4 flex flex-wrap gap-4 text-xs font-space text-gray-400"
          >
            <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
              <span>INDUSTRY CERTIFICATION</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 border border-white/10">
              <Layers className="w-4 h-4 text-[#00E5FF]" />
              <span>LIVE INDUSTRY PROJECTS</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 border border-white/10">
              <Cpu className="w-4 h-4 text-[#E60012]" />
              <span>3 MONTHS INTERNSHIP INCLUDED</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Abstract Technology Poster Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Persona Poster Outer Frame */}
          <div className="relative bg-black border-4 border-white p-4 shadow-[12px_12px_0px_#E60012] skew-y-[-2deg] transition-transform duration-300 hover:skew-y-0">
            
            {/* Corner Decorative Tags */}
            <div className="absolute -top-4 -left-4 bg-[#E60012] text-black font-bebas text-lg px-3 py-0.5 skew-x-[-12deg] font-bold shadow-[2px_2px_0px_#FFFFFF]">
              TARGET: TECH MASTERY
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00FF88] text-black font-bebas text-lg px-3 py-0.5 skew-x-[-12deg] font-bold shadow-[2px_2px_0px_#000000]">
              STATUS: RECRUITING
            </div>

            {/* Poster Inner Visual Surface */}
            <div className="relative bg-gradient-to-b from-[#141419] to-[#0A0A0E] p-6 border border-white/20 overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Background Geometric Grid & Nodes */}
              <div className="absolute inset-0 bg-halftone opacity-40" />
              <div className="absolute inset-0 bg-blueprint opacity-30" />

              {/* Diagonal Slash Graphic */}
              <div className="absolute top-0 right-0 w-48 h-full bg-[#E60012]/30 skew-x-[-25deg] pointer-events-none" />

              {/* Floating Code HUD Panel */}
              <div className="relative z-10 bg-black/90 border border-[#00E5FF]/40 p-3 shadow-[4px_4px_0px_#00E5FF]">
                <div className="flex items-center justify-between text-xs font-space text-[#00E5FF] mb-2 border-b border-[#00E5FF]/30 pb-1">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    XENUS_CORE_OS_v3.6
                  </span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="font-mono text-xs text-gray-300 space-y-1">
                  <p className="text-[#00FF88]">&gt; import {`{ AI, FullStack, DevOps }`} from '@xenus/academy'</p>
                  <p className="text-gray-400">&gt; const student = new TechExpert();</p>
                  <p className="text-[#E60012]">&gt; await student.train({`duration: '3 MONTHS'`});</p>
                  <p className="text-yellow-300">&gt; await student.intern({`duration: '3 MONTHS'`});</p>
                  <p className="text-white font-bold">&gt; // RESULT: CAREER LAUNCHED 🚀</p>
                </div>
              </div>

              {/* Central Abstract Neural/Data Visual */}
              <div className="relative z-10 my-6 py-4 flex items-center justify-center">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  {/* Rotating Neon Rings */}
                  <div className="absolute inset-0 border-2 border-dashed border-[#E60012] rounded-full animate-spin [animation-duration:12s]" />
                  <div className="absolute inset-2 border-2 border-solid border-[#00FF88]/40 rounded-full animate-spin [animation-duration:8s] [animation-direction:reverse]" />
                  <div className="absolute inset-6 border border-white/20 rounded-full" />
                  
                  {/* Central Xenus Emblem Badge */}
                  <div className="relative bg-[#E60012] text-black w-24 h-24 flex flex-col items-center justify-center font-bebas text-3xl font-black tracking-widest skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF]">
                    <span>XENUS</span>
                    <span className="text-xs font-space tracking-normal text-white bg-black px-1.5 py-0.5 font-bold">2026</span>
                  </div>
                </div>
              </div>

              {/* Bottom Mission Card Stats */}
              <div className="relative z-10 grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10">
                <div className="bg-black/80 p-2 border border-white/10">
                  <div className="font-bebas text-2xl text-[#E60012]">3M + 3M</div>
                  <div className="font-space text-[10px] text-gray-400">TRAIN + INTERN</div>
                </div>
                <div className="bg-black/80 p-2 border border-white/10">
                  <div className="font-bebas text-2xl text-[#00FF88]">100%</div>
                  <div className="font-space text-[10px] text-gray-400">LIVE PROJECTS</div>
                </div>
                <div className="bg-black/80 p-2 border border-white/10">
                  <div className="font-bebas text-2xl text-[#00E5FF]">8+</div>
                  <div className="font-space text-[10px] text-gray-400">TECH PATHS</div>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
