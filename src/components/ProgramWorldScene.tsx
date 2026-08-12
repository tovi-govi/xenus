import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/sound';
import { XenusCharacter } from './XenusCharacter';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Flame, BookOpen, Award, Activity, ChevronDown 
} from 'lucide-react';

interface ProgramWorldSceneProps {
  programId: string;
  onBack: () => void;
  onOpenEnroll: (courseName?: string) => void;
}

interface SkillNode {
  id: string;
  number: string;
  title: string;
  topics: string[];
}

export const ProgramWorldScene: React.FC<ProgramWorldSceneProps> = ({ programId, onBack, onOpenEnroll }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'skillTree' | 'outcomes' | 'rewards'>('mission');
  const [expandedNodeId, setExpandedNodeId] = useState<string | null>('01');

  // Keyboard navigation shortcuts (ESC back to roster)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  const programDetails: Record<string, { title: string; subtitle: string; duration: string; description: string; nodes: SkillNode[]; roles: string[] }> = {
    '01': {
      title: 'AI & DATA SCIENCE',
      subtitle: 'MACHINE LEARNING & GENAI SYSTEMS',
      duration: '3M Train + 3M Intern',
      description: 'Master predictive intelligence, neural networks, PyTorch, RAG vector architectures, and autonomous AI agents with live industrial deployments.',
      nodes: [
        { id: '01', number: '01', title: 'Python 3.11 & Data Engineering', topics: ['Python 3.11 Fundamentals', 'NumPy & Pandas Data Wrangling', 'SQL & Vector Data Pipelines'] },
        { id: '02', number: '02', title: 'Machine Learning & Predictive Models', topics: ['Supervised & Unsupervised Learning', 'Scikit-Learn Algorithms', 'Model Evaluation & Optimization'] },
        { id: '03', number: '03', title: 'Deep Learning & Neural Networks', topics: ['PyTorch Framework', 'Convolutional & Recurrent Nets', 'Transformer Architectures'] },
        { id: '04', number: '04', title: 'Generative AI & Autonomous Agents', topics: ['LLM Fine-tuning & RAG Pipelines', 'LangChain & LlamaIndex', 'Autonomous AI Agent Workflows'] },
      ],
      roles: ['AI Engineer', 'Data Scientist', 'Machine Learning Engineer', 'NLP Specialist', 'AI Research Associate'],
    },
    '02': {
      title: 'FULL STACK DEVELOPMENT',
      subtitle: 'WEB & BACKEND ARCHITECTURE',
      duration: '3M Train + 3M Intern',
      description: 'Build production-ready end-to-end web applications with modern React, Node.js, TypeScript, and enterprise database architectures.',
      nodes: [
        { id: '01', number: '01', title: 'Frontend Architecture & Modern React', topics: ['HTML5, Modern CSS3 & Tailwind', 'JavaScript (ES6+) & TypeScript', 'React 18 State & Hooks'] },
        { id: '02', number: '02', title: 'Backend Systems & API Engineering', topics: ['Node.js & Express REST APIs', 'Authentication & JWT Security', 'Database Design (SQL & MongoDB)'] },
        { id: '03', number: '03', title: 'Full Stack Integration & Testing', topics: ['End-to-End API Integration', 'State Management & Caching', 'Automated Testing Suites'] },
        { id: '04', number: '04', title: 'Cloud Deployment & DevOps', topics: ['Docker Containerization', 'CI/CD Pipeline Automation', 'Production Cloud Hosting'] },
      ],
      roles: ['Full Stack Developer', 'Frontend Engineer', 'Backend Developer', 'Software Architect', 'MERN Stack Lead'],
    },
    '03': {
      title: 'CLOUD & DEVOPS',
      subtitle: 'INFRASTRUCTURE & AUTOMATION',
      duration: '3M Train + 3M Intern',
      description: 'Deploy, scale, and automate cloud native microservices infrastructure with AWS, Azure, Docker, and Kubernetes.',
      nodes: [
        { id: '01', number: '01', title: 'Cloud Infrastructure Fundamentals', topics: ['AWS / Azure Cloud Core Services', 'Virtual Private Clouds & IAM', 'Storage & Compute Scaling'] },
        { id: '02', number: '02', title: 'Containerization & Microservices', topics: ['Docker Container Engineering', 'Docker Compose Orchestration', 'Microservices Networking'] },
        { id: '03', number: '03', title: 'Kubernetes Orchestration', topics: ['Kubernetes Clusters & Pods', 'Helm Package Management', 'Auto-scaling & Monitoring'] },
        { id: '04', number: '04', title: 'CI/CD Pipelines & Infrastructure as Code', topics: ['GitHub Actions & Jenkins Pipelines', 'Terraform Infrastructure Provisioning', 'Production Site Reliability'] },
      ],
      roles: ['Cloud Engineer', 'DevOps Specialist', 'Site Reliability Engineer', 'Cloud Architect', 'Infrastructure Engineer'],
    },
    '04': {
      title: 'CYBER SECURITY',
      subtitle: 'DEFENSIVE & PENETRATION LABS',
      duration: '3M Train + 3M Intern',
      description: 'Secure enterprise networks, audit identity systems, execute penetration testing, and master ethical hacking methodologies.',
      nodes: [
        { id: '01', number: '01', title: 'Cyber Security Fundamentals & Networks', topics: ['Network Protocols & OSI Security', 'Linux Security Administration', 'Cryptography & Public Key Infrastructure'] },
        { id: '02', number: '02', title: 'Ethical Hacking & Penetration Testing', topics: ['Reconnaissance & Vulnerability Scanning', 'Metasploit & Exploitation Frameworks', 'Web Application Security (OWASP Top 10)'] },
        { id: '03', number: '03', title: 'Identity & Access Management (IAM)', topics: ['Enterprise IAM & PAM Systems', 'ServiceNow Security Operations', 'Role-Based Access Control Audits'] },
        { id: '04', number: '04', title: 'Defensive Security & Incident Response', topics: ['SIEM Log Monitoring & Analysis', 'Incident Response Playbooks', 'Threat Hunting & Forensics'] },
      ],
      roles: ['Cyber Security Specialist', 'Ethical Hacker', 'Penetration Tester', 'Security Analyst', 'IAM Consultant'],
    },
    '05': {
      title: 'VLSI CHIP DESIGN',
      subtitle: 'HARDWARE & SILICON ARCHITECTURE',
      duration: '3M Train + 3M Intern',
      description: 'Design digital circuits, silicon chip specifications, Verilog HDL synthesis, and FPGA hardware verification flows.',
      nodes: [
        { id: '01', number: '01', title: 'Digital Electronics & Logic Design', topics: ['Combinational & Sequential Circuits', 'Finite State Machine Design', 'CMOS Logic Principles'] },
        { id: '02', number: '02', title: 'Verilog HDL & RTL Design', topics: ['Verilog Hardware Description Language', 'RTL Design & Testbenches', 'Simulation & Waveform Audits'] },
        { id: '03', number: '03', title: 'FPGA & ASIC Synthesis Flow', topics: ['Logic Synthesis & Timing Constraints', 'FPGA Prototyping Board Flows', 'Place and Route Fundamentals'] },
        { id: '04', number: '04', title: 'SystemVerilog & Verification', topics: ['SystemVerilog OOP Verification', 'Coverage-Driven Verification', 'Hardware Mini Project Verification'] },
      ],
      roles: ['VLSI Design Engineer', 'RTL Verification Specialist', 'FPGA Engineer', 'ASIC Design Engineer', 'Silicon Verification Lead'],
    },
    '06': {
      title: 'DIGITAL MARKETING',
      subtitle: 'GROWTH & REVENUE ANALYTICS',
      duration: '3M Train + 3M Intern',
      description: 'Drive high-converting digital marketing campaigns, technical SEO, paid acquisition, and revenue growth analytics.',
      nodes: [
        { id: '01', number: '01', title: 'Search Engine Optimization (SEO)', topics: ['Technical SEO & On-Page Optimization', 'Keyword Strategy & Content Audits', 'Backlink Acquisition & Domain Rating'] },
        { id: '02', number: '02', title: 'Paid Performance Acquisition', topics: ['Google Ads Search & Display Campaigns', 'Meta Ads Manager Funnel Strategy', 'PPC Budgeting & ROAS Optimization'] },
        { id: '03', number: '03', title: 'Content & Social Growth Engine', topics: ['Organic Content Funnels', 'Social Media Brand Positioning', 'Email Nurturing & Automation'] },
        { id: '04', number: '04', title: 'Growth Analytics & Conversion Audits', topics: ['Google Analytics 4 (GA4) Tracking', 'Conversion Rate Optimization (CRO)', 'A/B Testing & Funnel Attribution'] },
      ],
      roles: ['Digital Marketing Specialist', 'SEO Manager', 'Growth Marketer', 'PPC Performance Strategist', 'Analytics Lead'],
    },
    '07': {
      title: 'ORGANIC CHEMISTRY',
      subtitle: 'PHARMA & LIFE SCIENCES LAB MODULE',
      duration: '30–45 Days',
      description: 'Specialized 30–45 day intensive laboratory module covering reaction mechanisms, synthesis, stereochemistry, and GPAT exam prep.',
      nodes: [
        { id: '01', number: '01', title: 'Chemical Bonding & Reaction Intermediates', topics: ['Carbocations, Carbanions & Free Radicals', 'Electronic Effects (Inductive, Resonance)', 'Aromaticity & Hückel’s Rule'] },
        { id: '02', number: '02', title: 'Stereochemistry & Conformational Analysis', topics: ['Chirality & Enantiomerism', 'R/S and E/Z Nomenclatures', 'Conformations of Cyclohexane'] },
        { id: '03', number: '03', title: 'Reaction Mechanisms (SN1/SN2, E1/E2)', topics: ['Nucleophilic Substitution Kinetics', 'Elimination vs Substitution Dynamics', 'Electrophilic Addition Reactions'] },
        { id: '04', number: '04', title: 'GPAT / NIPER Past Audits & Drills', topics: ['Past 10 Years GPAT Question Drills', 'Name Reactions Speed Recall', 'Pharmaceutical Synthesis Case Studies'] },
      ],
      roles: ['Pharma Chemist', 'Quality Control Analyst', 'R&D Associate', 'GPAT / NIPER Candidate', 'Synthesis Specialist'],
    },
    '08': {
      title: 'PHARMACOVIGILANCE',
      subtitle: 'DRUG SAFETY & PATIENT PROTECTION',
      duration: '12 Weeks Certificate',
      description: 'Launch your career in Drug Safety & Patient Protection. Master ICSR case processing, MedDRA coding, aggregate reporting, and global regulatory compliance.',
      nodes: [
        { id: '01', number: '01', title: 'Introduction to Pharmacovigilance', topics: ['History & Scope of Drug Safety', 'Key PV Terminology & Definitions', 'Role of WHO-UMC & Monitoring Labs'] },
        { id: '02', number: '02', title: 'Medical & Drug Safety Fundamentals', topics: ['Adverse Event (AE) vs Adverse Drug Reaction (ADR)', 'Serious Adverse Event (SAE) Criteria', 'Benefit-Risk Evaluation'] },
        { id: '03', number: '03', title: 'Regulatory Guidelines (FDA, EMA, CDSCO)', topics: ['US FDA 21 CFR Regulations', 'EMA Good Pharmacovigilance Practices (GVP)', 'ICH-GCP E6 Guidelines'] },
        { id: '04', number: '04', title: 'ICSR Case Processing & MedDRA Coding', topics: ['Case Intake, Triage & Prioritization', 'MedDRA Coding Hierarchy (SOC, PT, LLT)', 'Quality Review & Submissions'] },
      ],
      roles: ['Pharmacovigilance Associate', 'Drug Safety Associate', 'Safety Data Associate', 'Medical Coder', 'Regulatory Affairs Associate'],
    },
  };

  const program = programDetails[programId] || programDetails['01'];

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 bg-[#08080A] text-white overflow-hidden select-none">
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      {/* Top Navigation HUD */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
        <button
          onClick={() => {
            soundFx.playClick();
            onBack();
          }}
          data-cursor="BACK"
          className="bg-black text-white border-2 border-white/40 hover:border-[#E60012] hover:text-[#E60012] font-bebas text-xl px-5 py-1.5 uppercase font-bold tracking-wider skew-x-[-8deg] flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="skew-x-[8deg]">← ROSTER SELECT (ESC)</span>
        </button>

        {/* Scene Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'mission', label: 'MISSION BRIEFING', icon: Flame },
            { id: 'skillTree', label: 'SKILL TREE (CURRICULUM)', icon: BookOpen },
            { id: 'outcomes', label: 'CLASS OUTCOMES', icon: Activity },
            { id: 'rewards', label: 'REWARDS', icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playHover();
                  setActiveTab(tab.id as 'mission' | 'skillTree' | 'outcomes' | 'rewards');
                }}
                className={`px-4 py-1.5 font-bebas text-lg uppercase tracking-wider skew-x-[-6deg] transition-all flex items-center gap-1.5 ${
                  isTabActive
                    ? 'bg-[#E60012] text-black font-bold shadow-[3px_3px_0px_#FFFFFF]'
                    : 'bg-black text-gray-300 border border-white/20 hover:text-white hover:border-[#E60012]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="skew-x-[6deg]">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Level Experience Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        
        {/* Left Side: Avatar */}
        <div className="lg:col-span-4 flex justify-center">
          <XenusCharacter trackId={programId} size="lg" />
        </div>

        {/* Right Side: Tab Content */}
        <div className="lg:col-span-8 space-y-6 text-left">
          
          <div className="flex items-center gap-3">
            <span className="bg-[#E60012] text-black font-bebas text-2xl px-3 py-0.5 font-black skew-x-[-10deg]">
              ACTIVE WORLD
            </span>
            <span className="font-space text-xs text-[#00FF88] tracking-widest font-bold uppercase border border-[#00FF88]/40 px-3 py-1">
              DURATION: {program.duration}
            </span>
          </div>

          <div>
            <h2 className="font-bebas text-5xl sm:text-7xl font-black text-white tracking-wider uppercase leading-none">
              {program.title}
            </h2>
            <p className="font-space text-xs text-[#00E5FF] tracking-wider uppercase font-semibold mt-1">
              {program.subtitle}
            </p>
          </div>

          {/* Active Tab Scene Container */}
          <div className="bg-[#0D0D14] border-2 border-white/20 p-6 shadow-[8px_8px_0px_#000000] min-h-[300px]">
            {activeTab === 'mission' && (
              <div className="space-y-4">
                <div className="font-bebas text-3xl text-[#E60012] uppercase">MISSION OBJECTIVE</div>
                <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed">
                  {program.description}
                </p>
                <div className="bg-black p-4 border border-white/10 space-y-2 text-xs font-mono text-yellow-300">
                  <div>► <strong>FORMAT:</strong> Live Projects & Industrial Labs</div>
                  <div>► <strong>SUPPORT:</strong> Resume Engineering + Mock Technical Interviews</div>
                  <div>► <strong>STATUS:</strong> Admissions Open</div>
                </div>
              </div>
            )}

            {activeTab === 'skillTree' && (
              <div className="space-y-4">
                <div className="font-bebas text-3xl text-[#00FF88] uppercase">INTERACTIVE SKILL TREE NODES</div>
                <div className="space-y-2.5">
                  {program.nodes.map((node) => {
                    const isExpanded = expandedNodeId === node.id;

                    return (
                      <div key={node.id} className="bg-black border border-white/20 overflow-hidden">
                        <button
                          onClick={() => setExpandedNodeId(isExpanded ? null : node.id)}
                          className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[#12121E] transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="bg-[#00FF88] text-black font-bebas text-lg px-2.5 py-0.5 font-bold">
                              NODE {node.number}
                            </span>
                            <span className="font-bebas text-xl text-white tracking-wider uppercase">
                              {node.title}
                            </span>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-[#00FF88] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isExpanded && (
                          <div className="border-t border-white/10 p-3 bg-[#07070C] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-space text-gray-300">
                            {node.topics.map((t, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-[#00FF88] flex-shrink-0" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div className="space-y-4">
                <div className="font-bebas text-3xl text-[#00E5FF] uppercase">TARGET CLASS OUTCOMES</div>
                <div className="flex flex-wrap gap-2.5">
                  {program.roles.map((role, idx) => (
                    <div key={idx} className="bg-black text-white border border-[#00E5FF] px-4 py-2 font-bebas text-xl tracking-wider uppercase">
                      ✓ {role}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="space-y-4">
                <div className="font-bebas text-3xl text-yellow-300 uppercase">PROGRAM REWARDS & CERTIFICATION</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-space">
                  <div className="bg-black p-4 border border-white/20 text-white space-y-1">
                    <div className="font-bold text-yellow-300 text-sm">ISO CERTIFIED CREDENTIALS</div>
                    <div>Recognized across leading software & tech firms.</div>
                  </div>
                  <div className="bg-black p-4 border border-white/20 text-white space-y-1">
                    <div className="font-bold text-[#00FF88] text-sm">LIVE PROJECT DEPLOYMENTS</div>
                    <div>Real production code base additions to your portfolio.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                soundFx.playSlash();
                onOpenEnroll(program.title);
              }}
              className="bg-[#E60012] text-black font-bebas text-3xl px-8 py-3.5 font-black uppercase tracking-wider hover:bg-white transition-colors skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF]"
            >
              <span className="skew-x-[10deg] inline-flex items-center gap-2">
                START JOURNEY IN THIS PATH <ArrowRight className="w-6 h-6" />
              </span>
            </button>

            <a
              href="mailto:xenusconsultancy12@gmail.com"
              className="bg-black text-white border-2 border-white font-bebas text-3xl px-7 py-3.5 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors skew-x-[-10deg] shadow-[6px_6px_0px_#00E5FF]"
            >
              <span className="skew-x-[10deg]">CONTACT XENUS</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
