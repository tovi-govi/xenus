import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { XenusCharacter } from './XenusCharacter';
import { Flame, Sparkles, Terminal, Mail, UserCheck } from 'lucide-react';

interface MainTitleSceneProps {
  onNavigate: (scene: 'programSelect' | 'careers' | 'about' | 'contact') => void;
  onOpenEnroll: () => void;
}

export const MainTitleScene: React.FC<MainTitleSceneProps> = ({ onNavigate, onOpenEnroll }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { id: 'programSelect', label: 'PROGRAMS', desc: 'SELECT YOUR CLASS / CAREER TRACK', icon: Terminal },
    { id: 'careers', label: 'CAREERS', desc: 'VIEW TARGET INDUSTRY OUTCOMES', icon: UserCheck },
    { id: 'about', label: 'ABOUT XENUS', desc: 'EXPLORE THE XENUS ADVANTAGE', icon: Sparkles },
    { id: 'contact', label: 'CONTACT', desc: 'DIRECT INQUIRIES & ADMISSIONS', icon: Mail },
  ];

  // Keyboard navigation (Up / Down / Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        soundFx.playHover();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : menuItems.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        soundFx.playHover();
        setSelectedIndex((prev) => (prev < menuItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        soundFx.playSelect();
        const target = menuItems[selectedIndex].id as 'programSelect' | 'careers' | 'about' | 'contact';
        onNavigate(target);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, onNavigate]);

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 bg-[#08080A] text-white overflow-hidden select-none">
      
      {/* Halftone & Grid Background Textures */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-lines opacity-15 pointer-events-none" />

      {/* Red Graphic Diagonal Slashes Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E60012]/10 skew-x-[-15deg] pointer-events-none" />

      {/* Top Header: Game Logo & Mode Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E60012] text-black font-bebas text-2xl font-black flex items-center justify-center skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
            X
          </div>
          <div>
            <h1 className="font-bebas text-3xl sm:text-4xl font-black text-white tracking-widest leading-none">
              XENUS <span className="text-[#E60012]">CONSULTANCY</span>
            </h1>
            <p className="font-space text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">
              3 MONTHS TRAINING + 3 MONTHS INTERNSHIP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playSlash();
              onOpenEnroll();
            }}
            className="bg-[#E60012] text-black font-bebas text-xl px-5 py-1.5 uppercase font-black tracking-wider skew-x-[-10deg] shadow-[4px_4px_0px_#FFFFFF] hover:bg-white transition-colors"
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-1.5">
              <Flame className="w-4 h-4 fill-black" /> ADMISSIONS OPEN
            </span>
          </button>
        </div>
      </div>

      {/* Center Screen: Character Presence + Stylized Vertical Game Menu */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        
        {/* Left Column: Character Avatar */}
        <div className="lg:col-span-6 flex justify-center">
          <XenusCharacter trackId="01" size="hero" />
        </div>

        {/* Right Column: Game Title Screen Menu */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold px-3 py-1 skew-x-[-10deg] shadow-[4px_4px_0px_#FFFFFF]">
              SYSTEM READY // CHOOSE ENTRY OPTION
            </div>

            <h2 className="font-bebas text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none">
              START YOUR <br />
              <span className="text-[#E60012] drop-shadow-[6px_6px_0px_#FFFFFF]">JOURNEY</span>
            </h2>
          </div>

          {/* Vertical Menu Buttons */}
          <div className="space-y-3 max-w-md">
            {menuItems.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    soundFx.playSelect();
                    setSelectedIndex(idx);
                    onNavigate(item.id as 'programSelect' | 'careers' | 'about' | 'contact');
                  }}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setSelectedIndex(idx);
                  }}
                  animate={{
                    x: isSelected ? 12 : 0,
                    scale: isSelected ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.15 }}
                  data-cursor="SELECT"
                  className={`w-full text-left p-4 border-2 transition-all flex items-center justify-between skew-x-[-8deg] clip-card group ${
                    isSelected
                      ? 'bg-black border-[#E60012] text-white shadow-[8px_8px_0px_#E60012] z-20'
                      : 'bg-[#121218] border-white/15 text-gray-300 hover:border-white hover:text-white shadow-[4px_4px_0px_#000000]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-bebas text-3xl font-black skew-x-[8deg] ${
                        isSelected ? 'text-[#E60012]' : 'text-gray-600'
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div>
                      <div className="font-bebas text-3xl sm:text-4xl tracking-wider uppercase leading-none skew-x-[8deg] flex items-center gap-2">
                        <span>{item.label}</span>
                        {isSelected && <span className="text-[#00FF88] text-xl">◀</span>}
                      </div>
                      <div className="font-space text-[10px] text-gray-400 font-semibold skew-x-[8deg]">
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  <div className="skew-x-[8deg]">
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-[#E60012]' : 'text-gray-500'}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Bottom HUD Bar Instructions */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4 text-xs font-space text-gray-400">
        <div className="flex items-center gap-4">
          <span className="bg-black border border-white/20 px-2.5 py-1 text-[#00FF88] font-bold">
            KEYBOARD: ↑ ↓ ARROWS TO NAVIGATE
          </span>
          <span className="bg-black border border-white/20 px-2.5 py-1 text-yellow-300 font-bold">
            ENTER TO SELECT
          </span>
        </div>

        <div className="text-gray-500">
          XENUS CONSULTANCY SERVICES © 2026 // ALL RIGHTS RESERVED
        </div>
      </div>

    </div>
  );
};
