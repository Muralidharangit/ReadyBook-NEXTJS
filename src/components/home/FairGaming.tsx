"use client";

import React from "react";

export const FairGaming: React.FC = () => {
  const benefits = [
    "Transparent account management on Reddy Book",
    "Easy access to betting history on Reddy Book",
    "Detailed transaction records on Reddy Book",
    "Consistent platform performance on Reddy Book",
    "Reliable customer assistance through Reddy Book"
  ];

  return (
    <section id="fair-gaming" className="py-24 relative overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(135deg, #09080e 0%, #0f0d1a 50%, #060709 100%)' }}>
      {/* Glow orbs */}
      <div 
        className="glow-orb glow-purple w-[400px] h-[400px] top-1/2 left-[10%] -translate-y-1/2 pointer-events-none opacity-25" 
        aria-hidden="true"
      />
      <div 
        className="glow-orb glow-gold w-[400px] h-[400px] bottom-0 right-[5%] pointer-events-none opacity-15" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4 gap-y-12 items-stretch">
          
          {/* Fair & Transparent Gaming */}
          <div className="w-full lg:w-6/12 px-4 reveal-left">
            <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="section-tag">🤝 Trust &amp; Integrity</span>
                <h2 className="mb-6 font-heading font-extrabold uppercase leading-tight text-white mt-2" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
                  FAIR &amp; TRANSPARENT <br />
                  <span className="gold-text">GAMING</span> ON REDDY BOOK
                </h2>
                <p className="text-muted leading-relaxed mb-6 text-sm md:text-base">
                  Fairness and transparency are core principles of Reddy Book. Users choose Reddy Book because Reddy Book focuses on delivering a trustworthy experience from registration to withdrawal.
                </p>

                <ul className="flex flex-col gap-4 mb-6">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs border border-gold/20 shrink-0">
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="text-muted text-sm md:text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/5 pt-6 mt-6">
                <p className="text-muted text-xs md:text-sm leading-relaxed mb-0 italic">
                  The commitment of Reddy Book to transparency has helped Reddy Book become a preferred platform among many online gaming enthusiasts.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Reddy Book */}
          <div className="w-full lg:w-6/12 px-4 reveal-right">
            <div className="h-full bg-[#11141d] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-gold/30 transition-all duration-300">
              <div>
                <span className="section-tag">❓ Ultimate Choice</span>
                <h2 className="mb-6 font-heading font-extrabold uppercase leading-tight text-white mt-2" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
                  WHY CHOOSE <br />
                  <span className="gold-text">REDDY BOOK</span>?
                </h2>
                <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
                  Whether you're interested in sports betting, live casino games, fast transactions, or secure account management, Reddy Book offers a complete experience. The combination of advanced technology, responsive design, reliable support, and extensive gaming options makes Reddy Book a popular choice.
                </p>
                <p className="text-muted leading-relaxed text-sm md:text-base">
                  From creating your Reddy Book ID, managing transactions, and exploring betting opportunities, Reddy Book provides everything needed for a smooth and enjoyable experience.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-center lg:text-left">
                <p className="text-gold font-semibold text-sm leading-relaxed mb-6">
                  Join Reddy Book today and discover why so many players continue to trust Reddy Book for sports betting, live casino entertainment, secure payments, and premium online gaming.
                </p>
                <a href="#cta-section" className="btn btn-gold inline-flex items-center gap-2 py-3 px-8 text-sm">
                  <i className="bi bi-person-plus-fill"></i> Create Your Reddy Book ID
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FairGaming;
