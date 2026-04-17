import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatsAppFlowSection from "@/components/WhatsAppFlowSection";
import UserFlowsSection from "@/components/UserFlowsSection";
import BrandShowcase from "@/components/BrandShowcase";
import TeamSection from "@/components/TeamSection";
import CTAFooter from "@/components/CTAFooter";
import InvestorPage from "@/components/InvestorPage";
import PitchDeckModal from "@/components/PitchDeckModal";
import WaitlistModal from "@/components/WaitlistModal";

const PublicPage = () => {
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  return (
    <>
      <Navbar
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <HeroSection
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <WhatsAppFlowSection />
      <UserFlowsSection />
      <BrandShowcase />
      <TeamSection />
      <CTAFooter
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <PitchDeckModal open={pitchModalOpen} onClose={() => setPitchModalOpen(false)} />
      <WaitlistModal open={waitlistModalOpen} onClose={() => setWaitlistModalOpen(false)} />
    </>
  );
};

const InvestorLanding = () => {
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  return (
    <>
      <Navbar
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
        isInvestor
      />
      <InvestorPage
        onPitchDeck={() => setPitchModalOpen(true)}
        onWaitlist={() => setWaitlistModalOpen(true)}
      />
      <PitchDeckModal open={pitchModalOpen} onClose={() => setPitchModalOpen(false)} />
      <WaitlistModal open={waitlistModalOpen} onClose={() => setWaitlistModalOpen(false)} />
    </>
  );
};

function App() {
  return (
    <div className="App" data-testid="mealtap-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/investors" element={<InvestorLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
