import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';
import { SelectionTransition } from './SelectionTransition';
import { 
  Terminal, Brain, Cloud, Shield, CircuitBoard, TrendingUp, FlaskConical, Stethoscope,
  CheckCircle, ArrowRight, ArrowLeft, Flame, ChevronDown, Award, Users, BookOpen, Globe, Activity
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
  duration?: string;
}

interface PvModule {
  number: string;
  title: string;
  topics: string[];
}

interface ChooseYourPathProps {
  onSelectCourse: (courseName: string) => void;
}

export const ChooseYourPath: React.FC<ChooseYourPathProps> = ({ onSelectCourse }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [isWiping, setIsWiping] = useState(false);
  const [showRevealModal, setShowRevealModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedPvModule, setExpandedPvModule] = useState<string | null>('04');

  // Lock body scroll when modal is active
  useBodyScrollLock(showRevealModal);

  // Close modal on ESC key
  useEffect(() => {
    if (!showRevealModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleReverseTransition();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showRevealModal]);

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

  const pvCurriculum: PvModule[] = [
    { number: '01', title: 'INTRODUCTION TO PHARMACOVIGILANCE', topics: ['History of Pharmacovigilance & Disasters (Thalidomide)', 'Scope & Objectives of Drug Safety', 'Key PV Terminology & Definitions', 'Role of WHO-UMC & International Monitoring'] },
    { number: '02', title: 'MEDICAL & DRUG SAFETY FUNDAMENTALS', topics: ['Adverse Event (AE) vs Adverse Drug Reaction (ADR)', 'Serious Adverse Event (SAE) Criteria & Reporting Timelines', 'Expectedness, Suspect Drug & Concomitant Meds', 'Benefit-Risk Evaluation Fundamentals'] },
    { number: '03', title: 'REGULATORY GUIDELINES', topics: ['US FDA 21 CFR Regulations', 'EMA Good Pharmacovigilance Practices (GVP)', 'CDSCO India Safety Guidelines', 'ICH-GCP E6 Guidelines & E2A-E2F Specifications'] },
    { number: '04', title: 'ICSR CASE PROCESSING', topics: ['Case Intake & Validity Criteria (4 Minimum Elements)', 'Case Triage & Prioritization (7-Day vs 15-Day Reports)', 'Follow-up Queries & Narrative Writing', 'Quality Review & Submissions'] },
    { number: '05', title: 'MEDDRA CODING', topics: ['MedDRA Hierarchy (SOC, HLGT, HLT, PT, LLT)', 'Coding Conventions & Points to Consider (PtC)', 'SMQ (Standardized MedDRA Queries)', 'Hands-on Practice with Real Case Scenarios'] },
    { number: '06', title: 'CAUSALITY ASSESSMENT', topics: ['Naranjo Probability Scale & Algorithm', 'WHO-UMC Causality Categories', 'De-challenge & Re-challenge Analysis', 'Confounding Factors & Medical Assessment'] },
    { number: '07', title: 'AGGREGATE REPORTING', topics: ['Periodic Safety Update Reports (PSUR)', 'Periodic Benefit-Risk Evaluation Reports (PBRER)', 'Development Safety Update Reports (DSUR)', 'Safety Executive Summaries & Literature Audits'] },
    { number: '08', title: 'SIGNAL DETECTION & RISK MANAGEMENT', topics: ['Qualitative & Quantitative Signal Detection', 'Disproportionality Metrics (PRR, ROR, EBGM)', 'Risk Management Plans (RMP)', 'Risk Evaluation and Mitigation Strategies (REMS)'] },
    { number: '09', title: 'PHARMACOVIGILANCE QUALITY SYSTEM', topics: ['Standard Operating Procedures (SOP) Compliance', 'Safety Inspection & Audit Readiness', 'Corrective and Preventive Actions (CAPA)', 'Quality Management Systems in PV'] },
    { number: '10', title: 'PV IN PRACTICE', topics: ['Safety Databases Overview (Oracle Argus, ArisGlobal)', 'Workflow Demonstrations & Data Entry Labs', 'Real-world Case Simulations', 'Cross-functional Collaboration in Pharma'] },
    { number: '11', title: 'CAREER READINESS', topics: ['Technical PV Resume Engineering', 'LinkedIn Optimization for Drug Safety', 'High-Yield Mock Technical Interviews', 'Entry-Level Hiring Guidance'] },
  ];

  const pvEligibility = [
    'B.Pharm Graduates', 'M.Pharm Graduates', 'Pharm.D Candidates', 
    'B.Sc Life Sciences', 'M.Sc Life Sciences', 'Biotechnology Graduates', 
    'Nursing Graduates', 'Fresh Life Science Graduates'
  ];

  const pvWhyPoints = [
    { num: '01', title: 'GROWING INDUSTRY DEMAND', desc: 'High expansion across global pharmaceutical MNCs, IT healthcare divisions, and CROs.' },
    { num: '02', title: 'GLOBAL CAREER OPPORTUNITIES', desc: 'Direct alignment with US FDA, EMA, and international drug safety operations.' },
    { num: '03', title: 'COMPETITIVE SALARY POTENTIAL', desc: 'Fast track career trajectory from Junior Safety Associate to Safety Lead.' },
    { num: '04', title: 'REMOTE & HYBRID OPPORTUNITIES', desc: 'High flexibility with hybrid & remote safety case processing labs.' },
    { num: '05', title: 'HIGH DEMAND FOR FRESH GRADUATES', desc: 'Excellent entry point for pharmacy, life science, and healthcare graduates.' },
    { num: '06', title: 'INTERNATIONAL REGULATORY EXPOSURE', desc: 'Master ICH-GCP, FDA 21 CFR, and EMA GVP guidelines in demand worldwide.' },
  ];

  const pvRoles = [
    'Pharmacovigilance Associate', 'Drug Safety Associate', 'Safety Data Associate',
    'Case Processing Associate', 'Medical Coder', 'Signal Detection Associate',
    'Aggregate Report Associate', 'Regulatory Affairs Associate', 'Drug Safety Specialist'
  ];

  const pvGains = [
    'PRACTICAL PV KNOWLEDGE', 'INDUSTRY-RELEVANT SKILLS', 'HANDS-ON CASE SCENARIOS',
    'GLOBAL REGULATORY UNDERSTANDING', 'PROFESSIONAL RESUME', 'INTERVIEW READINESS'
  ];

  const activeCategory = categories.find((c) => c.id === selectedProgramId) || categories[0];
  const isPvSelected = activeCategory.id === '08';

  const handleProgramSelect = (id: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    soundFx.playSelect();
    setSelectedProgramId(id);
    setFocusedId(id);
    setIsWiping(true);
  };

  const handleReverseTransition = () => {
    soundFx.playClick();
    setShowRevealModal(false);
    setSelectedProgramId(null);
    setFocusedId(null);
    setIsTransitioning(false);
  };

  return (
    <SelectionTransition
      isActive={isWiping}
      stampText="PATH SELECTED"
      onTransitionComplete={() => {
        setIsWiping(false);
        setShowRevealModal(true);
      }}
    >
      <section id="programs" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F] border-y-4 border-[#E60012] overflow-hidden">
        <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-left mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-3.5 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
              CHARACTER ROSTER // SELECT YOUR CAREER PATH
            </div>

            <h2 className="font-bebas text-6xl sm:text-8xl font-black tracking-wider text-white uppercase leading-none">
              CHOOSE <span className="text-[#E60012] drop-shadow-[4px_4px_0px_#000000]">YOUR PATH</span>
            </h2>

            <p className="font-space text-sm sm:text-base text-gray-400 max-w-2xl">
              Select a specialized program track below. Every program features intensive industry training, live projects, and placement support.
            </p>
          </div>

          {/* 8 Program Character Roster Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = focusedId === cat.id;
              const isOtherFocused = focusedId !== null && focusedId !== cat.id;

              return (
                <motion.div
                  key={cat.id}
                  onClick={() => handleProgramSelect(cat.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  animate={{
                    scale: isSelected ? 1.05 : isOtherFocused ? 0.95 : 1,
                    opacity: isOtherFocused ? 0.35 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  data-cursor="SELECT PATH"
                  className={`relative cursor-pointer transition-all duration-200 p-6 flex flex-col justify-between min-h-[300px] select-none clip-card group ${
                    isSelected
                      ? 'bg-black border-4 border-[#E60012] shadow-[10px_10px_0px_#E60012] z-30'
                      : 'bg-[#121218] border border-white/15 hover:border-[#E60012] hover:bg-black shadow-[6px_6px_0px_#000000]'
                  }`}
                >
                  {/* Top Slot Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bebas text-4xl font-black text-[#E60012]">
                      {cat.number}
                    </span>

                    <span
                      className={`font-space text-[10px] font-bold tracking-widest px-2.5 py-1 skew-x-[-8deg] ${
                        isSelected
                          ? 'bg-[#E60012] text-black'
                          : 'bg-white/10 text-gray-400 group-hover:bg-[#E60012] group-hover:text-black'
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>

                  {/* Character Identity Core */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-3 rounded-none border transition-colors ${
                          isSelected
                            ? 'bg-[#E60012] text-black border-[#E60012]'
                            : 'bg-black text-white border-white/20 group-hover:border-[#E60012]'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white uppercase leading-none group-hover:text-[#E60012]">
                          {cat.title}
                        </h3>
                        <p className="font-space text-[10px] text-gray-400 tracking-wider font-semibold">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-gray-300 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between font-bebas text-sm text-[#00E5FF]">
                    <span>INSPECT TRACK</span>
                    <span className="group-hover:translate-x-1 transition-transform">SELECT →</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Program Reveal Overlay Modal */}
          <AnimatePresence>
            {showRevealModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[800] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 30 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-5xl w-full bg-[#09090D] border-4 border-[#E60012] shadow-[16px_16px_0px_#FFFFFF] p-6 sm:p-10 relative overflow-hidden clip-card my-auto text-left space-y-8 max-h-[90vh] overflow-y-auto"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
                    <button
                      onClick={handleReverseTransition}
                      data-cursor="BACK"
                      className="bg-black text-white border-2 border-white/40 hover:border-[#E60012] hover:text-[#E60012] font-bebas text-xl px-5 py-1.5 uppercase font-bold tracking-wider skew-x-[-8deg] transition-all flex items-center gap-2"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span className="skew-x-[8deg]">← CHANGE PATH</span>
                    </button>

                    <div className="font-space text-xs text-[#00FF88] font-bold uppercase tracking-widest">
                      PATH CONFIRMED // PROGRAM {activeCategory.number}
                    </div>
                  </div>

                  {/* Standard Program vs Pharmacovigilance Specialized View */}
                  {!isPvSelected ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#E60012] text-black font-bebas text-3xl px-4 py-0.5 font-black skew-x-[-10deg]">
                            TRACK {activeCategory.number}
                          </span>
                          <span className="font-space text-xs text-[#00FF88] tracking-widest font-bold uppercase border border-[#00FF88]/40 px-3 py-1">
                            {activeCategory.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-wider uppercase leading-none">
                            {activeCategory.title}
                          </h3>
                          <p className="font-space text-xs text-[#00E5FF] tracking-wider uppercase font-semibold mt-1">
                            {activeCategory.subtitle}
                          </p>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-300">
                          {activeCategory.description}
                        </p>

                        <div className="space-y-2">
                          <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold">
                            SYLLABUS MODULES COVERED:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {activeCategory.skills.map((t, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-black p-3 border border-white/10 text-xs font-space text-gray-200">
                                <CheckCircle className="w-4 h-4 text-[#00FF88] flex-shrink-0" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4 bg-black border-2 border-[#E60012] p-6 shadow-[6px_6px_0px_#FFFFFF] space-y-6 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-space text-[#00E5FF]">
                            <Flame className="w-4 h-4 fill-[#00E5FF]" />
                            <span>GUARANTEED STRUCTURE</span>
                          </div>

                          <div className="bg-[#12121A] p-4 border border-white/10 font-mono text-xs text-yellow-300 leading-relaxed space-y-2">
                            <div><strong>DURATION:</strong> {activeCategory.duration}</div>
                            <div><strong>STATUS:</strong> Admissions Open</div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            soundFx.playSlash();
                            onSelectCourse(activeCategory.title);
                          }}
                          className="w-full bg-[#E60012] text-black font-bebas text-2xl py-3.5 px-6 uppercase font-black tracking-wider hover:bg-white transition-colors skew-x-[-8deg] shadow-[4px_4px_0px_#FFFFFF]"
                        >
                          <span className="skew-x-[8deg] inline-flex items-center gap-2 justify-center">
                            APPLY FOR THIS PATH <ArrowRight className="w-5 h-5" />
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Interactive Pharmacovigilance Program World */
                    <div className="space-y-10">
                      
                      {/* PV Hero Header */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/15 pb-8">
                        <div className="lg:col-span-8 space-y-4">
                          <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black font-space text-xs font-bold px-3 py-1 skew-x-[-10deg]">
                            <Stethoscope className="w-4 h-4" /> CERTIFICATE PROGRAM // DRUG SAFETY & PATIENT PROTECTION
                          </div>

                          <h3 className="font-bebas text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none">
                            PHARMACO<span className="text-[#00E5FF] drop-shadow-[4px_4px_0px_#000000]">VIGILANCE</span>
                          </h3>

                          <p className="font-space text-base text-yellow-300 font-bold uppercase tracking-wider">
                            LAUNCH YOUR CAREER IN DRUG SAFETY & PATIENT PROTECTION — IN JUST 12 WEEKS
                          </p>

                          <p className="font-sans text-sm text-gray-300 max-w-2xl">
                            Master ICSR Case Processing, MedDRA Coding, Aggregate Reporting (PSUR/PBRER/DSUR), Signal Detection, and International Regulatory Compliance (FDA 21 CFR, EMA GVP, ICH-GCP).
                          </p>
                        </div>

                        <div className="lg:col-span-4 bg-black border-2 border-[#00E5FF] p-6 shadow-[6px_6px_0px_#00E5FF] space-y-4">
                          <div className="font-bebas text-3xl text-white">12 WEEKS CERTIFICATE</div>
                          <div className="text-xs font-space text-gray-300">Format: Intensive Training + Live Case Processing Labs + Resume & Mock Interview Drills</div>
                          
                          <button
                            onClick={() => {
                              soundFx.playSlash();
                              onSelectCourse('PHARMACOVIGILANCE');
                            }}
                            className="w-full bg-[#00E5FF] text-black font-bebas text-2xl py-3 px-6 uppercase font-black tracking-wider hover:bg-white transition-colors skew-x-[-8deg] shadow-[4px_4px_0px_#FFFFFF]"
                          >
                            <span className="skew-x-[8deg] inline-flex items-center gap-2 justify-center">
                              ENROLL IN PV NOW <ArrowRight className="w-5 h-5" />
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Why Pharmacovigilance? (6 Perks) */}
                      <div className="space-y-4">
                        <div className="font-bebas text-3xl text-white tracking-wider flex items-center gap-2">
                          <Globe className="w-6 h-6 text-[#00FF88]" />
                          <span>WHY PHARMACOVIGILANCE?</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {pvWhyPoints.map((p) => (
                            <div key={p.num} className="bg-black/90 p-4 border border-white/10 hover:border-[#00FF88] transition-colors space-y-1">
                              <div className="font-bebas text-xl text-[#00FF88] font-bold">{p.num} — {p.title}</div>
                              <div className="font-sans text-xs text-gray-300">{p.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Who Can Join? */}
                      <div className="space-y-4 bg-[#0B1522] border border-[#00E5FF]/40 p-6 clip-card">
                        <div className="font-bebas text-3xl text-white tracking-wider flex items-center gap-2">
                          <Users className="w-6 h-6 text-[#00E5FF]" />
                          <span>WHO CAN JOIN? (ELIGIBILITY)</span>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                          {pvEligibility.map((item, idx) => (
                            <div key={idx} className="bg-black text-[#00E5FF] border border-[#00E5FF]/40 px-3.5 py-1.5 font-space text-xs font-bold uppercase skew-x-[-6deg]">
                              ✓ {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive 11-Module Curriculum Timeline */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="font-bebas text-3xl text-white tracking-wider flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-[#E60012]" />
                            <span>11-MODULE COURSE CURRICULUM</span>
                          </div>
                          <span className="font-space text-xs text-gray-400">CLICK MODULE TO EXPAND TOPICS</span>
                        </div>

                        <div className="space-y-2">
                          {pvCurriculum.map((mod) => {
                            const isExpanded = expandedPvModule === mod.number;

                            return (
                              <div key={mod.number} className="bg-black border border-white/15 overflow-hidden transition-all">
                                <button
                                  onClick={() => setExpandedPvModule(isExpanded ? null : mod.number)}
                                  className="w-full p-4 flex items-center justify-between text-left hover:bg-[#12121D] transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="bg-[#E60012] text-black font-bebas text-xl px-2.5 py-0.5 font-black">
                                      {mod.number}
                                    </span>
                                    <span className="font-bebas text-2xl text-white tracking-wider uppercase">
                                      {mod.title}
                                    </span>
                                  </div>
                                  <ChevronDown className={`w-5 h-5 text-[#00E5FF] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="border-t border-white/10 p-4 bg-[#080B12] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-space text-gray-300"
                                    >
                                      {mod.topics.map((topic, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                          <CheckCircle className="w-3.5 h-3.5 text-[#00FF88] flex-shrink-0" />
                                          <span>{topic}</span>
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Career Opportunities Grid */}
                      <div className="space-y-4">
                        <div className="font-bebas text-3xl text-white tracking-wider flex items-center gap-2">
                          <Activity className="w-6 h-6 text-[#00FF88]" />
                          <span>CAREER OPPORTUNITIES & TARGET ROLES</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {pvRoles.map((role, idx) => (
                            <div key={idx} className="bg-black/90 text-white border border-white/20 hover:border-[#00FF88] px-4 py-2 font-bebas text-lg tracking-wider uppercase transition-colors">
                              {role}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What You Will Gain */}
                      <div className="space-y-4 bg-black border-2 border-white/20 p-6">
                        <div className="font-bebas text-3xl text-white tracking-wider flex items-center gap-2">
                          <Award className="w-6 h-6 text-yellow-300" />
                          <span>WHAT YOU WILL GAIN</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {pvGains.map((g, idx) => (
                            <div key={idx} className="bg-[#12121A] p-3 border border-white/10 text-xs font-space text-yellow-300 font-bold text-center uppercase tracking-wider">
                              ✓ {g}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Final PV CTA */}
                      <div className="text-center pt-4 space-y-4 border-t border-white/20">
                        <div className="font-bebas text-4xl text-white tracking-wider uppercase">
                          START YOUR <span className="text-[#00E5FF]">PHARMACOVIGILANCE</span> JOURNEY
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                          <button
                            onClick={() => {
                              soundFx.playSlash();
                              onSelectCourse('PHARMACOVIGILANCE');
                            }}
                            className="bg-[#00E5FF] text-black font-bebas text-3xl px-8 py-3.5 uppercase font-black tracking-wider hover:bg-white transition-colors skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF]"
                          >
                            <span className="skew-x-[10deg] inline-flex items-center gap-2">
                              ENROLL NOW <ArrowRight className="w-6 h-6" />
                            </span>
                          </button>

                          <a
                            href="mailto:xenusconsultancy12@gmail.com"
                            className="bg-black text-white border-2 border-white font-bebas text-3xl px-7 py-3.5 uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors skew-x-[-10deg] shadow-[6px_6px_0px_#00E5FF]"
                          >
                            <span className="skew-x-[10deg]">CONTACT XENUS</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </SelectionTransition>
  );
};
