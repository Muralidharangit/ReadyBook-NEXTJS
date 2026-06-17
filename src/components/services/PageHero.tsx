import React from "react";
import Button from "@/components/common/Button";

export const PageHero: React.FC = () => {
  return (
    <section className="page-hero">
      <div className="particles-container absolute inset-0 z-0 pointer-events-none" id="heroParticles" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-5 gap-y-12 items-center">
          {/* Text Info */}
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left reveal-left">
            <span className="section-tag mb-4">⚡ Services Overview</span>
            <h1 className="mb-6 uppercase leading-tight font-heading font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              EXCHANGE & CASINO <span className="gold-text">SOLUTIONS</span>
            </h1>
            <p className="text-dim text-[1.1rem] leading-[1.7] max-w-[540px] mx-auto lg:mx-0 mb-6">
              Access peer-to-peer liquidity endpoints, HD live-streamed table rooms, custom risk configurations, and instant credit accounts.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="px-6 py-4">
                <i className="bi bi-whatsapp"></i> Get Live ID
              </Button>
              <Button href="/games" variant="gold-outline" className="px-6 py-4">
                Explore Lobby
              </Button>
            </div>
          </div>

          {/* Secure Card Visual */}
          <div className="w-full lg:w-1/2 px-4 text-center reveal-right">
            <div className="glass-card p-6 bordergold max-w-[500px] mx-auto">
              <h4 className="gold-text mb-4 font-heading font-extrabold text-[1.25rem]">AUTO SETTLEMENTS</h4>
              <p className="text-muted text-[0.9rem] mb-0 leading-relaxed">
                Our automatic payout engine manages withdrawals and updates ledgers within 2 minutes flat, with no document hurdles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
