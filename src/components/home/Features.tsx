import React from "react";

const featuresData = [
  {
    icon: "bi bi-award-fill",
    title: "Established Reputation",
    desc: "With a strong presence in the online betting industry, Reddy Book has earned the confidence of thousands of players. The long-standing reputation of Reddy Book is built on trust, transparency & customer satisfaction. Many users continue to choose Reddy Book because of its proven track record and dependable services.",
  },
  {
    icon: "bi bi-person-check-fill",
    title: "Instant Reddy Book ID",
    desc: "Getting started on Reddy Book is quick and simple. You can create your Reddy Book ID within minutes and gain instant access to all the features available on Reddy Book. The easy registration process makes Reddy Book preferred platform for new and experienced bettors alike.",
  },
  {
    icon: "bi bi-lightning-fill",
    title: "Fast Withdrawals",
    desc: "One of key advantages of Reddy Book is its efficient payment system. Reddy Book supports fast UPI withdrawals, wallet transfers, and secure banking methods. Players trust Reddy Book for smooth transactions and quick access to their winnings.",
  },
  {
    icon: "bi bi-dribbble",
    title: "Wide Betting Coverage",
    desc: "Sports fans choose Reddy Book because of its extensive betting markets. From cricket football to kabaddi, tennis, and esports, Reddy Book offers a wide range betting opportunities. In addition, Reddy Book features live casino games, Teen Patti, Andar Bahar, Roulette, and Blackjack for players casino entertainment.",
  },
  {
    icon: "bi bi-shield-lock",
    title: "100% Secure Platform",
    desc: "Security is a top priority at Reddy Book. Advanced SSL encryption, OTP authentication secure payment gateways help protect every Reddy Book account. Players can confidently enjoy betting and gaming activities on Reddy Book knowing information is safeguarded.",
  },
  {
    icon: "bi bi-phone-fill",
    title: "Mobile-Friendly Access",
    desc: "The Reddy Book platform fully optimized for mobile devices, allowing users to enjoy betting anytime and anywhere. Whether you use Android, iPhone, tablet, desktop, Reddy Book delivers smooth and responsive experience across all devices.",
  },
  {
    icon: "bi bi-gift-fill",
    title: "Exciting Bonuses",
    desc: "Players on Reddy Book can take advantage attractive promotions and rewards throughout the year. Welcome bonuses and cashback offers seasonal campaigns, Reddy Book regularly provides opportunities to enhance your gaming experience and maximize value.",
  },
  {
    icon: "bi bi-headset",
    title: "24/7 Customer Support",
    desc: "Customer service another reason why players prefer Reddy Book. The dedicated Reddy Book support team is available around the clock through WhatsApp, Telegram, live chat. Whether you need help with your Reddy Book ID, deposits, withdrawals, betting queries, assistance is always available.",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-bg-secondary overflow-hidden border-t border-white/5">
      {/* Background glow orbs */}
      <div
        className="glow-orb glow-purple w-[600px] h-[600px] top-1/4 -left-[200px] pointer-events-none opacity-30"
        aria-hidden="true"
      />
      <div
        className="glow-orb glow-gold w-[400px] h-[400px] bottom-10 right-0 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Intro Banner */}
        <div className="flex flex-wrap -mx-4 items-center mb-16 gap-y-10">
          {/* Left: Introduction Text */}
          <div className="w-full lg:w-7/12 px-4 reveal-left">
            <span className="section-tag">⚡ Why Reddy Book?</span>
            <h2 className="mb-6 uppercase leading-tight font-heading font-extrabold text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              WHY CHOOSE <span className="gold-text">REDDY BOOK</span>?
            </h2>
            <p className="text-muted leading-relaxed text-sm md:text-base mb-0">
              When it comes online betting and gaming in India, Reddy Book has become a trusted name among sports enthusiasts and casino players. Known for its reliability, security user-friendly experience, Reddy Book offers everything needed for exciting and betting journey. Whether you're placing your first bet or you're experienced player, Reddy Book delivers a premium platform designed for Indian users.
            </p>
          </div>
          {/* Right: Beautiful Premium Image */}
          <div className="w-full lg:w-5/12 px-4 reveal-right flex justify-center">
            <div className="about-img-wrap relative max-w-[420px] lg:max-w-full">
              <img
                src="/images/WOMEN WITH CASINO.png"
                alt="Reddy Book"
                className="w-full about-img relative object-cover rounded-2xl border border-white/5 shadow-2xl"
              />
              <div className="about-prize-badge absolute bottom-4 right-4 bg-gradient-to-r from-gold to-gold-dark text-black rounded-xl px-5 py-3 font-heading font-extrabold text-sm shadow-[0_4px_20px_rgba(252,212,90,0.3)]">
                100% <small className="block text-[0.65rem] font-medium uppercase tracking-wider text-black/80 mt-0.5">Secure Payments</small>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuresData.map((feat, index) => (
            <div 
              key={index} 
              className="bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start reveal-up group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl border border-gold/20 shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                <i className={feat.icon}></i>
              </div>
              <div className="flex-grow">
                <h4 className="font-heading font-bold text-white text-base md:text-lg mb-3 group-hover:text-gold transition-colors duration-200">
                  {feat.title}
                </h4>
                <p className="text-muted text-xs md:text-sm leading-relaxed m-0">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
