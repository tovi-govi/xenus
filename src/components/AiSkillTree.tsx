import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { Brain, Code2, Database, Network, Cpu, Sparkles, CheckCircle2, ChevronRight, Play } from 'lucide-react';

interface SkillNode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  topics: string[];
  tools: string[];
  codeSnippet: string;
}

export const AiSkillTree: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const stages: SkillNode[] = [
    {
      id: 'ai-intro',
      number: '01',
      title: 'AI FUNDAMENTALS',
      subtitle: 'INTRODUCTION TO ARTIFICIAL INTELLIGENCE',
      icon: Brain,
      description: 'Understand core AI definitions, expert systems, search algorithms, state spaces, and ethical AI frameworks.',
      topics: ['AI Core Concepts & History', 'Search Algorithms & Heuristics', 'Knowledge Representation', 'Ethical AI & Future Scope'],
      tools: ['Jupyter Notebooks', 'Python 3.11', 'VS Code'],
      codeSnippet: `// Stage 01: Core AI Logic
const ai = new IntelligenceSystem({
  mode: 'autonomous',
  ethics: 'verified',
});
console.log(ai.getStatus());`,
    },
    {
      id: 'python',
      number: '02',
      title: 'PYTHON MASTERY',
      subtitle: 'PROGRAMMING FUNDAMENTALS',
      icon: Code2,
      description: 'Master Python syntax, object-oriented programming, data structures, list comprehensions, and error handling.',
      topics: ['Python Data Types & Loops', 'Functions & Lambdas', 'Object-Oriented Programming', 'Modules & Package Management'],
      tools: ['Python 3.11', 'Pip', 'Anaconda', 'Git'],
      codeSnippet: `# Stage 02: Python Data Pipeline
def process_stream(data: list) -> list:
    return [x ** 2 for x in data if x % 2 == 0]

print(process_stream(range(10)))`,
    },
    {
      id: 'data',
      number: '03',
      title: 'DATA ENGINEERING',
      subtitle: 'NUMPY, PANDAS & VISUALIZATION',
      icon: Database,
      description: 'Manipulate massive datasets, clean dirty data, execute Exploratory Data Analysis (EDA), and render insightful charts.',
      topics: ['NumPy Vectorized Computing', 'Pandas Series & DataFrames', 'Data Cleaning & Imputation', 'Matplotlib & Seaborn Visuals'],
      tools: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
      codeSnippet: `# Stage 03: Data Processing
import pandas as pd
df = pd.read_csv("telecom_churn.csv")
clean_df = df.dropna().groupby("region").mean()`,
    },
    {
      id: 'ml',
      number: '04',
      title: 'MACHINE LEARNING',
      subtitle: 'REGRESSION, CLASSIFICATION & CLUSTERING',
      icon: Network,
      description: 'Train supervised and unsupervised ML models, optimize hyper-parameters, and measure precision/recall metrics.',
      topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'K-Means & Hierarchical Clustering', 'Scikit-Learn Model Pipeline'],
      tools: ['Scikit-Learn', 'SciPy', 'XGBoost', 'Joblib'],
      codeSnippet: `# Stage 04: Scikit-Learn Model
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)
acc = clf.score(X_test, y_test)`,
    },
    {
      id: 'dl',
      number: '05',
      title: 'DEEP LEARNING',
      subtitle: 'NEURAL NETWORKS, TENSORFLOW & KERAS',
      icon: Cpu,
      description: 'Build artificial neural networks (ANN), convolutional neural networks (CNN) for vision, and recurrent networks for sequences.',
      topics: ['Artificial Neural Networks (ANN)', 'Convolutional Networks (CNN)', 'Transfer Learning & ResNet', 'TensorFlow & Keras Training'],
      tools: ['TensorFlow 2.x', 'Keras', 'PyTorch Basics', 'Google Colab GPU'],
      codeSnippet: `# Stage 05: Neural Network Architecture
model = keras.Sequential([
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])`,
    },
    {
      id: 'genai',
      number: '06',
      title: 'GENERATIVE AI',
      subtitle: 'LLMS, PROMPT ENG & AI AGENTS',
      icon: Sparkles,
      description: 'Architect cutting-edge GenAI applications using OpenAI APIs, RAG vector search, custom AI agents, and prompt engineering.',
      topics: ['Large Language Models (LLMs)', 'OpenAI API & Function Calling', 'Retrieval-Augmented Generation (RAG)', 'Autonomous AI Agents & LangChain'],
      tools: ['OpenAI API', 'LangChain', 'Pinecone Vector DB', 'LlamaIndex'],
      codeSnippet: `# Stage 06: GenAI Agent RAG Pipeline
from langchain_openai import ChatOpenAI
agent = create_rag_agent(
    model="gpt-4o",
    vector_store=vector_db
)
response = agent.run("Analyze report")`,
    },
  ];

  const activeStage = stages[activeStageIndex];

  return (
    <section id="ai" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090D] overflow-hidden border-t-4 border-[#00E5FF]">
      {/* Halftone & Grid Pattern */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 bg-black text-[#00E5FF] border border-[#00E5FF]/40 font-space text-xs font-bold tracking-widest px-3 py-1 skew-x-[-12deg]">
            <Brain className="w-4 h-4 text-[#00E5FF]" /> SKILL TREE PROGRESSION // THE AI PATH
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl font-black text-white tracking-wider uppercase leading-none">
            THE <span className="text-[#00E5FF] underline decoration-[#E60012] underline-offset-4">AI PATHWAY</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-2xl">
            Progress step-by-step through our structured 6-stage curriculum. Designed to take absolute beginners to production GenAI engineers.
          </p>
        </div>

        {/* Interactive Progression Skill Tree Nodes Bar */}
        <div className="mb-12 bg-black border-2 border-white/20 p-4 shadow-[8px_8px_0px_#00E5FF] clip-card">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-space text-gray-400 mb-3 px-2">
            <span>CURRICULUM STAGE SELECTION ({activeStageIndex + 1} / 6)</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-ping" />
              <span className="text-[#00FF88] font-bold">INTERACTIVE SKILL TREE</span>
            </div>
          </div>

          {/* Nodes Horizontal Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStageIndex === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    soundFx.playSelect();
                    setActiveStageIndex(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="STAGE"
                  className={`group relative p-3 border transition-all text-left flex flex-col justify-between h-28 skew-x-[-6deg] ${
                    isActive
                      ? 'bg-[#E60012] border-[#E60012] text-black shadow-[4px_4px_0px_#FFFFFF] translate-y-[-2px]'
                      : 'bg-[#121218] border-white/10 text-white hover:border-[#00E5FF] hover:bg-black'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-bebas text-2xl font-black ${
                        isActive ? 'text-black' : 'text-gray-500 group-hover:text-[#00E5FF]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-[#00E5FF]'}`} />
                  </div>

                  <div>
                    <div className="font-bebas text-base tracking-wider truncate uppercase">
                      {stage.title}
                    </div>
                    <div className={`font-space text-[9px] truncate ${isActive ? 'text-black/80 font-bold' : 'text-gray-400'}`}>
                      {stage.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Progress Meter Bar */}
          <div className="w-full bg-gray-800 h-2 mt-4 rounded-none overflow-hidden relative">
            <motion.div
              className="bg-gradient-to-r from-[#E60012] via-[#00E5FF] to-[#00FF88] h-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeStageIndex + 1) / 6) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Active Stage Detailed Inspector Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-black border-2 border-[#E60012] p-6 sm:p-8 lg:p-10 shadow-[12px_12px_0px_#E60012] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Stage Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#E60012] text-black font-bebas text-3xl px-4 py-0.5 font-black skew-x-[-10deg]">
                  STAGE {activeStage.number}
                </span>
                <span className="font-space text-xs text-[#00FF88] tracking-widest font-bold uppercase border border-[#00FF88]/40 px-3 py-1">
                  MODULE BLUEPRINT
                </span>
              </div>

              <div>
                <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider uppercase">
                  {activeStage.title}
                </h3>
                <p className="font-space text-xs text-[#00E5FF] tracking-wider uppercase font-semibold">
                  {activeStage.subtitle}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Topics List */}
              <div className="space-y-2">
                <div className="font-space text-xs text-gray-400 tracking-widest uppercase font-bold">
                  KEY SYLLABUS TOPICS COVERED:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStage.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#12121A] p-2.5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF88] flex-shrink-0" />
                      <span className="font-space text-xs text-gray-200">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="font-space text-xs text-gray-400 mr-2">TOOLS USED:</span>
                {activeStage.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1A1A24] text-white border border-white/20 font-space text-xs px-2.5 py-0.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Stage Code Preview Terminal */}
            <div className="lg:col-span-5 bg-[#0A0A0E] border-2 border-white/20 p-5 shadow-[6px_6px_0px_#00E5FF]">
              <div className="flex items-center justify-between text-xs font-space text-gray-400 pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#00FF88]">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>CODE_RUNNER.PY // STAGE_{activeStage.number}</span>
                </div>
                <span className="text-gray-500">PYTHON 3.11</span>
              </div>

              <pre className="font-mono text-xs text-gray-200 overflow-x-auto p-3 bg-black border border-white/10 rounded-none leading-relaxed">
                <code>{activeStage.codeSnippet}</code>
              </pre>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-space">
                <span className="text-gray-400">PRACTICAL LAB HANDS-ON</span>
                <button
                  onClick={() => {
                    if (activeStageIndex < stages.length - 1) {
                      soundFx.playClick();
                      setActiveStageIndex(activeStageIndex + 1);
                    }
                  }}
                  disabled={activeStageIndex === stages.length - 1}
                  className="text-[#00E5FF] hover:underline font-bold flex items-center gap-1 disabled:opacity-50"
                >
                  NEXT STAGE <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
