import React from "react";
import Button from "@/components/common/Button";

export const B2BHero: React.FC = () => {
  return (
    <section className="page-hero relative overflow-hidden bg-bg-dark pt-32 pb-24">
      {/* Background glow orbs */}
      <div className="glow-orb glow-gold w-[500px] h-[500px] top-[-10%] left-[-10%] opacity-40"></div>
      <div className="glow-orb glow-purple w-[600px] h-[600px] bottom-[-20%] right-[-10%] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4 gap-y-12 items-center">
          {/* Text Information */}
          <div className="w-full lg:w-7/12 px-4 text-center lg:text-left">
            <span className="section-tag mb-4">⚡ Our services</span>
            <h1 className="mb-6 uppercase leading-tight font-heading font-black text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)" }}>
              <span className="gold-text">Reddy Book</span>
            </h1>
            <p className="text-light text-[1.1rem] leading-[1.7] max-w-[620px] mx-auto lg:mx-0 mb-8 opacity-90">
              Launch, manage, and scale your online gaming platform. Reddy Book provides high-performance payment gateways, self-service operator dashboards, game provider integrations, and white label casino systems.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button href="#contact" variant="gold" className="px-8 py-4">
                <i className="bi bi-chat-right-text-fill mr-2"></i> Get Gaming ID & Demo
              </Button>
              <Button href="#offerings" variant="gold-outline" className="px-8 py-4">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Graphical Display Badge */}
          <div className="w-full lg:w-5/12 px-4 text-center">
            <div className="hero-img-card">
              <div className="hero-img-glow"></div>
              <div className="glass-card p-8 bordergold max-w-[420px] mx-auto text-left relative">
                {/* Floating badge */}
                
                
                <h4 className="gold-text mb-4 font-heading font-extrabold text-[1.4rem]">Ready-To-Deploy</h4>
                <p className="text-muted text-[0.95rem] mb-6 leading-relaxed">
                  Our systems are optimized for instant deployment. Reduce processing fees, access 100+ game suites, and scale your operations effortlessly.
                </p>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[0.8rem] text-dim">
                  <span>DEPLOYMENT TIME</span>
                  <span className="text-gold font-bold">FASTEST IN INDUSTRY</span>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
