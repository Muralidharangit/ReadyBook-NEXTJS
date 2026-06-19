"use client";

import React, { useState } from "react";

export const SportsBook: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const sports = [
    {
      id: "cricket",
      icon: "bi-trophy-fill",
      name: "Cricket",
      title: "Cricket Betting on Reddy Book",
      desc: "Reddy Book offers one of most exciting cricket betting experiences for sports enthusiasts. Cricket remains the most popular category on Reddy Book due its massive fan following and year-round tournaments. Users on Reddy Book can place bets major events including the IPL, ICC tournaments, Asia Cup, and international T20 leagues.",
      markets: "With Reddy Book, bettors explore multiple markets such match winner predictions, session runs, total boundaries, top batsman, top bowler, and live betting opportunities. The live betting feature on Reddy Book becomes especially engaging during powerplays and death overs where odds change rapidly.",
      extra: "Many users prefer Reddy Book for cricket betting because Reddy Book provides real-time updates, competitive odds, and a seamless betting experience. By following team form, pitch reports, and player statistics, users of Reddy Book can make informed betting decisions.",
      mockMatch: {
        teams: "India vs Australia",
        tournament: "ICC T20 World Cup — Live Match",
        score: "184/4 (18.2 Ov)",
        status: "Live Match",
        detail: "Target: 192 | Run Rate: 10.04",
        marketsList: [
          { name: "Match Odds (IND)", back: "1.82", lay: "1.83" },
          { name: "Match Odds (AUS)", back: "2.15", lay: "2.20" },
          { name: "Next Over Runs (Over 19)", back: "1.90", lay: "1.95" }
        ]
      }
    },
    {
      id: "kabaddi",
      icon: "bi-people-fill",
      name: "Kabaddi",
      title: "Kabaddi Betting on Reddy Book",
      desc: "Kabaddi betting become increasingly popular, and Reddy Book provides extensive coverage major kabaddi tournaments. Through Reddy Book, users can place wagers Pro Kabaddi League matches as well as international kabaddi competitions.",
      markets: "Popular betting markets on Reddy Book include match winners, total raid points, total tackle points, and team performance bets. Since kabaddi is a fast-paced sport, odds Reddy Book change frequently, creating multiple live betting opportunities.",
      extra: "Sports fans choose Reddy Book because Reddy Book delivers real-time match updates and easy access kabaddi betting markets. Experienced player, Reddy Book offers a simple and exciting kabaddi betting experience.",
      mockMatch: {
        teams: "Patna Pirates vs Pink Panthers",
        tournament: "Pro Kabaddi League — Live Match",
        score: "32 - 28 (2nd Half)",
        status: "Live Match",
        detail: "Time remaining: 4:15 | Raid Points: PAT 18 - PIN 15",
        marketsList: [
          { name: "Match Odds (PAT)", back: "1.65", lay: "1.67" },
          { name: "Match Odds (PIN)", back: "2.40", lay: "2.45" },
          { name: "Total Points Over 60.5", back: "1.85", lay: "1.90" }
        ]
      }
    },
    {
      id: "football",
      icon: "bi-dribbble",
      name: "Football",
      title: "Football Betting on Reddy Book",
      desc: "Football betting is one of the most active categories available on Reddy Book. With matches taking place daily across globe, Reddy Book gives users access to betting opportunities in the Premier League, La Liga, Serie A, Bundesliga, UEFA Champions League, and FIFA tournaments.",
      markets: "On Reddy Book, users can place bets match outcomes, total goals, both teams to score, handicap markets, and live in-play events. Football fans appreciate Reddy Book because Reddy Book provides comprehensive market coverage and instant betting options.",
      extra: "By analyzing team form, player injuries, practical setups, users on Reddy Book can improve their betting strategies. The football section on Reddy Book is designed to deliver a smooth and engaging experience for every user.",
      mockMatch: {
        teams: "Real Madrid vs Man City",
        tournament: "UEFA Champions League — Live Match",
        score: "2 - 1 (74 Mins)",
        status: "Live Match",
        detail: "Possession: RM 48% - MC 52% | Shots: 12 - 14",
        marketsList: [
          { name: "Match Odds (RMA)", back: "1.50", lay: "1.52" },
          { name: "Match Odds (MCI)", back: "3.20", lay: "3.30" },
          { name: "Match Odds (DRAW)", back: "4.10", lay: "4.30" }
        ]
      }
    },
    {
      id: "tennis",
      icon: "bi-activity",
      name: "Tennis",
      title: "Tennis Betting on Reddy Book",
      desc: "Tennis betting on Reddy Book attracts users who enjoy fast results and continuous action. Reddy Book covers major ATP and WTA events along Grand Slam tournaments including Wimbledon, the Australian Open, French Open, and US Open.",
      markets: "Users of Reddy Book can place wagers on match winners, total games, set betting, and live betting markets. During crucial tie-break moments, Reddy Book provides dynamic odds allow users react instantly to match developments.",
      extra: "Many bettors on Reddy Book because Reddy Book offers updated statistics, live scores, extensive tennis coverage. Following player fitness, surface preferences, recent performance can help Reddy Book users make smarter predictions.",
      mockMatch: {
        teams: "Carlos Alcaraz vs Novak Djokovic",
        tournament: "Wimbledon Finals — Live Match",
        score: "6-4, 3-6, 4-3",
        status: "Live Match",
        detail: "Set 3 - Alcaraz serving | Aces: ALC 8 - DJO 5",
        marketsList: [
          { name: "Match Odds (ALC)", back: "1.75", lay: "1.78" },
          { name: "Match Odds (DJO)", back: "2.20", lay: "2.24" },
          { name: "Set 3 Winner (ALC)", back: "1.60", lay: "1.65" }
        ]
      }
    },
    {
      id: "basketball",
      icon: "bi-globe",
      name: "Basketball",
      title: "Basketball Betting on Reddy Book",
      desc: "Basketball another exciting betting category available on Reddy Book. Popular leagues such as the NBA, EuroLeague, international competitions attract thousands of bettors to Reddy Book every day.",
      markets: "Reddy Book, users can bet on match winners, point spreads, quarter results, player performance markets, total points scored. The fast-paced nature basketball makes live betting Reddy Book particularly thrilling.",
      extra: "Many sports fans choose Reddy Book because Reddy Book delivers real-time odds updates and smooth betting functionality. As scoring runs can quickly change the momentum a game, Reddy Book provides numerous opportunities live betting throughout each match.",
      mockMatch: {
        teams: "LA Lakers vs Boston Celtics",
        tournament: "NBA Championship — Live Match",
        score: "98 - 95 (Q4 2:14)",
        status: "Live Match",
        detail: "Lakers possession | Team Fouls: LAL 3 - CEL 4",
        marketsList: [
          { name: "Match Odds (LAL)", back: "1.62", lay: "1.64" },
          { name: "Match Odds (CEL)", back: "2.50", lay: "2.55" },
          { name: "Total Points Over 205.5", back: "1.80", lay: "1.85" }
        ]
      }
    }
  ];

  const featuresList = [
    "Instant access your Reddy Book ID.",
    "Secure login and account management through Reddy Book.",
    "Live scores and real-time updates across major sporting events.",
    "Fast UPI deposits and withdrawals supported by Reddy Book.",
    "Access cricket, football, kabaddi, tennis, esports, and more on Reddy Book.",
    "Enjoy live casino games directly through Reddy Book.",
    "User-friendly dashboard managing your Reddy Book ID.",
    "Quick transaction processing and secure payment systems.",
    "Exclusive bonuses and rewards available to Reddy Book members.",
    "Dedicated support team available all Reddy Book users."
  ];

  return (
    <section id="sports-book" className="py-24 bg-sport-stripe-pattern relative overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(160deg, #060709 0%, #0c0e14 50%, #070913 100%)' }}>
      {/* Background glow orbs */}
      <div
        className="glow-orb glow-purple w-[600px] h-[600px] -top-[100px] -right-[150px] pointer-events-none opacity-30 animate-pulse-slow"
        style={{ animationDuration: '9s' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb glow-gold w-[400px] h-[400px] bottom-[100px] -left-[100px] pointer-events-none opacity-15 animate-pulse-slow"
        style={{ animationDuration: '7s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
          {/* Get Your ID Text Card */}
          <div className="reveal-left">
            <div className="h-full bg-[#11141d]/90 border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
              <div>
                <span className="section-tag">🚀 Official Access</span>
                <h2 className="mb-6 font-heading font-extrabold uppercase leading-tight text-white mt-2" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
                  GET YOUR OFFICIAL <br className="hidden sm:block" />
                  <span className="gold-text">REDDY BOOK ID</span> TODAY
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
                    Ready to explore everything available on Reddy Book, obtaining a verified Reddy Book ID is the first step. A trusted Reddy Book ID gives instant access to sports betting, casino gaming, secure payments, and exciting promotions.
                  </p>
                  <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
                    With a fully activated Reddy Book ID, users can enjoy smooth experience across the Reddy Book platform, with real-time updates, secure account management, and easy access to all available features.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-gold font-semibold text-sm leading-relaxed mb-0 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  Whether interested in cricket betting, football betting, live casino games, or exclusive promotions, Reddy Book ID provides complete access to the world of Reddy Book.
                </p>
              </div>
            </div>
          </div>

          {/* Features Card */}
          <div className="reveal-right">
            <div className="h-full bg-[#11141d]/90 border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
              <div>
                <span className="section-tag">⚡ Key Features</span>
                <h3 className="mb-4 font-heading font-bold uppercase text-white mt-2 text-xl md:text-2xl">
                  REDDY BOOK <span className="gold-text">FEATURES</span>
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 font-medium">
                  Experience premium online gaming and sports entertainment Reddy Book, designed for users who value speed, security, and convenience. The Reddy Book platform is accessible across Android, iOS, tablets, and desktop devices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {featuresList.map((feat, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <span className="text-gold mt-0.5 shrink-0 text-xs"><i className="bi bi-patch-check-fill"></i></span>
                      <span className="text-muted text-[0.82rem] leading-snug font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold/5 to-transparent border border-gold/15 p-4 rounded-xl">
                <p className="text-muted text-[0.82rem] leading-relaxed m-0 font-medium">
                  Create and verify your Reddy Book ID today to unlock full potential of Reddy Book and enjoy a secure, seamless, and feature-rich online gaming experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sports Betting Sub-section */}
        <div className="text-center mb-16 reveal-up">
          <span className="section-tag">⚽ Sports Coverage</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            SPORTS YOU CAN BET ON AT <span className="gold-text">REDDY BOOK</span>
          </h2>
        </div>

        {/* Interactive Sports Tabs (Desktop / Large screen) */}
        <div className="hidden md:flex justify-center gap-3 mb-10 reveal-up">
          {sports.map((sport, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3.5 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                activeTab === index
                  ? "bg-gold border-gold text-[#0c0e14] shadow-[0_10px_25px_rgba(252,211,90,0.25)] scale-105"
                  : "bg-[#11141d]/80 border-white/5 text-muted hover:border-gold/30 hover:text-white"
              }`}
            >
              <i className={`bi ${sport.icon} text-base`}></i> {sport.name}
            </button>
          ))}
        </div>

        {/* Selected Tab content (Desktop) */}
        <div className="hidden md:block bg-[#11141d]/80 border border-white/5 rounded-2xl p-8 md:p-10 reveal-up backdrop-blur-sm relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl border border-gold/20">
                    <i className={`bi ${sports[activeTab].icon}`}></i>
                  </div>
                  <h3 className="text-white font-heading font-extrabold uppercase text-xl md:text-2xl tracking-wide mb-0">
                    {sports[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-muted leading-relaxed text-sm md:text-base font-medium">
                  {sports[activeTab].desc}
                </p>

                <div className="p-5 bg-white/[0.02] border-l-2 border-gold rounded-r-xl">
                  <strong className="text-gold text-xs uppercase tracking-widest block mb-2 font-bold">Betting Markets & Live Coverage</strong>
                  <p className="text-muted leading-relaxed text-[0.88rem] m-0 font-medium">
                    {sports[activeTab].markets}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
                <p className="text-muted leading-relaxed text-[0.88rem] m-0 font-medium">
                  {sports[activeTab].extra}
                </p>
              </div>
            </div>

            {/* Right Live Odds Ticket Mockup Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-[#0c0e14] border border-white/10 rounded-xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                
                {/* Live Banner */}
                <div className="flex justify-between items-center border-b border-white/5 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[0.68rem] font-bold text-emerald-400 uppercase tracking-widest font-heading">{sports[activeTab].mockMatch.status}</span>
                  </div>
                  <span className="text-[0.62rem] font-medium text-white/40 tracking-wider font-heading">{sports[activeTab].mockMatch.tournament}</span>
                </div>

                {/* Score and Match Details */}
                <div className="text-center py-4 bg-white/[0.02] rounded-lg border border-white/5 mb-4 relative">
                  <h4 className="text-white font-bold text-base md:text-lg mb-1.5 tracking-wide">{sports[activeTab].mockMatch.teams}</h4>
                  <span className="text-xl md:text-2xl font-black text-gold font-heading tracking-widest block py-1.5">{sports[activeTab].mockMatch.score}</span>
                  <span className="text-[0.7rem] font-medium text-muted tracking-wider block mt-1">{sports[activeTab].mockMatch.detail}</span>
                </div>

                {/* Odds Market Selection */}
                <div className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-12 text-[0.6rem] font-bold text-white/40 uppercase tracking-widest pb-1">
                    <div className="col-span-6">Market Options</div>
                    <div className="col-span-3 text-center text-blue-400">Back</div>
                    <div className="col-span-3 text-center text-pink-400">Lay</div>
                  </div>
                  
                  {sports[activeTab].mockMatch.marketsList.map((m, idx) => (
                    <div key={idx} className="grid grid-cols-12 items-center bg-[#171b27] border border-white/5 rounded p-2 text-xs font-semibold">
                      <div className="col-span-6 text-white/80 truncate pr-2">{m.name}</div>
                      
                      <div className="col-span-3 px-1">
                        <button className="w-full py-1.5 bg-blue-600/90 text-white rounded text-[0.72rem] font-bold cursor-pointer hover:bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.2)] transition-colors text-center block">
                          {m.back}
                        </button>
                      </div>
                      
                      <div className="col-span-3 px-1">
                        <button className="w-full py-1.5 bg-pink-600/90 text-white rounded text-[0.72rem] font-bold cursor-pointer hover:bg-pink-600 shadow-[0_0_8px_rgba(219,39,119,0.2)] transition-colors text-center block">
                          {m.lay}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action inside Match Slip */}
                <div className="mt-5 border-t border-white/5 pt-4">
                  <a href="#cta-section" className="btn btn-gold w-full text-center inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold transition-all duration-300">
                    <i className="bi bi-wallet2 text-xs"></i> Register & Place Live Bet
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Accordion / Stacking Layout (Mobile only) */}
        <div className="block md:hidden flex flex-col gap-6">
          {sports.map((sport, index) => (
            <div key={index} className="bg-[#11141d] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-xl border border-gold/20 shrink-0">
                  <i className={`bi ${sport.icon}`}></i>
                </div>
                <h4 className="text-white font-heading font-bold uppercase text-base mb-0 tracking-wide">
                  {sport.title}
                </h4>
              </div>
              
              <p className="text-muted leading-relaxed text-[0.85rem] mb-4">
                {sport.desc}
              </p>
              
              <div className="p-4 bg-white/[0.02] border-l-2 border-gold rounded-r-xl mb-4">
                <strong className="text-gold text-[0.72rem] uppercase tracking-wider block mb-1.5 font-bold">Betting Markets & Live Coverage</strong>
                <p className="text-muted leading-relaxed text-[0.8rem] m-0">
                  {sport.markets}
                </p>
              </div>

              {/* Mobile Match Odds Mockup */}
              <div className="bg-[#0c0e14] border border-white/10 rounded-xl p-4 shadow-xl mb-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[0.62rem] font-bold text-emerald-400 uppercase tracking-widest font-heading">Live</span>
                  </div>
                  <span className="text-[0.58rem] text-white/40 tracking-wider">{sport.mockMatch.teams}</span>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-[0.65rem] text-muted">{sport.mockMatch.tournament}</span>
                  <span className="text-sm font-bold text-gold font-heading tracking-widest">{sport.mockMatch.score}</span>
                </div>

                <div className="flex flex-col gap-2">
                  {sport.mockMatch.marketsList.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="grid grid-cols-12 items-center bg-[#171b27] border border-white/5 rounded p-1.5 text-[0.68rem]">
                      <div className="col-span-6 text-white/80 truncate">{m.name}</div>
                      <div className="col-span-3 text-center text-blue-400 font-bold">{m.back}</div>
                      <div className="col-span-3 text-center text-pink-400 font-bold">{m.lay}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-muted leading-relaxed text-[0.85rem] mb-4">
                {sport.extra}
              </p>

              <a href="#cta-section" className="btn btn-gold w-full text-center inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold mt-2">
                <i className="bi bi-person-plus-fill"></i> Get ID & Place Bet
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SportsBook;
