import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Terminal, Check } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  description: string;
  iconName: string;
}

export const TechArsenalSection: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const techStack: TechItem[] = [
    { name: 'Python', category: 'CORE LANG', description: 'Primary language for AI, data science, web backends, and automation.', iconName: 'Py' },
    { name: 'NumPy', category: 'DATA COMPUTE', description: 'High-performance N-dimensional array processing and mathematical computations.', iconName: 'Np' },
    { name: 'Pandas', category: 'DATA PIPELINES', description: 'Data structures and analysis tools for manipulating numerical tables and series.', iconName: 'Pd' },
    { name: 'Scikit-learn', category: 'MACHINE LEARNING', description: 'Industry standard ML library for classification, regression, and clustering algorithms.', iconName: 'Sk' },
    { name: 'TensorFlow', category: 'DEEP LEARNING', description: 'Open-source end-to-end platform for building and training neural networks.', iconName: 'Tf' },
    { name: 'Keras', category: 'NEURAL NETS', description: 'High-level neural network API running on top of TensorFlow.', iconName: 'Kr' },
    { name: 'OpenAI API', category: 'GEN AI', description: 'GPT-4o, DALL-E, and text embeddings for autonomous intelligence.', iconName: 'AI' },
    { name: 'ChatGPT', category: 'PROMPT ENG', description: 'Advanced conversational LLM prompting and automated workflow synthesis.', iconName: 'GPT' },
    { name: 'Git', category: 'VERSION CONTROL', description: 'Distributed version control system for tracking source code changes.', iconName: 'Git' },
    { name: 'GitHub', category: 'DEVOPS REPO', description: 'Cloud repository hosting, CI/CD Actions, and open-source collaboration.', iconName: 'GH' },
    { name: 'Jupyter', category: 'DATA LABS', description: 'Interactive computing environment for data visualization and prototyping.', iconName: 'Jp' },
    { name: 'VS Code', category: 'IDE ENGINE', description: 'Powerful code editor with full extension ecosystem and debugging support.', iconName: 'VSC' },
    { name: 'Google Colab', category: 'GPU CLOUD', description: 'Cloud-hosted Jupyter notebook environment with free GPU & TPU acceleration.', iconName: 'Colab' },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#07070A] border-t-4 border-[#00E5FF] overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black font-space text-xs font-bold tracking-widest px-3 py-1 skew-x-[-12deg]">
            <Terminal className="w-4 h-4" /> WEAPONS OF CHOICE // TECH STACK
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl font-black text-white tracking-wider uppercase leading-none">
            THE <span className="text-[#00E5FF] underline decoration-[#E60012] underline-offset-4">ARSENAL</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-xl">
            Master the exact industry tools, frameworks, and developer environments used by modern tech giants.
          </p>
        </div>

        {/* Interactive Tech Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05, y: -4 }}
              onMouseEnter={() => {
                soundFx.playHover();
                setHoveredTech(tech);
              }}
              data-cursor={tech.name}
              className="bg-black border-2 border-white/20 p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00E5FF] hover:shadow-[6px_6px_0px_#00E5FF] transition-all cursor-pointer flex flex-col items-center justify-center text-center h-28 skew-x-[-6deg] clip-card group"
            >
              <div className="font-bebas text-3xl text-[#E60012] font-black group-hover:text-white transition-colors">
                {tech.iconName}
              </div>
              <div className="font-bebas text-lg text-white tracking-wider uppercase group-hover:text-[#00E5FF] transition-colors mt-1">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hovered Tech Detail Bar */}
        <div className="h-24">
          <AnimatePresence mode="wait">
            {hoveredTech ? (
              <motion.div
                key={hoveredTech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-black border-2 border-[#00E5FF] p-4 shadow-[6px_6px_0px_#00E5FF] flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bebas text-2xl text-white font-bold">{hoveredTech.name}</span>
                    <span className="bg-[#00E5FF] text-black font-space text-[10px] px-2 py-0.5 font-bold uppercase skew-x-[-8deg]">
                      {hoveredTech.category}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-gray-300">
                    {hoveredTech.description}
                  </p>
                </div>

                <div className="font-space text-xs text-[#00FF88] font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> HANDS-ON COVERAGE
                </div>
              </motion.div>
            ) : (
              <div className="bg-[#101018] border border-white/10 p-4 text-center font-space text-xs text-gray-400 flex items-center justify-center h-full">
                HOVER OVER ANY TOOL IN THE ARSENAL TO INSPECT ITS SYLLABUS INTEGRATION
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
