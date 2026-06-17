export interface MatchOdds {
  r1b1: number; r1b2: number; r1b3: number; r1l1: number; r1l2: number; r1l3: number;
  r2b1: number; r2b2: number; r2b3: number; r2l1: number; r2l2: number; r2l3: number;
}

export interface MatchData {
  id: string;
  league: string;
  title: string;
  r1Name: string;
  r2Name: string;
  odds: MatchOdds;
}

export interface CasinoGame {
  id: string;
  title: string;
  category: string;
  desc: string;
  bgGradient: string;
}

export const matchesData: Record<string, MatchData> = {
  wizard: {
    id: "wizard",
    league: "BENGAL T20 LEAGUE",
    title: "Rashmi Medinipur Wizard v Murshidabad Kings",
    r1Name: "Rashmi Medinipur Wizard",
    r2Name: "Murshidabad Kings",
    odds: {
      r1b1: 2.14, r1b2: 2.66, r1b3: 2.68, r1l1: 2.94, r1l2: 2.98, r1l3: 3.00,
      r2b1: 1.33, r2b2: 1.50, r2b3: 1.52, r2l1: 1.60, r2l2: 1.88, r2l3: 2.50
    }
  },
  kings: {
    id: "kings",
    league: "ANDHRA PREMIER LEAGUE",
    title: "Kakinada Kings v Vijayawada Sunshine",
    r1Name: "Kakinada Kings",
    r2Name: "Vijayawada Sunshine",
    odds: {
      r1b1: 1.82, r1b2: 1.95, r1b3: 2.00, r1l1: 2.02, r1l2: 2.06, r1l3: 2.12,
      r2b1: 1.80, r2b2: 1.84, r2b3: 1.86, r2l1: 1.90, r2l2: 1.92, r2l3: 1.98
    }
  },
  canada: {
    id: "canada",
    league: "FIFA WORLD CUP",
    title: "Canada v Bosnia",
    r1Name: "Canada",
    r2Name: "Bosnia",
    odds: {
      r1b1: 1.72, r1b2: 1.85, r1b3: 1.90, r1l1: 1.91, r1l2: 1.95, r1l3: 2.00,
      r2b1: 3.20, r2b2: 3.40, r2b3: 3.65, r2l1: 3.70, r2l2: 3.90, r2l3: 4.10
    }
  },
  conor: {
    id: "conor",
    league: "EXCLUSIVE LEAGUE",
    title: "Gannon Conor vs Neimanis Pih",
    r1Name: "Gannon Conor",
    r2Name: "Neimanis Pih",
    odds: {
      r1b1: 1.76, r1b2: 1.82, r1b3: 1.88, r1l1: 1.94, r1l2: 2.00, r1l3: 2.08,
      r2b1: 1.90, r2b2: 1.94, r2b3: 1.96, r2l1: 2.02, r2l2: 2.08, r2l3: 2.16
    }
  }
};

export const casinoGames: CasinoGame[] = [
  {
    id: "roulette",
    title: "Live Roulette",
    category: "TABLES",
    desc: "Fast spins, dual wheel views, and live dealer support.",
    bgGradient: "linear-gradient(135deg, #400f4f 0%, #170425 100%)"
  },
  {
    id: "andar-bahar",
    title: "Andar Bahar",
    category: "INDIAN",
    desc: "Traditional Indian card classic with responsive overlays.",
    bgGradient: "linear-gradient(135deg, #400f4f 0%, #170425 100%)"
  },
  {
    id: "teen-patti",
    title: "Teen Patti",
    category: "CLASSIC",
    desc: "Join the active room and play live with native dealers.",
    bgGradient: "linear-gradient(135deg, #400f4f 0%, #170425 100%)"
  },
  {
    id: "slots",
    title: "Slot Reels",
    category: "SLOTS",
    desc: "Progressive jackpot slots with beautiful audio-visual feedback.",
    bgGradient: "linear-gradient(135deg, #400f4f 0%, #170425 100%)"
  }
];
