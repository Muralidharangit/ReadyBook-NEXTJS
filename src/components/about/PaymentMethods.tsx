"use client";

import React, { useState } from "react";

const supportedOptions = [
  {
    icon: "bi-phone",
    title: "UPI Payments on Reddy Book",
    desc: "Reddy Book supports popular UPI services including:",
    list: ["Google Pay", "PhonePe", "Paytm", "BHIM"],
    footer: "UPI transactions on Reddy Book are fast and easy, making Reddy Book a preferred platform for Indian users."
  },
  {
    icon: "bi-bank",
    title: "NetBanking & IMPS on Reddy Book",
    desc: "Users can transfer funds securely through major Indian banking services supported by Reddy Book. The banking network integrated into Reddy Book helps ensure reliable transaction processing."
  },
  {
    icon: "bi-wallet2",
    title: "E-Wallet Support on Reddy Book",
    desc: "Digital wallet options on Reddy Book provide another convenient way for users to manage deposits and withdrawals."
  },
  {
    icon: "bi-credit-card-2-front",
    title: "Debit and Credit Cards on Reddy Book",
    desc: "Reddy Book supports card payments, enabling users to fund their Reddy Book accounts securely and efficiently."
  }
];

const trustFeatures = [
  { id: "deposits", title: "Instant Deposits", icon: "bi-lightning-charge-fill", desc: "With Reddy Book, users can add funds quickly and start enjoying sports betting and casino gaming without delays." },
  { id: "withdrawals", title: "Fast Withdrawals", icon: "bi-speedometer2", desc: "Verified users on Reddy Book benefit from efficient withdrawal processing, making Reddy Book a trusted choice among players." },
  { id: "transparent", title: "Transparent Transactions", icon: "bi-search", desc: "Reddy Book focuses on delivering a clear and user-friendly payment experience." },
  { id: "security", title: "Advanced Security", icon: "bi-shield-fill-check", desc: "Every transaction processed through Reddy Book is protected using modern security technologies." },
  { id: "support", title: "Dedicated Support", icon: "bi-headset", desc: "The customer support team at Reddy Book is available to assist users with transaction-related questions and account concerns. Managing funds through Reddy Book is designed to be simple, allowing users to focus on enjoying the services available on Reddy Book." }
];

