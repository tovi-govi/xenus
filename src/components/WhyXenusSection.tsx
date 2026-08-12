import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Award, BookOpen, Layers, Briefcase } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const WhyXenusSection: React.FC = () => {
  const pillars: Pillar[] = [
    {
      number: '01',
      title: 'PRACTICAL TRAINING',
      description: 'Zero pure theory. 100% hands-on coding, live lab environments, and real-world software architecture.',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'REAL PROJECTS',
      description: 'Deploy real applications to live production servers with active user workloads during your 3 Months Internship.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'CAREER SUPPORT',
      description: 'ATS resume optimization, 1-on-1 mock interviews, direct company referrals, and salary negotiation coaching.',
      icon: Briefcase,
    },
    {
      number: '04',
      title: 'INDUSTRY CERTIFICATION',
      description: 'Earn ISO-certified credentials recognized across leading software, cloud, and AI companies.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#08080C] overflow-hidden border-t-4 border-[#E60012]">
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-3.5 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
            THE XENUS ADVANTAGE // WHY ENTER XENUS
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none">
            WHY ENTER <span className="text-[#E60012]">XENUS?</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-xl">
            Everything you need to transform from student to industry tech lead in 3 Months Training + 3 Months Internship.
          </p>
        </div>

        {/* Clean 4 Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.number}
                whileHover={{ y: -6 }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="ADVANTAGE"
                className="bg-black border-2 border-white/20 p-6 shadow-[6px_6px_0px_#000000] hover:border-[#E60012] hover:shadow-[8px_8px_0px_#E60012] transition-all flex flex-col justify-between min-h-[240px] select-none clip-card text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bebas text-4xl font-black text-[#E60012]">
                      {p.number}
                    </span>
                    <Icon className="w-6 h-6 text-gray-400" />
                  </div>

                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wider uppercase leading-none mb-2">
                    {p.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
