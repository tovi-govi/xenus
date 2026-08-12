import { useState } from 'react';
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

  const handleOpenEnroll = (courseName?: string) => {
    setSelectedCourseForEnroll(courseName);
    setEnrollModalOpen(true);
  };

  const handleNavigateScene = (scene: SceneState) => {
    setCurrentScene(scene);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmProgramSelect = (programId: string) => {
    setSelectedProgramId(programId);
    setCurrentScene('programDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                  className="bg-black text-white border-2 border-white font-bebas text-2xl px-8 py-3 uppercase font-black skew-x-[-10deg] shadow-[4px_4px_0px_#E60012]"
                >
                  <span className="skew-x-[10deg]">← RETURN TO MAIN MENU</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Minimal Black Footer */}
        <Footer onOpenEnroll={() => handleOpenEnroll()} />
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
