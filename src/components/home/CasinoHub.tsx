"use client";

import React, { useState } from "react";

export const CasinoHub: React.FC = () => {
  const [activeGame, setActiveGame] = useState<number>(0);

  const casinoGames = [
    {
      name: "Teen Patti",
      badge: "India's Favorite",
      icon: "bi-suit-spade-fill",
      title: "Teen Patti India's Favorite Live Card Game on Reddy Book",
      desc: "Reddy Book offers Teen Patti tables designed for Indian gaming enthusiasts. Teen Patti remains one most popular games on Reddy Book because of its familiar gameplay and competitive nature.",
      p2: "Players on Reddy Book can participate live Teen Patti sessions, interact with real players, and experience authentic card action. Different Teen Patti variations on Reddy Book provide diverse betting options and exciting gameplay formats. Many users choose Reddy Book for Teen Patti because Reddy Book combines live interaction, smooth performance, secure gaming features.",
      mockTable: {
        tableName: "Teen Patti VIP 1",
        dealer: "Riya (Live HD)",
        players: "4,892 active",
        limits: "₹100 - ₹50,000",
        action: "Betting Open",
        extraLabel: "Pots: High",
        cards: ["A♦", "K♦", "Q♦"]
      }
    },
    {
      name: "Poker",
      badge: "Strategy & Skill",
      icon: "bi-suit-club-fill",
      title: "Poker on Reddy Book Strategy Meets Competition",
      desc: "Players using Reddy Book can join tournaments, compete against skilled opponents and develop advanced strategies. The poker environment on Reddy Book is designed support both beginners and experienced players.",
      p2: "Because Reddy Book provides reliable gameplay and easy navigation, poker remains one of the most frequently played games on Reddy Book.",
      mockTable: {
        tableName: "Texas Hold'em Pro",
        dealer: "Marcus (Live HD)",
        players: "2,144 active",
        limits: "₹500 - ₹1,00,000",
        action: "Pre-flop Stage",
        extraLabel: "Current Pot: ₹1,24,000",
        cards: ["J♠", "10♠"]
      }
    },
    {
      name: "Roulette",
      badge: "Classic Wheel",
      icon: "bi-arrow-repeat",
      title: "Roulette on Reddy Book Live Casino Excitement",
      desc: "Roulette continues to classic casino favorite available on Reddy Book. Users on Reddy Book can place bets on colors, numbers, combinations, and multiple roulette outcomes.",
      p2: "The live roulette experience on Reddy Book allows players watch spins in real time while enjoying professional dealer interaction. Many casino fans prefer Reddy Book because Reddy Book delivers a realistic roulette experience with fast result processing. Roulette players often choose Reddy Book for engaging gameplay and convenient betting interface.",
      mockTable: {
        tableName: "Lightning Roulette",
        dealer: "Elena (Live HD)",
        players: "12,855 active",
        limits: "₹50 - ₹25,000",
        action: "Spins Ongoing",
        extraLabel: "Recent Winners: 3 (Red), 26 (Black)",
        cards: ["14 (Red)"]
      }
    },
    {
      name: "Blackjack",
      badge: "Beat the Dealer",
      icon: "bi-file-earmark-binary",
      title: "Blackjack on Reddy Book Skill and Strategy Combined",
      desc: "Blackjack one of the most strategic games available on Reddy Book. Players on Reddy Book compete against the dealer while attempting to achieve a hand value closer to 21.",
      p2: "The Blackjack section Reddy Book provides smooth gameplay, real-time interaction and multiple table options. Many users enjoy Blackjack on Reddy Book because Reddy Book combines quick decisions with strategic opportunities. From beginners to experienced players, Reddy Book offers a rewarding Blackjack experience.",
      mockTable: {
        tableName: "Blackjack Royale 4",
        dealer: "Sophie (Live HD)",
        players: "5/7 Seats Taken",
        limits: "₹200 - ₹10,000",
        action: "Hit / Stand Action",
        extraLabel: "Dealer's Up Card: 9♦",
        cards: ["10♣", "K♠"]
      }
    },
    {
      name: "Slot Games",
      badge: "Instant Fun",
      icon: "bi-controller",
      title: "Slot Games on Reddy Book  Fast-Paced Entertainment",
      desc: "Slot games remain among the most popular entertainment options on Reddy Book. Users of Reddy Book can explore a variety of slot themes ranging from adventure and fantasy mythology and classic casino designs.",
      p2: "Many slot titles on Reddy Book feature bonus rounds, free spins, and special reward opportunities. Because gameplay on Reddy Book is fast and accessible, slot games continue to attract a large audience. Players seeking quick entertainment often turn to Reddy Book for its extensive slot game collection.",
      mockTable: {
        tableName: "Gates of Reddy",
        dealer: "RNG Verified",
        players: "34,120 online",
        limits: "₹10 - ₹5,000",
        action: "Jackpot Active",
        extraLabel: "Grand Jackpot: ₹5,82,410.50",
        cards: ["7", "7", "7"]
      }
    },
    {
      name: "Andar Bahar",
      badge: "Traditional Card Game",
      icon: "bi-arrow-left-right",
      title: "Andar Bahar on Reddy Book – Traditional Indian Casino Action",
      desc: "Andar Bahar is a favorite among Indian users and remains a highly popular game Reddy Book. The simple rules and fast gameplay make Andar Bahar accessible players of all experience levels.",
      p2: "On Reddy Book, users can enjoy live Andar Bahar tables and interactive gameplay. Many players choose Reddy Book because Reddy Book offers smooth streaming and easy betting controls. The traditional appeal Andar Bahar continues to make standout game on Reddy Book.",
      mockTable: {
        tableName: "Andar Bahar Live",
        dealer: "Divya (Live HD)",
        players: "9,482 active",
        limits: "₹100 - ₹25,000",
        action: "Andar Wins Last Round",
        extraLabel: "Joker Card: 8♥",
        cards: ["A♠", "8♠"]
      }
    },
    {
      name: "Baccarat",
      badge: "High Roller Favorite",
      icon: "bi-gem",
      title: "Baccarat on Reddy Book Simple Yet Exciting",
      desc: "Baccarat another widely enjoyed game available on Reddy Book. Straightforward betting options make Baccarat attractive to both new and experienced casino players.",
      p2: "Users on Reddy Book can wager on player outcomes, banker outcomes, draw results while enjoying professional live dealer action. The Baccarat experience on Reddy Book emphasizes simplicity, speed, and entertainment. Because Reddy Book provides a user-friendly interface and reliable performance, Baccarat remains one of the most popular live casino options on Reddy Book.",
      mockTable: {
        tableName: "Baccarat Squeeze",
        dealer: "Chloe (Live HD)",
        players: "3,912 active",
        limits: "₹1,000 - ₹2,00,000",
        action: "Deals in Progress",
        extraLabel: "Last Rounds: Banker, Player, Banker",
        cards: ["9♣", "8♦"]
      }
    }
  ];

  const casinoAdvantages = [
    {
      icon: "bi-lightning-fill",
      title: "Instant Deposits and Fast Withdrawals",
      desc: "One of the biggest advantages of Reddy Book efficient payment system. Reddy Book supports instant deposits and quick UPI withdrawals, allowing players to enjoy uninterrupted gaming sessions. With Reddy Book, managing funds simple, secure, and hassle-free."
    },
    {
      icon: "bi-camera-video-fill",
      title: "Real Dealers and HD Live Streaming",
      desc: "The live casino section on Reddy Book features professional dealers and high-definition streaming. Players on Reddy Book can enjoy authentic casino atmosphere from the comfort of their homes. Immersive experience offered by Reddy Book makes every game more interactive and engaging."
    },
    {
      icon: "bi-clock-fill",
      title: "24/7 Casino Access",
      desc: "Traditional casinos, Reddy Book available around the clock. Whether it's day or night, Reddy Book provides access live gaming tables and casino entertainment whenever you want to play. This flexibility is one of the reasons why players prefer Reddy Book."
    },
    {
      icon: "bi-shield-check",
      title: "Secure and Verified Platform",
      desc: "Security remains top priority at Reddy Book. Advanced protection measures help ensure that every transaction and account activity on Reddy Book remains secure. Players trust Reddy Book because Reddy Book focuses on providing safe and reliable gaming environment."
    },
    {
      icon: "bi-gift-fill",
      title: "Exclusive Bonuses and Rewards",
      desc: "Regular players on Reddy Book can enjoy exciting promotions, cashback offers, special rewards. These benefits make Reddy Book even more attractive users looking to maximize their gaming experience while enjoying their favorite casino games."
    }
  ];

  return (
    <section id="casino-hub" className="py-24 bg-casino-royal-pattern relative overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(160deg, #050608 0%, #0c0e14 60%, #0d1120 100%)' }}>
      {/* Decorative background glow orbs */}
      <div
        className="glow-orb glow-purple w-[600px] h-[600px] top-1/3 left-1/2 -translate-x-1/2 pointer-events-none opacity-30 animate-pulse-slow"
        style={{ animationDuration: '8s' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb glow-gold w-[400px] h-[400px] bottom-[150px] right-[100px] pointer-events-none opacity-15 animate-pulse-slow"
        style={{ animationDuration: '9s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Sub-section 1: Prefer Reddy Book */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-stretch">
          {/* Why Prefer Column */}
          <div className="reveal-left">
            <div className="h-full bg-[#11141d]/90 border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
              <div>
                <span className="section-tag">🌟 Player Preference</span>
                <h2 className="mb-6 font-heading font-extrabold uppercase leading-tight text-white mt-2" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
                  WHY SPORTS FANS <br className="hidden sm:block" />
                  PREFER <span className="gold-text">REDDY BOOK</span>?
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
                    Whether interested in cricket, football, kabaddi, tennis, or basketball, Reddy Book offers complete sports betting experience. Reddy Book provides competitive odds, live betting features, secure transactions, easy account management.
                  </p>
                  <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
                    Players trust Reddy Book because Reddy Book combines user-friendly technology extensive sports coverage. From major international tournaments to local competitions, Reddy Book ensures users always have access exciting betting opportunities.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-gold font-semibold text-sm leading-relaxed mb-0 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  Join Reddy Book today and discover why thousands sports enthusiasts continue to choose Reddy Book for cricket betting, football betting, kabaddi betting, tennis betting, basketball betting, and live sports entertainment.
                </p>
              </div>
            </div>
          </div>

          {/* Feels Different Column */}
          <div className="reveal-right">
            <div className="h-full bg-[#11141d]/90 border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
              <div>
                <span className="section-tag">⚡ Unique Experience</span>
                <h3 className="mb-4 font-heading font-bold uppercase text-white mt-2 text-xl md:text-2xl">
                  WHY SPORTS BETTING ON REDDY BOOK <span className="gold-text">FEELS DIFFERENT</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 font-medium">
                  Sports betting on Reddy Book delivers unique and engaging experience users who enjoy real-time action and competitive wagering. Thousands sports enthusiasts choose Reddy Book because Reddy Book combines speed, convenience, extensive betting opportunities in one platform.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex gap-2.5 items-start">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">Real-time odds updates Reddy Book during live matches.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">Quick deposits and withdrawals through secure payment methods on Reddy Book.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">Year-round sports coverage available on Reddy Book.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">A mobile-friendly betting experience designed Reddy Book.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">Dedicated customer assistance provided Reddy Book.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">Fast account management through your Reddy Book ID.</span>
                  </div>
                  <div className="flex gap-2.5 items-start col-span-1 sm:col-span-2">
                    <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-arrow-right-short font-extrabold"></i></span>
                    <span className="text-muted text-[0.82rem] leading-snug font-medium">Live betting functionality across major sporting events on Reddy Book.</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold/5 to-transparent border border-gold/15 p-4 rounded-xl">
                <p className="text-muted text-[0.82rem] leading-relaxed m-0 font-medium">
                  These features make Reddy Book a preferred destination for sports enthusiasts looking for an exciting and user-friendly betting experience. Choose your favorite sport, monitor live odds, and explore everything available through your Reddy Book ID.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 2: Live Casino Games */}
        <div className="text-center mb-16 reveal-up">
          <span className="section-tag">🎰 Live Casino Exchange</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            REDDY BOOK LIVE <span className="gold-text">CASINO GAMES</span> &amp; FEATURES
          </h2>
          <p className="text-muted max-w-[650px] mx-auto text-sm md:text-base leading-relaxed font-medium">
            Beyond sports betting, Reddy Book offers complete live casino experience. Players on Reddy Book can access popular casino games featuring immersive gameplay, live dealers, real-time interaction.
          </p>
        </div>

        {/* Interactive Casino Card Switcher (Desktop & Mobile Adaptive Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left: Tab selection sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {casinoGames.map((game, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGame(idx)}
                className={`p-4 rounded-xl flex items-center justify-between text-left transition-all duration-300 border cursor-pointer ${
                  activeGame === idx
                    ? "bg-gradient-to-r from-gold/15 to-gold/5 border-gold/40 shadow-[0_10px_20px_rgba(252,211,90,0.1)] scale-[1.02]"
                    : "bg-[#11141d]/85 border-white/5 hover:border-gold/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base border transition-all duration-300 ${
                    activeGame === idx ? "bg-gold text-black border-gold" : "bg-white/5 text-gold border-white/10"
                  }`}>
                    <i className={`bi ${game.icon}`}></i>
                  </div>
                  <div>
                    <h5 className={`text-xs md:text-sm font-black uppercase tracking-wider m-0 ${activeGame === idx ? "text-gold" : "text-white"}`}>
                      {game.name}
                    </h5>
                  </div>
                </div>
                <span className="text-[0.62rem] font-bold uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded text-muted">
                  {game.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Selected Card Detail panel */}
          <div className="lg:col-span-8">
            <div className="h-full bg-[#11141d]/85 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <i className={`bi ${casinoGames[activeGame].icon} text-[12rem] text-gold`}></i>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative z-10">
                {/* Details side */}
                <div className="md:col-span-7 flex flex-col gap-4">
                  <div>
                    <span className="section-tag mb-4">{casinoGames[activeGame].badge}</span>
                    <h3 className="text-white font-heading font-extrabold uppercase mt-2 mb-4 text-lg md:text-xl tracking-wide border-b border-white/5 pb-4">
                      {casinoGames[activeGame].title}
                    </h3>
                  </div>
                  
                  <p className="text-muted leading-relaxed text-sm font-medium">
                    {casinoGames[activeGame].desc}
                  </p>
                  
                  <p className="text-muted leading-relaxed text-sm font-medium">
                    {casinoGames[activeGame].p2}
                  </p>
                </div>

                {/* Live lobby view widget side */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="bg-[#0c0e14] border border-white/10 rounded-xl p-4 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[0.6rem] font-black text-red-500 uppercase tracking-widest font-heading">{casinoGames[activeGame].mockTable.action}</span>
                      </div>
                      <span className="text-[0.58rem] font-bold text-white/40 tracking-wider font-heading">{casinoGames[activeGame].mockTable.tableName}</span>
                    </div>

                    {/* Dealer box */}
                    <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-lg p-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-purple-900/35 border border-gold/40 flex items-center justify-center text-gold text-lg shrink-0">
                        <i className="bi bi-person-fill"></i>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.55rem] uppercase tracking-wider text-white/40">Live Dealer</span>
                        <span className="text-xs font-bold text-white font-heading">{casinoGames[activeGame].mockTable.dealer}</span>
                      </div>
                    </div>

                    {/* Cards / Game Elements Mockup */}
                    <div className="bg-emerald-950/20 border border-emerald-900/20 p-3 rounded-lg flex flex-col items-center justify-center gap-2 mb-3 text-center">
                      <span className="text-[0.58rem] uppercase tracking-wider text-emerald-400/60 font-black">Dealer Session Hand</span>
                      
                      <div className="flex gap-2">
                        {casinoGames[activeGame].mockTable.cards.map((card, cidx) => (
                          <div key={cidx} className="w-8 h-12 bg-white rounded shadow-md flex items-center justify-center text-xs font-bold text-black border border-black/10 select-none animate-float" style={{ animationDelay: `${cidx * 0.2}s` }}>
                            {card}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Table properties list */}
                    <div className="flex flex-col gap-1.5 text-[0.7rem] font-medium text-muted">
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>Lobby limits:</span>
                        <span className="text-gold font-bold">{casinoGames[activeGame].mockTable.limits}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>Players online:</span>
                        <span className="text-white font-bold">{casinoGames[activeGame].mockTable.players}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Round info:</span>
                        <span className="text-emerald-400 font-bold truncate max-w-[120px]">{casinoGames[activeGame].mockTable.extraLabel}</span>
                      </div>
                    </div>

                    {/* Join Table Call */}
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <a href="#cta-section" className="btn btn-gold w-full text-center py-2 px-4 text-[0.68rem] font-black tracking-widest inline-block transition-all duration-300">
                        GET ID &amp; PLAY
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <p className="text-gold font-semibold text-xs uppercase tracking-wider m-0 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  ⚡ Play Live Casino Games Exchange
                </p>
                <a href="#cta-section" className="btn btn-gold py-2 px-5 text-xs inline-flex items-center gap-2">
                  <i className="bi bi-person-plus-fill"></i> Get Account ID
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Casino Players Choose Reddy Book */}
        <div className="reveal-up max-w-[860px] mx-auto text-center border-t border-gold/10 pt-16 mb-24">
          <span className="section-tag">🏆 Player Loyalty</span>
          <h3 className="mb-4 uppercase leading-tight font-heading font-extrabold mt-4" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
            Why Casino Players <span className="gold-text">Choose Reddy Book</span>?
          </h3>
          <div className="flex flex-col gap-4 max-w-[750px] mx-auto">
            <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
              Casino players continue to choose Reddy Book because Reddy Book delivers a complete gaming environment. From Teen Patti and Poker to Roulette, Blackjack, Slots, Andar Bahar, and Baccarat, Reddy Book offers something for every type of player.
            </p>
            <p className="text-gold font-semibold text-sm leading-relaxed mb-0">
              The popularity of Reddy Book comes from secure platform, smooth gameplay, extensive game selection, and reliable user experience. Whether you're exploring live casino action or sports betting opportunities, Reddy Book provides a seamless experience from start to finish.
            </p>
            <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
             Create your Reddy Book ID access premium gaming features, and discover why thousands of users trust Reddy Book every day sports betting and live casino entertainment.
            </p>
          </div>
        </div>

        {/* Sub-section 3: Key Casino Advantages */}
        <div className="text-center mb-16 reveal-up">
          <span className="section-tag">💎 Key Casino Advantages</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            KEY CASINO <span className="gold-text">ADVANTAGES</span> ON REDDY BOOK
          </h2>
          <p className="text-muted max-w-[650px] mx-auto text-sm md:text-base leading-relaxed font-medium">
           Experience premium casino entertainment with Reddy Book, platform designed provide convenience, security, and excitement for every player. Thousands users choose Reddy Book because Reddy Book combines advanced technology smooth gaming experience, making Reddy Book one of the preferred destinations for online casino enthusiasts.
          </p>
        </div>

        {/* Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 justify-center">
          {casinoAdvantages.map((adv, idx) => (
            <div key={idx} className="reveal-up h-full">
              <div className="h-full bg-[#11141d]/90 border border-white/5 rounded-2xl p-8 hover:border-gold/30 hover:bg-gradient-to-b hover:from-[#151a26] hover:to-[#11141d] transition-all duration-300 group flex flex-col justify-between min-h-[260px]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl mb-6 border border-gold/20 group-hover:scale-110 transition-transform duration-300">
                    <i className={`bi ${adv.icon}`}></i>
                  </div>
                  <h4 className="text-white font-bold text-base mb-3 group-hover:text-gold transition-colors duration-300">
                    {adv.title}
                  </h4>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-0 font-medium">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Reddy Book for Casino Entertainment (Concluding Footer Card) */}
        <div className="reveal-up bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 p-8 md:p-10 rounded-2xl text-center">
          <h4 className="text-white font-heading font-bold uppercase mb-4 text-lg md:text-xl">
            Why Choose Reddy Book for Casino Entertainment?
          </h4>
          <p className="text-muted text-sm md:text-base leading-relaxed max-w-[750px] mx-auto mb-6 font-medium">
            From secure transactions and fast withdrawals to live dealer games and 24/7 access, Reddy Book delivers complete casino experience. Whether you're playing Teen Patti, Poker, Roulette, Blackjack, Slots, or Baccarat, Reddy Book provides the tools and features needed for smooth and enjoyable gameplay.
          </p>

          <p className="text-muted text-sm md:text-base leading-relaxed max-w-[750px] mx-auto mb-6 font-medium">
Join Reddy Book today and discover why so many players trust Reddy Book for exciting online casino entertainment, premium gaming features, and a seamless user experience.
          </p>

          <a href="#cta-section" className="btn btn-gold inline-flex items-center gap-2 py-3.5 px-8 text-sm">
            <i className="bi bi-person-plus-fill"></i> Join Reddy Book Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default CasinoHub;
