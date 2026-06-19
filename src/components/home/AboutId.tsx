"use client";

import React from "react";

export const AboutId: React.FC = () => {
  const benefits = [
    {
      icon: "bi-trophy-fill",
      title: "Wide Sports Coverage",
      desc: "Use your Reddy Book ID to place bets on cricket, football, kabaddi, tennis, and other popular sports available on Reddy Book.",
    },
    {
      icon: "bi-dice-5-fill",
      title: "Live Casino Games",
      desc: "Access exciting live casino games through Reddy Book, including Teen Patti, Poker, Roulette, Blackjack, and more.",
    },
    {
      icon: "bi-speedometer2",
      title: "Intuitive Dashboard",
      desc: "Manage your account easily with the Reddy Book dashboard, where your Reddy Book ID allows you to track bets, bonuses, transactions, and betting history.",
    },
    {
      icon: "bi-wallet2",
      title: "Secure & Quick Payments",
      desc: "Make quick deposits and withdrawals using UPI, NetBanking, and other secure payment methods supported by Reddy Book.",
    },
    {
      icon: "bi-gift-fill",
      title: "Exclusive Promotions",
      desc: "Unlock exclusive promotions, cashback offers, and special rewards available only to verified Reddy Book users.",
    },
    {
      icon: "bi-phone-vibrate",
      title: "Cross-Device Gaming",
      desc: "Enjoy a seamless betting and gaming experience across mobile and desktop devices with your Reddy Book ID.",
    },
  ];

  return (
    <section id="about-id" className="relative py-24 overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(160deg, #070913 0%, #0a0e1a 60%, #050608 100%)' }}>
      {/* Decorative Glow Orbs */}
      <div
        className="glow-orb glow-purple w-[600px] h-[600px] -bottom-[150px] -right-[150px] pointer-events-none opacity-40 animate-pulse-slow"
        style={{ animationDuration: '8s' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb glow-gold w-[500px] h-[500px] -top-[150px] -left-[150px] pointer-events-none opacity-20 animate-pulse-slow"
        style={{ animationDuration: '10s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal-up">
          <span className="section-tag">🔑 Your Access Key</span>
          <h2 className="mb-6 font-heading font-extrabold uppercase leading-tight tracking-wider" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
            WHAT IS A <span className="gold-text">REDDY BOOK ID</span>?
          </h2>
          <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            <p className="text-muted text-sm md:text-base leading-relaxed font-medium">
              A Reddy Book ID is your personal gateway to the complete Reddy Book betting and gaming experience. With a verified Reddy Book ID, you can access all the sports betting markets, casino games, and exclusive features available on Reddy Book from a single account.
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed font-medium">
              Whether you're a sports enthusiast or casino player, a Reddy Book ID gives you everything you need to enjoy the platform with convenience and security. Once your Reddy Book ID is activated, you instantly explore the wide range of services offered by Reddy Book.
            </p>
          </div>
        </div>

        {/* main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Premium VIP Card & Key Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* The Virtual Card Visual */}
            <div className="relative w-full aspect-[1.6/1] rounded-2xl p-6 overflow-hidden border border-gold/30 bg-gradient-to-br from-[#1e2439] via-[#0f111a] to-[#07080d] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between group hover:border-gold/60 transition-all duration-500">
              
              {/* Card shimmer reflex overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Card top row */}
              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Reddy Book ID</span>
                  <span className="text-[1.3rem] font-black tracking-wider text-white flex items-center gap-1.5 mt-0.5">
                    REDDY <span className="text-gold">BOOK</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[0.62rem] font-bold text-emerald-400 uppercase tracking-widest">VERIFIED ID</span>
                </div>
              </div>

              {/* Card middle: Gold chip and abstract hologram pattern */}
              <div className="flex justify-between items-end z-10">
                {/* Gold SIM chip */}
                <div className="w-11 h-8 rounded bg-gradient-to-br from-[#ffd966] via-[#cca328] to-[#997300] border border-gold/40 relative overflow-hidden flex flex-col justify-between p-1.5 opacity-90">
                  <div className="w-full h-[1px] bg-black/20" />
                  <div className="w-full h-[1px] bg-black/20" />
                  <div className="w-full h-[1px] bg-black/20" />
                  <div className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-black/20" />
                  <div className="absolute top-0 bottom-0 left-[65%] w-[1px] bg-black/20" />
                </div>
                {/* Holographic lines */}
                <div className="flex flex-col items-end text-right">
                  <span className="text-[0.55rem] uppercase tracking-widest text-white/40">VIP Member Access</span>
                  <span className="text-xs font-semibold text-white/80 font-heading">PLATINUM EXCHANGE</span>
                </div>
              </div>

              {/* Card bottom: Holder name, ID number, and features tag */}
              <div className="flex justify-between items-end border-t border-white/5 pt-4 z-10">
                <div className="flex flex-col">
                  <span className="text-[0.55rem] uppercase tracking-widest text-muted">Account Holder</span>
                  <span className="text-sm font-bold text-white tracking-wide mt-0.5">REDDY BOOK VIP MEMBER</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[0.55rem] uppercase tracking-widest text-muted">ID Number</span>
                  <span className="text-sm font-mono font-bold text-gold tracking-widest mt-0.5">RB-ID-8890-2026</span>
                </div>
              </div>

              {/* Ambient gold glow on card hover */}
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Complete Gaming Portal block */}
            <div className="p-6 bg-[#11141d]/90 border border-white/5 rounded-2xl hover:border-white/10 transition-colors duration-300">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3 text-base">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                  <i className="bi bi-info-circle-fill"></i>
                </div>
                Complete Gaming Portal
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Whether you're a sports enthusiast or casino player, a Reddy Book ID gives you everything you need to enjoy the platform with convenience and security. Once your Reddy Book ID is activated, you can instantly explore the wide range of services offered by Reddy Book.
              </p>
            </div>

            {/* Why Create Callout */}
            <div className="p-6 bg-[#11141d]/90 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-3 text-base">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    <i className="bi bi-question-circle-fill"></i>
                  </div>
                  Why Create a Reddy Book ID?
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  A verified Reddy Book ID provides instant access to everything that Reddy Book has offer. From sports betting and live casinos to secure transactions and exclusive promotions, Reddy Book combines entertainment, convenience security in one platform. Create your Reddy Book ID today and discover why thousands of players choose Reddy Book for their online gaming and betting needs.
                </p>
              </div>
              <a href="#cta-section" className="btn btn-gold inline-flex items-center justify-center gap-2.5 py-3.5 px-6 w-full text-center transition-all duration-300">
                <i className="bi bi-person-plus-fill"></i> Get Your ID Instantly
              </a>
            </div>

          </div>

          {/* Right Column: Benefits Grid */}
          <div className="lg:col-span-7 h-full">
            <div className="p-8 bg-[#11141d]/70 border border-white/5 rounded-2xl h-full backdrop-blur-sm relative overflow-hidden">
              
              {/* Subtle background graphics */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-white font-heading font-extrabold uppercase mb-8 text-xl tracking-wider border-b border-white/5 pb-5 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gold rounded-full" />
                Benefits of a <span className="gold-text">Reddy Book ID</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {benefits.map((b, i) => (
                  <div key={i} className="glass-card group p-5 bg-[#171b27]/60 hover:bg-[#1e2230]/70 transition-all duration-300 rounded-xl flex flex-col justify-between min-h-[170px] border border-white/5 hover:border-gold/30">
                    <div className="flex flex-col gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold text-xl shrink-0 border border-gold/25 group-hover:from-gold group-hover:to-gold-mid group-hover:text-black group-hover:border-gold transition-all duration-300">
                        <i className={`bi ${b.icon}`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm md:text-base mb-1.5 tracking-wide group-hover:text-gold transition-colors duration-300">{b.title}</h5>
                        <p className="text-muted text-[0.82rem] leading-relaxed font-medium">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secure & Verified Access: Full Width Featured Panel */}
        <div className="w-full mt-8">
          <div className="p-8 bg-gradient-to-r from-[#171b27] via-[#11141d]/90 to-[#171b27] border border-gold/20 rounded-2xl relative overflow-hidden group hover:border-gold/40 transition-colors duration-300 shadow-xl">
            {/* Security abstract watermarks */}
            <div className="absolute -right-4 -bottom-8 opacity-5 text-[#ffd966] text-[10rem] pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <i className="bi bi-shield-lock-fill"></i>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-3xl shrink-0">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2.5">
                  Secure & Verified Access
                  <span className="text-xs bg-gold/10 border border-gold/30 text-gold px-2 py-0.5 rounded font-medium">PROTECTED</span>
                </h4>
                <p className="text-muted text-sm leading-relaxed max-w-[950px]">
                  Security is a top priority at Reddy Book. Every Reddy Book ID is protected through advanced verification procedures, including OTP authentication and KYC checks. These security measures help Reddy Book ensure that your account information, transactions & funds remain safe at all times.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutId;
