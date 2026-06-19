import React from "react";
import Button from "@/components/common/Button";

export const PageHero: React.FC = () => {
  return (
    <section className="page-hero relative pt-32 pb-16 bg-bg-dark">
      <div className="particles-container absolute inset-0 z-0 pointer-events-none" id="heroParticles" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-5 gap-y-12 items-center">
          {/* Text Info */}
          <div className="w-full lg:w-7/12 px-4 text-center lg:text-left reveal-left">
            <span className="section-tag mb-4">📞 B2B Consultation</span>
            <h1 className="mb-6 uppercase leading-tight font-heading font-black text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Contact <span className="gold-text">Reddy Book Today</span>
            </h1>
            <p className="text-light text-[1.05rem] leading-[1.7] max-w-[580px] mx-auto lg:mx-0 mb-8 opacity-90">
              You can get started with Reddy Book by connecting with our team of gaming consultants. We will help you choose the right solution, integrate the required services, and launch your platform efficiently.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="px-8 py-4">
                <i className="bi bi-whatsapp"></i> Chat with Consultant
              </Button>
              <Button href="#contact-form-section" variant="gold-outline" className="px-8 py-4">
                Request a Callback
              </Button>
            </div>
          </div>

          {/* Support Metrics Visual */}
          <div className="w-full lg:w-5/12 px-4 text-center reveal-right">
            <div className="glass-card p-8 bordergold max-w-[420px] mx-auto text-left relative hover:-translate-y-1 transition-transform">
              <span className="text-[0.7rem] text-gold uppercase tracking-widest font-black block mb-2">Reddy Book</span>
              <h4 className="gold-text mb-4 font-heading font-extrabold text-[1.25rem]">Enterprise Ready</h4>
              <p className="text-muted text-[0.95rem] mb-0 leading-relaxed">
                With Reddy Book, building and managing a professional online gaming business has never been easier. Connect now to deploy your platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
