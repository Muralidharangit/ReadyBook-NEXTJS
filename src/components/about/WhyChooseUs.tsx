import React from "react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    { text: "Trusted and secure platform", icon: "bi-shield-lock" },
    { text: "Instant Reddy Book ID access", icon: "bi-person-badge" },
    { text: "Fast deposits and withdrawals", icon: "bi-cash-coin" },
    { text: "Wide range of sports betting markets", icon: "bi-trophy" },
    { text: "Exciting live casino games", icon: "bi-suit-spade" },
    { text: "Mobile-friendly user experience", icon: "bi-phone" },
    { text: "Dedicated customer support", icon: "bi-headset" },
    { text: "Responsible gaming commitment", icon: "bi-heart" },
    { text: "Continuous innovation and platform improvements", icon: "bi-rocket-takeoff" }
  ];

  return (
    <section className="py-24 bg-bg-dark">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 flex flex-col items-center space-y-4" data-aos="fade-up">
          <div>
            <span className="section-tag inline-block">⭐ Advantages</span>
          </div>
          <h2 className="font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            WHY CHOOSE <span className="gold-text">REDDY BOOK?</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {reasons.map((reason, idx) => (
              <div key={idx} className="glass-card p-5 flex flex-row items-center text-left h-full relative group hover:-translate-y-1 transition-all duration-500 overflow-hidden border border-gold/15 hover:border-gold hover:shadow-[0_8px_30px_rgba(252,212,90,0.15)]" data-aos="fade-up" data-aos-delay={idx * 50}>
                {/* Decorative glow */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-24 bg-gold/5 rounded-full blur-[30px] group-hover:bg-gold/20 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

                <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-gold/15 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/[0.1] transition-all duration-500 shadow-md">
                  <i className={`bi ${reason.icon} gold-text text-xl group-hover:rotate-12 transition-transform duration-500`}></i>
                </div>

                <div className="relative z-10 flex-grow">
                  <p className="text-gray-300 font-semibold text-[0.95rem] leading-snug group-hover:text-white transition-colors duration-300 m-0">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center glass-card p-8 max-w-4xl mx-auto bordergold relative overflow-hidden group" data-aos="fade-up" data-aos-delay="400">
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-gold/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-gold/20 transition-colors duration-700"></div>

            <p className="relative z-10 text-muted text-[1.05rem] leading-relaxed m-0 group-hover:text-gray-200 transition-colors duration-500">
              Reddy Book is dedicated to delivering a safe, engaging, and rewarding environment where users can enjoy their favorite betting and gaming activities with total confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
