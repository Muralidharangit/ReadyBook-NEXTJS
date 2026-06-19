import React from "react";
import Button from "@/components/common/Button";

export const B2BContact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center relative overflow-hidden bg-bg-dark border-t border-gold/10">
      {/* Background elements */}
      <div className="particles-container absolute inset-0 z-0 pointer-events-none opacity-40" id="contactParticles" aria-hidden="true"></div>
      <div className="glow-orb glow-gold w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card py-16 px-8 max-w-[800px] mx-auto bordergold reveal-up">
          <span className="section-tag mb-4">💬 Launch Your Platform</span>
          <h2 className="mb-6 font-heading font-black leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Contact Reddy Book <span className="gold-text">Today</span>
          </h2>
          <p className="mb-10 mx-auto text-light max-w-[620px] text-[1rem] leading-relaxed opacity-95">
            You can get started with Reddy Book by connecting with our team of gaming consultants. We will help you choose the right solution, integrate the required services, and launch your platform efficiently. With Reddy Book, building and managing a professional online gaming business has never been easier.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button
              href="https://wa.me/919999999999"
              target="_blank"
              variant="gold"
              className="inline-flex items-center gap-3 px-10 py-4 text-[0.9rem] w-full sm:w-auto"
            >
              <i className="bi bi-whatsapp text-[1.2rem]"></i>
              <span>Connect on WhatsApp</span>
            </Button>
            <Button
              href="https://t.me/reddybook_official"
              target="_blank"
              variant="gold-outline"
              className="inline-flex items-center gap-3 px-10 py-4 text-[0.9rem] w-full sm:w-auto"
            >
              <i className="bi bi-telegram text-[1.2rem]"></i>
              <span>Connect on Telegram</span>
            </Button>
          </div>

          <div className="text-dim text-[0.8rem] flex items-center justify-center gap-2">
            <i className="bi bi-clock-history text-gold"></i>
            <span>Average consultant response time: less than 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BContact;
