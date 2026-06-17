import React from "react";
import PageHero from "@/components/services/PageHero";
import Offerings from "@/components/services/Offerings";
import ComparisonTable from "@/components/services/ComparisonTable";
import SubPageCTA from "@/components/common/SubPageCTA";

export const metadata = {
  title: "Premium Services — Reddy Book Exchange",
  description: "Explore Reddy Book services, including our peer-to-peer sports betting exchange, live dealer casino suites, 60-second account setups, and instant 2-minute UPI cashouts.",
  keywords: ["Reddy Book Services", "P2P Sports Exchange", "Live Casino Suites", "UPI Cashout"],
  alternates: {
    canonical: "https://reddybook.club/services",
  },
  openGraph: {
    title: "Premium Services — Reddy Book Exchange",
    description: "Explore Reddy Book services, including our peer-to-peer sports betting exchange, live dealer casino suites, 60-second account setups, and instant 2-minute UPI cashouts.",
    url: "https://reddybook.club/services",
    siteName: "Reddy Book Exchange",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <Offerings />
      <ComparisonTable />
      <SubPageCTA />
    </>
  );
}
