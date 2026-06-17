"use client";

import React, { useState } from "react";
import PageHero from "@/components/games/PageHero";
import Lobby from "@/components/games/Lobby";
import DemoModal from "@/components/games/DemoModal";
import SubPageCTA from "@/components/common/SubPageCTA";

export default function GamesClient() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <>
      <PageHero />
      <Lobby onTriggerDemo={(title) => setActiveDemo(title)} />
      <SubPageCTA />
      <DemoModal 
        isOpen={activeDemo !== null} 
        gameTitle={activeDemo || ""} 
        onClose={() => setActiveDemo(null)} 
      />
    </>
  );
}
