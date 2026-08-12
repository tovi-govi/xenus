import React, { useState, useEffect, useRef } from 'react';
import { soundFx } from '../utils/sound';
import { SelectionTransition } from './SelectionTransition';
import { XenusCharacter } from './XenusCharacter';
import { 
  Brain, Terminal, Cloud, Shield, CircuitBoard, TrendingUp, FlaskConical, Stethoscope,
  ArrowLeft, ArrowRight, CheckCircle, Flame, ChevronLeft, ChevronRight 
} from 'lucide-react';

interface CourseCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  skills: string[];
  description: string;
  duration: string;
}

interface ProgramSelectSceneProps {
  onSelectProgram: (programId: string) => void;
  onBack: () => void;
}

export const ProgramSelectScene: React.FC<ProgramSelectSceneProps> = ({ onSelectProgram, onBack }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isWiping, setIsWiping] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // Touch Swipe Gesture State
  const touchStartX = useRef<number | null>(null);

  const categories: CourseCategory[] = [
    {
      id: '01',
      number: '01',
      title: 'AI & DATA SCIENCE',
      subtitle: 'MACHINE LEARNING & GENAI SYSTEMS',
      icon: Brain,
      badge: 'HIGH DEMAND',
      description: 'Unlock predictive intelligence, neural networks, PyTorch, RAG vector architectures, and automated data pipelines.',
      skills: ['Python 3.11 & Data Wrangling', 'Machine Learning & Neural Networks', 'PyTorch & Deep Learning', 'RAG & Autonomous AI Agents'],
      duration: '3M Train + 3M Intern',
    },
    {
      id: '02',
      number: '02',
      title: 'FULL STACK',
      subtitle: 'WEB & BACKEND ARCHITECTURE',
      icon: Terminal,
      badge: 'MOST POPULAR',
      description: 'Build production-ready end-to-end web applications with modern React, Node.js, and database architectures.',
      skills: ['HTML5 & Modern CSS3', 'JavaScript (ES6+) & React', 'Node.js / Java / Python APIs', 'SQL & MongoDB Databases'],
      duration: '3M Train + 3M Intern',
    },
    {
      id: '03',
      number: '03',
      title: 'CLOUD & DEVOPS',
      subtitle: 'INFRASTRUCTURE & AUTOMATION',
      icon: Cloud,
      badge: 'ENTERPRISE',
      description: 'Deploy, scale, and automate cloud native microservices infrastructure with AWS, Docker, and Kubernetes.',
      skills: ['AWS / Azure Cloud Systems', 'DevOps CI/CD Pipelines', 'Docker & Microservices', 'Kubernetes Orchestration'],
      duration: '3M Train + 3M Intern',
    },
    {
      id: '04',
      number: '04',
      title: 'CYBER SECURITY',
      subtitle: 'DEFENSIVE & PENETRATION LABS',
      icon: Shield,
      badge: 'CRITICAL',
      description: 'Secure networks, audit identity systems, execute penetration testing, and master ethical hacking.',
      skills: ['Cyber Security Fundamentals', 'Ethical Hacking Methodologies', 'IAM & PAM Enterprise Security', 'Network & Web Penetration'],
      duration: '3M Train + 3M Intern',
    },
    {
      id: '05',
      number: '05',
      title: 'VLSI DESIGN',
      subtitle: 'HARDWARE & CHIP ARCHITECTURE',
      icon: CircuitBoard,
      badge: 'HARDWARE',
      description: 'Design digital circuits, silicon chip architectures, Verilog HDL specifications, and FPGA hardware flows.',
      skills: ['Digital Electronics Fundamentals', 'Verilog HDL & RTL Design', 'FPGA & ASIC Synthesis', 'Hardware Verification Projects'],
      duration: '3M Train + 3M Intern',
    },
    {
      id: '06',
      number: '06',
      title: 'DIGITAL MARKETING',
      subtitle: 'GROWTH & REVENUE ANALYTICS',
      icon: TrendingUp,
      badge: 'STRATEGY',
      description: 'Drive high-converting digital marketing campaigns, SEO, paid acquisition, and growth analytics.',
      skills: ['SEO & Organic Search Optimization', 'Social Media Strategy & Content', 'Google Ads & Paid PPC Campaigns', 'Conversion Funnel Analytics'],
      duration: '3M Train + 3M Intern',
    },
    {
      id: '07',
      number: '07',
      title: 'ORGANIC CHEMISTRY',
      subtitle: 'PHARMA & LIFE SCIENCES MODULE',
      icon: FlaskConical,
      badge: 'SPECIALIZED',
      description: 'Specialized 30–45 day intensive lab module covering reaction mechanisms, synthesis, stereochemistry, and GPAT exam prep.',
      skills: ['Bonding & Reaction Intermediates', 'Stereochemistry & Conformational Matrix', 'SN1/SN2 & E1/E2 Mechanisms', 'GPAT / NIPER Past Audits & Speed Drills'],
      duration: '30–45 Days',
    },
    {
      id: '08',
      number: '08',
      title: 'PHARMACOVIGILANCE',
      subtitle: 'DRUG SAFETY & PATIENT PROTECTION',
      icon: Stethoscope,
      badge: '12 WEEKS CERTIFICATE',
      description: 'Launch your career in Drug Safety & Patient Protection. Master ICSR case processing, MedDRA coding, aggregate reporting, and global regulatory compliance.',
      skills: ['ICSR Case Processing & Safety Triage', 'MedDRA Medical Coding', 'Aggregate Reporting (PSUR, PBRER, DSUR)', 'Global Regulations (FDA 21 CFR, EMA GVP, ICH-GCP)'],
      duration: '12 Weeks Certificate',
    },
  ];

  const activeCategory = categories[selectedIndex];

  // Touch Pointer Gesture Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    touchStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        // Swipe left -> Next track
        soundFx.playHover();
        setSelectedIndex((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
      } else {
        // Swipe right -> Previous track
        soundFx.playHover();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
      }
    }
  };

  // Keyboard Navigation (Left / Right / Enter / Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLocked) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        soundFx.playHover();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        soundFx.playHover();
        setSelectedIndex((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleConfirmSelection();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, isLocked, onBack]);

  const handleConfirmSelection = () => {
    if (isLocked) return;
    setIsLocked(true);
    soundFx.playSelect();
    setIsWiping(true);
  };

  return (
    <SelectionTransition
      isActive={isWiping}
      stampText="PATH SELECTED"
      onTransitionComplete={() => {
        setIsWiping(false);
        onSelectProgram(activeCategory.id);
      }}
    >
      <div 
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="relative min-h-[90dvh] flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#08080A] text-white overflow-hidden select-none touch-pan-y"
      >
        {/* Background Textures */}
        <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-lines opacity-15 pointer-events-none" />

        {/* Top Header HUD */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between gap-4 border-b border-white/15 pb-3 pt-safe">
          <button
            onClick={() => {
              soundFx.playClick();
              onBack();
            }}
            data-cursor="BACK"
            className="bg-black text-white border-2 border-white/40 hover:border-[#E60012] hover:text-[#E60012] font-bebas text-lg sm:text-xl px-4 py-1.5 min-h-[44px] uppercase font-bold tracking-wider skew-x-[-8deg] flex items-center gap-2 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="skew-x-[8deg]">← MAIN MENU</span>
          </button>

          <div className="font-space text-[11px] sm:text-xs text-[#00FF88] font-bold uppercase tracking-widest">
            SWIPE / ARROWS // {activeCategory.number} OF 08
          </div>
        </div>

        {/* Center Stage: Dynamic Track Character Avatar & Details */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-4 sm:py-6">
          
          {/* Avatar Section with Touch Navigation Arrows */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <button
              onClick={() => {
                soundFx.playHover();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
              }}
              className="lg:hidden absolute left-0 z-30 p-3 bg-black/80 text-white border border-white/30 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous Track"
            >
              <ChevronLeft className="w-6 h-6 text-[#00E5FF]" />
            </button>

            <XenusCharacter trackId={activeCategory.id} size="hero" />

            <button
              onClick={() => {
                soundFx.playHover();
                setSelectedIndex((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
              }}
              className="lg:hidden absolute right-0 z-30 p-3 bg-black/80 text-white border border-white/30 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next Track"
            >
              <ChevronRight className="w-6 h-6 text-[#00E5FF]" />
            </button>
          </div>

          {/* Right Column: Track Details */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            <div className="flex items-center gap-3">
              <span className="bg-[#E60012] text-black font-bebas text-2xl sm:text-3xl px-3 py-0.5 font-black skew-x-[-10deg]">
                SLOT {activeCategory.number}
              </span>
              <span className="font-space text-[10px] sm:text-xs text-[#00FF88] tracking-widest font-bold uppercase border border-[#00FF88]/40 px-2.5 py-1">
                {activeCategory.badge}
              </span>
            </div>

            <div>
              <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wider uppercase leading-none">
                {activeCategory.title}
              </h2>
              <p className="font-space text-[11px] sm:text-xs text-[#00E5FF] tracking-wider uppercase font-semibold mt-1">
                {activeCategory.subtitle}
              </p>
            </div>

            <p className="font-sans text-xs sm:text-base text-gray-300 max-w-xl line-clamp-3">
              {activeCategory.description}
            </p>

            {/* Core Competencies Grid */}
            <div className="space-y-2 max-w-xl">
              <div className="font-space text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase font-bold">
                CLASS COMPETENCIES COVERED:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCategory.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black p-2.5 border border-white/15 text-xs font-space text-gray-200">
                    <CheckCircle className="w-4 h-4 text-[#00FF88] flex-shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmation CTA Button (Touch Target 52px) */}
            <div className="pt-2">
              <button
                onClick={handleConfirmSelection}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="CONFIRM"
                className="w-full sm:w-auto bg-[#E60012] text-black font-bebas text-2xl sm:text-3xl px-8 sm:px-10 py-3.5 min-h-[52px] font-black uppercase tracking-wider hover:bg-white transition-colors skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF] flex items-center justify-center"
              >
                <span className="skew-x-[10deg] inline-flex items-center gap-2">
                  CONFIRM & ENTER PATH <ArrowRight className="w-6 h-6" />
                </span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Roster Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-3 border-t border-white/15 space-y-2 pb-safe">
          <div className="flex items-center justify-between text-[11px] font-space text-gray-400 px-1">
            <span>CHARACTER ROSTER</span>
            <span className="text-[#00FF88]">SWIPE OR TAP TO SWITCH</span>
          </div>

          <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-8 gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.playSelect();
                    setSelectedIndex(idx);
                  }}
                  className={`p-2.5 border transition-all text-left flex flex-col justify-between min-w-[120px] sm:min-w-0 h-20 sm:h-24 skew-x-[-6deg] clip-card flex-shrink-0 ${
                    isSelected
                      ? 'bg-[#E60012] border-[#E60012] text-black shadow-[4px_4px_0px_#FFFFFF] font-bold z-20'
                      : 'bg-black/90 border-white/15 text-white hover:border-[#00E5FF]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bebas text-lg sm:text-xl font-black">{cat.number}</span>
                    {isSelected && <Flame className="w-3.5 h-3.5 fill-black" />}
                  </div>

                  <div className="font-bebas text-[11px] sm:text-xs tracking-wider uppercase truncate">
                    {cat.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </SelectionTransition>
  );
};
