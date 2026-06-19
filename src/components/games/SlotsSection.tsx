import React from 'react';

const slotsFeatures = [
  { icon: "bi-ui-checks-grid", title: "Wide Variety of Slot Themes", desc: "Users can explore adventure-themed slots, fantasy games, classic fruit machines, jackpot slots, and many other categories. Reddy Book Slots regularly introduce new games to enhance the player experience." },
  { icon: "bi-gift", title: "Engaging Features on Reddy Book Slots", desc: "Many games include free spins, multipliers, bonus rounds, and special rewards. These features contribute to the excitement and entertainment available through Reddy Book Slots." },
  { icon: "bi-phone-landscape", title: "Play Anytime, Anywhere", desc: "The slot section on Reddy Book is fully optimized for mobile and desktop devices. Users can enjoy seamless gameplay regardless of their preferred device." },
  { icon: "bi-heart-fill", title: "Why Players Prefer Reddy Book Slots", desc: "With a growing collection of games, smooth performance, and engaging features, Reddy Book Slots continue to attract players looking for quality online gaming entertainment." }
];

const SlotsSection = () => {
  const [wideFeature, ...otherFeatures] = slotsFeatures;

  return (
    <section className="py-24 relative bg-white/[0.01] border-t border-gold/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Intro Block - Col Span 2 */}
          <div className="w-full md:w-2/3 glass-card bordergold rounded-3xl p-10" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-gold/15 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Premium Slots</span>
            </div>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4 text-white">
              Reddy Book <span className="gold-text">Slots</span>
            </h2>
            <h3 className="text-2xl font-bold text-white mb-4">Discover Exciting Slot Games with Reddy Book</h3>
            <p className="text-muted text-lg leading-relaxed">
              Reddy Book Slots offer a wide collection of entertaining games designed to suit different player preferences. From traditional slots to modern video slots, Reddy Book provides extensive gaming options.
            </p>
          </div>

          {/* Wide Variety Feature */}
          <div className="w-full md:w-1/3 glass-card rounded-3xl p-8 border border-gold/15 hover:border-gold transition-all duration-300" data-aos="fade-left">
            <div className="gold-text text-3xl mb-4"><i className={`bi ${wideFeature.icon}`}></i></div>
            <h3 className="text-xl font-bold text-white mb-3">{wideFeature.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{wideFeature.desc}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {otherFeatures.map((item, idx) => (
            <div className="w-full md:w-1/3 glass-card rounded-3xl p-8 border border-gold/15 hover:border-gold transition-all duration-300" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} key={idx}>
              <div className="gold-text text-3xl mb-4"><i className={`bi ${item.icon}`}></i></div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlotsSection;
