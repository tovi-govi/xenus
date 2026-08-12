import React, { useState } from 'react';
import { Volume2, VolumeX, Flame, ArrowLeft, Menu, X, Terminal, UserCheck, Sparkles, Mail } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

interface NavbarProps {
  currentScene: 'main' | 'programSelect' | 'programDetail' | 'careers' | 'about' | 'contact';
  onNavigate: (scene: 'main' | 'programSelect' | 'careers' | 'about' | 'contact') => void;
  onOpenEnroll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScene, onNavigate, onOpenEnroll }) => {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useBodyScrollLock(mobileMenuOpen);

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

  const menuItems = [
    { id: 'main', label: 'TITLE SCREEN', icon: Flame },
    { id: 'programSelect', label: 'PROGRAMS', icon: Terminal },
    { id: 'careers', label: 'CAREERS', icon: UserCheck },
    { id: 'about', label: 'ABOUT XENUS', icon: Sparkles },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 border-b-2 border-[#E60012] backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3 select-none pt-safe">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Brand / HUD Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('main');
              }}
              className="flex items-center gap-2 group text-left min-h-[44px]"
            >
              <div className="w-9 h-9 bg-[#E60012] text-black font-bebas text-2xl font-black flex items-center justify-center skew-x-[-10deg]">
                X
              </div>
              <span className="font-bebas text-2xl sm:text-3xl font-black text-white tracking-widest group-hover:text-[#E60012] transition-colors">
                XENUS
              </span>
            </button>

            {/* Scene HUD Badge */}
            <div className="hidden md:inline-flex items-center gap-2 bg-[#12121A] text-[#00FF88] border border-[#00FF88]/40 px-3 py-1 font-space text-[11px] font-bold tracking-widest uppercase skew-x-[-8deg]">
              <span>HUD // {sceneLabels[currentScene] || 'LIVE'}</span>
            </div>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            {/* Back Button if not on main title screen */}
            {currentScene !== 'main' && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  onNavigate(currentScene === 'programDetail' ? 'programSelect' : 'main');
                }}
                className="bg-black text-white border border-white/40 hover:border-[#E60012] hover:text-[#E60012] px-3 py-2 min-h-[44px] font-bebas text-base sm:text-lg uppercase tracking-wider skew-x-[-8deg] flex items-center gap-1 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="skew-x-[8deg]">BACK</span>
              </button>
            )}

            {/* Mute Audio Toggle */}
            <button
              onClick={toggleSound}
              data-cursor="AUDIO"
              className="p-2.5 min-w-[44px] min-h-[44px] bg-black text-white border border-white/20 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all flex items-center justify-center"
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
              className="bg-[#E60012] text-black font-bebas text-lg sm:text-xl px-3.5 sm:px-4 py-2 min-h-[44px] font-black uppercase tracking-wider skew-x-[-10deg] shadow-[3px_3px_0px_#FFFFFF] hover:bg-white transition-all flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 fill-black" />
              <span className="skew-x-[10deg]">ENROLL</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] bg-[#12121A] text-white border border-white/30 hover:border-[#E60012] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E60012]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Game Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[700] bg-black/95 backdrop-blur-lg flex flex-col justify-between p-6 pt-safe pb-safe select-none border-4 border-[#E60012]">
          <div className="flex items-center justify-between border-b border-white/20 pb-4">
            <div className="font-bebas text-3xl text-white tracking-widest">
              XENUS <span className="text-[#E60012]">MENU</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-black text-[#E60012] border-2 border-[#E60012] font-bebas text-xl font-bold uppercase min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              ✕ CLOSE
            </button>
          </div>

          {/* Menu Links */}
          <div className="space-y-4 my-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isSelected = currentScene === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    soundFx.playSelect();
                    setMobileMenuOpen(false);
                    onNavigate(item.id as 'main' | 'programSelect' | 'careers' | 'about' | 'contact');
                  }}
                  className={`w-full text-left p-4 min-h-[56px] border-2 transition-all flex items-center justify-between skew-x-[-8deg] clip-card ${
                    isSelected
                      ? 'bg-[#E60012] border-[#E60012] text-black shadow-[6px_6px_0px_#FFFFFF] font-bold'
                      : 'bg-[#12121A] border-white/20 text-white hover:border-[#E60012]'
                  }`}
                >
                  <div className="flex items-center gap-3 skew-x-[8deg]">
                    <Icon className="w-6 h-6" />
                    <span className="font-bebas text-3xl tracking-wider uppercase">{item.label}</span>
                  </div>
                  <span className="font-bebas text-2xl skew-x-[8deg]">→</span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/20 pt-4 text-center font-space text-xs text-gray-400">
            OFFICIAL ADMISSIONS: <a href="mailto:xenusconsultancy12@gmail.com" className="text-[#00FF88] underline font-bold">xenusconsultancy12@gmail.com</a>
          </div>
        </div>
      )}
    </>
  );
};
