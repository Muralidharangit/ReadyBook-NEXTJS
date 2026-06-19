"use client";

import React from "react";

export const B2BDeveloperPlatform: React.FC = () => {
  const benefits = [
    {
      title: "Complete Technical Documentation",
      description: "Access comprehensive, step-by-step API integration guides, SDK libraries, and workflow diagrams.",
      icon: "bi-file-earmark-code",
    },
    {
      title: "API Integration Support",
      description: "Dedicated developer sandbox environment and testing endpoints to validate integration in real-time.",
      icon: "bi-cpu",
    },
    {
      title: "Ready-to-Use Scripts",
      description: "Speed up implementation with copy-pasteable snippets and boilerplate templates for common frameworks.",
      icon: "bi-code-slash",
    },
    {
      title: "Flexible Platform Customization",
      description: "Full configuration control over styling themes, user interface layouts, and custom module hooks.",
      icon: "bi-brush",
    },
    {
      title: "Scalable Infrastructure",
      description: "Powered by geo-distributed server nodes ensuring low-latency connection and auto-scaling capacity.",
      icon: "bi-cloud-arrow-up",
    },
    {
      title: "Ongoing Technical Assistance",
      description: "Direct channel to our core system architects and support engineers to assist with setup and scaling.",
      icon: "bi-headset",
    },
  ];

  return (
    <section className="py-28 bg-bg-dark relative overflow-hidden">
      {/* Dynamic background glow to add attractive color variation */}
      <div className="glow-orb glow-purple w-[600px] h-[600px] top-[10%] left-[10%] opacity-20"></div>
      <div className="glow-orb glow-gold w-[500px] h-[500px] bottom-[5%] right-[5%] opacity-15"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Spacious Centered Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="section-tag mb-4">💻 Developer API</span>
          <h2 className="mb-4 font-heading font-extrabold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Self-Service <span className="gold-text">Casino Platform</span>
          </h2>
          <p className="text-gold font-heading font-bold text-sm tracking-wider uppercase mb-6">
            Build Your Own Casino Platform
          </p>
          <p className="text-muted text-[1.05rem] leading-relaxed">
            The Reddy Book Self-Service Casino Platform is designed for developers, gaming startups, and casino operators seeking greater customization and flexibility. This solution provides direct access to robust technical documentation, reliable API resources, and ready-to-use integration tools.
          </p>
        </div>

        {/* Benefits Grid - Spacious & Attractive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="glass-card p-8 bordergold flex flex-col justify-start hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-2xl mb-6">
                <i className={`bi ${benefit.icon}`}></i>
              </div>
              <h4 className="text-md font-heading font-bold text-white mb-3 tracking-wide uppercase">
                {benefit.title}
              </h4>
              <p className="text-muted text-[0.88rem] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Spacious Bottom Text */}
        <div className="text-center mt-16 max-w-[650px] mx-auto">
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
            <p className="text-gold text-[0.95rem] font-semibold leading-relaxed mb-0 italic">
              <i className="bi bi-arrow-up-right-circle mr-2"></i>
              From setup to expansion, Reddy Book provides continuous support to help your gaming platform grow successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BDeveloperPlatform;
