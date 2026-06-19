"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  subheading: string;
  description: string;
  detailedContent: string;
  icon: string;
}

export const B2BOfferings: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "payments",
      title: "Online Casino Payment Solutions",
      subheading: "Secure & Fast Payment Processing",
      description: "Reddy Book provides secure and reliable payment solutions designed for modern online gaming platforms. Our payment infrastructure ensures smooth Reddy Book deposits and withdrawals while maintaining high security standards.",
      detailedContent: "With Reddy Book, operators can deliver a trusted payment experience that enhances player satisfaction and platform reliability. Our payment gateways support multi-currency clearing, automatic transaction settlement, robust fraud-detection mechanisms, and chargeback protection. We ensure near-zero downtime so your casino transactions flow continuously without friction.",
      icon: "bi-shield-check",
    },
    {
      id: "self-service",
      title: "Self-Service Casino Solution",
      subheading: "Complete Control for Casino Operators",
      description: "The Reddy Book Self-Service Casino Solution empowers operators with automated account management, administration, and instant support features.",
      detailedContent: "This solution is ideal for businesses that want greater control over their casino operations while maintaining flexibility and efficiency. Our self-service dashboard includes tools for real-time account creation, balance configuration, transaction logs, agent structure hierarchy management, and player permission adjustments. Control your margins, examine risk limits, and run promotions directly from a single centralized interface.",
      icon: "bi-sliders",
    },
    {
      id: "integration",
      title: "Multi-Provider Casino Integration",
      subheading: "Access Leading Casino Game Providers",
      description: "Reddy Book offers seamless integration with multiple casino game providers through a single unified platform. Operators access a diverse portfolio of casino games.",
      detailedContent: "Ensure your players enjoy a rich gaming experience without the complexity of managing multiple integrations. Our multi-provider aggregator API gives you instant access to slots, table games, live dealers, sports books, and virtual sports from the world's top creators. A single contract, a single wallet API, and automated catalog updates keep your library fresh and engaging at all times.",
      icon: "bi-diagram-3",
    },
  ];

  return (
    <section id="offerings" className="py-24 bg-white/[0.01] relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">🛠️ Core Capabilities</span>
          <h2 className="mb-4 font-heading font-extrabold text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Our Premium <span className="gold-text">Services</span>
          </h2>
          <p className="text-muted max-w-[650px] mx-auto text-[0.95rem]">
            We engineer secure payment infrastructures, high-liquidity backends, and aggregation layers tailored for casino business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap -mx-4 gap-y-8 justify-center">
          {valueMapper(services)}
        </div>
      </div>

      {/* Interactive Modal for "Read More" details */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="glass-card max-w-[650px] w-full p-8 bordergold relative animate-float-slow">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-dim hover:text-gold text-2xl transition"
              aria-label="Close modal"
            >
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-2xl">
                <i className={`bi ${activeService.icon}`}></i>
              </div>
              <div>
                <span className="text-[0.75rem] uppercase tracking-wider text-gold font-bold block">
                  {activeService.subheading}
                </span>
                <h3 className="text-xl font-heading font-black text-white">{activeService.title}</h3>
              </div>
            </div>
            <hr className="border-white/10 my-4" />
            <p className="text-light text-[0.95rem] leading-relaxed mb-4">{activeService.description}</p>
            <p className="text-muted text-[0.9rem] leading-relaxed mb-6">{activeService.detailedContent}</p>
            <div className="text-right">
              <button
                onClick={() => setActiveService(null)}
                className="btn-gold px-6 py-2 text-[0.8rem]"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );

  function valueMapper(items: ServiceItem[]) {
    return items.map((service) => (
      <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={service.id}>
        <div className="glass-card h-full p-8 bordergold flex flex-col justify-between group transition-all duration-300">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gold/5 border border-gold/20 flex items-center justify-center text-gold text-3xl mb-6 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
              <i className={`bi ${service.icon}`}></i>
            </div>
            <span className="text-[0.75rem] uppercase tracking-wider text-gold font-bold block mb-2">
              {service.subheading}
            </span>
            <h4 className="text-lg font-heading font-bold text-white mb-4 leading-snug">
              {service.title}
            </h4>
            <p className="text-muted text-[0.9rem] leading-relaxed mb-6">
              {service.description}
            </p>
          </div>
          <div>
            <button
              onClick={() => setActiveService(service)}
              className="inline-flex items-center gap-2 text-gold font-heading font-bold text-[0.85rem] uppercase tracking-wider group-hover:text-gold-light hover:underline mt-auto cursor-pointer"
            >
              Read More <i className="bi bi-arrow-right-short text-[1.2rem] group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    ));
  }
};

export default B2BOfferings;
