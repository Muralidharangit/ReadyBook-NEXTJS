import React from "react";
import GamesClient from "./GamesClient";

export const metadata = {
  title: "Games Lobby — Reddy Book Exchange",
  description: "Browse live sports exchanges, HD virtual casino lobbies, card classics, and slot reels. Try out demo games or secure a live ID.",
  keywords: ["Games Lobby", "Live Roulette", "Andar Bahar", "Teen Patti", "Slot Reels", "Reddy Book Games"],
  alternates: {
    canonical: "https://reddybook.club/games",
  },
  openGraph: {
    title: "Games Lobby — Reddy Book Exchange",
    description: "Browse live sports exchanges, HD virtual casino lobbies, card classics, and slot reels. Try out demo games or secure a live ID.",
    url: "https://reddybook.club/games",
    siteName: "Reddy Book Exchange",
    type: "website",
  },
};

export default function GamesPage() {
  return <GamesClient />;
}
