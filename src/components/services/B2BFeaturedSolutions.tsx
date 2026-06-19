import React from "react";

export const B2BFeaturedSolutions: React.FC = () => {
  const whiteLabelFeatures = [
    "Fully Branded Casino Platform",
    "Premium Casino Game Library",
    "Secure Payment Gateway Integration",
    "Mobile & Desktop Compatibility",
    "Advanced Reporting Dashboard",
    "Reliable Technical Support",
  ];

  const managedServicesList = [
    "Secure Hosting Infrastructure",
    "Complete Account Setup",
    "Platform Configuration",
    "Payment System Integration",
    "Affiliate Management System",
    "Customer Support Solutions",
    "Technical Maintenance",
    "Performance Monitoring",
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="glow-orb glow-purple w-[500px] h-[500px] top-[20%] right-[-10%] opacity-30"></div>
      <div className="glow-orb glow-gold w-[400px] h-[400px] bottom-[10%] left-[-15%] opacity-25"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Solution 1: White Label Casino Solution */}
        <div className="flex flex-wrap -mx-4 items-center mb-28">
          {/* Content Left */}
          <div className="w-full lg:w-1/2 px-4 order-2 lg:order-1">
            <span className="section-tag mb-4">🏷️ Ready-to-Launch</span>
            <h3 className="text-3xl font-heading font-black text-white mb-2">
              White Label Casino Solution
            </h3>
            <h4 className="text-gold font-heading font-bold text-sm tracking-wider uppercase mb-6">
              Launch Your Casino Platform with Ease
            </h4>
            <p className="text-light text-[0.95rem] leading-relaxed mb-6 opacity-90">
              The Reddy Book White Label Casino Solution allows businesses to launch their online casino quickly and efficiently. Our ready-to-deploy platform includes premium casino games, secure payment processing, advanced management tools, and scalable infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {whiteLabelFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold text-xs">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <span className="text-muted text-[0.9rem] font-semibold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Right */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-1 lg:order-2">
            <div className="glass-card p-8 bordergold max-w-[480px] mx-auto relative hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[0.65rem] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Ready-to-Deploy
              </div>
              <h5 className="font-heading font-black text-white text-md uppercase mb-4 tracking-wide">
                White Label Ecosystem
              </h5>
              <div className="space-y-4">
                <div className="bg-bg-dark/60 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-display text-gold text-xl"></i>
                    <span className="text-[0.8rem] text-light">Branded Frontend</span>
                  </div>
                  <span className="text-[0.7rem] text-emerald-400 font-bold">Configured</span>
                </div>
                <div className="bg-bg-dark/60 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-controller text-gold text-xl"></i>
                    <span className="text-[0.8rem] text-light">10,000+ Games Integrated</span>
                  </div>
                  <span className="text-[0.7rem] text-emerald-400 font-bold">Active</span>
                </div>
                <div className="bg-bg-dark/60 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-wallet2 text-gold text-xl"></i>
                    <span className="text-[0.8rem] text-light">Payment Gateway API</span>
                  </div>
                  <span className="text-[0.7rem] text-emerald-400 font-bold">Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="gold-divider max-w-[900px] mb-28" />

        {/* Solution 2: Managed Services */}
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Visual Left */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="glass-card p-8 bordergold max-w-[480px] mx-auto relative hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-4 right-4 bg-gold/10 text-gold border border-gold/20 text-[0.65rem] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                24/7 Operations
              </div>
              <h5 className="font-heading font-black text-white text-md uppercase mb-6 tracking-wide">
                Managed Platform Metrics
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-dark/60 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-xs text-dim mb-1">HOSTING UPTIME</div>
                  <div className="text-xl font-heading font-black text-gold">99.9%</div>
                </div>
                <div className="bg-bg-dark/60 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-xs text-dim mb-1">KYC & ACCOUNT</div>
                  <div className="text-xl font-heading font-black text-gold">Instant</div>
                </div>
                <div className="bg-bg-dark/60 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-xs text-dim mb-1">MONITORING</div>
                  <div className="text-xl font-heading font-black text-gold">Active</div>
                </div>
                <div className="bg-bg-dark/60 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-xs text-dim mb-1">SUPPORT RESPONSE</div>
                  <div className="text-xl font-heading font-black text-gold">&lt; 1 Min</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="w-full lg:w-1/2 px-4">
            <span className="section-tag mb-4">🤝 Complete Management</span>
            <h3 className="text-3xl font-heading font-black text-white mb-2">
              Managed Services by Reddy Book
            </h3>
            <h4 className="text-gold font-heading font-bold text-sm tracking-wider uppercase mb-6">
              Complete Online Betting Platform Management
            </h4>
            <p className="text-light text-[0.95rem] leading-relaxed mb-6 opacity-90">
              Managed Services by Reddy Book provide everything required to operate a successful online betting and gaming platform. Our team handles the technical and operational aspects, allowing you to focus on business growth and customer acquisition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {managedServicesList.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold text-xs">
                    <i className="bi bi-shield-fill-check"></i>
                  </div>
                  <span className="text-muted text-[0.9rem] font-semibold">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl mt-6">
              <p className="text-gold text-[0.85rem] font-medium leading-relaxed mb-0 italic">
                <i className="bi bi-info-circle mr-2"></i>
                With Reddy Book Managed Services, businesses launch quickly and confidently with expert guidance and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BFeaturedSolutions;
