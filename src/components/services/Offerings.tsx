import React from "react";

export const Offerings: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">🛠️ Core Offerings</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            OUR PREMIUM <span className="gold-text">SERVICES</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            We deliver state-of-the-art systems built specifically for high liquidity and competitive margins.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 gap-y-6 mt-2">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="glass-card service-card reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-shuffle"></i>
              </div>
              <h5 className="text-white font-bold text-[1.1rem] mb-4">P2P Sports Exchange</h5>
              <p className="text-dim text-[0.85rem] leading-relaxed">
                Back and lay live cricket, soccer, and tennis markets. Match bet allocations against other players instead of the bookmaker.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="glass-card service-card reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-suit-spade-fill"></i>
              </div>
              <h5 className="text-white font-bold text-[1.1rem] mb-4">Live Casino Suites</h5>
              <p className="text-dim text-[0.85rem] leading-relaxed">
                HD video streams of live dealer casino action. Play classic games like Teen Patti, Andar Bahar, Roulette, Poker, and Slots.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="glass-card service-card reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-whatsapp"></i>
              </div>
              <h5 className="text-white font-bold text-[1.1rem] mb-4">60s Account Setup</h5>
              <p className="text-dim text-[0.85rem] leading-relaxed">
                WhatsApp support agents process and launch your premium Betting ID instantly. No complicated verification portals.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="glass-card service-card reveal-up">
              <div className="service-icon-box">
                <i className="bi bi-clock-history"></i>
              </div>
              <h5 className="text-white font-bold text-[1.1rem] mb-4">2-Minute Cashout</h5>
              <p className="text-dim text-[0.85rem] leading-relaxed">
                UPI, Paytm, and NetBanking withdrawals are credited directly to your bank account with automatic payout processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
