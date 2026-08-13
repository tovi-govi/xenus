import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { 
  Building2, Terminal, Cpu, Radio, Lock, ShieldAlert, Sparkles, Navigation, Info 
} from 'lucide-react';
import type { SceneState } from '../App';

interface WorldLocation {
  id: SceneState;
  code: string;
  name: string;
  subtitle: string;
  sector: string;
  x: number; // percentage in world canvas
  y: number;
  icon: React.ElementType;
  prompt: string;
  status: string;
  rotateInitial: number;
  floatY: number[];
  floatRotate: number[];
  floatDuration: number;
}

interface SecretNode {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'terminal' | 'monitor' | 'core';
  message: string;
}

interface XenusWorldMapProps {
  onNavigate: (scene: SceneState) => void;
  onDiscoverSecret: (secretId: string, title: string, message: string) => void;
}

// Discoverable Locations in Xenus World (4 Core Balanced Nodes with Floating Motion & Dynamic Asymmetric Rotations)
const WORLD_LOCATIONS: WorldLocation[] = [
  {
    id: 'about',
    code: 'ABOUT US',
    name: 'ABOUT XENUS',
    subtitle: 'OUR MISSION, VISION & ADVANTAGE',
    sector: 'COMPANY OVERVIEW',
    x: 25,
    y: 30,
    icon: Building2,
    prompt: 'OPEN ABOUT US',
    status: 'ONLINE // READY',
    rotateInitial: -4.5,
    floatY: [0, -10, 0],
    floatRotate: [-4.5, -2.5, -4.5],
    floatDuration: 4.2,
  },
  {
    id: 'programSelect',
    code: 'PROGRAMS',
    name: 'OUR COURSES',
    subtitle: 'EXPLORE ALL 8 TRAINING TRACKS',
    sector: 'LEARNING & INTERNSHIPS',
    x: 75,
    y: 30,
    icon: Terminal,
    prompt: 'EXPLORE COURSES',
    status: 'ACTIVE // 8 TRACKS',
    rotateInitial: 4.5,
    floatY: [0, 10, 0],
    floatRotate: [4.5, 2.5, 4.5],
    floatDuration: 3.8,
  },
  {
    id: 'contact',
    code: 'CONTACT',
    name: 'ADMISSIONS',
    subtitle: 'GET IN TOUCH & ENROLL NOW',
    sector: 'DIRECT CONTACT',
    x: 50,
    y: 50,
    icon: Radio,
    prompt: 'CONTACT ADMISSIONS',
    status: 'OPEN // INQUIRIES',
    rotateInitial: -1.5,
    floatY: [-6, 6, -6],
    floatRotate: [-1.5, 1.5, -1.5],
    floatDuration: 4.8,
  },
  {
    id: 'careers',
    code: 'CAREERS',
    name: 'JOB OUTCOMES',
    subtitle: '98% HIRING RATE & SALARY INSIGHTS',
    sector: 'INDUSTRY ROLES',
    x: 50,
    y: 78,
    icon: Cpu,
    prompt: 'VIEW CAREERS',
    status: 'LIVE // HIRED 98%',
    rotateInitial: 3.0,
    floatY: [0, -12, 0],
    floatRotate: [3.0, 1.5, 3.0],
    floatDuration: 4.4,
  },
];

// Environmental Easter Egg Secrets
const SECRET_NODES: SecretNode[] = [
  {
    id: 'secret_terminal',
    name: 'SECRET TERMINAL // 0X-NEMESIS',
    x: 16,
    y: 60,
    type: 'terminal',
    message: 'LOG ENTRY #88: Project Nemesis AI core initialized. Autonomous learning algorithm bypass complete.',
  },
  {
    id: 'secret_monitor',
    name: 'ANOMALY MONITOR // SIGNAL DETECTED',
    x: 84,
    y: 55,
    type: 'monitor',
    message: 'SIGNAL DETECTED: Frequency 144.92 MHz transmitting encrypted cypher: "X-E-N-U-S".',
  },
  {
    id: 'secret_core',
    name: 'QUANTUM ENCRYPTED CORE',
    x: 50,
    y: 18,
    type: 'core',
    message: 'ENCRYPTED CORE: Clearance level 4 detected. Unlocking secret system archives...',
  },
];

