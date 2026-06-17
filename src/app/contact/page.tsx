import React from "react";
import PageHero from "@/components/contact/PageHero";
import Channels from "@/components/contact/Channels";
import Form from "@/components/contact/Form";
import SubPageCTA from "@/components/common/SubPageCTA";

export const metadata = {
  title: "Contact Us — Reddy Book Exchange",
  description: "Contact Us — Reddy Book Exchange. Reach our support desk 24/7 via WhatsApp, Telegram, or submit a message online.",
  keywords: ["Contact Reddy Book", "Reddy Book Support", "WhatsApp Support", "Telegram Support"],
  alternates: {
    canonical: "https://reddybook.club/contact",
  },
  openGraph: {
    title: "Contact Us — Reddy Book Exchange",
    description: "Contact Us — Reddy Book Exchange. Reach our support desk 24/7 via WhatsApp, Telegram, or submit a message online.",
    url: "https://reddybook.club/contact",
    siteName: "Reddy Book Exchange",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <Channels />
      <Form />
      <SubPageCTA />
    </>
  );
}
