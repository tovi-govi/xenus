import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Shield, Target, Terminal, ArrowUpRight, CheckCircle, X } from 'lucide-react';

interface Mission {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  difficulty: string;
  deliverables: string[];
}

export const MissionsSection: React.FC = () => {
  const [activeMission, setActiveMission] = useState<Mission | null>(null);

  const missions: Mission[] = [
    {
      id: 'm1',
      code: 'MISSION 01',
      title: 'AI CHATBOT',
      tagline: 'BUILD • DEPLOY • ITERATE',
      description: 'Architect a custom enterprise conversational AI chatbot featuring multi-turn conversation memory, intent detection, and RAG document grounding.',
      techStack: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'React'],
      difficulty: 'INTERMEDIATE',
      deliverables: ['Custom LLM Prompt Chain', 'Streaming WebSocket Server', 'Production Web Widget'],
    },
    {
      id: 'm2',
      code: 'MISSION 02',
      title: 'RESUME SCREENING',
      tagline: 'PARSE • RANK • MATCH',
      description: 'Build an automated HR candidate scoring system that parses PDF resumes, extracts skills using NLP, and ranks applicants against job descriptions.',
      techStack: ['Python', 'spaCy', 'Pandas', 'Scikit-Learn', 'Streamlit'],
      difficulty: 'ADVANCED',
      deliverables: ['PDF Text Extractor', 'TF-IDF Similarity Engine', 'Interactive Ranking Dashboard'],
    },
    {
      id: 'm3',
      code: 'MISSION 03',
      title: 'IMAGE CLASSIFICATION',
      tagline: 'VISION • CONVOLUTION • DETECT',
      description: 'Train a deep learning computer vision model to inspect manufacturing defects or medical image scans with transfer learning.',
      techStack: ['PyTorch', 'TensorFlow', 'OpenCV', 'ResNet50'],
      difficulty: 'ADVANCED',
      deliverables: ['Convolutional Neural Net', 'Data Augmentation Pipeline', 'Real-Time Camera Stream App'],
    },
    {
      id: 'm4',
      code: 'MISSION 04',
      title: 'SENTIMENT ANALYSIS',
      tagline: 'INGEST • CLASSIFY • STREAM',
      description: 'Deploy a real-time sentiment stream processor analyzing social media feeds and customer reviews to flag escalation spikes.',
      techStack: ['Python', 'BERT / Transformers', 'Kafka Basics', 'Plotly'],
      difficulty: 'INTERMEDIATE',
      deliverables: ['Transformer Fine-tuning', 'Live Analytics Stream', 'Alert Trigger Webhooks'],
    },
    {
      id: 'm5',
      code: 'MISSION 05',
      title: 'AI VIRTUAL ASSISTANT',
      tagline: 'VOICE • EXECUTE • AUTOMATE',
      description: 'Construct a voice-enabled virtual AI assistant capable of scheduling calendar meetings, querying databases, and sending automated emails.',
      techStack: ['Whisper STT', 'ElevenLabs TTS', 'LangChain Agents', 'Python'],
      difficulty: 'EXPERT',
      deliverables: ['Speech Recognition Loop', 'Autonomous Tool Execution', 'Desktop Automation GUI'],
    },
    {
      id: 'm6',
      code: 'MISSION 06',
      title: 'SMART RECOMMENDATION',
      tagline: 'VECTOR SEARCH • FILTER • SUGGEST',
      description: 'Build an e-commerce personalized recommendation engine utilizing collaborative filtering and vector embeddings for product recommendations.',
      techStack: ['Python', 'Pinecone', 'Surprise Lib', 'Node.js', 'PostgreSQL'],
      difficulty: 'ADVANCED',
      deliverables: ['Vector Embeddings Index', 'Similarity Matrix Generator', 'REST Recommendation API'],
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090C] overflow-hidden border-b-4 border-[#E60012]">
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-3 py-1 skew-x-[-12deg]">
              <Target className="w-4 h-4" /> HANDS-ON INTERNSHIP MISSIONS
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl font-black text-white tracking-wider uppercase leading-none mt-2">
              REAL WORLD <span className="text-[#E60012] underline decoration-white underline-offset-4">MISSIONS</span>
            </h2>
          </div>
          <p className="font-space text-xs sm:text-sm text-gray-400 max-w-md">
            Students complete confidential real-world project briefings during their <strong className="text-[#00FF88]">3 Months Internship</strong>.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((m) => (
            <motion.div
              key={m.id}
              whileHover={{ y: -6 }}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => {
                soundFx.playSelect();
                setActiveMission(m);
              }}
              data-cursor="MISSION"
              className="bg-black border-2 border-white/20 p-6 shadow-[6px_6px_0px_#000000] hover:border-[#E60012] hover:shadow-[10px_10px_0px_#E60012] transition-all cursor-pointer flex flex-col justify-between min-h-[300px] clip-card group text-left"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="font-bebas text-2xl text-[#E60012] tracking-wider font-bold">
                    {m.code}
                  </span>
                  <span className="font-space text-[10px] bg-white/10 text-gray-300 font-bold px-2.5 py-0.5 skew-x-[-8deg]">
                    {m.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-3xl text-white tracking-wider uppercase group-hover:text-[#E60012] transition-colors">
                  {m.title}
                </h3>
                <div className="font-space text-xs text-[#00FF88] tracking-widest uppercase font-bold mb-3">
                  {m.tagline}
                </div>

                <p className="font-sans text-xs text-gray-300 line-clamp-3 mb-4">
                  {m.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {m.techStack.map((tech, idx) => (
                    <span key={idx} className="font-space text-[10px] bg-[#14141C] text-gray-300 px-2 py-0.5 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Action Button */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bebas tracking-wider text-white group-hover:text-[#E60012]">
                  <span>INSPECT MISSION DOSSIER</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Dossier Modal */}
        <AnimatePresence>
          {activeMission && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[600] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveMission(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black border-4 border-[#E60012] p-6 sm:p-8 max-w-2xl w-full shadow-[14px_14px_0px_#FFFFFF] text-left relative overflow-hidden clip-card"
              >
                <button
                  onClick={() => setActiveMission(null)}
                  className="absolute top-4 right-4 bg-[#E60012] text-black p-1.5 hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-[#E60012]" />
                  <span className="font-bebas text-2xl text-[#E60012] font-black">
                    {activeMission.code} DOSSIER
                  </span>
                </div>

                <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider uppercase mb-1">
                  {activeMission.title}
                </h3>
                <div className="font-space text-xs text-[#00FF88] tracking-widest font-bold uppercase mb-4">
                  {activeMission.tagline}
                </div>

                <p className="font-sans text-sm text-gray-300 mb-6 leading-relaxed">
                  {activeMission.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold">
                    KEY MISSION DELIVERABLES:
                  </div>
                  <div className="space-y-2">
                    {activeMission.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-[#12121A] p-2.5 border border-white/10 text-xs font-space text-white">
                        <CheckCircle className="w-4 h-4 text-[#00FF88]" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00E5FF]" />
                    <span className="font-space text-xs text-gray-400">STACK: {activeMission.techStack.join(', ')}</span>
                  </div>

                  <button
                    onClick={() => setActiveMission(null)}
                    className="bg-[#E60012] text-black font-bebas text-xl px-6 py-2 uppercase font-bold skew-x-[-8deg]"
                  >
                    CLOSE BRIEFING
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
