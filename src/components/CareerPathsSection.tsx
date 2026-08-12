import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Briefcase, CheckCircle2, Wrench, ChevronRight, UserCheck } from 'lucide-react';

interface CareerRole {
  id: string;
  role: string;
  tagline: string;
  skills: string[];
  tools: string[];
  careerPath: string;
}

export const CareerPathsSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('ai-eng');

  const roles: CareerRole[] = [
    {
      id: 'ai-eng',
      role: 'AI ENGINEER',
      tagline: 'Enterprise AI Systems & LLM Integrations',
      skills: ['Neural Networks', 'Python & PyTorch', 'REST API Architecture', 'Model Deployment'],
      tools: ['OpenAI API', 'LangChain', 'Docker', 'FastAPI', 'Pinecone'],
      careerPath: 'Junior AI Developer → AI Engineer → Lead AI Architect',
    },
    {
      id: 'ml-eng',
      role: 'ML ENGINEER',
      tagline: 'Predictive Modeling & Algorithm Pipelines',
      skills: ['Supervised Learning', 'Feature Engineering', 'Model Tuning', 'Data Pipeline Optimization'],
      tools: ['Scikit-Learn', 'TensorFlow', 'XGBoost', 'Pandas', 'MLflow'],
      careerPath: 'Junior ML Dev → Machine Learning Engineer → MLOps Specialist',
    },
    {
      id: 'data-analyst',
      role: 'DATA ANALYST',
      tagline: 'Business Intelligence & Insights',
      skills: ['SQL Querying', 'Exploratory Data Analysis', 'Statistical Analysis', 'Dashboarding'],
      tools: ['Pandas', 'SQL', 'Tableau / Power BI', 'Seaborn', 'Excel'],
      careerPath: 'Data Analyst → Senior BI Analyst → Analytics Manager',
    },
    {
      id: 'data-scientist',
      role: 'DATA SCIENTIST',
      tagline: 'Advanced Analytics & Statistical AI',
      skills: ['Hypothesis Testing', 'Predictive Modeling', 'Big Data Wrangling', 'A/B Testing'],
      tools: ['Python', 'R', 'NumPy', 'Scikit-Learn', 'Jupyter'],
      careerPath: 'Junior Data Scientist → Senior Data Scientist → Principal Scientist',
    },
    {
      id: 'ai-dev',
      role: 'AI DEVELOPER',
      tagline: 'Custom AI Applications & Web Integrations',
      skills: ['Full Stack AI', 'Frontend & Backend', 'API Consumption', 'UI/UX Integration'],
      tools: ['React', 'Node.js', 'Python', 'OpenAI', 'TailwindCSS'],
      careerPath: 'Full Stack Dev → AI Developer → Tech Lead',
    },
    {
      id: 'prompt-eng',
      role: 'PROMPT ENGINEER',
      tagline: 'LLM Context Design & System Prompts',
      skills: ['Prompt Tuning', 'Few-Shot Learning', 'Chain-of-Thought', 'Evaluation Benchmarks'],
      tools: ['GPT-4o', 'Claude 3.5', 'PromptLab', 'LangSmith'],
      careerPath: 'Prompt Specialist → AI Product Designer → AI Experience Architect',
    },
    {
      id: 'genai-eng',
      role: 'GENERATIVE AI ENGINEER',
      tagline: 'Multimodal GenAI & Autonomous Agents',
      skills: ['RAG Architecture', 'Agentic Workflows', 'Vector Databases', 'Fine-Tuning'],
      tools: ['LlamaIndex', 'ChromaDB', 'Hugging Face', 'Ollama'],
      careerPath: 'GenAI Developer → GenAI Architect → Head of AI Innovation',
    },
    {
      id: 'nlp-eng',
      role: 'NLP ENGINEER',
      tagline: 'Language Processing & Sentiment Models',
      skills: ['Text Mining', 'Tokenization', 'Transformer Architectures', 'Semantic Search'],
      tools: ['spaCy', 'NLTK', 'Hugging Face Transformers', 'Python'],
      careerPath: 'NLP Researcher → Senior NLP Engineer → Conversational AI Lead',
    },
    {
      id: 'cv-eng',
      role: 'COMPUTER VISION ENGINEER',
      tagline: 'Visual Recognition & Video Analytics',
      skills: ['Object Detection', 'Image Segmentation', 'Spatial Geometry', 'CNN Training'],
      tools: ['OpenCV', 'YOLO', 'PyTorch', 'TorchVision'],
      careerPath: 'Vision Engineer → Senior CV Specialist → AI Robotics Lead',
    },
    {
      id: 'ai-auto',
      role: 'AI AUTOMATION SPECIALIST',
      tagline: 'End-to-End Enterprise Automation',
      skills: ['RPA & AI Workflows', 'Web Scraping', 'API Webhooks', 'Process Optimization'],
      tools: ['Playwright', 'Python', 'Zapier/Make', 'Docker'],
      careerPath: 'Automation Dev → Enterprise Automation Architect → Chief Automation Officer',
    },
  ];

  const currentRole = roles.find((r) => r.id === selectedRole) || roles[0];

  return (
    <section id="careers" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F] border-t-4 border-[#00FF88] overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-space text-xs font-bold tracking-widest px-3 py-1 skew-x-[-12deg]">
            <UserCheck className="w-4 h-4" /> CAREER PATHWAYS // TARGET ROLES
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl font-black text-white tracking-wider uppercase leading-none">
            YOUR <span className="text-[#00FF88] underline decoration-[#E60012] underline-offset-4">NEXT CLASS</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-2xl">
            Choose your target career path. We align your 3 Months Training + 3 Months Internship specifically towards your desired industry role.
          </p>
        </div>

        {/* Roles Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Roles Selector Badges (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {roles.map((r) => {
              const isSelected = selectedRole === r.id;

              return (
                <button
                  key={r.id}
                  onClick={() => {
                    soundFx.playSelect();
                    setSelectedRole(r.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="SELECT"
                  className={`p-4 border transition-all text-left flex items-center justify-between skew-x-[-6deg] clip-card ${
                    isSelected
                      ? 'bg-[#E60012] text-black border-[#E60012] shadow-[6px_6px_0px_#FFFFFF] font-bold'
                      : 'bg-black text-white border-white/10 hover:border-[#00FF88] hover:bg-[#12121A]'
                  }`}
                >
                  <div>
                    <div className="font-bebas text-2xl tracking-wider uppercase leading-none">
                      {r.role}
                    </div>
                    <div className={`font-space text-[10px] truncate max-w-[200px] mt-1 ${isSelected ? 'text-black/80 font-bold' : 'text-gray-400'}`}>
                      {r.tagline}
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-[#00FF88]'}`} />
                </button>
              );
            })}
          </div>

          {/* Role Inspector Panel (5 Cols) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="lg:col-span-5 bg-black border-2 border-[#00FF88] p-6 sm:p-8 shadow-[10px_10px_0px_#00FF88] text-left space-y-6"
            >
              <div>
                <div className="font-space text-xs text-[#00FF88] tracking-widest font-bold uppercase mb-1">
                  ROLE PROFILE BRIEFING
                </div>
                <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider uppercase">
                  {currentRole.role}
                </h3>
                <p className="font-sans text-xs text-gray-300">
                  {currentRole.tagline}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                  <span>CORE SKILLS MASTERED:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {currentRole.skills.map((s, idx) => (
                    <div key={idx} className="bg-[#12121A] p-2 border border-white/10 text-xs font-sans text-gray-200">
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-2">
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#00E5FF]" />
                  <span>PRIMARY TOOLKIT:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentRole.tools.map((t, idx) => (
                    <span key={idx} className="bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-space text-xs px-2.5 py-0.5 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Path */}
              <div className="bg-[#14141E] p-4 border border-white/10 space-y-1">
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#E60012]" />
                  <span>CAREER PROGRESSION:</span>
                </div>
                <div className="font-space text-xs text-white font-semibold">
                  {currentRole.careerPath}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
