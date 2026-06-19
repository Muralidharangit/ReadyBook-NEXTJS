import React from "react";
import PageHero from "@/components/contact/PageHero";
import Channels from "@/components/contact/Channels";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact Reddy Book | B2B Casino & Gaming Consultants",
  description: "Connect with Reddy Book's gaming consultants. Get started with our B2B casino platform, payment gateways, self-service solutions, and white label casino systems.",
  keywords: [
    "Contact Reddy Book",
    "Reddy Book B2B Support",
    "Gaming Consultants",
    "Casino Platform Inquiry",
    "Launch Casino Platform",
    "B2B Casino Setup"
  ],
  alternates: {
    canonical: "https://reddybook.club/contact",
  },
  openGraph: {
    title: "Contact Reddy Book | B2B Casino & Gaming Consultants",
    description: "Connect with Reddy Book's gaming consultants. Get started with our B2B casino platform, payment gateways, self-service solutions, and white label casino systems.",
    url: "https://reddybook.club/contact",
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
    title: "Contact Reddy Book | B2B Casino & Gaming Consultants",
    description: "Connect with Reddy Book's gaming consultants. Get started with our B2B casino platform, payment gateways, self-service solutions, and white label casino systems.",
    images: ["https://reddybook.club/images/Logo.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <Channels />
      <Form />
    </>
  );
}
