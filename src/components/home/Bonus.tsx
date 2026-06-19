import React from "react";

export const Bonus: React.FC = () => {
  return (
    <section id="promotions" className="relative bg-promotions-pattern py-24 overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(160deg, #0d1120 0%, #0c0e14 50%, #050608 100%)' }}>
      {/* Background glow orbs */}
      <div
        className="glow-orb glow-gold w-[400px] h-[400px] top-0 right-0 pointer-events-none opacity-20 animate-pulse-slow"
        style={{ animationDuration: '8s' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb glow-purple w-[300px] h-[300px] bottom-0 left-0 pointer-events-none opacity-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <span className="section-tag">🎁 Reddy Book Promotions</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            KICKSTART YOUR <span className="gold-text">WINNING STREAK</span>!
          </h2>
          <p className="text-muted max-w-[700px] mx-auto leading-relaxed text-sm md:text-base font-medium">
            Join Reddy Book today and claim your 100% Welcome Bonus on your first deposit. Enjoy cashbacks, loyalty boosts, and exclusive rewards on the official Reddy Book platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="reveal-up">
            <div className="h-full bg-gradient-to-br from-[#171b26]/90 to-[#11141d]/90 border border-white/5 hover:border-gold/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-lg">
              <div>
                <span className="inline-block text-[0.62rem] font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 px-3 py-1.5 rounded-full mb-6">
                  Reddy Book Welcome Bonus
                </span>
                <h4 className="text-white font-heading font-extrabold uppercase text-lg md:text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                  100% Welcome Bonus
                </h4>
                <p className="text-muted leading-relaxed text-sm font-medium mb-8">
                  Claim double your value up to ₹20,000 instantly with Reddy Book. This exclusive bonus is valid on all sports markets and exchange options provided by Reddy Book.
                </p>
              </div>
              <a href="#cta-section" className="btn btn-gold w-full text-center py-3.5 text-xs font-bold mt-auto tracking-wider">
                Claim Reddy Book Bonus
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal-up">
            <div className="h-full bg-gradient-to-br from-[#171b26]/90 to-[#11141d]/90 border border-white/5 hover:border-gold/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-lg">
              <div>
                <span className="inline-block text-[0.62rem] font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 px-3 py-1.5 rounded-full mb-6">
                  Reddy Book Casino Promo
                </span>
                <h4 className="text-white font-heading font-extrabold uppercase text-lg md:text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                  10% Daily Cashback
                </h4>
                <p className="text-muted leading-relaxed text-sm font-medium mb-8">
                  Get up to 10% cashback settled daily on your live casino dealer games, roulette slots, and virtual tables at Reddy Book.
                </p>
              </div>
              <a href="#cta-section" className="btn btn-gold w-full text-center py-3.5 text-xs font-bold mt-auto tracking-wider">
                Play Casino
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="reveal-up">
            <div className="h-full bg-gradient-to-br from-[#171b26]/90 to-[#11141d]/90 border border-white/5 hover:border-gold/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-lg">
              <div>
                <span className="inline-block text-[0.62rem] font-bold uppercase tracking-wider bg-white/5 text-muted border border-white/10 px-3 py-1.5 rounded-full mb-6">
                  Social Booster
                </span>
                <h4 className="text-white font-heading font-extrabold uppercase text-lg md:text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                  Referral Free Bet
                </h4>
                <p className="text-muted leading-relaxed text-sm font-medium mb-8">
                  Refer your gaming friends to Reddy Book and claim a free bet of ₹1,000 on their first deposit setup.
                </p>
              </div>
              <a href="#cta-section" className="btn btn-gold w-full text-center py-3.5 text-xs font-bold mt-auto tracking-wider">
                Refer a Friend
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
