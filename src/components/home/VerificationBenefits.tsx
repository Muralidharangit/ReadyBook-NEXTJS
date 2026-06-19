"use client";

import React from "react";

export const VerificationBenefits: React.FC = () => {
  const benefits = [
    {
      icon: "bi-shield-lock-fill",
      title: "Enhanced Account Security",
      desc: "Verification helps Reddy Book protect your account against unauthorized access. A verified Reddy Book ID provides an additional layer of account protection.",
    },
    {
      icon: "bi-lightning-charge-fill",
      title: "Faster Withdrawals",
      desc: "Verified Reddy Book ID holders can enjoy quicker transaction processing. Reddy Book prioritizes smooth and secure withdrawals for verified accounts.",
    },
    {
      icon: "bi-grid-3x3-gap-fill",
      title: "Full Platform Access",
      desc: "A verified Reddy Book ID unlocks complete access to sports betting, casino gaming, promotions, and all premium services available on Reddy Book.",
    },
    {
      icon: "bi-gift-fill",
      title: "Exclusive Promotions",
      desc: "Many special offers on Reddy Book are available only to users with a verified Reddy Book ID, helping players maximize rewards and benefits.",
    },
    {
      icon: "bi-headset",
      title: "Improved Customer Support",
      desc: "Users with a verified Reddy Book ID receive faster assistance from the dedicated Reddy Book support team whenever account-related issues arise.",
    },
  ];

  return (
    <section id="verification-benefits" className="py-24 bg-dot-matrix-pattern relative overflow-hidden border-t border-white/5">
      {/* Glow orb */}
      <div
        className="glow-orb glow-gold w-[400px] h-[400px] top-1/2 -left-[100px] -translate-y-1/2 pointer-events-none opacity-20"
        aria-hidden="true"
      />
      <div
        className="glow-orb glow-purple w-[500px] h-[500px] bottom-0 right-0 pointer-events-none opacity-30"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="section-tag">💎 Premium Privileges</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            BENEFITS OF VERIFYING YOUR <span className="gold-text">REDDY BOOK ID</span>
          </h2>
          <p className="text-muted max-w-[650px] mx-auto text-sm md:text-base leading-relaxed">
            A verified Reddy Book ID offers multiple advantages that improve both security and convenience.
          </p>
        </div>

        {/* Benefits Grid - Centered items with 5 items */}
        <div className="flex flex-wrap -mx-4 justify-center gap-y-8">
          {benefits.map((b, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4 reveal-up">
              <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 hover:border-gold/30 hover:bg-gradient-to-b hover:from-[#151a26] hover:to-[#11141d] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl mb-6 border border-gold/20 group-hover:scale-110 transition-transform duration-300">
                  <i className={`bi ${b.icon}`}></i>
                </div>
                <h4 className="text-white font-bold text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                  {b.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-0">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationBenefits;
