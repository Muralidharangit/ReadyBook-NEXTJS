import React from 'react';

const HeroSection = () => (
  <section className="relative pt-40 pb-12 lg:pb-20 overflow-hidden flex items-center justify-center min-h-[60vh] bg-[#06070a]">
    {/* Animated Ambient Background Elements */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-yellow-600/5 rounded-full blur-[150px] pointer-events-none"></div>
    <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#06070a] pointer-events-none"></div>

    <div className="container mx-auto px-4 relative z-10 text-center" data-aos="zoom-out" data-aos-duration="1000">
      {/* Pre-Heading Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 shadow-[0_0_20px_rgba(252,212,90,0.15)] backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_rgba(252,212,90,1)]"></span>
        <span className="text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Premium Gaming Experience</span>
      </div>

      {/* Main Title */}
      <h1 className="font-heading font-extrabold uppercase text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tighter drop-shadow-[0_0_40px_rgba(252,212,90,0.2)]">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gold to-yellow-600">
          Reddy Anna
        </span>
      </h1>

      {/* Glassmorphism Subtitle */}
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gold/10 blur-2xl rounded-full"></div>
        <p className="relative text-lg md:text-2xl font-medium text-white/90 max-w-4xl mx-auto leading-relaxed bg-white/[0.03] backdrop-blur-lg border border-white/10 px-8 md:px-12 py-4 rounded-full shadow-2xl hover:border-gold/30 transition-colors duration-500">
          Complete Sports Betting, Live Casino & Gaming Platform
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
