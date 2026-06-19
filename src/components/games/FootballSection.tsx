import React from 'react';

const footballFeatures = [
  { title: "Comprehensive Football Coverage on Reddy Book", desc: "With Reddy Book Football Betting, users explore football events from Europe, Asia, South America, and beyond. Major tournaments and league matches are available throughout the season, allowing football enthusiasts to stay connected to the sport they love." },
  { title: "Real-Time Football Action with Reddy Book", desc: "One of the standout features of Reddy Book is its real-time football experience. Live match information, team updates, and changing game situations make every match more exciting. Reddy Book ensures that football fans never miss an important moment." },
  { title: "Easy Navigation and Accessibility", desc: "The football section on Reddy Book is designed with simplicity and convenience in mind. Users can quickly browse upcoming matches, ongoing events, and football-related content. Reddy Book prioritizes user experience through intuitive navigation and responsive design." },
  { title: "Why Football Fans Prefer Reddy Book", desc: "With broad football coverage, smooth platform performance, and regular updates, Reddy Book Football Betting continues to grow in popularity among football enthusiasts worldwide." }
];

const FootballSection = () => (
  <section className="py-24 relative bg-white/[0.01] border-t border-gold/10">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-5/12" data-aos="fade-right">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/15 mb-6 text-gold">
            <i className="bi bi-dribbble text-3xl"></i>
          </div>
          <h2 className="font-heading font-extrabold uppercase text-4xl mb-6 leading-tight text-white">
            <span className="gold-text">Reddy Book</span><br />Football Betting
          </h2>
          <h3 className="text-2xl font-bold text-white mb-6">Follow Global Football Events with Reddy Book</h3>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Football is one of the most popular sports worldwide, and Reddy Book provides access to exciting football action across major leagues and tournaments. Users can follow international competitions, domestic leagues, and club championships through the comprehensive football section on Reddy Book.
          </p>
        </div>
        <div className="w-full lg:w-7/12 space-y-6" data-aos="fade-left">
          {footballFeatures.map((item, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-gold/15 rounded-2xl p-6 flex gap-6 hover:border-gold hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/15 flex items-center justify-center flex-shrink-0 text-gold font-bold text-xl">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FootballSection;