export const PaymentMethods: React.FC = () => {
  const [activeTab, setActiveTab] = useState(trustFeatures[0].id);
  const activeFeature = trustFeatures.find(f => f.id === activeTab) || trustFeatures[0];

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-16 flex flex-col items-center space-y-4" data-aos="fade-up">
          <div>
            <span className="section-tag inline-block">💳 Transactions</span>
          </div>
          <h2 className="font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            PAYMENT METHODS ON <span className="gold-text">REDDY BOOK</span>
          </h2>
          <p className="text-white font-bold text-xl">Fast, Safe & Convenient Transactions</p>
          <p className="text-muted max-w-[800px] text-[0.98rem] leading-relaxed">
            One of the strengths of Reddy Book is its efficient payment system. Reddy Book supports multiple trusted payment methods that allow users to deposit and withdraw funds quickly. The payment solutions integrated into Reddy Book are designed to deliver speed, convenience, and security. Players choose Reddy Book because it provides hassle-free financial management.
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-heading font-extrabold text-white text-center mb-12 tracking-wide uppercase" data-aos="fade-up">
            Supported <span className="gold-text">Payment Options</span> on Reddy Book
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {supportedOptions.map((option, idx) => (
              <div key={idx} className={`glass-card bordergold p-8 flex flex-col h-full relative group ${idx === 0 ? 'md:col-span-1 md:row-span-3' : 'md:col-span-1 lg:col-span-2'}`} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-[60px] group-hover:bg-gold/20 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

                <div className={`relative z-10 flex h-full ${idx === 0 ? 'flex-col' : 'flex-col sm:flex-row sm:items-center gap-6'}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-white/[0.03] border border-gold/15 flex items-center justify-center group-hover:scale-110 group-hover:border-gold/30 group-hover:bg-gold/[0.05] transition-all duration-500 overflow-hidden relative shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-shrink-0 ${idx === 0 ? 'mb-6' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <i className={`bi ${option.icon} gold-text text-3xl relative z-10 group-hover:rotate-12 transition-transform duration-500`}></i>
                  </div>

                  <div className={`flex flex-col ${idx === 0 ? 'h-full' : 'flex-grow justify-center'}`}>
                    <h4 className={`text-white group-hover:gold-text transition-colors duration-300 font-bold text-[1.15rem] font-heading leading-snug uppercase tracking-wide ${idx === 0 ? 'mb-4' : 'mb-2'}`}>
                      {option.title}
                    </h4>

                    <p className={`text-muted text-[0.95rem] ${option.list ? "mb-5" : "leading-relaxed m-0"} group-hover:text-gray-300 transition-colors duration-300`}>
                      {option.desc}
                    </p>

                    {option.list && (
                      <ul className="text-white space-y-4 mb-6 text-[0.95rem] flex-grow">
                        {option.list.map((item, i) => (
                          <li key={i} className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                            <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-gold/30 group-hover/item:shadow-[0_0_10px_rgba(252,212,90,0.4)] transition-all duration-300">
                              <i className="bi bi-check2 text-gold text-sm font-bold"></i>
                            </div>
                            <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {option.footer && (
                      <div className="pt-5 border-t border-gold/10 group-hover:border-gold/35 mt-auto transition-colors duration-300 relative">
                        <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-gold/50 to-transparent group-hover:w-1/2 transition-all duration-700 ease-out"></div>
                        <p className="text-muted text-[0.85rem] leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                          {option.footer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center space-y-6 mb-16" data-aos="fade-up">
            <h3 className="text-3xl font-heading font-extrabold text-white text-center tracking-wide uppercase">
              Why Players <span className="gold-text">Trust</span> Reddy Book Payments
            </h3>
            <p className="text-muted text-center max-w-[700px] text-[1.02rem]">
              Thousands of users choose Reddy Book because of its dependable payment infrastructure. The financial systems used by Reddy Book are designed to provide security and convenience.
            </p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
            
            {/* Left Side: Vertical Tabs */}
            <div className="w-full lg:w-4/12 flex flex-col gap-3" data-aos="fade-right">
              {trustFeatures.map((feature) => {
                const isActive = activeTab === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-gradient-to-r from-gold/[0.15] to-transparent border border-gold/40 shadow-[0_0_20px_rgba(252,212,90,0.1)]" 
                        : "bg-white/[0.02] border border-gold/15 hover:border-gold/30 hover:bg-white/[0.04]"
                    }`}
                  >
                    <i className={`bi ${feature.icon} text-lg ${isActive ? "text-[#fcd45a]" : "text-gray-400"}`}></i>
                    <span className={`font-bold text-[1rem] ${isActive ? "text-[#fcd45a]" : "text-gray-300"}`}>
                      {feature.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Content Panel */}
            <div className="w-full lg:w-8/12" data-aos="fade-left">
              <div className="glass-card bordergold rounded-3xl p-8 md:p-12 h-full relative overflow-hidden flex flex-col justify-center min-h-[350px]">
                {/* Giant Background Icon */}
                <i className={`bi ${activeFeature.icon} absolute -right-10 -bottom-10 text-[15rem] text-white/[0.02] pointer-events-none transform -rotate-12`}></i>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-gold/15 flex items-center justify-center mb-8 shadow-inner">
                    <i className={`bi ${activeFeature.icon} text-[#fcd45a] text-2xl`}></i>
                  </div>
                  
                  <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-6 tracking-wide uppercase">
                    {activeFeature.title}
                  </h3>
                  
                  <p className="text-muted text-[1.05rem] leading-[1.8] max-w-[600px]">
                    {activeFeature.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
