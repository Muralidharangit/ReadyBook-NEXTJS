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
            <span className="section-tag mb-4">📞 Connect Instantly</span>
            <h1 className="mb-6 uppercase leading-tight font-heading font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              GET IN TOUCH <span className="gold-text">WITH US</span>
            </h1>
            <p className="text-dim text-[1.1rem] leading-[1.7] max-w-[540px] mx-auto lg:mx-0 mb-6">
              Get 24/7/365 assistance. Reach our support agents via WhatsApp, Telegram, or email. Submit your message through our secure online form.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="px-6 py-4">
                <i className="bi bi-whatsapp"></i> Live WhatsApp Chat
              </Button>
              <Button href="#contact-form-section" variant="gold-outline" className="px-6 py-4">
                Online Request
              </Button>
            </div>
          </div>

          {/* Support Metrics Visual */}
          <div className="w-full lg:w-5/12 px-4 text-center reveal-right">
            <div className="glass-card p-6 bordergold max-w-[400px] mx-auto">
              <h4 className="gold-text mb-4 font-heading font-extrabold text-[1.25rem]">SUPPORT METRICS</h4>
              <p className="text-muted text-[0.9rem] mb-0 leading-relaxed">
                Average reply time is under 30 seconds on WhatsApp, and under 5 minutes on Telegram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
