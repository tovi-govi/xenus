import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/sound';
import { X, CheckCircle, Flame, Send } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, initialCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: initialCourse || 'AI Training (3M Train + 3M Intern)',
    mode: 'Offline & Online Hybrid',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, program: initialCourse }));
    }
  }, [initialCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSelect();

    // Trigger victory confetti!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E60012', '#00FF88', '#00E5FF', '#FFFFFF'],
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          {/* Persona Halftone Background */}
          <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, rotate: -2, y: 20 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.9, rotate: 2, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-black border-4 border-[#E60012] p-6 sm:p-8 max-w-xl w-full shadow-[16px_16px_0px_#FFFFFF] text-left overflow-hidden clip-card select-none my-8"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="absolute top-4 right-4 bg-[#E60012] text-black p-2 hover:bg-white transition-colors skew-x-[-12deg]"
            >
              <X className="w-5 h-5 font-bold" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#E60012] text-black font-space text-xs font-bold px-3 py-1 skew-x-[-12deg] mb-2">
                    <Flame className="w-4 h-4 fill-black" /> ADMISSIONS APPLICATION // 2026
                  </div>

                  <h3 className="font-bebas text-4xl sm:text-5xl font-black text-white uppercase tracking-wider leading-none">
                    JOIN THE <span className="text-[#E60012]">XENUS ACADEMY</span>
                  </h3>
                  <p className="font-space text-xs text-gray-300 mt-1">
                    Format: <strong className="text-[#00FF88]">3 Months Training + 3 Months Internship</strong>. Submit details to receive program outline & fee discount details.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="font-space text-xs text-gray-300 font-bold uppercase tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#12121A] border-2 border-white/20 px-4 py-2.5 text-white font-sans text-sm focus:border-[#E60012] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="font-space text-xs text-gray-300 font-bold uppercase tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#12121A] border-2 border-white/20 px-4 py-2.5 text-white font-sans text-sm focus:border-[#E60012] focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="font-space text-xs text-gray-300 font-bold uppercase tracking-wider">
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#12121A] border-2 border-white/20 px-4 py-2.5 text-white font-sans text-sm focus:border-[#E60012] focus:outline-none transition-colors"
                  />
                </div>

                {/* Program Selection */}
                <div className="space-y-1">
                  <label className="font-space text-xs text-gray-300 font-bold uppercase tracking-wider">
                    TARGET PROGRAM *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-[#12121A] border-2 border-white/20 px-4 py-2.5 text-white font-sans text-sm focus:border-[#E60012] focus:outline-none transition-colors"
                  >
                    <option value="AI Training (3M Train + 3M Intern)">AI Training (3M Training + 3M Internship) — ₹25,000</option>
                    <option value="FULL STACK">Full Stack Web Development</option>
                    <option value="CLOUD & DEVOPS">Cloud & DevOps Engineering</option>
                    <option value="CYBER SECURITY">Cyber Security & Ethical Hacking</option>
                    <option value="FOUNDATION">Foundation Programming (Python / Java)</option>
                    <option value="ADVANCED TECH">Advanced Tech (ServiceNow / Playwright)</option>
                    <option value="VLSI DESIGN">VLSI Chip Design</option>
                    <option value="DIGITAL MARKETING">Digital Marketing & Growth</option>
                    <option value="ORGANIC CHEMISTRY">Organic Chemistry (30–45 Days)</option>
                  </select>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full bg-[#E60012] text-black font-bebas text-3xl py-3.5 px-6 uppercase font-black tracking-wider hover:bg-white transition-colors skew-x-[-10deg] shadow-[6px_6px_0px_#FFFFFF] mt-4"
                >
                  <span className="skew-x-[10deg] inline-flex items-center gap-2 justify-center">
                    CONFIRM & SUBMIT <Send className="w-5 h-5" />
                  </span>
                </button>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 bg-[#00FF88] text-black rounded-none mx-auto flex items-center justify-center border-4 border-white shadow-[6px_6px_0px_#E60012] skew-x-[-10deg]">
                  <CheckCircle className="w-12 h-12 stroke-[3]" />
                </div>

                <div className="space-y-2">
                  <div className="inline-block bg-[#00FF88] text-black font-space text-xs font-bold px-3 py-1 skew-x-[-12deg]">
                    MISSION ACCEPTED // ENROLLMENT CONFIRMED
                  </div>

                  <h3 className="font-bebas text-5xl font-black text-white uppercase tracking-wider">
                    WELCOME TO XENUS!
                  </h3>

                  <p className="font-sans text-sm text-gray-300 max-w-md mx-auto">
                    Thank you <strong className="text-white">{formData.name}</strong>. Our admissions counselor will reach out to <strong className="text-[#00FF88]">{formData.email}</strong> and <strong className="text-[#00FF88]">{formData.phone}</strong> shortly with batch details.
                  </p>
                </div>

                <div className="bg-[#12121E] border border-white/20 p-4 text-xs font-space text-gray-400 max-w-md mx-auto">
                  Direct Inquiries: <a href="mailto:xenusconsultancy12@gmail.com" className="text-[#00E5FF] underline font-bold">xenusconsultancy12@gmail.com</a>
                </div>

                <button
                  onClick={handleReset}
                  className="bg-[#E60012] text-black font-bebas text-2xl py-3 px-8 uppercase font-bold skew-x-[-10deg] shadow-[4px_4px_0px_#FFFFFF]"
                >
                  DONE [RETURN TO SITE]
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
