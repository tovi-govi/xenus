import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Flame } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface NavbarProps {
  onOpenEnroll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundOn, setSoundOn] = useState(true);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'PROGRAMS', href: '#programs', id: 'programs' },
    { name: 'AI PATH', href: '#ai', id: 'ai' },
    { name: 'CHEMISTRY', href: '#chemistry', id: 'chemistry' },
    { name: 'ABOUT', href: '#about', id: 'about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll tracking
      const sections = ['home', 'programs', 'ai', 'chemistry', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    soundFx.enabled = !soundOn;
    setSoundOn(!soundOn);
    if (!soundOn) soundFx.playSelect();
  };

  const handleNavClick = (href: string, id: string) => {
    soundFx.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-300 ${
          scrolled
            ? 'bg-[#08080A]/95 backdrop-blur-md py-3 border-b-2 border-[#E60012] shadow-[0_8px_20px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home', 'home')}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor="XENUS"
            className="group relative flex items-center gap-2"
          >
            <div className="bg-[#E60012] text-black font-bebas text-2xl md:text-3xl px-3 py-1 font-black uppercase tracking-wider skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF] transition-all group-hover:bg-white group-hover:text-[#E60012] group-hover:shadow-[4px_4px_0px_#E60012]">
              <span className="skew-x-[12deg] inline-block">XENUS</span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-bebas text-sm text-white tracking-widest leading-none">CONSULTANCY</span>
              <span className="font-space text-[9px] text-[#00FF88] tracking-widest font-bold">SERVICES</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/70 border border-white/10 p-1.5 rounded-none skew-x-[-8deg] shadow-[4px_4px_0px_rgba(230,0,18,0.3)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor={link.name}
                  className={`relative px-4 py-1.5 font-bebas text-lg tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'text-black bg-[#E60012] font-black shadow-[2px_2px_0px_#FFFFFF]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="skew-x-[8deg] inline-block flex items-center gap-1.5">
                    {isActive && <Flame className="w-3.5 h-3.5 fill-black" />}
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* SFX Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => soundFx.playHover()}
              title={soundOn ? 'Mute Audio' : 'Unmute Audio'}
              className={`p-2 border transition-all ${
                soundOn
                  ? 'bg-black text-[#00FF88] border-[#00FF88]/40 hover:bg-[#00FF88] hover:text-black'
                  : 'bg-black text-gray-500 border-gray-700'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Enroll CTA */}
            <button
              onClick={() => {
                soundFx.playSelect();
                onOpenEnroll();
              }}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor="ENROLL"
              className="group relative bg-[#E60012] text-black font-bebas text-xl tracking-wider px-5 py-1.5 font-black uppercase transition-all duration-150 hover:bg-white hover:text-[#E60012] skew-x-[-12deg] shadow-[4px_4px_0px_#FFFFFF] active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="skew-x-[12deg] inline-flex items-center gap-1.5">
                ENROLL
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 bg-black border border-white/20 text-[#00FF88]"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 bg-[#E60012] text-black font-bold uppercase"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Persona Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%', rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: '100%', rotate: -5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[490] bg-[#08080A] flex flex-col justify-between p-6 pt-28 overflow-hidden select-none"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

            {/* Red Diagonal Accent Ribbon */}
            <div className="absolute -right-20 top-1/3 w-[140%] h-32 bg-[#E60012] rotate-[-15deg] opacity-90 shadow-[0_0_30px_#E60012]" />

            <div className="relative z-10 space-y-4">
              <div className="font-space text-xs text-[#00FF88] tracking-widest uppercase mb-4 border-b border-gray-800 pb-2">
                // SYSTEM NAVIGATION MENU
              </div>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.id);
                    }}
                    className="group block font-bebas text-4xl text-white hover:text-[#E60012] transition-colors py-2"
                  >
                    <span className="inline-block bg-black px-4 py-1 skew-x-[-10deg] border-l-4 border-[#E60012] shadow-[4px_4px_0px_#FFFFFF] group-hover:bg-[#E60012] group-hover:text-black">
                      <span className="skew-x-[10deg] inline-block">{link.name}</span>
                    </span>
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnroll();
                  }}
                  className="w-full bg-[#E60012] text-black font-bebas text-3xl px-6 py-4 font-black uppercase text-center skew-x-[-8deg] shadow-[6px_6px_0px_#FFFFFF]"
                >
                  <span className="skew-x-[8deg] inline-flex items-center gap-2 justify-center">
                    ENROLL NOW ↗
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Footer info in mobile nav */}
            <div className="relative z-10 pt-8 border-t border-gray-800 text-xs font-space text-gray-400">
              <div>EMAIL: xenusconsultancy12@gmail.com</div>
              <div className="text-[#00FF88] font-bold mt-1">3 MONTHS TRAINING + 3 MONTHS INTERNSHIP</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
