import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChooseYourPath } from './components/ChooseYourPath';
import { FeaturedAiProgram } from './components/FeaturedAiProgram';
import { AiSkillTree } from './components/AiSkillTree';
import { AiLabSection } from './components/AiLabSection';
import { MissionsSection } from './components/MissionsSection';
import { CareerPathsSection } from './components/CareerPathsSection';
import { WhyXenusSection } from './components/WhyXenusSection';
import { TechArsenalSection } from './components/TechArsenalSection';
import { OrganicChemistrySection } from './components/OrganicChemistrySection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { EnrollModal } from './components/EnrollModal';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  const handleOpenEnroll = (courseName?: string) => {
    setSelectedCourseForEnroll(courseName);
    setEnrollModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F2EC] selection:bg-[#E60012] selection:text-black">
      {/* Custom Desktop Persona Target Pointer Cursor */}
      <CustomCursor />

      {/* 1-2s Skippable Persona Opening Screen */}
      {!introFinished && (
        <IntroScreen onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main Experience Layout */}
      <div className="flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onOpenEnroll={() => handleOpenEnroll()} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <HeroSection onOpenEnroll={() => handleOpenEnroll()} />

          {/* Section 1: Choose Your Path (Interactive Course Selection) */}
          <ChooseYourPath onSelectCourse={(course) => handleOpenEnroll(course)} />

          {/* Section 2: Featured Program (AI Training Mission Briefing) */}
          <FeaturedAiProgram onOpenEnroll={() => handleOpenEnroll('AI Training (3M Train + 3M Intern)')} />

          {/* Section 3: The AI Path (Curriculum Skill Tree) */}
          <AiSkillTree />

          {/* Section 4: Enter The AI Lab (Node Matrix) */}
          <AiLabSection />

          {/* Section 5: Real Projects (Top-Secret Missions) */}
          <MissionsSection />

          {/* Section 6: Your Next Class (Career Paths & Roles) */}
          <CareerPathsSection />

          {/* Section 7: Why Enter Xenus? (10 Collectible Cards) */}
          <WhyXenusSection />

          {/* Section 8: The Arsenal (Tech Stack Wall) */}
          <TechArsenalSection />

          {/* Section 9: Organic Chemistry (Specialized Chapter) */}
          <OrganicChemistrySection onOpenEnroll={(course) => handleOpenEnroll(course)} />

          {/* Section 10: Final CTA (Stage Clear / Game Climax) */}
          <FinalCtaSection onOpenEnroll={() => handleOpenEnroll()} />
        </main>

        {/* Minimal Black Persona Footer */}
        <Footer onOpenEnroll={() => handleOpenEnroll()} />
      </div>

      {/* Enrollment Application Modal */}
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        initialCourse={selectedCourseForEnroll}
      />
    </div>
  );
}

export default App;
