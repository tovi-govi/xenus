import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Award, BookOpen, Layers, FileText, Users, MessageSquare, Briefcase, ShieldCheck, Clock, UserCheck } from 'lucide-react';

interface Benefit {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export const WhyXenusSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      number: '01',
      title: 'INDUSTRY CURRICULUM',
      description: 'Constantly updated by active tech leads to match real enterprise hiring standards.',
      icon: BookOpen,
      color: '#E60012',
    },
    {
      number: '02',
      title: 'HANDS-ON TRAINING',
      description: 'Zero pure theory. 100% practical coding, labs, and interactive building.',
      icon: Layers,
      color: '#00FF88',
    },
    {
      number: '03',
      title: 'LIVE PROJECTS',
      description: 'Deploy real applications to live production servers with real user workloads.',
      icon: Award,
      color: '#00E5FF',
    },
    {
      number: '04',
      title: 'RESUME BUILDING',
      description: 'Craft ATS-optimized tech resumes highlighting real project repositories.',
      icon: FileText,
      color: '#FFD700',
    },
    {
      number: '05',
      title: 'MOCK INTERVIEWS',
      description: 'Rigorous technical and HR mock interviews with detailed feedback loops.',
      icon: Users,
      color: '#E60012',
    },
    {
      number: '06',
      title: 'SOFT SKILLS',
      description: 'Master executive communication, agile standups, and client presentation skills.',
      icon: MessageSquare,
      color: '#00FF88',
    },
    {
      number: '07',
      title: 'PLACEMENT SUPPORT',
      description: 'Direct referrals, interview scheduling, and placement drive assistance.',
      icon: Briefcase,
      color: '#00E5FF',
    },
    {
      number: '08',
      title: 'INTERNSHIP CERTIFICATE',
      description: 'Verifiable 3 Months Internship completion certificate recognized by companies.',
      icon: ShieldCheck,
      color: '#FF007F',
    },
    {
      number: '09',
      title: 'FLEXIBLE TIMINGS',
      description: 'Weekday and weekend morning/evening batches tailored for students & pros.',
      icon: Clock,
      color: '#FFD700',
    },
    {
      number: '10',
      title: 'SMALL BATCHES',
      description: 'Max 15-20 students per batch ensuring dedicated 1-on-1 mentor attention.',
      icon: UserCheck,
      color: '#E60012',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#08080B] overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-4 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
            THE XENUS ADVANTAGE // COLLECTIBLE PERKS
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none">
            WHY ENTER <span className="text-[#E60012]">XENUS?</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400">
            Everything you need to transform from student to industry tech expert in 3 Months Training + 3 Months Internship.
          </p>
        </div>

        {/* Collectible Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((b) => {
            const Icon = b.icon;

            return (
              <motion.div
                key={b.number}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="COLLECT"
                className="bg-black border-2 border-white/20 p-5 shadow-[6px_6px_0px_#000000] hover:border-[#E60012] hover:shadow-[10px_10px_0px_#E60012] transition-all flex flex-col justify-between min-h-[220px] select-none clip-card group text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bebas text-3xl font-black text-[#E60012] group-hover:text-white transition-colors">
                      {b.number}
                    </span>
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00FF88] transition-colors" />
                  </div>

                  <h3 className="font-bebas text-2xl text-white tracking-wider uppercase leading-none mb-2 group-hover:text-[#E60012]">
                    {b.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-space text-gray-500">
                  <span>CARD PERK</span>
                  <span className="text-[#00FF88] font-bold">UNLOCKED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
