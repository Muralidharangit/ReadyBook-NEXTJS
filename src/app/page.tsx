import React from "react";
import Hero from "@/components/home/Hero";
import Games from "@/components/home/Games";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import AboutId from "@/components/home/AboutId";
import Stats from "@/components/home/Stats";
import Leagues from "@/components/home/Leagues";
import VerificationBenefits from "@/components/home/VerificationBenefits";
import SportsBook from "@/components/home/SportsBook";
import CasinoHub from "@/components/home/CasinoHub";
import PlatformGuide from "@/components/home/PlatformGuide";
import FairGaming from "@/components/home/FairGaming";
import Bonus from "@/components/home/Bonus";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Reddy Book | Official Reddy Book Cricket Betting and Live Casino",
  description: "Reddy Book is India's trusted platform for sports betting and live casino gaming. Get your Reddy Book ID instantly, enjoy cricket betting, fast withdrawals, secure payments and 24/7 support on Reddy Book.",
  keywords: [
    "Reddy Book",
    "Reddy Book ID",
    "Reddy Book Login",
    "Reddy Book Registration",
    "Reddy Book Sign Up",
    "Reddy Book Cricket Betting",
    "Reddy Book Sports Betting",
    "Reddy Book Live Casino",
    "Reddy Book Casino Games",
    "Reddy Book Deposit"
  ],
  alternates: {
    canonical: "https://reddybook.club/",
  },
  openGraph: {
    title: "Reddy Book | Official Reddy Book Cricket Betting and Live Casino",
    description: "Reddy Book is India's trusted platform for sports betting and live casino gaming. Get your Reddy Book ID instantly, enjoy cricket betting, fast withdrawals, secure payments and 24/7 support on Reddy Book.",
    url: "https://reddybook.club/",
    siteName: "Reddy Book Exchange",
    images: [
      {
        url: "https://reddybook.club/images/Logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Book | Official Reddy Book Cricket Betting and Live Casino",
    description: "Reddy Book is India's trusted platform for sports betting and live casino gaming. Get your Reddy Book ID instantly, enjoy cricket betting, fast withdrawals, secure payments and 24/7 support on Reddy Book.",
    images: ["https://reddybook.club/images/Logo.png"],
  },
};

export default function Home() {
  return (
    <>
      {/* ① Intro */}
      <Hero />
      <hr className="gold-divider max-w-[700px]" />

      {/* ② Platform Identity */}
      <AboutId />
      <hr className="gold-divider max-w-[700px]" />
      <Features />
      <hr className="gold-divider max-w-[700px]" />

      {/* ③ Sports Betting */}
      <SportsBook />
      <Games />
      <hr className="gold-divider max-w-[700px]" />

      {/* ④ Casino */}
      <CasinoHub />
      <Leagues />
      <hr className="gold-divider max-w-[700px]" />

      {/* ⑤ Rewards */}
      <Bonus />
      <hr className="gold-divider max-w-[700px]" />

      {/* ⑥ Trust & Verification */}
      <VerificationBenefits />
      <HowItWorks />
      <PlatformGuide />
      <hr className="gold-divider max-w-[700px]" />

      {/* ⑦ Social Proof */}
      <Stats />
      <FairGaming />
      <hr className="gold-divider max-w-[700px]" />

      {/* ⑧ Final conversion */}
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

