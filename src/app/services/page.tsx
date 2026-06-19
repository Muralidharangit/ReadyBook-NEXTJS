import React from "react";
import B2BHero from "@/components/services/B2BHero";
import B2BOfferings from "@/components/services/B2BOfferings";
import B2BFeaturedSolutions from "@/components/services/B2BFeaturedSolutions";
import B2BDeveloperPlatform from "@/components/services/B2BDeveloperPlatform";
import B2BWhyChoose from "@/components/services/B2BWhyChoose";
import B2BContact from "@/components/services/B2BContact";

export const metadata = {
  title: "B2B Casino Solutions & Payment Gateway | Reddy Book",
  description: "Explore Reddy Book's B2B casino platform solutions, white label setups, multi-provider integrations, secure payment processing, and managed betting services.",
  keywords: [
    "Reddy Book B2B",
    "Online Casino Payment Solutions",
    "Self-Service Casino Solution",
    "Multi-Provider Casino Integration",
    "White Label Casino Solution",
    "Managed Services by Reddy Book",
    "Self-Service Casino Platform",
    "Casino Game Aggregator",
    "B2B Casino Platform",
    "Reddy Book Operator ID"
  ],
  alternates: {
    canonical: "https://reddybook.club/services",
  },
  openGraph: {
    title: "B2B Casino Solutions & Payment Gateway | Reddy Book",
    description: "Explore Reddy Book's B2B casino platform solutions, white label setups, multi-provider integrations, secure payment processing, and managed betting services.",
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
    title: "B2B Casino Solutions & Payment Gateway | Reddy Book",
    description: "Explore Reddy Book's B2B casino platform solutions, white label setups, multi-provider integrations, secure payment processing, and managed betting services.",
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
