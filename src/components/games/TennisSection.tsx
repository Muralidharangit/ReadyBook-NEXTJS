import React from 'react';

const tennisFeatures = [
  { icon: "bi-globe", title: "Tennis Coverage Designed for Every Fan", desc: "Whether following established champions or emerging stars, users can enjoy extensive tournament coverage through Reddy Anna. The platform helps tennis enthusiasts stay informed about matches, schedules and player performances." },
  { icon: "bi-lightning-charge", title: "Interactive Tennis Experience on Reddy Anna", desc: "Real-time match updates and detailed information make Reddy Anna a preferred platform for tennis followers. Users can enjoy a dynamic experience while tracking key moments during major tournaments." },
  { icon: "bi-laptop", title: "User-Friendly Features of Reddy Anna", desc: "Accessibility remains a major priority for Reddy Anna. The platform delivers smooth performance across devices, ensuring users enjoy tennis content whenever and wherever they choose." },
  { icon: "bi-graph-up-arrow", title: "Growing Popularity of Reddy Anna Tennis Betting", desc: "As tennis continues to attract global audiences, Reddy Anna Tennis Betting remains committed to delivering a high-quality and engaging experience for tennis enthusiasts." }
];

const TennisSection = () => (
  <section className="py-20 lg:py-32 relative bg-[#06070a] border-t border-white/5 overflow-hidden">
    {/* Subtle Background Elements */}
    <div className="absolute top-0 right-0 w-full max-w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-[#06070a] to-[#06070a] pointer-events-none mix-blend-screen"></div>
    <div className="absolute bottom-0 left-0 w-full max-w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-500/5 via-[#06070a] to-[#06070a] pointer-events-none mix-blend-screen"></div>

    <div className="container mx-auto px-4 max-w-7xl relative z-10 space-y-24">
      
      {/* Header Section */}
      <div className="text-center mx-auto space-y-6" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 shadow-sm">
          <i className="bi bi-trophy-fill text-gold text-sm drop-shadow-[0_0_8px_rgba(252,212,90,0.8)]"></i>
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Elite Tournaments</span>
        </div>
        
        <h2 className="font-heading font-black uppercase text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Reddy Anna</span> <span className="text-white">Tennis Betting</span>
        </h2>
        
        {/* Elegant Typography Intro (No Box) */}
        <div className="relative space-y-6">
          {/* <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto"></div> */}
          <h3 className="text-white font-bold text-2xl md:text-3xl leading-snug">Explore Major Tennis Events with Reddy Anna</h3>
          <p className="text-gray-400 text-xl leading-relaxed max-w-4xl mx-auto font-light">
            Reddy Anna provides access to some of the most prestigious tennis tournaments across the globe. From Grand Slam events to ATP and WTA tours, Reddy Anna Tennis Betting keeps tennis fans connected to the sport throughout the year.
          </p>
        </div>
      </div>

      {/* Elegant Timeline/List Layout */}
      <div className="max-w-4xl mx-auto relative">
        {/* Central Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-gold via-white/10 to-transparent"></div>

        <div className="space-y-16">
          {tennisFeatures.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group"
              data-aos="fade-up" 
              data-aos-delay={(idx + 1) * 100}
            >
              {/* Icon / Node */}
              <div className="relative z-10 w-20 h-20 shrink-0 rounded-full bg-[#06070a] border border-white/10 group-hover:border-gold/50 flex items-center justify-center text-3xl text-white group-hover:text-gold transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(252,212,90,0.2)] md:ml-0 mx-auto md:mx-0">
                <i className={`bi ${item.icon}`}></i>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-2 text-center md:text-left space-y-4">
                <div className="text-gold font-bold tracking-widest uppercase text-sm">Feature 0{idx + 1}</div>
                <h3 className="text-3xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default TennisSection;
