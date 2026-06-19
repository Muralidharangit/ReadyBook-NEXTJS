import React from "react";

export const PageHero: React.FC = () => {
  return (
    <section className="page-hero relative overflow-hidden bg-bg-dark pt-36 pb-20 flex items-center justify-center min-h-[35vh]">
      {/* Background glow orbs */}
      <div className="glow-orb glow-gold w-[450px] h-[450px] top-[-20%] left-[-10%] opacity-35"></div>
      <div className="glow-orb glow-purple w-[500px] h-[500px] bottom-[-20%] right-[-10%] opacity-20"></div>
      <div className="particles-container absolute inset-0 z-0 pointer-events-none opacity-40" id="heroParticles" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center reveal-up">
        <span className="section-tag mb-6">
          <i className="bi bi-pen-fill mr-1.5 text-[0.8rem]"></i> Expert Insights
        </span>
        
        <h1 className="uppercase leading-tight font-heading font-black text-white tracking-wider" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Reddy Book <span className="gold-text">Blog</span>
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
