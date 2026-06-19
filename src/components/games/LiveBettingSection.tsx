import React from 'react';

const liveBettingFeatures = [
  { icon: "bi-collection-play", title: "Multiple Sports Available on Reddy Book", desc: "Cricket, football, tennis, basketball, and various other sports are available through Reddy Book Live Betting. This broad coverage ensures users have access to diverse sporting events throughout the year." },
  { icon: "bi-activity", title: "Dynamic Match Experience", desc: "One of the strengths of Reddy Book is its ability to deliver real-time updates and interactive features. Users can follow ongoing matches and stay informed about important developments." },
  { icon: "bi-wifi", title: "Live Access", desc: "The live section on Reddy Book is optimized for speed and reliability. Whether accessing the platform via mobile or desktop, users can enjoy uninterrupted performance." },
  { icon: "bi-check-circle", title: "Why Users Choose Reddy Book Live Betting", desc: "Through comprehensive sports coverage, responsive technology, and a user-focused experience, Reddy Book Live Betting continues to attract sports enthusiasts looking for real-time entertainment." }
];

const LiveBettingSection = () => (
  <section className="py-24 relative bg-white/[0.01] border-y border-gold/10">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="glass-card bordergold rounded-3xl p-8 md:p-12" data-aos="zoom-in">
        <div className="flex items-center gap-4 mb-8">
          <i className="bi bi-broadcast text-gold text-4xl animate-pulse"></i>
          <h2 className="font-heading font-black uppercase text-3xl md:text-4xl text-white">
            Reddy Book Live Betting
          </h2>
        </div>
        
        <div className="mb-10 border-l-2 border-gold pl-6">
          <h3 className="text-2xl font-bold text-white mb-3">Enjoy Real-Time Sports Action with Reddy Book</h3>
          <p className="text-muted text-lg leading-relaxed max-w-3xl">
            Reddy Book Live Betting provides sports enthusiasts with access to live sporting events and continuously updated information. The platform allows users to stay engaged with matches as they unfold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {liveBettingFeatures.map((item, idx) => (
            <div key={idx} className="group">
              <h3 className="gold-text font-bold text-xl mb-2 flex items-center gap-2 group-hover:text-white transition-colors">
                <i className={`bi ${item.icon}`}></i> {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LiveBettingSection;
