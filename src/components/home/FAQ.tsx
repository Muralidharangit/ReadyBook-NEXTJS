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
      question: "How do I get my Reddy Book Betting ID?",
      answer: "It is extremely simple! Click on the \"Sign Up Now\" or \"Get Instant ID\" buttons, which will open a secure link to connect with our support agents. We will set up your betting login credentials in under 60 seconds."
    },
    {
      question: "What are the deposit methods and limits?",
      answer: "We support a wide range of safe payment channels including UPI, Google Pay, PhonePe, Paytm, IMPS NetBanking, and Crypto (Bitcoin, USDT). Minimum deposit starts at just ₹500, with zero setup fees."
    },
    {
      question: "How fast are withdrawal payouts settled?",
      answer: "We take pride in our rapid withdrawals. Once requested, your payout is processed securely and credited to your verified bank or wallet via UPI in under 15 minutes, 24/7."
    },
    {
      question: "Is the Back and Lay betting exchange safe?",
      answer: "Yes, absolutely. A peer-to-peer exchange is the safest way to bet because you lay odds or back outcomes directly against other platform users. We act as a secure, licensed escrow to match bets fairly."
    },
    {
      question: "What casino games can I play?",
      answer: "Reddy Book features a full online live casino suite. Play interactive Roulette, Baccarat, Blackjack, Teen Patti, Andar Bahar, and premium slots 24/7 with professional live dealers streaming in HD."
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

        <div className="flex flex-wrap -mx-4 gap-y-6 justify-center">
          <div className="w-full lg:w-2/3 px-4 reveal-up">
            <div className="faq-accordion">
              {faqItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className="faq-item">
                    <button 
                      onClick={() => handleToggle(index)}
                      className={`faq-btn ${isActive ? "active" : ""}`}
                      type="button"
                    >
                      {item.question}
                    </button>
                    <div 
                      className="faq-body transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{ maxHeight: isActive ? "200px" : "0" }}
                    >
                      <div className="faq-body-inner">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
