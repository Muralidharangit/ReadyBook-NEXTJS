import React from "react";
import PageHero from "@/components/about/PageHero";
import CoreValues from "@/components/about/CoreValues";
import Milestones from "@/components/about/Milestones";
import SubPageCTA from "@/components/common/SubPageCTA";

export const metadata = {
  title: "About Us — Reddy Book Exchange",
  description: "About Reddy Book — Pioneers of the peer-to-peer sports exchange and live dealer casinos. Learn about our values, history, and secure gaming standards.",
  keywords: ["About Reddy Book", "Reddy Book History", "P2P Betting", "Secure Betting"],
  alternates: {
    canonical: "https://reddybook.club/about",
  },
  openGraph: {
    title: "About Us — Reddy Book Exchange",
    description: "About Reddy Book — Pioneers of the peer-to-peer sports exchange and live dealer casinos. Learn about our values, history, and secure gaming standards.",
    url: "https://reddybook.club/about",
    siteName: "Reddy Book Exchange",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CoreValues />
      <Milestones />
      <SubPageCTA />
    </>
  );
}
