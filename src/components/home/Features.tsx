import React from "react";

export const Features: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#11141d] overflow-hidden">
      {/* Background glow orb */}
      <div 
        className="glow-orb glow-purple w-[600px] h-[600px] top-1/2 -left-[180px] -translate-y-1/2 pointer-events-none" 
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-5">
        <div className="flex flex-wrap -mx-4 gap-y-12 items-center">
          {/* Visual Column */}
          <div className="w-full lg:w-1/2 px-4 reveal-left">
            <div className="about-img-wrap relative">
              <img 
                src="/images/WOMEN WITH CASINO.png" 
                alt="Why Choose Reddy Book Exchange"
                className="w-full about-img relative"
              />
              <div className="about-prize-badge">
                100% <small>Secure Payments</small>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 px-4 reveal-right">
            <span className="section-tag">⚡ Core Features</span>
            <h2 className="mb-6 uppercase leading-tight font-heading font-extrabold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              WHY CHOOSE <span className="gold-text">US</span>?
            </h2>
            <p className="text-muted leading-relaxed mb-7">
              Reddy Book Exchange offers the fastest, most reliable peer-to-peer betting platform in the market.
              Experience gaming with premium odds, extensive coverage, and industry-best transaction speeds.
            </p>

            <div className="flex flex-col gap-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-graph-up-arrow text-gold"></i>
                </div>
                <div>
                  <h5 className="font-bold text-gold text-[0.88rem] mb-1">Premium Betting Exchange</h5>
                  <p className="text-muted text-[0.83rem] m-0">Back and lay bets with unbeatable odds and maximum market liquidity.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-dribbble text-gold"></i>
                </div>
                <div>
                  <h5 className="font-bold text-gold text-[0.88rem] mb-1">Extensive Sports Coverage</h5>
                  <p className="text-muted text-[0.83rem] m-0">From live Cricket (IPL, World Cup) and Soccer to Tennis and e-Sports.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-dice-5 text-gold"></i>
                </div>
                <div>
                  <h5 className="font-bold text-gold text-[0.88rem] mb-1">Thrilling Live Casino</h5>
                  <p className="text-muted text-[0.83rem] m-0">Access top-tier slots, live Roulette, Baccarat, Teen Patti, and virtual sports 24/7.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shield-lock text-gold"></i>
                </div>
                <div>
                  <h5 className="font-bold text-gold text-[0.88rem] mb-1">Safe &amp; Secure</h5>
                  <p className="text-muted text-[0.83rem] m-0">100% secure transactions with instant deposits and rapid withdrawals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
