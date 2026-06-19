import React from "react";

const securityFeatures = [
  { title: "Secure Platform Infrastructure", icon: "bi-server", desc: "The technology behind Reddy Book helps protect sensitive account information and transactions." },
  { title: "OTP Verification", icon: "bi-phone-vibrate", desc: "Account security on Reddy Book is strengthened through verification procedures designed to protect users." },
  { title: "KYC Verification", icon: "bi-person-vcard", desc: "The verification process on Reddy Book helps ensure account authenticity and secure access to withdrawals." },
  { title: "Fraud Monitoring", icon: "bi-search", desc: "Security systems within Reddy Book help identify suspicious activities and maintain a safer environment for users." },
  { title: "Responsible Gaming Features", icon: "bi-controller", desc: "Reddy Book encourages responsible participation through tools and account management features designed to support safe gaming practices." }
];

const playingBenefits = [
  "Transparent account management on Reddy Book",
  "Easy access to betting history on Reddy Book",
  "Detailed transaction records on Reddy Book",
  "Consistent platform performance on Reddy Book",
  "Reliable customer assistance through Reddy Book"
];

export const TrustSecurity: React.FC = () => {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">🔒 Safety</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            TRUST & SECURITY <span className="gold-text">ON REDDY BOOK</span>
          </h2>
          <p className="text-white font-bold text-xl mb-4">Play Safely on Reddy Book</p>
          <div className="text-muted max-w-[800px] mx-auto text-[0.98rem] leading-relaxed space-y-4">
            <p>
              Security is one of the most important priorities at Reddy Book. Every aspect of Reddy Book is designed to protect user accounts, financial information, and gaming activity.
            </p>
            <p>
              Players trust Reddy Book because Reddy Book maintains high standards for security and responsible gaming.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-white text-center mb-8" data-aos="fade-up">How Reddy Book Protects Users?</h3>
          <div className="flex flex-wrap justify-center -mx-3 gap-y-6 items-stretch">
            {securityFeatures.map((item, idx) => (
              <div key={idx} className="w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="glass-card value-card bordergold p-8 flex flex-col items-center text-center h-full relative group" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-gold/15 flex items-center justify-center mb-5 group-hover:border-gold/35 transition-colors duration-300">
                    <i className={`bi ${item.icon} gold-text text-2xl`}></i>
                  </div>
                  <h4 className="gold-text mb-4 font-bold text-[1.1rem] font-heading leading-snug uppercase">{item.title}</h4>
                  <p className="text-muted text-[0.95rem] leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card bordergold p-8 md:p-12" data-aos="fade-up">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase">
                Fair & Transparent Gaming on <span className="gold-text">Reddy Book</span>
              </h3>
              <p className="text-muted text-[1rem] leading-relaxed mb-6">
                Fairness and transparency are core principles of Reddy Book. Users choose Reddy Book because Reddy Book focuses on delivering a trustworthy experience from registration to withdrawal.
              </p>
              <p className="text-muted text-[1rem] leading-relaxed">
                The commitment of Reddy Book to transparency has helped Reddy Book become a preferred platform among many online gaming users.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-gold/15">
                <h4 className="text-white font-bold text-xl mb-4">Benefits of playing on Reddy Book include:</h4>
                <ul className="space-y-4">
                  {playingBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="bi bi-arrow-right-circle-fill gold-text mr-3 mt-1"></i>
                      <span className="text-white text-[0.95rem]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
