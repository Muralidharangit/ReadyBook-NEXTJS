import React from "react";
import Hero from "@/components/home/Hero";
import Games from "@/components/home/Games";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Leagues from "@/components/home/Leagues";
import Bonus from "@/components/home/Bonus";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Reddy Book — Premium Sports Betting & Casino Exchange",
  description: "Reddy Book — The ultimate Sports Betting & Casino Exchange. Get best live odds on Cricket, Soccer, and Tennis. Instant secure deposits and rapid withdrawals.",
  keywords: ["Reddy Book", "Reddy Book Exchange", "Sports Betting", "Cricket Exchange", "Live Casino", "Back and Lay", "UPI Withdrawals"],
  alternates: {
    canonical: "https://reddybook.club/",
  },
  openGraph: {
    title: "Reddy Book — Premium Sports Betting & Casino Exchange",
    description: "Reddy Book — The ultimate Sports Betting & Casino Exchange. Get best live odds on Cricket, Soccer, and Tennis. Instant secure deposits and rapid withdrawals.",
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
    title: "Reddy Book — Premium Sports Betting & Casino Exchange",
    description: "Reddy Book — The ultimate Sports Betting & Casino Exchange. Get best live odds on Cricket, Soccer, and Tennis. Instant secure deposits and rapid withdrawals.",
    images: ["https://reddybook.club/images/Logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Games />
      <Features />
      <Stats />
      <hr className="gold-divider max-w-[700px]" />
      <Leagues />
      <hr className="gold-divider max-w-[700px]" />
      <Bonus />
      <hr className="gold-divider max-w-[700px]" />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
