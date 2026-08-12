import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { FlaskConical, Atom, TestTube, Dna, CheckCircle2, ArrowRight } from 'lucide-react';

interface ChemistryChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  topics: string[];
  reactionFormula: string;
}

interface OrganicChemistrySectionProps {
  onOpenEnroll: (courseName: string) => void;
}

export const OrganicChemistrySection: React.FC<OrganicChemistrySectionProps> = ({ onOpenEnroll }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  const chapters: ChemistryChapter[] = [
    {
      id: 'ch1',
      number: '01',
      title: 'FUNDAMENTALS',
      subtitle: 'BONDING, HYBRIDIZATION & REACTION INTERMEDIATES',
      topics: ['Atomic Orbitals & Hybridization (sp, sp2, sp3)', 'Electronegativity & Inductive Effects', 'Resonance, Mesomeric & Hyperconjugation', 'Carbocations, Carbanions & Free Radicals'],
      reactionFormula: 'R-X + Nu⁻ → R-Nu + X⁻ (Nucleophilic Substitution)',
    },
    {
      id: 'ch2',
      number: '02',
      title: 'STEREOCHEMISTRY',
      subtitle: 'ISOMERISM, CHIRALITY & CONFORMATIONAL ANALYSIS',
      topics: ['Chirality, Enantiomers & Diastereomers', 'R/S Nomenclature & Fischer Projections', 'E/Z Isomerism in Alkenes', 'Conformational Analysis of Cyclohexane'],
      reactionFormula: 'CnH2n (Conformational Equilibrium Matrix)',
    },
    {
      id: 'ch3',
      number: '03',
      title: 'REACTION MECHANISMS',
      subtitle: 'SN1, SN2, E1, E2 & ADDITION PATHWAYS',
      topics: ['SN1 vs SN2 Substitution Kinetics', 'E1 vs E2 Elimination Competition (Zaitsev rule)', 'Electrophilic Addition to Alkenes & Alkynes', 'Markovnikov & Anti-Markovnikov Orientations'],
      reactionFormula: 'R-CH=CH2 + HBr → R-CH(Br)-CH3',
    },
    {
      id: 'ch4',
      number: '04',
      title: 'ORGANIC SYNTHESIS',
      subtitle: 'FUNCTIONAL GROUP TRANSFORMATIONS',
      topics: ['Oxidation & Reduction Reagents (LiAlH4, NaBH4, PCC)', 'Synthesis of Alcohols, Ethers & Epoxides', 'Carbonyl Chemistry (Aldehydes & Ketones)', 'Carboxylic Acids & Derivative Conversions'],
      reactionFormula: 'R-CHO + NaBH4 → R-CH2OH',
    },
    {
      id: 'ch5',
      number: '05',
      title: 'NAMED REACTIONS',
      subtitle: 'CRITICAL ORGANIC BENCHMARK REACTIONS',
      topics: ['Aldol Condensation & Claisen Ester Reaction', 'Grignard Reaction Mechanisms', 'Cannizzaro & Friedel-Crafts Reactions', 'Wittig & Diels-Alder Cycloaddition'],
      reactionFormula: '2 R-CHO + OH⁻ → R-CH(OH)-CH2-CHO',
    },
    {
      id: 'ch6',
      number: '06',
      title: 'PHARMACEUTICAL ORGANIC CHEMISTRY',
      subtitle: 'DRUG MOLECULES & HETEROCYCLICS',
      topics: ['Heterocyclic Chemistry (Pyrrole, Pyridine, Furan)', 'Synthesis of Essential API Drug Molecules', 'Structure-Activity Relationships (SAR Basics)', 'Stereochemistry in Drug Action'],
      reactionFormula: 'C5H5N + E⁺ → 3-Substituted Pyridine',
    },
    {
      id: 'ch7',
      number: '07',
      title: 'EXAM PREPARATION',
      subtitle: 'GPAT & UNIVERSITY REVISION LAB',
      topics: ['GPAT / NIPER Past 10-Year Question Audits', 'High-Yield Reaction Prediction Speed Drills', 'Spectral Interpretation (IR, NMR, Mass Specs)', 'Time Management & Elimination Techniques'],
      reactionFormula: 'Target Score: GPAT AIR < 100',
    },
  ];

  const activeChapter = chapters[activeChapterIndex];

  return (
    <section id="chemistry" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-blueprint text-white border-y-4 border-[#00E5FF] overflow-hidden">
      {/* Sci-Fi Blueprint Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      {/* Floating Animated Molecular Glyphs */}
      <div className="absolute top-10 right-10 text-[#00E5FF]/20 animate-pulse">
        <Atom className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Chapter Header */}
        <div className="text-left mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black font-space text-xs font-bold tracking-widest px-3.5 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
            <FlaskConical className="w-4 h-4" /> SPECIALIZED SCIENCE CHAPTER // PHARMA & LIFE SCIENCES
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none">
            ORGANIC <span className="text-[#00E5FF] drop-shadow-[4px_4px_0px_#000000]">CHEMISTRY</span>
          </h2>

          <div className="font-bebas text-2xl sm:text-3xl text-yellow-300 tracking-wider uppercase">
            MASTER THE REACTIONS. MASTER THE EXAM.
          </div>

          {/* Key Specs Tags */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="bg-black/80 border border-[#00E5FF] text-[#00E5FF] px-3 py-1 font-space text-xs font-bold skew-x-[-6deg]">
              TARGET: Pharm.D | B.Pharm | M.Pharm | GPAT Aspirants | Life Science
            </div>
            <div className="bg-[#E60012] text-black px-3 py-1 font-bebas text-lg font-black skew-x-[-6deg]">
              DURATION: 30–45 DAYS
            </div>
            <div className="bg-white text-black px-3 py-1 font-space text-xs font-bold skew-x-[-6deg]">
              MODE: OFFLINE / ONLINE
            </div>
          </div>
        </div>

        {/* 7 Interactive Chapters Bar */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {chapters.map((ch, idx) => {
            const isActive = activeChapterIndex === idx;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveChapterIndex(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="CHAPTER"
                className={`p-3 border transition-all text-left flex flex-col justify-between h-24 skew-x-[-6deg] ${
                  isActive
                    ? 'bg-[#00E5FF] text-black border-[#00E5FF] shadow-[4px_4px_0px_#FFFFFF] font-bold'
                    : 'bg-black/90 border-white/20 text-white hover:border-[#00E5FF] hover:bg-[#06182c]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-2xl font-black">{ch.number}</span>
                  <TestTube className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#00E5FF]'}`} />
                </div>
                <div className="font-bebas text-sm tracking-wider uppercase truncate">
                  {ch.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Details Blueprint Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-[#050D18]/95 border-2 border-[#00E5FF] p-6 sm:p-10 shadow-[12px_12px_0px_#00E5FF] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center clip-card"
          >
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#00E5FF] text-black font-bebas text-3xl px-4 py-0.5 font-black skew-x-[-10deg]">
                  CHAPTER {activeChapter.number}
                </span>
                <span className="font-space text-xs text-yellow-300 tracking-widest font-bold uppercase border border-yellow-300/40 px-3 py-1">
                  CHEMISTRY SYLLABUS
                </span>
              </div>

              <div>
                <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider uppercase">
                  {activeChapter.title}
                </h3>
                <p className="font-space text-xs text-[#00E5FF] tracking-wider uppercase font-semibold">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* Topics Grid */}
              <div className="space-y-2">
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold">
                  CHAPTER CORE CONCEPTS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeChapter.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-black/80 p-3 border border-[#00E5FF]/20">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF88] flex-shrink-0" />
                      <span className="font-space text-xs text-gray-200">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Reaction Formula & Enroll */}
            <div className="lg:col-span-4 bg-black border border-[#00E5FF]/40 p-6 shadow-[6px_6px_0px_#FFFFFF] space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-space text-[#00E5FF]">
                  <Dna className="w-4 h-4" />
                  <span>REACTION BLUEPRINT</span>
                </div>

                <div className="bg-[#061424] p-4 border border-[#00E5FF]/30 font-mono text-xs text-yellow-300 break-all leading-relaxed">
                  {activeChapter.reactionFormula}
                </div>

                <div className="text-xs font-sans text-gray-400">
                  Comprehensive notes, reaction mechanisms worksheets, and GPAT mock test series included.
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playSlash();
                  onOpenEnroll('ORGANIC CHEMISTRY');
                }}
                className="w-full bg-[#00E5FF] text-black font-bebas text-2xl py-3 px-6 uppercase font-black tracking-wider hover:bg-white transition-colors skew-x-[-8deg] shadow-[4px_4px_0px_#FFFFFF]"
              >
                <span className="skew-x-[8deg] inline-flex items-center gap-2 justify-center">
                  ENROLL IN ORGANIC CHEM <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
