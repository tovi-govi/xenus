import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { UserCheck, Star } from 'lucide-react';

interface CareerRole {
  number: string;
  role: string;
  tagline: string;
  careerPath: string;
}

export const CareerPathsSection: React.FC = () => {
  const roles: CareerRole[] = [
    {
      number: '01',
      role: 'AI ENGINEER',
      tagline: 'Enterprise AI Systems & LLM Integrations',
      careerPath: 'Junior AI Developer → AI Engineer → Lead AI Architect',
    },
    {
      number: '02',
      role: 'FULL STACK DEVELOPER',
      tagline: 'React, Node.js & Enterprise Web Architecture',
      careerPath: 'Frontend / Backend Dev → Full Stack Dev → Tech Lead',
    },
    {
      number: '03',
      role: 'DATA SCIENTIST',
      tagline: 'Predictive Modeling & Statistical AI Pipelines',
      careerPath: 'Data Analyst → Data Scientist → Principal Scientist',
    },
    {
      number: '04',
      role: 'CLOUD ARCHITECT',
      tagline: 'AWS, Microservices & DevOps CI/CD Pipelines',
      careerPath: 'Cloud Associate → DevOps Engineer → Cloud Architect',
    },
    {
      number: '05',
      role: 'CYBER SECURITY SPECIALIST',
      tagline: 'Penetration Testing & IAM Enterprise Security',
      careerPath: 'Security Analyst → Ethical Hacker → CISO Specialist',
    },
  ];

  return (
    <section id="careers" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F] border-t-4 border-[#00FF88] overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-space text-xs font-bold tracking-widest px-3.5 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#000000]">
            <UserCheck className="w-4 h-4" /> CAREER OUTCOMES // WHERE CAN THIS PATH LEAD?
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none">
            CHOOSE <span className="text-[#00FF88]">YOUR CAREER</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-xl">
            We align your 3 Months Training + 3 Months Internship specifically towards your target industry role.
          </p>
        </div>

        {/* 5 Focused Role Outcome Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {roles.map((r) => (
            <motion.div
              key={r.number}
              whileHover={{ y: -6 }}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor="CAREER"
              className="p-5 bg-black border-2 border-white/15 hover:border-[#00FF88] shadow-[6px_6px_0px_#000000] transition-all text-left flex flex-col justify-between min-h-[200px] skew-x-[-4deg] clip-card select-none group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bebas text-3xl font-black text-[#00FF88]">
                  {r.number}
                </span>
                <Star className="w-4 h-4 text-gray-500 group-hover:text-[#00FF88]" />
              </div>

              <div>
                <h3 className="font-bebas text-2xl tracking-wider text-white uppercase leading-none mb-1 group-hover:text-[#00FF88]">
                  {r.role}
                </h3>
                <p className="font-space text-[11px] text-gray-400 font-semibold line-clamp-2">
                  {r.tagline}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/10 text-[10px] font-space text-gray-500 uppercase tracking-widest">
                {r.careerPath}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
