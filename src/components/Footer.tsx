import React from 'react';
import { soundFx } from '../utils/sound';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (scene: 'main' | 'programSelect' | 'careers' | 'about' | 'contact') => void;
  onOpenEnroll: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnroll }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    if (onNavigate) {
      onNavigate('main');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'HOME / TITLE SCREEN', id: 'main' as const },
    { label: 'PROGRAMS ROSTER', id: 'programSelect' as const },
    { label: 'CAREER OUTCOMES', id: 'careers' as const },
    { label: 'ABOUT XENUS', id: 'about' as const },
    { label: 'CONTACT & ADMISSIONS', id: 'contact' as const },
  ];

  return (
    <footer className="bg-[#050507] text-white border-t-2 border-[#E60012] pt-14 pb-10 px-4 sm:px-6 lg:px-8 select-none text-left">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-block bg-[#E60012] text-black font-bebas text-4xl px-4 py-1 font-black uppercase tracking-wider skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF]">
              XENUS
            </div>
            <div>
              <div className="font-bebas text-2xl tracking-widest text-white uppercase">
                CONSULTANCY SERVICES
              </div>
              <div className="font-bebas text-xl text-[#00FF88] tracking-wider uppercase mt-0.5">
                LEARN TODAY | LEAD TOMORROW
              </div>
            </div>
            <p className="font-sans text-xs text-gray-400 max-w-md leading-relaxed">
              Reinventing tech education with high-intensity hands-on programs. <span className="text-white font-bold">3 Months Training + 3 Months Internship</span> on live industrial software projects.
            </p>
          </div>

          {/* Quick Navigation Column (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-space text-xs text-[#00E5FF] tracking-widest uppercase font-bold border-b border-white/10 pb-2">
              // QUICK NAVIGATION
            </div>
            <ul className="space-y-2 font-bebas text-lg text-gray-300 tracking-wider">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (onNavigate) {
                        onNavigate(item.id);
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E60012] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-space text-xs text-[#E60012] tracking-widest uppercase font-bold border-b border-white/10 pb-2">
              // DIRECT CONTACT
            </div>
            
            <a
              href="mailto:xenusconsultancy12@gmail.com"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 bg-[#121218] border border-white/20 p-3 hover:border-[#E60012] transition-colors group w-full"
            >
              <Mail className="w-4 h-4 text-[#E60012] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="font-space text-xs text-gray-200 truncate">xenusconsultancy12@gmail.com</span>
            </a>

            <button
              onClick={() => {
                soundFx.playSelect();
                onOpenEnroll();
              }}
              className="w-full bg-[#E60012] text-black font-bebas text-xl py-2.5 px-4 uppercase font-bold skew-x-[-8deg] hover:bg-white transition-colors shadow-[4px_4px_0px_#FFFFFF]"
            >
              ENROLL NOW ↗
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-xs text-gray-500">
          <div>
            © 2026 Xenus Consultancy Services. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors bg-black border border-white/20 px-3.5 py-1.5 min-h-[40px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E60012]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
