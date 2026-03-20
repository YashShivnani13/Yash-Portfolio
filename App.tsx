
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WarpBackground from './components/WarpBackground';
import HeroCard from './components/HeroCard';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import NameSection from './components/NameSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import IntroOverlay from './components/IntroOverlay';
import CustomCursor from './components/CustomCursor';
import { 
  Planet, 
  Saturn, 
  CodeBlock, 
  UFO, 
  Satellite, 
  ShootingStar, 
  GridFloor, 
  TechCrosshair,
  MiniAstronaut
} from './components/RetroElements';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative bg-black w-full">
      <CustomCursor />
      
      {/* --- Intro Sequence --- */}
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* 
        SECTION 1: HERO 
        Sticky positioning creates the effect that it stays in place 
        while the next section slides over it.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Background Layer */}
          <WarpBackground />
          <GridFloor />
          
          {/* --- SPACE DEBRIS --- */}
          {/* Show fewer shooting stars on mobile */}
          <div className="hidden md:block">
             <ShootingStar delay={0.5} top="5%" left="15%" angle={35} />
             <ShootingStar delay={2.5} top="15%" left="75%" angle={50} />
             <ShootingStar delay={5} top="40%" left="5%" angle={20} />
          </div>
          <ShootingStar delay={7.2} top="60%" left="80%" angle={45} />
          <ShootingStar delay={4} top="2%" left="40%" angle={60} />
          
          
          {/* Floating Space Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Hide large top elements on mobile that interfere with card */}
            <Planet className="hidden md:block absolute top-[5%] right-[25%] w-24 h-24 md:w-32 md:h-32 opacity-80" delay={0} />
            <Planet className="absolute top-[70%] left-[30%] w-12 h-12 opacity-50" delay={2} />
            <Planet className="absolute top-[15%] left-[5%] w-8 h-8 opacity-30 blur-[1px]" delay={4} />
            
            <Saturn className="absolute bottom-[15%] right-[5%] md:bottom-[20%] md:right-[10%] w-24 h-12 md:w-60 md:h-32 opacity-70" />

            {/* Hide large UFO on mobile */}
            <UFO className="hidden md:block absolute top-[15%] left-[10%] w-24 h-16 md:w-32 md:h-20 opacity-90 z-0" delay={1} />
            
            <UFO className="absolute top-[30%] right-[5%] w-16 h-10 opacity-60 z-0 blur-[0.5px]" delay={3} />
            <UFO className="absolute bottom-[10%] left-[15%] w-20 h-12 opacity-70 z-0" delay={5} />

            <Satellite className="absolute top-[40%] right-[5%] w-16 h-16 opacity-60" duration={30} />
            <Satellite className="hidden md:block absolute top-[5%] left-[50%] w-10 h-10 opacity-40 blur-[1px]" duration={45} />
            <Satellite className="absolute bottom-[5%] left-[60%] w-12 h-12 opacity-50" duration={25} />

            {/* Floating Astronauts in empty space - Hidden on mobile to prevent overlap with HeroCard */}
            <MiniAstronaut className="hidden md:block absolute top-[35%] right-[45%] w-12 h-12 z-20" delay={0} scale={1.5} />
            <MiniAstronaut className="hidden md:block absolute bottom-[35%] right-[8%] w-10 h-10 z-20 opacity-90" delay={2.5} scale={1.2} />

            {/* Hide CodeBlocks on mobile to reduce text clutter behind main card */}
            <CodeBlock className="hidden md:block absolute top-24 left-10 md:left-[40%]" delay={0.5} />
            <CodeBlock className="hidden md:block absolute bottom-32 right-[20%]" delay={2.5} />
            <CodeBlock className="absolute top-[80%] right-[15%] md:top-[40%]" delay={3.5} />

            <TechCrosshair className="absolute top-8 left-8 hidden md:block" />
            <TechCrosshair className="absolute bottom-8 right-8" />
            <TechCrosshair className="absolute bottom-20 left-[20%] hidden md:block" />
          </div>

          {/* Foreground Content */}
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center md:justify-start h-full relative z-10 pointer-events-none">
            <div className="w-full md:w-[45%] pointer-events-auto flex justify-center md:justify-start">
              {/* Pass state to trigger animation only after intro */}
              <HeroCard startAnimation={!showIntro} />
            </div>
          </div>

          <Navigation />
      </div>

      {/* 
        SECTION 2: ABOUT 
        This section flows naturally after the sticky container.
        As you scroll down, the sticky container stays fixed, and this section
        slides up over it (z-index: 20).
      */}
      <AboutSection />
      
      {/*
        SECTION 3: NAME REVEAL
        Slides in after the details.
      */}
      <NameSection />

      {/*
        SECTION 4: EXPERIENCE / PROJECTS
        Vertical timeline layout
      */}
      <ExperienceSection />

      {/*
        SECTION 4.5: CERTIFICATIONS
      */}
      <CertificationsSection />

      {/* 
        SECTION 5: CONTACT
        Final call to action
      */}
      <ContactSection />
      
    </main>
  );
};

export default App;
