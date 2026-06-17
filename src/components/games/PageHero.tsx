import React from "react";
import Button from "@/components/common/Button";

export const PageHero: React.FC = () => {
  return (
    <section className="page-hero">
      <div className="particles-container absolute inset-0 z-0 pointer-events-none" id="heroParticles" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-5 gap-y-12 items-center">
          {/* Text Info */}
          <div className="w-full lg:w-7/12 px-4 text-center lg:text-left reveal-left">
            <span className="section-tag mb-4">🎰 Games Lobby</span>
            <h1 className="mb-6 uppercase leading-tight font-heading font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              THRILLING LIVE <span className="gold-text">CASINO &amp; SPORTS</span>
            </h1>
            <p className="text-dim text-[1.1rem] leading-[1.7] max-w-[540px] mx-auto lg:mx-0 mb-6">
              Explore our massive selection of live sports exchanges, HD virtual casino lobbies, card classics, and video slot reels.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="px-6 py-4">
                <i className="bi bi-whatsapp"></i> Get Live ID
              </Button>
              <Button href="#sports-exchange" variant="gold-outline" className="px-6 py-4">
                Explore Markets
              </Button>
            </div>
          </div>

          {/* Secure Card Visual */}
          <div className="w-full lg:w-5/12 px-4 text-center reveal-right">
            <div className="glass-card p-6 bordergold max-w-[400px] mx-auto">
              <h4 className="gold-text mb-4 font-heading font-extrabold text-[1.25rem]">LIVE RTP 98.4%</h4>
              <p className="text-muted text-[0.9rem] mb-0 leading-relaxed">
                Experience high conversion, verified RNG algorithms, and top-tier dealer payouts across all lobby tables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
