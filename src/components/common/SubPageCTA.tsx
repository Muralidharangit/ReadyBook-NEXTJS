import React from "react";
import Button from "@/components/common/Button";

export const SubPageCTA: React.FC = () => {
  return (
    <section id="cta-section" className="py-12 text-center relative overflow-hidden bg-bg-dark">
      <div className="particles-container absolute inset-0 z-0 pointer-events-none" id="ctaParticles" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card py-12 px-6 max-w-[700px] mx-auto bordergold reveal-up">
          <span className="section-tag mb-2">🎁 Welcome Offer</span>
          <h2 className="mb-4 font-heading font-black leading-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>
            KICKSTART YOUR <span className="gold-text">WINNING STREAK!</span>
          </h2>
          <p className="mb-6 mx-auto text-dim max-w-[550px] leading-relaxed">
            Join today and claim your 100% Welcome Bonus on your very first deposit. Setup takes less than a minute.
          </p>
          <Button 
            href="https://wa.me/919999999999" 
            target="_blank" 
            variant="gold" 
            className="inline-flex items-center gap-2 px-12 py-4 text-[1rem]"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: "1.2rem" }}></i> Claim Your Bonus Now <i className="bi bi-arrow-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubPageCTA;
