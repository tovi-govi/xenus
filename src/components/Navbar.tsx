import React, { useState } from 'react';
import { Volume2, VolumeX, Flame, ArrowLeft } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface NavbarProps {
  currentScene: 'main' | 'programSelect' | 'programDetail' | 'careers' | 'about' | 'contact';
  onNavigate: (scene: 'main' | 'programSelect' | 'careers' | 'about' | 'contact') => void;
  onOpenEnroll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScene, onNavigate, onOpenEnroll }) => {
  const [soundOn, setSoundOn] = useState(true);

  const toggleSound = () => {
    const isMuted = soundFx.toggleMute();
    setSoundOn(!isMuted);
  };

  const sceneLabels: Record<string, string> = {
    main: 'MAIN TITLE SCREEN',
    programSelect: 'CHARACTER ROSTER SELECT',
    programDetail: 'ACTIVE PROGRAM WORLD',
    careers: 'CAREER CLASS OUTCOMES',
    about: 'WHY XENUS ADVANTAGE',
    contact: 'DIRECT CONTACT & ADMISSIONS',
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 border-b-2 border-[#E60012] backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Brand / HUD Indicator */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('main');
            }}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-8 h-8 bg-[#E60012] text-black font-bebas text-xl font-black flex items-center justify-center skew-x-[-10deg]">
              X
            </div>
            <span className="font-bebas text-2xl font-black text-white tracking-widest group-hover:text-[#E60012] transition-colors">
              XENUS
            </span>
          </button>

          {/* Scene HUD Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 bg-[#12121A] text-[#00FF88] border border-[#00FF88]/40 px-3 py-1 font-space text-[11px] font-bold tracking-widest uppercase skew-x-[-8deg]">
            <span>HUD // {sceneLabels[currentScene] || 'LIVE'}</span>
          </div>
        </div>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3">
          {/* Back Button if not on main title screen */}
          {currentScene !== 'main' && (
            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate(currentScene === 'programDetail' ? 'programSelect' : 'main');
              }}
              className="bg-black text-white border border-white/40 hover:border-[#E60012] hover:text-[#E60012] px-3 py-1 font-bebas text-lg uppercase tracking-wider skew-x-[-8deg] flex items-center gap-1 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="skew-x-[8deg]">ESC BACK</span>
            </button>
          )}

          {/* Mute Audio Toggle */}
          <button
            onClick={toggleSound}
            data-cursor="AUDIO"
            className="p-2 bg-black text-white border border-white/20 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all"
            title={soundOn ? 'Mute Sound' : 'Unmute Sound'}
          >
            {soundOn ? <Volume2 className="w-5 h-5 text-[#00FF88]" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
          </button>

          {/* Enroll CTA Button */}
          <button
            onClick={() => {
              soundFx.playSlash();
              onOpenEnroll();
            }}
            data-cursor="ENROLL"
            className="bg-[#E60012] text-black font-bebas text-xl px-4 py-1.5 font-black uppercase tracking-wider skew-x-[-10deg] shadow-[3px_3px_0px_#FFFFFF] hover:bg-white transition-all flex items-center gap-1.5"
          >
            <Flame className="w-4 h-4 fill-black" />
            <span className="skew-x-[10deg]">ENROLL</span>
          </button>
        </div>

      </div>
    </header>
  );
};
