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
            <span className="section-tag mb-4">✨ Company Overview</span>
            <h1 className="mb-6 uppercase leading-tight font-heading font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              WE ARE REDDY <span className="gold-text">EXCHANGE</span>
            </h1>
            <p className="text-dim text-[1.1rem] leading-[1.7] max-w-[540px] mx-auto lg:mx-0 mb-6">
              Pioneering the live peer-to-peer betting marketplace with unbeatable odds, full transaction transparency, and lightning-fast credit settlements.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="px-6 py-4">
                <i className="bi bi-whatsapp"></i> Get Live ID
              </Button>
              <Button href="/services" variant="gold-outline" className="px-6 py-4">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Secure Card Visual */}
          <div className="w-full lg:w-1/2 px-4 text-center reveal-right">
            <div className="glass-card p-6 bordergold max-w-[500px] mx-auto">
              <h3 className="gold-text mb-4 font-heading font-extrabold text-[1.3rem]" style={{ fontFamily: "var(--font-heading)" }}>
                100% SECURE
              </h3>
              <p className="text-muted text-[0.9rem] mb-6">
                Operating with the absolute highest security encryption standards to keep your funds safe.
              </p>
              <div className="flex flex-wrap -mx-3 gap-y-4">
                <div className="w-1/2 px-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-gold/10">
                    <h4 className="gold-text mb-1 font-black text-[1.2rem]">12K+</h4>
                    <span className="text-[0.75rem] text-faint">Active Users</span>
                  </div>
                </div>
                <div className="w-1/2 px-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-gold/10">
                    <h4 className="gold-text mb-1 font-black text-[1.2rem]">2 Min</h4>
                    <span className="text-[0.75rem] text-faint">Withdrawals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
