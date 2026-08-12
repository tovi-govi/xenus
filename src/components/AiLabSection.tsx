import React, { useState } from 'react';
import { soundFx } from '../utils/sound';
import { Cpu, Bot, Zap, Network, Database, Sparkles, Layers, Activity } from 'lucide-react';

interface LabNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  metrics: string;
  color: string;
}

export const AiLabSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('rag');

  const nodes: LabNode[] = [
    {
      id: 'openai',
      title: 'OPENAI API',
      subtitle: 'GPT-4o & EMBEDDINGS',
      icon: Cpu,
      description: 'Integrate state-of-the-art LLMs, multimodal vision processing, structured JSON outputs, and custom fine-tuning.',
      metrics: 'LATENCY < 250MS',
      color: '#E60012',
    },
    {
      id: 'chatbots',
      title: 'AI CHATBOTS',
      subtitle: 'CONVERSATIONAL AGENTS',
      icon: Bot,
      description: 'Deploy enterprise conversational bots with memory retention, persona alignment, and multi-turn dialog state management.',
      metrics: '99.8% ACCURACY',
      color: '#00E5FF',
    },
    {
      id: 'automation',
      title: 'AI AUTOMATION',
      subtitle: 'WORKFLOW & RPA PIPELINES',
      icon: Zap,
      description: 'Automate manual business operations, document data extraction, email triaging, and decision workflows.',
      metrics: '10X EFFICIENCY',
      color: '#00FF88',
    },
    {
      id: 'agents',
      title: 'AI AGENTS',
      subtitle: 'AUTONOMOUS REASONING',
      icon: Network,
      description: 'Build agentic systems capable of task planning, tool execution, browser automation, and multi-agent collaboration.',
      metrics: 'MULTI-AGENT',
      color: '#FFD700',
    },
    {
      id: 'rag',
      title: 'RAG ARCHITECTURE',
      subtitle: 'RETRIEVAL-AUGMENTED SEARCH',
      icon: Database,
      description: 'Connect LLMs to custom company knowledge bases using vector databases (Pinecone/Chroma), chunking, and semantic search.',
      metrics: 'ZERO HALLUCINATION',
      color: '#E60012',
    },
    {
      id: 'genai',
      title: 'GENERATIVE AI',
      subtitle: 'IMAGE, VOICE & CODE GEN',
      icon: Sparkles,
      description: 'Harness Midjourney/DALL-E image generation, ElevenLabs voice cloning, and automated code generation models.',
      metrics: 'MULTIMODAL',
      color: '#FF007F',
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[4];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060608] text-white border-y-4 border-[#E60012] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold tracking-widest px-4 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
            <Activity className="w-4 h-4" /> AI RESEARCH & DEPLOYMENT MATRIX
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl font-black tracking-wider uppercase leading-none">
            ENTER THE <span className="text-[#E60012] drop-shadow-[4px_4px_0px_#FFFFFF]">AI LAB</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400">
            Work directly with real-world enterprise AI frameworks. Connect autonomous agents, RAG pipelines, and LLM APIs in live sandboxes.
          </p>
        </div>

        {/* Interactive Matrix Graph & Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Node Grid Selector (8 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => {
                    soundFx.playSelect();
                    setSelectedNode(node.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="INSPECT"
                  className={`group relative p-5 border transition-all text-left flex flex-col justify-between min-h-[160px] skew-x-[-4deg] clip-card ${
                    isSelected
                      ? 'bg-black border-2 border-[#E60012] shadow-[8px_8px_0px_#E60012] translate-y-[-4deg]'
                      : 'bg-[#0F0F14] border-white/10 hover:border-white/40 hover:bg-[#161620]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2.5 rounded-none ${
                        isSelected ? 'bg-[#E60012] text-black' : 'bg-black text-[#00E5FF]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-space text-[10px] text-gray-500 font-bold">
                      {node.metrics}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bebas text-2xl tracking-wider uppercase text-white group-hover:text-[#E60012] transition-colors">
                      {node.title}
                    </h3>
                    <p className="font-space text-[10px] text-gray-400 font-semibold truncate">
                      {node.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Live Inspector Display (5 Cols) */}
          <div className="lg:col-span-5 bg-black border-2 border-white/20 p-6 sm:p-8 shadow-[10px_10px_0px_#E60012] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#E60012]" />
                  <span className="font-space text-xs text-[#00FF88] tracking-widest font-bold uppercase">
                    SYSTEM NODE INSPECTOR
                  </span>
                </div>
                <span className="font-mono text-xs bg-[#E60012] text-black px-2 py-0.5 font-bold">
                  ACTIVE
                </span>
              </div>

              <div>
                <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider uppercase">
                  {active.title}
                </h3>
                <p className="font-space text-xs text-[#00E5FF] tracking-widest uppercase font-bold">
                  {active.subtitle}
                </p>
              </div>

              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                {active.description}
              </p>

              {/* Node Specs HUD */}
              <div className="bg-[#12121A] p-4 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs font-space">
                  <span className="text-gray-400">BENCHMARK METRIC:</span>
                  <span className="text-[#00FF88] font-bold">{active.metrics}</span>
                </div>
                <div className="flex justify-between text-xs font-space">
                  <span className="text-gray-400">HANDS-ON LAB:</span>
                  <span className="text-white font-bold">INCLUDED IN 3M INTERNSHIP</span>
                </div>
                <div className="flex justify-between text-xs font-space">
                  <span className="text-gray-400">DEPLOYMENT ENGINE:</span>
                  <span className="text-[#00E5FF] font-bold">CLOUD SERVED</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="font-space text-xs text-gray-400 mb-2">CONNECTED TECHNOLOGIES MATRIX</div>
              <div className="flex flex-wrap gap-2 text-xs font-space">
                <span className="bg-white/10 text-white px-2.5 py-1">Python</span>
                <span className="bg-white/10 text-white px-2.5 py-1">OpenAI</span>
                <span className="bg-white/10 text-white px-2.5 py-1">LangChain</span>
                <span className="bg-white/10 text-white px-2.5 py-1">FastAPI</span>
                <span className="bg-white/10 text-white px-2.5 py-1">Vector DB</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
