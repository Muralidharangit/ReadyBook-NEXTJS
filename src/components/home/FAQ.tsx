"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
  {
    question: "What is Reddy Book?",
    answer: "Reddy Book is a popular online platform that offers access to sports betting, live casino games, and various gaming options. With a Reddy Book account, users can enjoy cricket betting, football betting, and live casino entertainment through a single Reddy Book ID."
  },
  {
    question: "How do I create my Reddy Book ID?",
    answer: "Creating a Reddy Book ID is simple. Contact an official Reddy Book provider, complete the registration process, and receive your verified Reddy Book ID. Once your Reddy Book account is activated, you can access all features available on Reddy Book."
  },
  {
    question: "Is Reddy Book legal and safe?",
    answer: "Reddy Book focuses on providing a secure platform with account verification and protected transactions. Many users choose Reddy Book because it prioritizes user security, privacy, and responsible gaming practices."
  },
  {
    question: "Can I bet on IPL and cricket matches on Reddy Book?",
    answer: "Yes, Reddy Book offers extensive cricket betting markets. Users can place bets on IPL matches, international cricket tournaments, T20 leagues, ODI matches, and Test matches. Reddy Book is especially popular among cricket fans."
  },
  {
    question: "How do I deposit and withdraw money on Reddy Book?",
    answer: "Reddy Book supports multiple payment methods including UPI, bank transfers, net banking, and digital wallets. Deposits are generally processed quickly, and verified users can access smooth withdrawal options."
  },
  {
    question: "Is there a Reddy Book mobile app or mobile platform?",
    answer: "Yes, Reddy Book is optimized for mobile devices. Users can access Reddy Book on smartphones and tablets, allowing them to enjoy sports betting and casino games anytime through the platform."
  },
  {
    question: "What should I do if I face login or payment issues on Reddy Book?",
    answer: "If you encounter any login, deposit, withdrawal, or account-related issues, contact the Reddy Book support team. Customer support is available to help users resolve concerns and maintain a smooth experience."
  },
  {
    question: "What is the minimum age requirement to use Reddy Book?",
    answer: "Users must be at least 18 years old to register for a Reddy Book account. Reddy Book promotes responsible gaming and requires users to meet the applicable legal age requirements before accessing its services."
  },
  {
    question: "What casino games are available on Reddy Book?",
    answer: "Reddy Book offers a wide variety of live casino games including Teen Patti, Poker, Roulette, Blackjack, Baccarat, Andar Bahar, and Slot Games. The live casino section is designed to provide an immersive gaming experience."
  },
  {
    question: "Why do players choose Reddy Book?",
    answer: "Players prefer Reddy Book because it offers secure transactions, fast payments, live betting, casino entertainment, mobile access, customer support, and a user-friendly interface. Its growing popularity comes from providing a reliable and engaging gaming experience."
  }
];

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">Help Desk</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            FREQUENTLY ASKED <span className="gold-text">QUESTIONS</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            Got questions? We&apos;ve got answers. Explore our FAQ section to start playing.
          </p>
        </div>

     <div className="w-full px-4 reveal-up">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {faqItems.map((item, index) => {
      const isActive = activeIndex === index;

      return (
        <div key={index} className="faq-item w-full">
          <button
            onClick={() => handleToggle(index)}
            className={`faq-btn ${isActive ? "active" : ""}`}
            type="button"
          >
            {item.question}
          </button>

          <div
            className="faq-body transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden"
            style={{ maxHeight: isActive ? "250px" : "0" }}
          >
            <div className="faq-body-inner">
              <p className="m-0">{item.answer}</p>
              {index >= faqItems.length - 3 && (
                <div style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }} aria-hidden="true">
                  <h2>Reddy Book</h2>
                  <h3>Reddy Book</h3>
                  <h4>Reddy Book</h4>
                  <h5>Reddy Book</h5>
                  <h6>Reddy Book</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    })}

  </div>
</div>
      </div>
    </section>
  );
};

export default FAQ;
