import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Terminal, Cloud, Shield, CircuitBoard, TrendingUp, FlaskConical, Stethoscope, Sparkles } from 'lucide-react';

interface XenusCharacterProps {
  trackId?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const XenusCharacter: React.FC<XenusCharacterProps> = ({
  trackId = '01',
  size = 'hero',
  className = '',
}) => {
  // Theme color maps for track variations
  const trackThemes: Record<string, { primary: string; secondary: string; label: string; icon: React.ElementType }> = {
    '01': { primary: '#00E5FF', secondary: '#E60012', label: 'AI NEURAL ARCHITECT', icon: Brain },
    '02': { primary: '#00FF88', secondary: '#00E5FF', label: 'FULL STACK ENGINE', icon: Terminal },
    '03': { primary: '#00A3FF', secondary: '#00FF88', label: 'CLOUD DEVOPS CORE', icon: Cloud },
    '04': { primary: '#E60012', secondary: '#FF1A2A', label: 'CYBER SECURITY SHIELD', icon: Shield },
    '05': { primary: '#FFD700', secondary: '#00E5FF', label: 'VLSI SILICON LEAD', icon: CircuitBoard },
    '06': { primary: '#FF007F', secondary: '#00FF88', label: 'GROWTH ANALYTICS STRATEGIST', icon: TrendingUp },
    '07': { primary: '#00FF88', secondary: '#00E5FF', label: 'ORGANIC REACTION LEAD', icon: FlaskConical },
    '08': { primary: '#00E5FF', secondary: '#00FF88', label: 'DRUG SAFETY SPECIALIST', icon: Stethoscope },
  };

  const theme = trackThemes[trackId] || trackThemes['01'];
  const TrackIcon = theme.icon;

  const sizeDimensions = {
    sm: 'w-48 h-64',
    md: 'w-64 h-80',
    lg: 'w-80 h-96',
    hero: 'w-80 sm:w-[420px] h-[480px] sm:h-[560px]',
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${sizeDimensions[size]} ${className}`}>
      
      {/* Outer Rotating Energy Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-dashed opacity-40 pointer-events-none"
        style={{ borderColor: theme.primary }}
      />

      {/* Secondary Counter-Rotating Graphic Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4 rounded-full border border-[#E60012]/30 pointer-events-none"
      />

      {/* Ambient Radial Glow */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{ backgroundColor: theme.primary }}
      />

      {/* Floating Holographic Badge Top Left */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -left-4 z-20 bg-black/90 border border-white/20 px-3 py-1 font-space text-[10px] font-bold tracking-widest text-white skew-x-[-10deg] shadow-[4px_4px_0px_#000000] flex items-center gap-1.5"
      >
        <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primary }} />
        <span>XENUS MENTOR // ACTIVE</span>
      </motion.div>

      {/* Floating Track Role Badge Bottom Right */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 -right-4 z-20 bg-black text-black px-3.5 py-1.5 font-bebas text-sm font-black tracking-widest uppercase skew-x-[-10deg] shadow-[4px_4px_0px_#FFFFFF] flex items-center gap-2 border-2"
        style={{ backgroundColor: theme.primary, borderColor: '#FFFFFF' }}
      >
        <TrackIcon className="w-4 h-4 text-black" />
        <span className="skew-x-[10deg]">{theme.label}</span>
      </motion.div>

      {/* Character Vector Composition Container with Idle Breathing */}
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 400 500"
          className="w-full h-full drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cyber Halo / Crown */}
          <polygon points="200,40 240,65 200,90 160,65" fill="black" stroke={theme.primary} strokeWidth="3" />
          <circle cx="200" cy="65" r="6" fill={theme.primary} />

          {/* Futuristic Visor / Sunglasses */}
          <path d="M140 160 L260 160 L245 195 L155 195 Z" fill="#08080A" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="145" y1="175" x2="255" y2="175" stroke={theme.primary} strokeWidth="6" strokeLinecap="round" />

          {/* Head & Neck Structure */}
          <path d="M165 140 C165 110, 235 110, 235 140 L235 220 C235 240, 165 240, 165 220 Z" fill="#121218" stroke={theme.primary} strokeWidth="3" />
          
          {/* Futuristic Cyber Collar & Jacket Shoulders */}
          <path d="M100 320 L160 230 L240 230 L300 320 L350 480 L50 480 Z" fill="#0A0A0E" stroke="#FFFFFF" strokeWidth="4" />
          
          {/* Red Xenus Lapel Slashes */}
          <polygon points="160,230 185,340 150,480 110,480 145,310" fill="#E60012" />
          <polygon points="240,230 215,340 250,480 290,480 255,310" fill="#E60012" />

          {/* Inner Cyber Suit Core Reactor */}
          <polygon points="200,260 230,300 200,340 170,300" fill="black" stroke={theme.primary} strokeWidth="4" />
          <circle cx="200" cy="300" r="10" fill={theme.primary} />
          
          {/* Geometric Tech Suit Line Accents */}
          <line x1="110" y1="360" x2="160" y2="360" stroke={theme.primary} strokeWidth="3" />
          <line x1="290" y1="360" x2="240" y2="360" stroke={theme.primary} strokeWidth="3" />
          <line x1="120" y1="410" x2="170" y2="410" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="280" y1="410" x2="230" y2="410" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />

          {/* Floating Micro Tech Glyphs */}
          <rect x="70" y="200" width="40" height="40" fill="black" stroke={theme.primary} strokeWidth="2" transform="rotate(15 70 200)" />
          <circle cx="90" cy="220" r="4" fill="#E60012" />

          <rect x="300" y="180" width="35" height="35" fill="black" stroke="#FFFFFF" strokeWidth="2" transform="rotate(-12 300 180)" />
          <circle cx="317" cy="197" r="4" fill={theme.primary} />
        </svg>
      </motion.div>

      {/* Bottom Platform Shadow Base */}
      <div className="absolute -bottom-6 w-3/4 h-8 bg-black/80 rounded-[100%] blur-md border-t border-white/20 pointer-events-none" />
    </div>
  );
};
