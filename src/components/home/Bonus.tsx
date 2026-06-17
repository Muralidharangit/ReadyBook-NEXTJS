import React from "react";

export const Bonus: React.FC = () => {
  return (
    <section id="promotions" className="relative bg-bg-secondary py-24 border-b border-white/5">
      {/* Background glow orb */}
      <div 
        className="glow-orb glow-gold w-[400px] h-[400px] top-0 right-0 pointer-events-none" 
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-5">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">🎁 Promotional Offers</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            KICKSTART YOUR <span className="gold-text">WINNING STREAK</span>!
          </h2>
          <p className="text-muted max-w-[700px] mx-auto leading-relaxed">
            Join today and claim your 100% Welcome Bonus on your first deposit. Enjoy cashbacks, loyalty boosts, and exclusive rewards.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 gap-y-6">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 px-4 reveal-up">
            <div className="offer-card">
              <span className="offer-badge">First Deposit Offer</span>
              <h4 className="offer-title">100% Welcome Bonus</h4>
              <p className="offer-desc">
                Claim double your value up to ₹20,000 instantly. Valid on all sports markets and exchange options.
              </p>
              <a href="#cta-section" className="btn btn-gold offer-btn">
                Claim Your Bonus
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 px-4 reveal-up">
            <div className="offer-card">
              <span className="offer-badge">Casino Promo</span>
              <h4 className="offer-title">10% Daily Cashback</h4>
              <p className="offer-desc">
                Get up to 10% cashback settled daily on your live casino dealer games, roulette slots, and virtual tables.
              </p>
              <a href="#cta-section" className="btn btn-gold offer-btn">
                Play Casino
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 px-4 reveal-up">
            <div className="offer-card">
              <span className="offer-badge">Social Booster</span>
              <h4 className="offer-title">Referral Free Bet</h4>
              <p className="offer-desc">
                Refer your gaming friends to Reddy Book and claim a free bet of ₹1,000 on their first deposit setup.
              </p>
              <a href="#cta-section" className="btn btn-gold offer-btn">
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
