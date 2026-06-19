import React from "react";

interface ReasonItem {
  title: string;
  icon: string;
}

export const B2BWhyChoose: React.FC = () => {
  const reasons: ReasonItem[] = [
    { title: "Advanced Casino Platform Solutions", icon: "bi-cpu-fill" },
    { title: "Multi-Provider Game Integration", icon: "bi-controller" },
    { title: "Secure Payment Processing", icon: "bi-shield-lock-fill" },
    { title: "White Label Casino Solutions", icon: "bi-patch-check-fill" },
    { title: "Self-Service Development Tools", icon: "bi-tools" },
    { title: "Scalable Infrastructure", icon: "bi-arrow-up-right-circle-fill" },
    { title: "Dedicated Technical Support", icon: "bi-headset" },
    { title: "Mobile-Friendly Platform", icon: "bi-phone-fill" },
    { title: "Reliable Hosting Solutions", icon: "bi-cloud-check-fill" },
    { title: "Fast Deployment Process", icon: "bi-lightning-charge-fill" },
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">💎 The Reddy Advantage</span>
          <h2 className="mb-4 font-heading font-extrabold text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Why Choose <span className="gold-text">Reddy Book?</span>
          </h2>
          <p className="text-gold font-heading font-bold text-sm tracking-wider uppercase mb-4">
            Trusted Solutions for Online Gaming Businesses
          </p>
          <p className="text-muted max-w-[650px] mx-auto text-[0.95rem]">
            Whether you prefer a fully managed solution or a self-service platform, Reddy Book delivers the tools and technology needed to build and scale a successful online gaming business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="flex flex-wrap -mx-3 gap-y-6 justify-center">
          {reasons.map((item, idx) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-3" key={idx}>
              <div className="glass-card p-6 h-full bordergold text-center hover:-translate-y-2 transition-all duration-300 flex flex-col justify-start items-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xl mb-4">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="font-heading font-bold text-white text-[0.8rem] leading-snug tracking-wide uppercase">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="glass-card p-8 bordergold max-w-[850px] mx-auto mt-16 text-center">
          <h4 className="font-heading font-black text-white text-lg uppercase mb-4">
            Grow Your Gaming Business with Reddy Book
          </h4>
          <p className="text-muted text-[0.95rem] leading-relaxed mb-0">
            Reddy Book is committed to helping operators launch, manage, and expand their online gaming platforms through innovative technology, reliable support, and comprehensive business solutions. Whether you're a startup or an established operator, Reddy Book provides everything needed to create a secure, scalable, and successful online gaming operation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default B2BWhyChoose;
