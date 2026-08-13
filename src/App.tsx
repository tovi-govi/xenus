import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { AmbientEnvironment } from './components/AmbientEnvironment';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { MainTitleScene } from './components/MainTitleScene';
import { ProgramSelectScene } from './components/ProgramSelectScene';
import { Footer } from './components/Footer';
import { soundFx } from './utils/sound';

// Lazy-loaded secondary components & modals for bundle optimization
const ProgramWorldScene = lazy(() =>
  import('./components/ProgramWorldScene').then((m) => ({ default: m.ProgramWorldScene }))
);
const WhyXenusSection = lazy(() =>
  import('./components/WhyXenusSection').then((m) => ({ default: m.WhyXenusSection }))
);
const CareerPathsSection = lazy(() =>
  import('./components/CareerPathsSection').then((m) => ({ default: m.CareerPathsSection }))
);
const FinalCtaSection = lazy(() =>
  import('./components/FinalCtaSection').then((m) => ({ default: m.FinalCtaSection }))
);
const EnrollModal = lazy(() =>
  import('./components/EnrollModal').then((m) => ({ default: m.EnrollModal }))
);
const ClassifiedModal = lazy(() =>
  import('./components/ClassifiedModal').then((m) => ({ default: m.ClassifiedModal }))
);

export type SceneState = 'main' | 'programSelect' | 'programDetail' | 'careers' | 'about' | 'contact';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [currentScene, setCurrentScene] = useState<SceneState>('main');
  const [selectedProgramId, setSelectedProgramId] = useState<string>('01');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  // New Interactive World & Secret Easter Egg State
  const [isWorldMapMode, setIsWorldMapMode] = useState(true);
  const [classifiedModalOpen, setClassifiedModalOpen] = useState(false);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<string[]>([]);
  const secretKeySequence = useRef<string[]>([]);

  // Keyboard Interaction: secret sequence X -> E -> N -> U -> S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      const key = e.key.toUpperCase();
      const targetSequence = ['X', 'E', 'N', 'U', 'S'];

      secretKeySequence.current.push(key);
      if (secretKeySequence.current.length > 5) {
        secretKeySequence.current.shift();
      }

      if (secretKeySequence.current.join('') === targetSequence.join('')) {
        soundFx.playSecretUnlock();
        setClassifiedModalOpen(true);
        secretKeySequence.current = [];
        setDiscoveredSecrets((prev) => (prev.includes('keyboard_cypher') ? prev : [...prev, 'keyboard_cypher']));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    syncSceneFromHash();
    window.addEventListener('hashchange', syncSceneFromHash);
    return () => window.removeEventListener('hashchange', syncSceneFromHash);
  }, []);

  const handleOpenEnroll = useCallback((courseName?: string) => {
    setSelectedCourseForEnroll(courseName);
    setEnrollModalOpen(true);
  }, []);

  const handleNavigateScene = useCallback((scene: SceneState) => {
    setCurrentScene(scene);
    window.scrollTo(0, 0);

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
  }, []);

  const handleConfirmProgramSelect = useCallback((programId: string) => {
    setSelectedProgramId(programId);
    setCurrentScene('programDetail');
    window.scrollTo(0, 0);
    window.history.replaceState(null, '', `#programs-${programId}`);
  }, []);

  const handleDiscoverSecret = useCallback((secretId: string) => {
    setDiscoveredSecrets((prev) => (prev.includes(secretId) ? prev : [...prev, secretId]));
  }, []);

  const handleLogoClickSecret = useCallback(() => {
    soundFx.playSecretUnlock();
    setClassifiedModalOpen(true);
    handleDiscoverSecret('logo_click');
  }, [handleDiscoverSecret]);

  const handleToggleWorldMap = useCallback(() => {
    setIsWorldMapMode((prev) => !prev);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F2EC] selection:bg-[#E60012] selection:text-black overflow-x-hidden select-none">
      {/* Dynamic Pointer Target Cursor */}
      <CustomCursor />

      {/* Living Ambient Background Particle Engine */}
      <AmbientEnvironment />

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
          onLogoClickSecret={handleLogoClickSecret}
          isWorldMapMode={isWorldMapMode}
          onToggleWorldMap={handleToggleWorldMap}
        />

        {/* Scene Container */}
        <main className="flex-grow z-10 relative">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex flex-col items-center justify-center font-bebas text-2xl text-[#00E5FF] tracking-widest animate-pulse">
                <span>SYSTEM LOADING // STANDBY...</span>
              </div>
            }
          >
            {currentScene === 'main' && (
              <MainTitleScene
                onNavigate={handleNavigateScene}
                onOpenEnroll={() => handleOpenEnroll()}
                isWorldMapMode={isWorldMapMode}
                onDiscoverSecret={handleDiscoverSecret}
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
          </Suspense>
        </main>

        {/* Minimal Black Footer */}
        <Footer
          onNavigate={(scene) => handleNavigateScene(scene)}
          onOpenEnroll={() => handleOpenEnroll()}
        />
      </div>

      {/* Admissions Application Modal */}
      <Suspense fallback={null}>
        {enrollModalOpen && (
          <EnrollModal
            isOpen={enrollModalOpen}
            onClose={() => setEnrollModalOpen(false)}
            initialCourse={selectedCourseForEnroll}
          />
        )}
      </Suspense>

      {/* Secret Clearance Level 5 Classified Modal */}
      <Suspense fallback={null}>
        {classifiedModalOpen && (
          <ClassifiedModal
            isOpen={classifiedModalOpen}
            onClose={() => setClassifiedModalOpen(false)}
            discoveredSecretsCount={discoveredSecrets.length}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
