"use client";

import React from "react";

export const PlatformGuide: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Get Your Reddy Book ID",
      desc: "The first step to accessing Reddy Book is obtaining a verified Reddy Book ID. Your Reddy Book ID serves as your personal gateway to all sports betting and casino gaming features available on Reddy Book.",
      bullets: [
        "Access all sports betting markets on Reddy Book",
        "Enter live casino sections on Reddy Book",
        "Manage transactions through Reddy Book",
        "Receive promotions from Reddy Book",
        "Track betting history using Reddy Book"
      ],
      footer: "A verified Reddy Book ID ensures smooth access to every service offered by Reddy Book."
    },
    {
      step: "02",
      title: "Login to Your Reddy Book Account",
      desc: "After receiving your Reddy Book ID, simply log into Reddy Book using your credentials. The Reddy Book dashboard provides a complete overview of your account, betting activity, available funds, and gaming options.",
      bullets: [],
      footer: "The interface of Reddy Book allows users to quickly explore sports betting categories, casino games, and promotions. Every section within Reddy Book is designed to provide a smooth user experience."
    },
    {
      step: "03",
      title: "Add Funds Securely on Reddy Book",
      desc: "Funding your account is simple and secure on Reddy Book. The payment system on Reddy Book supports multiple transaction methods, allowing users to add funds conveniently.",
      bullets: [],
      footer: "The secure payment infrastructure used by Reddy Book ensures that every transaction processed through Reddy Book remains protected. Users trust Reddy Book because Reddy Book prioritizes safe and reliable financial transactions. Once funds are added, you can immediately begin playing."
    },
    {
      step: "04",
      title: "Start Betting or Playing on Reddy Book",
      desc: "After funding your account, you can start exploring the wide range of options available on Reddy Book. Users of Reddy Book can place bets on sports, participate in live casino games, and access entertainment features from a single platform.",
      bullets: [
        "Cricket betting on Reddy Book",
        "Football betting on Reddy Book",
        "Tennis betting on Reddy Book",
        "Kabaddi betting on Reddy Book",
        "Live casino gaming on Reddy Book",
        "Teen Patti, Poker, Roulette & Blackjack"
      ],
      footer: "The extensive selection available on Reddy Book ensures there is something for every player."
    }
  ];

  const paymentTrusts = [
    { title: "Instant Deposits", desc: "With Reddy Book, users can add funds quickly and start enjoying sports betting and casino gaming without delays." },
    { title: "Fast Withdrawals", desc: "Verified users of Reddy Book benefit from efficient withdrawal processing, making Reddy Book a trusted choice among players." },
    { title: "Transparent Transactions", desc: "Reddy Book focuses on delivering a clear, honest, and user-friendly payment experience." },
    { title: "Advanced Security", desc: "Every transaction processed through Reddy Book is protected using modern security technologies and encryption." },
    { title: "Dedicated Support", desc: "The customer support team at Reddy Book is available to assist users with transaction-related questions and account concerns." }
  ];

  const protectMeasures = [
    { icon: "bi-shield-fill-check", title: "Secure Platform Infrastructure", desc: "The technology behind Reddy Book helps protect sensitive account information and transactions." },
    { icon: "bi-shield-lock-fill", title: "OTP Verification", desc: "Account security on Reddy Book is strengthened through verification procedures designed to protect users." },
    { icon: "bi-person-check-fill", title: "KYC Verification", desc: "The verification process at Reddy Book helps ensure account authenticity and secure access to withdrawals." },
    { icon: "bi-eye-fill", title: "Fraud Monitoring", desc: "Security systems within Reddy Book help identify suspicious activities and maintain a safer environment for users." },
    { icon: "bi-heart-pulse-fill", title: "Responsible Gaming Features", desc: "Reddy Book encourages responsible participation through tools and account management features designed to support safe gaming practices." }
  ];

  return (
    <section id="platform-guide" className="py-24 bg-bg-secondary relative overflow-hidden border-t border-white/5">
      {/* Glow orbs */}
      <div 
        className="glow-orb glow-purple w-[500px] h-[500px] top-10 right-0 pointer-events-none opacity-20" 
        aria-hidden="true"
      />
      <div 
        className="glow-orb glow-gold w-[400px] h-[400px] bottom-10 left-0 pointer-events-none opacity-20" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section 1: How It Works Guide */}
        <div className="text-center mb-16 reveal-up">
          <span className="section-tag">📖 Complete Guide</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            HOW REDDY BOOK WORKS: <span className="gold-text">PLATFORM GUIDE</span>
          </h2>
          <p className="text-muted max-w-[750px] mx-auto text-sm md:text-base leading-relaxed">
            Reddy Book is a modern online betting and gaming platform designed to provide users easy access to sports betting, live casino games, and real-time gaming opportunities. With a single Reddy Book ID, users access all services available on Reddy Book, making Reddy Book a convenient choice for both beginners and experienced players.
          </p>
          <p className="text-muted max-w-[750px] mx-auto text-sm md:text-base leading-relaxed mt-4">
            The user-friendly design of Reddy Book allows players to navigate the platform effortlessly. Once you receive your Reddy Book ID, you can log into Reddy Book, add funds, and begin exploring sports betting and casino entertainment instantly.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#11141d] border border-white/5 rounded-2xl p-8 flex flex-col justify-between reveal-up relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
              <span className="absolute top-4 right-6 text-7xl font-extrabold text-white/[0.02] group-hover:text-gold/[0.04] transition-colors duration-300 pointer-events-none">
                {s.step}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold text-sm border border-gold/20">
                    {s.step}
                  </span>
                  <h3 className="text-white font-heading font-bold text-lg m-0">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>

                {s.bullets.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-6">
                    {s.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start text-xs text-muted">
                        <span className="text-gold shrink-0"><i className="bi bi-check2-circle"></i></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t border-white/5 pt-4 mt-4 text-[0.8rem] text-muted italic">
                {s.footer}
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Payments Methods */}
        <div className="flex flex-wrap -mx-4 gap-y-12 mb-24 items-stretch">
          {/* Methods Left Card */}
          <div className="w-full lg:w-5/12 px-4 reveal-left">
            <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="section-tag">💳 Transaction Gateways</span>
                <h3 className="mb-4 font-heading font-bold uppercase text-white mt-2 text-xl md:text-2xl leading-tight">
                  PAYMENT METHODS ON REDDY BOOK: <br />
                  <span className="gold-text">FAST &amp; SAFE TRANSACTIONS</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  One of the biggest strengths of Reddy Book is its efficient payment system. Reddy Book supports multiple trusted payment methods that allow users to deposit and withdraw funds quickly and securely.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The payment solutions integrated into Reddy Book are designed to deliver speed, convenience, and security. Players choose Reddy Book because Reddy Book provides hassle-free financial management for every account.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-3">Supported UPI Services</span>
                <div className="flex flex-wrap gap-2">
                  {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((upi, uIdx) => (
                    <span key={uIdx} className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white">
                      {upi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Methods Right Card - Categories */}
          <div className="w-full lg:w-7/12 px-4 reveal-right">
            <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 md:p-10">
              <span className="section-tag">🏦 Payment Channels</span>
              <h4 className="text-white font-heading font-bold uppercase text-base mt-2 mb-6">
                SUPPORTED PAYMENT OPTIONS ON REDDY BOOK
              </h4>

              <div className="flex flex-col gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xl border border-gold/20 shrink-0">
                    <i className="bi bi-wallet2"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">UPI Payments on Reddy Book</h5>
                    <p className="text-muted text-[0.8rem] leading-relaxed mb-0">
                      Reddy Book supports popular UPI services including Google Pay, PhonePe, Paytm, BHIM. UPI transactions on Reddy Book are fast and easy, making Reddy Book a preferred platform for Indian users.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xl border border-gold/20 shrink-0">
                    <i className="bi bi-bank"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">NetBanking &amp; IMPS on Reddy Book</h5>
                    <p className="text-muted text-[0.8rem] leading-relaxed mb-0">
                      Users can transfer funds securely through major Indian banking services supported by Reddy Book. The banking network integrated into Reddy Book helps ensure reliable transaction processing.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xl border border-gold/20 shrink-0">
                    <i className="bi bi-wallet-fill"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">E-Wallet Support on Reddy Book</h5>
                    <p className="text-muted text-[0.8rem] leading-relaxed mb-0">
                      Digital wallet options on Reddy Book provide another convenient way for users to manage deposits and withdrawals.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xl border border-gold/20 shrink-0">
                    <i className="bi bi-credit-card-2-front-fill"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">Debit and Credit Cards on Reddy Book</h5>
                    <p className="text-muted text-[0.8rem] leading-relaxed mb-0">
                      Reddy Book supports card payments, enabling users to fund their Reddy Book accounts securely and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Trust & Protection */}
        <div className="flex flex-wrap -mx-4 gap-y-12 items-stretch">
          {/* Trust Left Card */}
          <div className="w-full lg:w-6/12 px-4 reveal-left">
            <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="section-tag">🤝 Payment Security</span>
                <h3 className="mb-4 font-heading font-bold uppercase text-white mt-2 text-xl md:text-2xl leading-tight">
                  WHY PLAYERS TRUST <br />
                  <span className="gold-text">REDDY BOOK PAYMENTS</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  Thousands of users choose Reddy Book because of its dependable payment infrastructure. The financial systems used by Reddy Book are designed to provide security, speed, and absolute convenience.
                </p>

                <div className="flex flex-col gap-5">
                  {paymentTrusts.map((t, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-l-2 border-gold/30 pl-4 py-1 hover:border-gold transition-colors duration-200">
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">{t.title}</h5>
                        <p className="text-muted text-[0.8rem] leading-relaxed m-0">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-8">
                <p className="text-muted text-[0.8rem] leading-relaxed m-0">
                  Managing funds through Reddy Book is designed to be simple, allowing users to focus on enjoying the premium sports betting and live casino entertainment available.
                </p>
              </div>
            </div>
          </div>

          {/* Protection Right Card */}
          <div className="w-full lg:w-6/12 px-4 reveal-right">
            <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="section-tag">🔒 Play Safely</span>
                <h3 className="mb-4 font-heading font-bold uppercase text-white mt-2 text-xl md:text-2xl leading-tight">
                  TRUST &amp; SECURITY: <br />
                  <span className="gold-text">HOW REDDY BOOK PROTECTS USERS</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  Security is one of the most important priorities at Reddy Book. Every aspect of the platform is engineered to protect user accounts, sensitive financial information, and all live gaming activities.
                </p>

                <div className="flex flex-col gap-6">
                  {protectMeasures.map((p, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-lg border border-gold/20 shrink-0">
                        <i className={`bi ${p.icon}`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">{p.title}</h5>
                        <p className="text-muted text-[0.8rem] leading-relaxed m-0">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-8">
                <p className="text-gold text-[0.8rem] font-semibold leading-relaxed m-0">
                  🛡️ Players trust Reddy Book because Reddy Book maintains extremely high standards for security, data privacy, and responsible gaming.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformGuide;
