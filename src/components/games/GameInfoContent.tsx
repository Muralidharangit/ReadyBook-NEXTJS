import React from "react";

// Import all modular sub-components
import HeroSection from "./HeroSection";
import CricketSection from "./CricketSection";
import FootballSection from "./FootballSection";
import TennisSection from "./TennisSection";
import LiveBettingSection from "./LiveBettingSection";
import LiveCasinoSection from "./LiveCasinoSection";
import SlotsSection from "./SlotsSection";

export const GameInfoContent: React.FC = () => {
  return (
    <div className="bg-[#06070a] text-white">
      <HeroSection />
      <hr className="gold-divider max-w-[700px]" />
      <CricketSection />
      <hr className="gold-divider max-w-[700px]" />
      <FootballSection />
      <hr className="gold-divider max-w-[700px]" />
      <TennisSection />
      <hr className="gold-divider max-w-[700px]" />
      <LiveBettingSection />
      <hr className="gold-divider max-w-[700px]" />
      <LiveCasinoSection />
      <hr className="gold-divider max-w-[700px]" />
      <SlotsSection />
    </div>
  );
};

export default GameInfoContent;
