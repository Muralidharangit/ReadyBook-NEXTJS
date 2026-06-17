import React from "react";

export const CoreValues: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">💡 Core Values</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            OUR GUIDING <span className="gold-text">PRINCIPLES</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            We build features that empower players and set new milestones in the online gaming market.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 gap-y-6 mt-2">
          {/* Card 1 */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="glass-card value-card p-6 h-full reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-shield-fill-check"></i>
              </div>
              <h4 className="font-heading font-extrabold text-white text-[1.2rem] mb-4">Security First</h4>
              <p className="text-dim text-[0.92rem] leading-relaxed">
                100% verified payment accounts and instant UPI ledger settlements. Your funds are protected at every stage of play.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="glass-card value-card p-6 h-full reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4 className="font-heading font-extrabold text-white text-[1.2rem] mb-4">Exchange Liquidity</h4>
              <p className="text-dim text-[0.92rem] leading-relaxed">
                We connect directly to Betfair&apos;s API endpoints to ensure competitive back and lay betting spreads with maximum volume.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="glass-card value-card p-6 h-full reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <h4 className="font-heading font-extrabold text-white text-[1.2rem] mb-4">Speed Guaranteed</h4>
              <p className="text-dim text-[0.92rem] leading-relaxed">
                No waiting periods or unnecessary documentation. Withdrawals are queued and processed automatically in under 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
