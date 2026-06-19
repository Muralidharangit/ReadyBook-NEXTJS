import React from 'react';

const CricketSection = () => {
  const features = [
    { 
      icon: "bi-star-fill", 
      title: "Why Cricket Fans Choose Reddy Anna", 
      desc: "One the biggest attractions Reddy Anna Cricket Betting is the wide variety of available markets. Users can follow match outcomes, team performances, player achievements, total runs, top scorers, and many other cricket-focused opportunities. Reddy Anna creates an engaging environment where cricket enthusiasts can enjoy every over, wicket, and boundary." 
    },
    { 
      icon: "bi-broadcast", 
      title: "Live Cricket Experience on Reddy Anna", 
      desc: "The live experience on Reddy Anna allows users to stay updated with match developments as they happen. Real-time information, updated statistics, and dynamic match insights make Reddy Anna a preferred destination cricket followers. Whether an IPL match or an international tournament, Reddy Anna delivers an exciting experience." 
    },
    { 
      icon: "bi-phone", 
      title: "Mobile-Friendly Cricket Platform", 
      desc: "Modern users demand flexibility Reddy Anna delivers exactly that. The platform is optimized for smartphones, tablets, and desktop devices. With Reddy Anna, cricket fans can access their favorite content from virtually anywhere." 
    },
    { 
      icon: "bi-shield-check", 
      title: "Trusted Cricket Entertainment with Reddy Anna", 
      desc: "As cricket continues grow globally, Reddy Anna remains dedicated to providing a smooth and engaging platform for cricket enthusiasts. Through innovation, reliability, and extensive sports coverage, Reddy Anna continues attract users seeking quality cricket entertainment." 
    }
  ];

  return (
    <section className="pt-8 pb-16 lg:pt-10 lg:pb-32 relative bg-[#06070a]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-[#06070a] to-[#06070a] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-20 max-w-7xl mx-auto">
          
          {/* Left: Titles */}
          <div className="lg:w-5/12" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Premium Platform</span>
            </div>
            <h1 className="font-heading font-black uppercase text-3xl md:text-4xl leading-[1.2] tracking-tight mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 pb-2">Reddy Anna</span> 
              <span className="block text-white">Cricket Betting</span>
            </h1>
          </div>
          
          {/* Right: Intro Paragraph */}
          <div className="lg:w-7/12 lg:pl-10 lg:border-l border-white/10" data-aos="fade-left">
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-6 leading-snug">
              Experience World-Class Cricket Action with Reddy Anna
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Reddy Anna offers cricket fans a comprehensive platform to enjoy cricket-related entertainment throughout the year. Whether you follow domestic leagues, international tournaments, or global championships, Reddy Anna provides extensive coverage across major cricket events. From thrilling T20 encounters to intense Test matches, Reddy Anna ensures users stay connected every moment of the game.
            </p>
          </div>
          
        </div>

        {/* Features Grid - Clean 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300 shadow-lg"
              data-aos="fade-up" 
              data-aos-delay={(idx + 1) * 100}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-gold/10 shadow-inner">
                  <i className={`bi ${item.icon} text-gold`}></i>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-[1.05rem]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CricketSection;
