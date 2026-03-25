import { useState } from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarketStatsSection from "@/components/MarketStatsSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import TeamSection from "@/components/TeamSection";
import CTAFooter from "@/components/CTAFooter";
import PitchDeckModal from "@/components/PitchDeckModal";
import WaitlistModal from "@/components/WaitlistModal";

function App() {
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  return (
    <div className="App" data-testid="mealtap-app">
      <Navbar
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <HeroSection
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <MarketStatsSection />
      <BusinessModelSection />
      <TeamSection />
      <CTAFooter
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <PitchDeckModal open={pitchModalOpen} onClose={() => setPitchModalOpen(false)} />
      <WaitlistModal open={waitlistModalOpen} onClose={() => setWaitlistModalOpen(false)} />
    </div>
  );
}

export default App;
