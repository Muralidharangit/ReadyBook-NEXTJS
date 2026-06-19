import React from "react";
import PageHero from "@/components/contact/PageHero";
import Channels from "@/components/contact/Channels";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact Reddy Book | 24/7 Customer Support & Reddy Book Assistance",
  description: "Contact Reddy Book for Get fast and reliable help from the Reddy Book support team 24/7.",
  keywords: [
    "Reddy Book Contact Us",
    "Contact Reddy Book",
    "Reddy Book Customer Support",
    "Reddy Book Help",
    "Reddy Book WhatsApp Support",
    "Reddy Book Contact Number",
    "Reddy Book Support Team",
    "Reddy Book ID Support",
    "Reddy Book Login Help",
    "Reddy Book Deposit Support",
    "Reddy Book Withdrawal Support",
    "Reddy Book Account Verification",
    "Reddy Book Registration Help",
    "Reddy Book 24/7 Support",
    "Reddy Book Customer Service",
    "Reddy Book Assistance",
    "Reddy Book Online Support",
    "Reddy Book Contact Details",
    "Reddy Book User Support",
    "Reddy Book Support Center"
  ],
  alternates: {
    canonical: "https://reddybook.club/contact",
  },
  openGraph: {
    title: "Contact Reddy Book | 24/7 Customer Support & Reddy Book Assistance",
    description: "Contact Reddy Book for Get fast and reliable help from the Reddy Book support team 24/7.",
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
    title: "Contact Reddy Book | 24/7 Customer Support & Reddy Book Assistance",
    description: "Contact Reddy Book for Get fast and reliable help from the Reddy Book support team 24/7.",
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
