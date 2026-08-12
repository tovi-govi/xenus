import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { MainTitleScene } from './components/MainTitleScene';
import { ProgramSelectScene } from './components/ProgramSelectScene';
import { ProgramWorldScene } from './components/ProgramWorldScene';
import { WhyXenusSection } from './components/WhyXenusSection';
import { CareerPathsSection } from './components/CareerPathsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { EnrollModal } from './components/EnrollModal';

export type SceneState = 'main' | 'programSelect' | 'programDetail' | 'careers' | 'about' | 'contact';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [currentScene, setCurrentScene] = useState<SceneState>('main');
  const [selectedProgramId, setSelectedProgramId] = useState<string>('01');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  // Initialize scene state from URL hash on initial load & listen for hash changes
  useEffect(() => {
    const syncSceneFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#programs') {
        setCurrentScene('programSelect');
      } else if (hash.startsWith('#programs-')) {
        const progId = hash.replace('#programs-', '');
        setSelectedProgramId(progId);
        setCurrentScene('programDetail');
      } else if (hash === '#careers') {
        setCurrentScene('careers');
      } else if (hash === '#about') {
        setCurrentScene('about');
      } else if (hash === '#contact') {
        setCurrentScene('contact');
      } else {
        setCurrentScene('main');
        // Clean URL on main title screen (remove leftover #programs hashes)
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    syncSceneFromHash();
    window.addEventListener('hashchange', syncSceneFromHash);
    return () => window.removeEventListener('hashchange', syncSceneFromHash);
  }, []);

  const handleOpenEnroll = (courseName?: string) => {
    setSelectedCourseForEnroll(courseName);
    setEnrollModalOpen(true);
  };

  const handleNavigateScene = (scene: SceneState) => {
    setCurrentScene(scene);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash & clean title screen URL
    if (scene === 'main') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else if (scene === 'programSelect') {
      window.history.replaceState(null, '', '#programs');
    } else if (scene === 'careers') {
      window.history.replaceState(null, '', '#careers');
    } else if (scene === 'about') {
      window.history.replaceState(null, '', '#about');
    } else if (scene === 'contact') {
      window.history.replaceState(null, '', '#contact');
    }
  };

  const handleConfirmProgramSelect = (programId: string) => {
    setSelectedProgramId(programId);
    setCurrentScene('programDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', `#programs-${programId}`);
  };

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F2EC] selection:bg-[#E60012] selection:text-black overflow-x-hidden select-none">
      {/* Custom Pointer Target Cursor */}
      <CustomCursor />

      {/* 1-2s Opening Screen */}
      {!introFinished && (
        <IntroScreen onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main Game Experience Layout */}
      <div className="flex flex-col min-h-screen">
        
        {/* Top Game HUD Header */}
        <Navbar
          currentScene={currentScene}
          onNavigate={handleNavigateScene}
          onOpenEnroll={() => handleOpenEnroll()}
        />

        {/* Scene Container */}
        <main className="flex-grow">
          {currentScene === 'main' && (
            <MainTitleScene
              onNavigate={handleNavigateScene}
              onOpenEnroll={() => handleOpenEnroll()}
            />
          )}

          {currentScene === 'programSelect' && (
            <ProgramSelectScene
              onSelectProgram={handleConfirmProgramSelect}
              onBack={() => handleNavigateScene('main')}
            />
          )}

          {currentScene === 'programDetail' && (
            <ProgramWorldScene
              programId={selectedProgramId}
              onBack={() => handleNavigateScene('programSelect')}
              onOpenEnroll={(course) => handleOpenEnroll(course)}
            />
          )}

          {currentScene === 'about' && (
            <div className="space-y-8 py-6">
              <WhyXenusSection />
              <div className="text-center">
                <button
                  onClick={() => handleNavigateScene('main')}
                  className="bg-[#E60012] text-black font-bebas text-2xl px-8 py-3 uppercase font-black skew-x-[-10deg] shadow-[4px_4px_0px_#FFFFFF]"
                >
                  <span className="skew-x-[10deg]">← RETURN TO MAIN MENU</span>
                </button>
              </div>
            </div>
          )}

          {currentScene === 'careers' && (
            <div className="space-y-8 py-6">
              <CareerPathsSection />
              <div className="text-center">
                <button
                  onClick={() => handleNavigateScene('main')}
                  className="bg-[#00FF88] text-black font-bebas text-2xl px-8 py-3 uppercase font-black skew-x-[-10deg] shadow-[4px_4px_0px_#000000]"
                >
                  <span className="skew-x-[10deg]">← RETURN TO MAIN MENU</span>
                </button>
              </div>
            </div>
          )}

          {currentScene === 'contact' && (
            <div className="space-y-8 py-6">
              <FinalCtaSection onOpenEnroll={() => handleOpenEnroll()} />
              <div className="text-center pb-8">
                <button
                  onClick={() => handleNavigateScene('main')}
                  className="bg-black text-[#F4F2EC] border-2 border-[#F4F2EC] font-bebas text-2xl px-8 py-3 uppercase font-black skew-x-[-10deg] shadow-[4px_4px_0px_#E60012]"
                >
                  <span className="skew-x-[10deg]">← RETURN TO MAIN MENU</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Minimal Black Footer */}
        <Footer
          onNavigate={(scene) => handleNavigateScene(scene)}
          onOpenEnroll={() => handleOpenEnroll()}
        />
      </div>

      {/* Admissions Application Modal */}
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        initialCourse={selectedCourseForEnroll}
      />
    </div>
  );
}

export default App;
