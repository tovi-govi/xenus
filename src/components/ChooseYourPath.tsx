import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Code, Terminal, Brain, Cloud, Shield, Cpu, CircuitBoard, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface CourseCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  skills: string[];
  description: string;
}

interface ChooseYourPathProps {
  onSelectCourse: (courseName: string) => void;
}

export const ChooseYourPath: React.FC<ChooseYourPathProps> = ({ onSelectCourse }) => {
  const [activeId, setActiveId] = useState<string>('02');

  const categories: CourseCategory[] = [
    {
      id: '01',
      number: '01',
      title: 'FOUNDATION',
      subtitle: 'CORE PROGRAMMING & CS LOGIC',
      icon: Code,
      badge: 'ESSENTIAL',
      description: 'Master core computer science principles and algorithmic problem solving.',
      skills: ['Python Programming', 'Java Basics', 'Data Structures & Algorithms', 'Git & Version Control'],
    },
    {
      id: '02',
      number: '02',
      title: 'FULL STACK',
      subtitle: 'WEB & BACKEND ARCHITECTURE',
      icon: Terminal,
      badge: 'MOST POPULAR',
      description: 'Build production-ready end-to-end web applications with modern tech stacks.',
      skills: ['HTML5 & Modern CSS3', 'JavaScript (ES6+) & React', 'Node.js / Java / Python', 'SQL & MongoDB Databases', 'Real-Time Enterprise Projects'],
    },
    {
      id: '03',
      number: '03',
      title: 'AI & DATA SCIENCE',
      subtitle: 'MACHINE LEARNING & INTELLIGENCE',
      icon: Brain,
      badge: 'HIGH DEMAND',
      description: 'Unlock predictive intelligence, neural networks, and automated data pipelines.',
      skills: ['AI Fundamentals', 'Machine Learning Algorithms', 'Data Science & Analysis', 'Data Visualization (Plotly/Seaborn)'],
    },
    {
      id: '04',
      number: '04',
      title: 'CLOUD & DEVOPS',
      subtitle: 'INFRASTRUCTURE & AUTOMATION',
      icon: Cloud,
      badge: 'ENTERPRISE',
      description: 'Deploy, scale, and automate cloud native microservices infrastructure.',
      skills: ['AWS / Azure Cloud Basics', 'DevOps Automation Tools', 'CI/CD Pipelines', 'Docker & Kubernetes'],
    },
    {
      id: '05',
      number: '05',
      title: 'CYBER SECURITY',
      subtitle: 'DEFENSIVE & PENETRATION LABS',
      icon: Shield,
      badge: 'CRITICAL',
      description: 'Secure networks, audit identity systems, and master ethical hacking.',
      skills: ['Cyber Security Basics', 'Ethical Hacking Methodologies', 'IAM & PAM Systems', 'Network & Application Security'],
    },
    {
      id: '06',
      number: '06',
      title: 'ADVANCED TECH',
      subtitle: 'NEXT-GEN TEST & SERVICE ENGINE',
      icon: Cpu,
      badge: 'SPECIALIZED',
      description: 'Gain specialized mastery in automated test systems and enterprise platforms.',
      skills: ['ServiceNow Administration', 'Microsoft Playwright Automation', 'Quantum Computing Introduction'],
    },
    {
      id: '07',
      number: '07',
      title: 'VLSI DESIGN',
      subtitle: 'HARDWARE & CHIP ARCHITECTURE',
      icon: CircuitBoard,
      badge: 'HARDWARE',
      description: 'Design digital circuits, silicon chips, and FPGA hardware specifications.',
      skills: ['Digital Electronics', 'Verilog HDL', 'RTL Design & Synthesis', 'FPGA & ASIC Flow', 'Hardware Mini Projects'],
    },
    {
      id: '08',
      number: '08',
      title: 'DIGITAL MARKETING',
      subtitle: 'GROWTH & REVENUE ANALYTICS',
      icon: TrendingUp,
      badge: 'STRATEGY',
      description: 'Drive high-converting digital marketing campaigns using data analytics.',
      skills: ['SEO & Organic Search', 'Social Media Marketing', 'Google Ads & PPC', 'Content Marketing', 'Analytics & Reporting'],
    },
  ];

  return (
    <section id="programs" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F] border-y-4 border-[#E60012] overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-12 bg-stripes pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-3 py-1 skew-x-[-12deg]">
            CLASS SELECTION // SELECT YOUR CLASS
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl font-black tracking-wider text-white uppercase leading-none">
            CHOOSE <span className="text-[#E60012] underline decoration-white underline-offset-4">YOUR PATH</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-2xl">
            Select a specialized track. Every path features <span className="text-[#00FF88] font-bold">3 Months Training + 3 Months Internship</span> with live projects & placement support.
          </p>
        </div>

        {/* Character / Class Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeId === cat.id;

            return (
              <motion.div
                key={cat.id}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveId(cat.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="EXPLORE"
                className={`relative cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'bg-black border-2 border-[#E60012] shadow-[8px_8px_0px_#E60012] translate-x-[-2px] translate-y-[-2px]'
                    : 'bg-[#121218] border border-white/10 hover:border-white/40 shadow-[4px_4px_0px_#000000]'
                } p-6 flex flex-col justify-between min-h-[320px] select-none clip-card group`}
              >
                {/* Number Accent */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-bebas text-4xl font-black transition-colors ${
                      isSelected ? 'text-[#E60012]' : 'text-gray-600 group-hover:text-white'
                    }`}
                  >
                    {cat.number}
                  </span>
                  <span
                    className={`font-space text-[10px] font-bold tracking-widest px-2 py-0.5 skew-x-[-8deg] ${
                      isSelected
                        ? 'bg-[#E60012] text-black'
                        : 'bg-white/10 text-gray-400 group-hover:bg-white group-hover:text-black'
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Card Main Info */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-none border transition-colors ${
                        isSelected
                          ? 'bg-[#E60012] text-black border-[#E60012]'
                          : 'bg-black text-white border-white/20 group-hover:border-[#E60012]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bebas text-2xl tracking-wider text-white uppercase leading-none">
                        {cat.title}
                      </h3>
                      <p className="font-space text-[10px] text-gray-400 tracking-wider font-semibold">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-gray-300 mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Skills List Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {cat.skills.slice(0, 3).map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-sans text-gray-300">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-[#00FF88]' : 'text-gray-500'}`} />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                    {cat.skills.length > 3 && (
                      <div className="text-[11px] font-space text-[#00E5FF] pt-0.5 font-semibold">
                        + {cat.skills.length - 3} MORE TOPICS
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-bebas text-sm text-gray-400 tracking-widest">
                    3M TRAIN + 3M INTERN
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundFx.playSlash();
                      onSelectCourse(cat.title);
                    }}
                    className={`font-bebas text-sm px-3 py-1 uppercase font-bold skew-x-[-8deg] flex items-center gap-1 transition-all ${
                      isSelected
                        ? 'bg-[#E60012] text-black hover:bg-white shadow-[2px_2px_0px_#FFFFFF]'
                        : 'bg-white/10 text-white hover:bg-[#E60012] hover:text-black'
                    }`}
                  >
                    <span className="skew-x-[8deg] flex items-center gap-1">
                      ENTER <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Course Expanded Banner */}
        <AnimatePresence mode="wait">
          {activeId && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 bg-black border-2 border-[#E60012] p-6 sm:p-8 shadow-[12px_12px_0px_#E60012] text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-full bg-[#E60012]/10 skew-x-[-20deg] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-bebas text-4xl text-[#E60012]">
                      CATEGORY {categories.find((c) => c.id === activeId)?.number}
                    </span>
                    <span className="bg-[#00FF88] text-black font-space text-xs px-2.5 py-0.5 font-bold uppercase skew-x-[-12deg]">
                      PROGRAM DETAILS
                    </span>
                  </div>

                  <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider">
                    {categories.find((c) => c.id === activeId)?.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-gray-300">
                    {categories.find((c) => c.id === activeId)?.description} Complete syllabus covered with <strong className="text-white">3 Months Training + 3 Months Internship</strong> on live industrial deployments.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {categories
                      .find((c) => c.id === activeId)
                      ?.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#14141A] p-2.5 border border-white/10">
                          <CheckCircle className="w-4 h-4 text-[#00FF88]" />
                          <span className="font-space text-xs font-semibold text-white">{skill}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                  <div className="text-left lg:text-right">
                    <div className="font-space text-xs text-gray-400">DURATION & FORMAT</div>
                    <div className="font-bebas text-2xl text-white">3 MONTHS TRAINING</div>
                    <div className="font-bebas text-2xl text-[#00FF88]">+ 3 MONTHS INTERNSHIP</div>
                  </div>

                  <button
                    onClick={() => {
                      const course = categories.find((c) => c.id === activeId);
                      soundFx.playSlash();
                      onSelectCourse(course ? course.title : 'GENERAL');
                    }}
                    className="w-full sm:w-auto bg-[#E60012] text-black font-bebas text-2xl px-8 py-3.5 font-bold uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-[#E60012] shadow-[6px_6px_0px_#FFFFFF] skew-x-[-10deg]"
                  >
                    <span className="skew-x-[10deg] inline-flex items-center gap-2">
                      ENROLL IN THIS PATH →
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
