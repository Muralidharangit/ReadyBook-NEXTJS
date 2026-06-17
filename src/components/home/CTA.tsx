import React from "react";

export const CTA: React.FC = () => {
  return (
    <section id="cta-section" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container mx-auto px-4">
        <div className="cta-glass-card text-center reveal-up max-w-[900px] mx-auto">
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
            READY TO CLAIM YOUR <span className="gold-text">100% BONUS</span>?
          </h2>
          <p className="mb-12 mx-auto text-muted max-w-[620px] leading-relaxed">
            Join Reddy Book today, claim your 100% Welcome Bonus on your first deposit, and start backing or laying bets
            with lightning-fast payouts!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/919999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold cta-glow-pulse inline-flex items-center gap-2 text-[1rem] py-4 px-10"
            >
              <i className="bi bi-whatsapp text-[1.2rem]"></i> Get WhatsApp ID
            </a>
            <a 
              href="https://t.me/reedybook" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold-outline inline-flex items-center gap-2 text-[1rem] py-3.5 px-10"
            >
              <i className="bi bi-telegram text-[1.2rem]"></i> Join Telegram
            </a>
          </div>
          <div className="mt-8 text-faint text-[0.75rem] flex flex-wrap justify-center gap-4">
            <span className="mx-2 flex items-center gap-1">
              <i className="bi bi-shield-check text-gold"></i> 100% Trusted Platform
            </span>
            <span className="mx-2 flex items-center gap-1">
              <i className="bi bi-lightning-fill text-gold"></i> Instant Payouts
            </span>
            <span className="mx-2 flex items-center gap-1">
              <i className="bi bi-people-fill text-gold"></i> 12,000+ Active Players
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
