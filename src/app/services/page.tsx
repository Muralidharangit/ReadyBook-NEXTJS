import React from "react";
import B2BHero from "@/components/services/B2BHero";
import B2BOfferings from "@/components/services/B2BOfferings";
import B2BFeaturedSolutions from "@/components/services/B2BFeaturedSolutions";
import B2BDeveloperPlatform from "@/components/services/B2BDeveloperPlatform";
import B2BWhyChoose from "@/components/services/B2BWhyChoose";
import B2BContact from "@/components/services/B2BContact";

export const metadata = {
  title: "Reddy Book Services | Sports Betting, Live Casino & Cricket Betting",
  description: "Explore Reddy Book services including cricket betting, football betting, tennis betting, live betting, live casino games, secure transactions, fast withdrawals, and 24/7 customer support.",
  keywords: [
    "Reddy Book Services",
    "Reddy Book Sports Betting",
    "Reddy Book Cricket Betting",
    "Reddy Book Football Betting",
    "Reddy Book Tennis Betting",
    "Reddy Book Live Betting",
    "Reddy Book Live Casino",
    "Reddy Book Slot Games"
  ],
  alternates: {
    canonical: "https://reddybook.club/services",
  },
  openGraph: {
    title: "Reddy Book Services | Sports Betting, Live Casino & Cricket Betting",
    description: "Explore Reddy Book services including cricket betting, football betting, tennis betting, live betting, live casino games, secure transactions, fast withdrawals, and 24/7 customer support.",
    url: "https://reddybook.club/services",
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
    title: "Reddy Book Services | Sports Betting, Live Casino & Cricket Betting",
    description: "Explore Reddy Book services including cricket betting, football betting, tennis betting, live betting, live casino games, secure transactions, fast withdrawals, and 24/7 customer support.",
    images: ["https://reddybook.club/images/Logo.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <B2BHero />
      <hr className="gold-divider max-w-[700px]" />
      
      <B2BOfferings />
      <hr className="gold-divider max-w-[700px]" />
      
      <B2BFeaturedSolutions />
      <hr className="gold-divider max-w-[700px]" />
      
      <B2BDeveloperPlatform />
      <hr className="gold-divider max-w-[700px]" />
      
      <B2BWhyChoose />
      <hr className="gold-divider max-w-[700px]" />
      
      <B2BContact />
    </>
  );
}
