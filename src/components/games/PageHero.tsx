import React from "react";
import Button from "@/components/common/Button";

export const PageHero: React.FC = () => {
  return (
    <section className="page-hero">
      <div className="particles-container absolute inset-0 z-0 pointer-events-none" id="heroParticles" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-5 gap-y-12 items-center">
          {/* Text Info */}
          <div className="w-full lg:w-1/2 px-4 flex flex-col items-center lg:items-start text-center lg:text-left reveal-left space-y-6">
            <div>
              <span className="section-tag inline-block">🎰 Games Lobby</span>
            </div>
            <h1 className="uppercase leading-tight font-heading font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              THRILLING LIVE <span className="gold-text">CASINO &amp; SPORTS</span>
            </h1>
            <p className="text-dim text-[1.1rem] leading-[1.7] max-w-[540px]">
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
          <div className="w-full lg:w-1/2 px-4 text-center reveal-right mt-12 lg:mt-0">
            <div className="relative max-w-[450px] mx-auto">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="glass-card value-card p-10 border border-gold/20 relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(252,212,90,0.2)] group-hover:scale-110 transition-transform duration-500">
                  <i className="bi bi-shield-check gold-text text-4xl"></i>
                </div>
                <h4 className="gold-text mb-4 font-heading font-extrabold text-[1.4rem] uppercase tracking-wide">LIVE RTP 98.4%</h4>
                <p className="text-dim text-[1rem] mb-0 leading-relaxed">
                  Experience high conversion, verified RNG algorithms, and top-tier dealer payouts across all lobby tables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