export const XenusWorldMap: React.FC<XenusWorldMapProps> = React.memo(({ onNavigate, onDiscoverSecret }) => {
  const [hoveredLocation, setHoveredLocation] = useState<WorldLocation | null>(null);
  const [activeLocation, setActiveLocation] = useState<WorldLocation | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [foundSecrets, setFoundSecrets] = useState<string[]>([]);

  const locations = WORLD_LOCATIONS;
  const secretNodes = SECRET_NODES;

  const handleSelectLocation = (loc: WorldLocation) => {
    soundFx.playSelect();
    setActiveLocation(loc);
    setIsTransitioning(true);

    setTimeout(() => {
      onNavigate(loc.id);
    }, 220);
  };

  const handleSecretClick = (node: SecretNode) => {
    soundFx.playGlitch();
    if (!foundSecrets.includes(node.id)) {
      setFoundSecrets([...foundSecrets, node.id]);
    }
    onDiscoverSecret(node.id, node.name, node.message);
  };

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col justify-between p-4 sm:p-8 bg-[#08080A] text-white overflow-hidden select-none">
      
      {/* Background Holographic Grid Matrix */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Cinematic Radar Scanning Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full border border-[#00E5FF]/10 bg-gradient-to-r from-transparent via-[#00E5FF]/5 to-transparent pointer-events-none"
        />
      </div>

      {/* Top Map Status HUD Header */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 pt-safe">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#00FF88] animate-ping" />
          <h2 className="font-bebas text-2xl sm:text-3xl font-black text-white tracking-widest uppercase">
            XENUS <span className="text-[#E60012]">INTERACTIVE MAP // EXPLORE SECTIONS</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-space text-xs text-[#00E5FF] bg-black/80 border border-[#00E5FF]/40 px-3 py-1 font-bold skew-x-[-8deg]">
            EXPLORATION SECRETS: {foundSecrets.length} / {secretNodes.length} DISCOVERED
          </span>
          <div className="hidden md:flex items-center gap-1 font-space text-[10px] text-gray-400">
            <Navigation className="w-3.5 h-3.5 text-[#00FF88]" />
            <span>CLICK ANY SECTION TO EXPLORE</span>
          </div>
        </div>
      </div>

      {/* Main Interactive World Map Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full h-[520px] sm:h-[600px] my-4 border-2 border-white/15 bg-black/70 backdrop-blur-md rounded-none clip-card overflow-hidden">
        
        {/* Animated Holographic Vector Line Network */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
          <defs>
            <linearGradient id="gridGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E60012" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00FF88" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="url(#gridGlow)" strokeWidth="2" strokeDasharray="8 6" className="animate-line-dash" />
          <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="url(#gridGlow)" strokeWidth="2" strokeDasharray="8 6" className="animate-line-dash" />
          <line x1="50%" y1="78%" x2="50%" y2="50%" stroke="url(#gridGlow)" strokeWidth="2" strokeDasharray="8 6" className="animate-line-dash" />
          <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="25%" y1="30%" x2="50%" y2="78%" stroke="rgba(230, 0, 18, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="75%" y1="30%" x2="50%" y2="78%" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Central Hub Holographic Orbital Diamond Backdrop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="w-56 h-56 border border-[#00E5FF]/20 border-dashed rounded-none pointer-events-none"
          />
        </div>

        {/* Environmental Secret Nodes with Gentle Float Animation */}
        {secretNodes.map((secret) => {
          const isFound = foundSecrets.includes(secret.id);

          return (
            <motion.div
              key={secret.id}
              style={{ left: `${secret.x}%`, top: `${secret.y}%` }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.button
                onClick={() => handleSecretClick(secret)}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="CLASSIFIED"
                data-magnetic="true"
                whileHover={{ scale: 1.3 }}
                className={`p-2 border rounded-full transition-all ${
                  isFound
                    ? 'bg-[#00FF88] text-black border-[#00FF88] shadow-[0_0_12px_#00FF88]'
                    : 'bg-black/90 text-[#00E5FF] border-[#00E5FF]/60 hover:border-[#E60012] hover:text-[#E60012] animate-pulse'
                }`}
                title={secret.name}
              >
                {secret.type === 'terminal' && <Lock className="w-3.5 h-3.5" />}
                {secret.type === 'monitor' && <ShieldAlert className="w-3.5 h-3.5" />}
                {secret.type === 'core' && <Sparkles className="w-3.5 h-3.5" />}
              </motion.button>
            </motion.div>
          );
        })}

        {/* Sector Location Markers with Organic Floating Keyframe Motion & Dynamic Asymmetric Angles */}
        {locations.map((loc) => {
          const Icon = loc.icon;
          const isHovered = hoveredLocation?.id === loc.id;
          const isActive = activeLocation?.id === loc.id;

          return (
            <div
              key={loc.id}
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <motion.div
                animate={{
                  y: isHovered ? 0 : loc.floatY,
                  rotate: isHovered ? 0 : loc.floatRotate,
                }}
                transition={{
                  y: { duration: loc.floatDuration, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: loc.floatDuration, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <motion.button
                  onClick={() => handleSelectLocation(loc)}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setHoveredLocation(loc);
                  }}
                  onMouseLeave={() => setHoveredLocation(null)}
                  data-cursor={loc.prompt}
                  data-magnetic="true"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-3.5 sm:p-5 border-2 transition-all flex flex-col items-center justify-center skew-x-[-8deg] clip-card ${
                    isActive
                      ? 'bg-[#E60012] border-[#E60012] text-black shadow-[8px_8px_0px_#FFFFFF] z-40'
                      : isHovered
                      ? 'bg-black border-[#00FF88] text-white shadow-[10px_10px_0px_#00FF88] z-40'
                      : 'bg-black/95 border-white/30 text-gray-200 hover:border-[#E60012] shadow-[6px_6px_0px_#000000]'
                  }`}
                >
                  {/* Sector Code Badge */}
                  <span className="font-space text-[9px] sm:text-[10px] text-[#00E5FF] font-bold uppercase tracking-wider mb-1">
                    {loc.code}
                  </span>

                  <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isHovered ? 'text-[#00FF88]' : 'text-[#E60012]'}`} />
                    <span className="font-bebas text-xl sm:text-2xl font-black tracking-wider uppercase">
                      {loc.name}
                    </span>
                  </div>

                  <div className="font-space text-[9px] text-gray-400 mt-0.5 truncate max-w-[120px] sm:max-w-none">
                    {loc.sector}
                  </div>

                  {/* Pulsing Radar Ring around location */}
                  <div className="absolute -inset-2 rounded-none border border-[#00E5FF]/20 pointer-events-none group-hover:border-[#00FF88] transition-colors" />
                </motion.button>
              </motion.div>
            </div>
          );
        })}

        {/* Rapid Snap Warp Overlay when selecting location */}
        <AnimatePresence>
          {isTransitioning && activeLocation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 z-50 bg-[#E60012]/95 flex flex-col items-center justify-center text-black pointer-events-none"
            >
              <div className="font-bebas text-6xl font-black tracking-widest animate-pulse">
                WARPING TO {activeLocation.name}...
              </div>
              <div className="font-space text-sm font-bold tracking-widest">
                ESTABLISHING NEURAL LINK // 100%
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Sector Information HUD Bar (Bottom) */}
      <div className="relative z-20 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/90 border-2 border-white/15 p-4 skew-x-[-6deg] clip-card">
        <div className="md:col-span-8 flex items-center gap-4">
          <div className="p-3 bg-[#E60012] text-black skew-x-[6deg]">
            <Info className="w-6 h-6" />
          </div>
          <div className="skew-x-[6deg]">
            <div className="font-space text-[10px] text-[#00FF88] font-bold tracking-widest uppercase">
              {hoveredLocation ? hoveredLocation.status : 'TARGET SECTOR // HOVER LOCATION'}
            </div>
            <div className="font-bebas text-2xl text-white tracking-wider uppercase leading-none">
              {hoveredLocation ? hoveredLocation.subtitle : 'SELECT A LOCATION TO INITIATE SYSTEM DIRECTIVE'}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 text-right skew-x-[6deg]">
          <span className="font-space text-xs text-gray-400">
            SYSTEM STATUS: <span className="text-[#00FF88] font-bold">ONLINE // 60 FPS</span>
          </span>
        </div>
      </div>

    </div>
  );
});
