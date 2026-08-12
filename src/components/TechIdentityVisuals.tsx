import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Code, Terminal, Cloud, Shield, Cpu, CircuitBoard, TrendingUp, 
  Network, Zap, Lock, Layers, Server, Activity, Atom 
} from 'lucide-react';

interface VisualProps {
  id: string;
  title: string;
  badge?: string;
}

export const TechIdentityVisual: React.FC<VisualProps> = ({ id, title: _title }) => {
  switch (id) {
    case '01': // FOUNDATION
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-white/20 p-6 flex flex-col justify-between overflow-hidden group select-none">
          <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header info */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-space text-xs text-[#00FF88] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Code className="w-4 h-4" /> CORE CS ARCHITECTURE
            </span>
            <span className="font-mono text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 font-bold">
              BUILDING BLOCKS
            </span>
          </div>

          {/* Central Graphic Visual */}
          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-dashed border-[#00FF88]/50 rounded-full animate-spin [animation-duration:15s]" />
              <div className="absolute inset-4 border border-white/20 rotate-45 animate-pulse" />
              <div className="relative bg-[#00FF88] text-black p-5 skew-x-[-8deg] shadow-[6px_6px_0px_#FFFFFF]">
                <Code className="w-10 h-10 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Code snippet / Structure HUD */}
          <div className="relative z-10 bg-[#0A0A0F] p-3 border border-white/10 font-mono text-[11px] text-gray-300 space-y-1">
            <div className="text-[#00FF88]">&gt; class DataStructure &#123;</div>
            <div className="pl-4 text-gray-400">algorithm: 'QuickSort',</div>
            <div className="pl-4 text-gray-400">complexity: 'O(N log N)'</div>
            <div className="text-[#00FF88]">&#125;</div>
          </div>
        </div>
      );

    case '02': // FULL STACK
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#E60012] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#E60012]">
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
          <div className="absolute -right-20 top-0 w-64 h-full bg-[#E60012]/10 skew-x-[-20deg] pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#E60012]/30 pb-3">
            <span className="font-space text-xs text-[#E60012] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> ENTERPRISE WEB ENGINE
            </span>
            <span className="font-mono text-[10px] bg-[#E60012] text-black px-2 py-0.5 font-bold">
              REACT + NODE + SQL
            </span>
          </div>

          <div className="relative z-10 my-4 grid grid-cols-2 gap-3">
            <div className="bg-[#121218] border border-white/10 p-3 flex flex-col items-center justify-center text-center">
              <Layers className="w-8 h-8 text-[#00E5FF] mb-1" />
              <span className="font-bebas text-lg text-white">FRONTEND</span>
              <span className="font-space text-[9px] text-gray-400">React 19 & Next.js</span>
            </div>
            <div className="bg-[#121218] border border-white/10 p-3 flex flex-col items-center justify-center text-center">
              <Server className="w-8 h-8 text-[#00FF88] mb-1" />
              <span className="font-bebas text-lg text-white">BACKEND</span>
              <span className="font-space text-[9px] text-gray-400">Node API & SQL</span>
            </div>
          </div>

          <div className="relative z-10 bg-[#0D0D12] p-3 border border-white/10 font-mono text-[11px] text-gray-300">
            <span className="text-[#00FF88]">npm run deploy:production</span>
            <div className="text-xs text-emerald-400 font-bold mt-0.5">✓ 100% LIVE WORKLOADS</div>
          </div>
        </div>
      );

    case '03': // AI & DATA SCIENCE
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#00E5FF] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#00E5FF]">
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 -right-10 w-48 h-48 bg-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#00E5FF]/30 pb-3">
            <span className="font-space text-xs text-[#00E5FF] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-[#00E5FF]" /> NEURAL MATRIX & GENAI
            </span>
            <span className="font-mono text-[10px] bg-[#00E5FF] text-black px-2 py-0.5 font-bold">
              GPT-4o + RAG
            </span>
          </div>

          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-dashed border-[#00E5FF] rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 border border-solid border-[#E60012]/40 rounded-full"
              />
              <div className="relative bg-[#00E5FF] text-black p-5 skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF]">
                <Brain className="w-10 h-10 stroke-[2.5]" />
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-[#0A0D14] p-3 border border-[#00E5FF]/30 font-mono text-[11px] text-gray-300">
            <div className="text-[#00E5FF]">&gt; agent.run("Synthesize Insights")</div>
            <div className="text-emerald-400 font-bold">&gt; Accuracy: 99.8% | RAG Verified</div>
          </div>
        </div>
      );

    case '04': // CLOUD & DEVOPS
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#00FF88] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#00FF88]">
          <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#00FF88]/30 pb-3">
            <span className="font-space text-xs text-[#00FF88] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Cloud className="w-4 h-4" /> KUBERNETES & AWS PIPELINE
            </span>
            <span className="font-mono text-[10px] bg-[#00FF88] text-black px-2 py-0.5 font-bold">
              MICROSERVICES
            </span>
          </div>

          <div className="relative z-10 my-4 grid grid-cols-3 gap-2">
            <div className="bg-[#101410] border border-[#00FF88]/30 p-2 text-center">
              <Network className="w-6 h-6 text-[#00FF88] mx-auto mb-1" />
              <span className="font-bebas text-sm text-white">DOCKER</span>
            </div>
            <div className="bg-[#101410] border border-[#00FF88]/30 p-2 text-center">
              <Zap className="w-6 h-6 text-[#00E5FF] mx-auto mb-1" />
              <span className="font-bebas text-sm text-white">K8S</span>
            </div>
            <div className="bg-[#101410] border border-[#00FF88]/30 p-2 text-center">
              <Server className="w-6 h-6 text-[#E60012] mx-auto mb-1" />
              <span className="font-bebas text-sm text-white">AWS</span>
            </div>
          </div>

          <div className="relative z-10 bg-[#0A120A] p-3 border border-[#00FF88]/30 font-mono text-[11px] text-gray-300">
            <div className="text-[#00FF88]">&gt; kubectl scale deployment/api --replicas=10</div>
            <div className="text-gray-400">&gt; Status: HEALTHY | Uptime 99.99%</div>
          </div>
        </div>
      );

    case '05': // CYBER SECURITY
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#FF007F] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#FF007F]">
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#FF007F]/30 pb-3">
            <span className="font-space text-xs text-[#FF007F] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> DEFENSIVE & PENETRATION LABS
            </span>
            <span className="font-mono text-[10px] bg-[#FF007F] text-white px-2 py-0.5 font-bold">
              ZERO TRUST
            </span>
          </div>

          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="relative bg-[#FF007F] text-black p-6 skew-x-[-12deg] shadow-[6px_6px_0px_#FFFFFF]">
              <Lock className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <div className="relative z-10 bg-[#12080D] p-3 border border-[#FF007F]/30 font-mono text-[11px] text-gray-300">
            <div className="text-[#FF007F]">&gt; nmap -sV --script=vuln 192.168.1.1</div>
            <div className="text-emerald-400 font-bold">&gt; AUDIT COMPLETE: FIREWALL ARMORED</div>
          </div>
        </div>
      );

    case '06': // ADVANCED TECH
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#FFD700] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#FFD700]">
          <div className="absolute inset-0 bg-grid-lines opacity-20 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#FFD700]/30 pb-3">
            <span className="font-space text-xs text-[#FFD700] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> SERVICENOW & PLAYWRIGHT
            </span>
            <span className="font-mono text-[10px] bg-[#FFD700] text-black px-2 py-0.5 font-bold">
              AUTOMATION
            </span>
          </div>

          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="bg-[#FFD700] text-black p-5 skew-x-[-8deg] shadow-[6px_6px_0px_#FFFFFF]">
              <Activity className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <div className="relative z-10 bg-[#14120A] p-3 border border-[#FFD700]/30 font-mono text-[11px] text-gray-300">
            <div className="text-[#FFD700]">&gt; npx playwright test --headed</div>
            <div className="text-emerald-400 font-bold">&gt; 142/142 SPECS PASSED ⚡</div>
          </div>
        </div>
      );

    case '07': // VLSI DESIGN
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#00E5FF] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#00E5FF]">
          <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#00E5FF]/30 pb-3">
            <span className="font-space text-xs text-[#00E5FF] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <CircuitBoard className="w-4 h-4" /> SILICON CHIP ARCHITECTURE
            </span>
            <span className="font-mono text-[10px] bg-[#00E5FF] text-black px-2 py-0.5 font-bold">
              VERILOG HDL
            </span>
          </div>

          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="bg-[#00E5FF] text-black p-5 skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF]">
              <Atom className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <div className="relative z-10 bg-[#0A0F14] p-3 border border-[#00E5FF]/30 font-mono text-[11px] text-gray-300">
            <div className="text-[#00E5FF]">&gt; module ALU(input [3:0] A, B);</div>
            <div className="text-emerald-400 font-bold">&gt; FPGA SYNTHESIS: PASSED</div>
          </div>
        </div>
      );

    case '08': // DIGITAL MARKETING
    default:
      return (
        <div className="relative w-full h-full min-h-[280px] bg-black border-2 border-[#00FF88] p-6 flex flex-col justify-between overflow-hidden group select-none shadow-[8px_8px_0px_#00FF88]">
          <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#00FF88]/30 pb-3">
            <span className="font-space text-xs text-[#00FF88] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> GROWTH & REVENUE ANALYTICS
            </span>
            <span className="font-mono text-[10px] bg-[#00FF88] text-black px-2 py-0.5 font-bold">
              SEO + PPC
            </span>
          </div>

          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="bg-[#00FF88] text-black p-5 skew-x-[-8deg] shadow-[6px_6px_0px_#FFFFFF]">
              <TrendingUp className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <div className="relative z-10 bg-[#0A120A] p-3 border border-[#00FF88]/30 font-mono text-[11px] text-gray-300">
            <div className="text-[#00FF88]">&gt; analytics.getConversionRate()</div>
            <div className="text-emerald-400 font-bold">&gt; REVENUE ROI: +340%</div>
          </div>
        </div>
      );
  }
};
