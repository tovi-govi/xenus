import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Award, Briefcase, Sparkles, CheckCircle2, ArrowUpRight, Flame } from 'lucide-react';

interface FeaturedAiProgramProps {
  onOpenEnroll: () => void;
}

export const FeaturedAiProgram: React.FC<FeaturedAiProgramProps> = ({ onOpenEnroll }) => {
  return (
    <section id="flagship" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#08080A] overflow-hidden">
      {/* Halftone texture */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 w-[120%] h-64 bg-[#E60012] rotate-[-5deg] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Mission Briefing Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black border-4 border-white p-6 sm:p-10 lg:p-12 shadow-[14px_14px_0px_#E60012] relative overflow-hidden clip-card"
        >
          {/* Top Mission Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b-2 border-white/20 pb-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#E60012] text-black font-bebas text-2xl px-4 py-1 font-black uppercase tracking-wider skew-x-[-12deg]">
                FLAGSHIP MISSION
              </div>
              <div className="bg-[#00FF88] text-black font-space text-xs px-3 py-1 font-bold tracking-widest uppercase skew-x-[-12deg] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-black" /> FOR FRESHERS & RECENT GRADS
              </div>
            </div>

            <div className="font-space text-xs text-gray-400 tracking-widest">
              STATUS: <span className="text-[#00FF88] font-bold">ADMISSIONS OPEN</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="font-space text-sm text-[#00E5FF] tracking-widest uppercase font-bold">
                  ADVANCED ARTIFICIAL INTELLIGENCE ACADEMY
                </span>

                <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-wider uppercase leading-none mt-1">
                  LEARN. <span className="text-[#E60012]">BUILD.</span> GET HIRED.
                </h2>
              </div>

              {/* Crucial 3 Months Training + 3 Months Internship Banner */}
              <div className="bg-[#12121A] border-2 border-[#00FF88] p-5 shadow-[6px_6px_0px_#00FF88] skew-x-[-4deg]">
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase mb-1">
                  OFFICIAL PROGRAM DURATION & STRUCTURE
                </div>

                <div className="flex flex-wrap items-center gap-3 font-bebas text-3xl sm:text-4xl text-white">
                  <span className="text-[#00FF88]">3 MONTHS TRAINING</span>
                  <span className="text-[#E60012] font-black">+</span>
                  <span className="text-[#00E5FF]">3 MONTHS INTERNSHIP</span>
                </div>

                <p className="font-sans text-xs text-gray-300 mt-2">
                  Gain 90 days of intense hands-on curriculum training followed by 90 days of guaranteed internship working on real industrial client products.
                </p>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-black/90 p-4 border border-white/20 flex flex-col items-start space-y-2">
                  <Award className="w-6 h-6 text-[#E60012]" />
                  <span className="font-bebas text-xl text-white">INDUSTRY CERTIFICATION</span>
                  <span className="font-sans text-xs text-gray-400">Verifiable credentials recognized by top tech employers</span>
                </div>

                <div className="bg-black/90 p-4 border border-white/20 flex flex-col items-start space-y-2">
                  <Sparkles className="w-6 h-6 text-[#00FF88]" />
                  <span className="font-bebas text-xl text-white">LIVE PROJECTS</span>
                  <span className="font-sans text-xs text-gray-400">Deploy production AI models, chatbots & RAG systems</span>
                </div>

                <div className="bg-black/90 p-4 border border-white/20 flex flex-col items-start space-y-2">
                  <Briefcase className="w-6 h-6 text-[#00E5FF]" />
                  <span className="font-bebas text-xl text-white">PLACEMENT SUPPORT</span>
                  <span className="font-sans text-xs text-gray-400">Resume building, mock interviews & career guidance</span>
                </div>
              </div>
            </div>

            {/* Right Price & Enrollment Callout */}
            <div className="lg:col-span-5 bg-[#0D0D12] border-2 border-[#E60012] p-8 text-center shadow-[10px_10px_0px_#FFFFFF] relative space-y-6">
              
              {/* Badge */}
              <div className="inline-block bg-[#E60012] text-black font-bebas text-lg px-4 py-1 font-bold uppercase skew-x-[-12deg]">
                ALL-INCLUSIVE INVESTMENT
              </div>

              <div>
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase">TOTAL COURSE FEE</div>
                <div className="font-bebas text-6xl sm:text-7xl font-black text-white tracking-wider my-1 drop-shadow-[4px_4px_0px_#E60012]">
                  ₹25,000/-
                </div>
                <div className="font-space text-xs text-[#00FF88] font-bold uppercase bg-black/60 py-1 px-3 border border-[#00FF88]/30 inline-block">
                  INCLUDING 3 MONTHS INTERNSHIP CERTIFICATE
                </div>
              </div>

              <div className="space-y-2 text-left text-xs font-sans text-gray-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                  <span>No hidden charges. Complete learning kit included.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                  <span>Flexible batch timings (Morning & Evening sessions).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                  <span>1-on-1 mentorship with senior AI engineers.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playSlash();
                  onOpenEnroll();
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="ACCEPT!"
                className="w-full bg-[#E60012] text-black font-bebas text-3xl px-6 py-4 font-black uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-[#E60012] shadow-[6px_6px_0px_#FFFFFF] skew-x-[-8deg] active:translate-x-1 active:translate-y-1"
              >
                <span className="skew-x-[8deg] inline-flex items-center justify-center gap-2">
                  ACCEPT MISSION & ENROLL
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
