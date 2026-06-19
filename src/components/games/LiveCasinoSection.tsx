import React from 'react';

const liveCasinoFeatures = [
  { icon: "bi-suit-club", title: "Popular Live Casino Games on Reddy Anna", desc: "Users can enjoy variety of games including Teen Patti, Roulette, Blackjack, Poker, Baccarat, and Andar Bahar. Reddy Anna Live Casino offers diverse options for users seeking premium casino entertainment." },
  { icon: "bi-person-video2", title: "Professional Live Dealers", desc: "The live casino experience on Reddy Anna enhanced by professional dealers who manage games in real time. This creates an engaging and authentic atmosphere for users." },
  { icon: "bi-shield-lock", title: "Secure and Reliable Gaming Environment", desc: "Security remains top priority for Reddy Anna. The platform focuses on creating safe and reliable environment where users can enjoy their preferred games confidently." },
  { icon: "bi-hand-thumbs-up", title: "Why Choose Reddy Anna Live Casino", desc: "With quality streaming, diverse games, and user-friendly features, Reddy Anna Live Casino continues to a popular destination for online casino enthusiasts." }
];

const LiveCasinoSection = () => (
  <section className="py-24 relative border-t border-white/5 bg-[#040508]">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

    <div className="container mx-auto px-4 max-w-7xl relative z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Sticky Header */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32 space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Premium Casino</span>
            </div>
            
            <h2 className="font-heading font-black uppercase text-3xl lg:text-4xl xl:text-5xl leading-[1.1] tracking-tight">
              <span className="block text-white">Reddy Anna Live</span> 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Casino</span>
            </h2>
            
            {/* <div className="w-16 h-1 bg-gradient-to-r from-gold to-transparent"></div> */}
            
            <h3 className="text-white font-bold text-2xl leading-snug">Authentic Casino Entertainment with Reddy Anna</h3>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light pr-4">
              Reddy Anna Live Casino delivers an immersive casino experience through professionally hosted games and advanced streaming technology. The platform recreates the atmosphere of a traditional casino in an online environment.
            </p>
          </div>
        </div>

        {/* Right Side: Elegant Flowing List */}
        <div className="lg:col-span-7 space-y-12">
          {liveCasinoFeatures.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col sm:flex-row gap-8 items-start pb-8 border-b border-white/5 last:border-0 last:pb-0" 
              data-aos="fade-left"
              data-aos-delay={(idx + 1) * 100}
            >
              {/* Refined Icon Container */}
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-2xl text-gold group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 shadow-lg">
                <i className={`bi ${item.icon}`}></i>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
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

export default LiveCasinoSection;
