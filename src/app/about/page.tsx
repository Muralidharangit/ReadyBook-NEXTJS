import React from "react";
import PageHero from "@/components/about/PageHero";
import VisionMission from "@/components/about/VisionMission";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PaymentMethods from "@/components/about/PaymentMethods";
import TrustSecurity from "@/components/about/TrustSecurity";

export const metadata = {
  title: "About Us | Reddy Book – Trusted Sports Betting & Live Casino Platform",
  description: "Learn more about Reddy Book, a trusted platform for sports betting and live casino gaming. Discover our mission, secure services, fast transactions, and commitment to providing a user experience.",
  keywords: ["Reddy Book", "Reddy Book About Us", "Reddy Book Sports Betting", "Reddy Book Live Casino", "Reddy Book ID", "Reddy Book Cricket Betting", "Reddy Book Online Betting", "Reddy Book Casino Games", "Reddy Book India"],
  alternates: {
    canonical: "https://reddybook.club/about",
  },
  openGraph: {
    title: "About Us | Reddy Book – Trusted Sports Betting & Live Casino Platform",
    description: "Learn more about Reddy Book, a trusted platform for sports betting and live casino gaming. Discover our mission, secure services, fast transactions, and commitment to providing a user experience.",
    url: "https://reddybook.club/about",
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
};

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <hr className="gold-divider max-w-[700px]" />
      <VisionMission />
      <hr className="gold-divider max-w-[700px]" />
      <WhyChooseUs />
      <hr className="gold-divider max-w-[700px]" />
      <PaymentMethods />
      <hr className="gold-divider max-w-[700px]" />
      <TrustSecurity />
    </>
  );
}
