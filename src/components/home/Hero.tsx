"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Particle {
  id: number;
  width: number;
  height: number;
  left: string;
  duration: string;
  delay: string;
  opacity: number;
}

export const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate background floating particles
    const list: Particle[] = [];
    for (let i = 0; i < 22; i++) {
      const size = Math.random() * 4 + 2;
      list.push({
        id: i,
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 14 + 10}s`,
        delay: `-${Math.random() * 10}s`,
        opacity: Math.random() * 0.5 + 0.25,
      });
    }
    setParticles(list);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-bg-dark pt-[100px] lg:pt-0 min-h-[auto] flex items-center">
      {/* Background Particles */}
      <div className="particles-container absolute inset-0 z-[9] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: p.left,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".carousel-dots",
          clickable: true,
          bulletClass: "carousel-dot",
          bulletActiveClass: "active",
          renderBullet: (index, className) => {
            return `<button type="button" class="${className}" aria-label="Slide ${index + 1}"></button>`;
          },
        }}
        className="hero-carousel-wrapper w-full"
      >
        <div className="carousel-dots"></div>

        {/* Slide 1: Sportsbook Betting */}
        <SwiperSlide className="hero-slide flex items-center justify-center py-[30px]">
          <div className="hero-bg-decor absolute inset-0 overflow-hidden pointer-events-none">
            <div className="glow-orb glow-purple w-[600px] h-[600px] -top-[100px] left-[10%]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap -mx-4 gap-y-6 items-center">
              <div className="w-full lg:w-6/12 px-4 text-center lg:text-left">
                <div className="hero-badge">
                  <span className="dot"></span> 🔥 India’s Trusted Online Betting Platform
                </div>
                <h1 className="hero-title text-white mb-2 leading-tight">
                  <span className="gold-text">Welcome to Reddy book </span>
                  <br />
                  BETTING
                </h1>
                <div className="hero-prize-block mb-6">
                  <div className="hero-giveaway-sub uppercase text-gold font-semibold tracking-wider">
                   Official Reddy Book Cricket Betting and &amp; Live Casino 
                  </div>
                </div>
                <p className="hero-desc mb-6 max-w-[560px] font-medium text-muted">
                 Welcome to Reddy Book, one of India’s most popular platforms for sports betting and online gaming.
                </p>
                <div className="flex flex-row gap-3 justify-center lg:justify-start mb-6">
                  <a href="#cta-section" className="btn btn-gold inline-flex items-center justify-center gap-2">
                    <i className="bi bi-person-plus-fill"></i> Reddy Book ID
                  </a>
                  <a href="#live-markets" className="btn btn-gold-outline inline-flex items-center justify-center gap-2">
                    <i className="bi bi-graph-up"></i> Contact Support
                  </a>
                </div>
                <div className="supported-by-row flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <span className="uppercase text-faint text-[0.65rem] font-bold tracking-widest">Powered By:</span>
                  <span className="uppercase text-white border-l border-white/50 pl-2 text-[0.8rem] font-black tracking-wider">
                    BETFAIR INTEGRATION
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 text-center">
                <div className="hero-visual-wrap relative flex items-center justify-center">
                  <div className="hero-img-card relative z-5">
                    <img
                      src="/images/bn1.png"
                      alt="Reddy Book"
                      className="w-full relative z-2 max-w-[460px]"
                      loading="lazy"
                    />
                    <div className="hero-img-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Highlight All Sports */}
        <SwiperSlide className="hero-slide flex items-center justify-center py-[30px]">
          <div className="hero-bg-decor absolute inset-0 overflow-hidden pointer-events-none">
            <div className="glow-orb glow-purple w-[600px] h-[600px] -top-[100px] left-[10%]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap -mx-4 gap-y-6 items-center">
              <div className="w-full lg:w-6/12 px-4 text-center lg:text-left">
                <div className="hero-badge">
                  <span className="dot"></span> 🏆 Instant deposits to quick UPI withdrawals
                </div>
                <h1 className="hero-title text-white mb-2 leading-tight">
                  <span className="gold-text">Get your Reddy </span>
                  <br />
                 Book ID instantly
                </h1>
                <div className="hero-prize-block mb-6">
                  <div className="hero-giveaway-sub uppercase text-gold font-semibold tracking-wider">
                    secure payments and 24/7 support &amp; on Reddy Book. 
                  </div>
                </div>
                <p className="hero-desc mb-6 max-w-[560px] font-medium text-muted">
                 Reddy Book offers experience for players who enjoy cricket betting, live casino games, football betting, Teen Patti much more.
                </p>
                <div className="flex flex-row gap-3 justify-center lg:justify-start mb-6">
                  <a href="#cta-section" className="btn btn-gold inline-flex items-center justify-center gap-2">
                    <i className="bi bi-person-plus-fill"></i> Book Now
                  </a>
                  <a href="#live-markets" className="btn btn-gold-outline inline-flex items-center justify-center gap-2">
                    <i className="bi bi-cpu-fill"></i> Play Demo Sportsbook
                  </a>
                </div>
                <div className="supported-by-row flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <span className="uppercase text-faint text-[0.65rem] font-bold tracking-widest">Markets:</span>
                  <span className="uppercase text-white border-l border-white/50 pl-2 text-[0.8rem] font-black tracking-wider">
                    CRICKET · TENNIS · SOCCER · CASINO
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 text-center">
                <div className="hero-visual-wrap relative flex items-center justify-center">
                  <div className="hero-img-card relative z-5">
                    <img
                      src="/images/bn3.png"
                      alt="Reddy Book"
                      className="w-full relative z-2 max-w-[460px]"
                      loading="lazy"
                    />
                    <div className="hero-img-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Play & Win Bonus */}
        <SwiperSlide className="hero-slide flex items-center justify-center py-[30px]">
          <div className="hero-bg-decor absolute inset-0 overflow-hidden pointer-events-none">
            <div className="glow-orb glow-purple w-[600px] h-[600px] -top-[100px] left-[10%]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap -mx-4 gap-y-6 items-center">
              <div className="w-full lg:w-6/12 px-4 text-center lg:text-left">
                <div className="hero-badge">
                  <span className="dot"></span> 🎁 EXCLUSIVE OFFERS · 100% BONUS
                </div>
                <h1 className="hero-title text-white mb-2 leading-tight">
                  <span className="gold-text">PLAY &amp; WIN</span>
                  <br />
                  BONUS
                </h1>
                <div className="hero-prize-block mb-6">
                  <div className="hero-giveaway-sub uppercase text-gold font-semibold tracking-wider">
                    Double Your First Deposit Instantly
                  </div>
                </div>
                <p className="hero-desc mb-6 max-w-[560px] font-medium text-muted">
                  Get more power for your play. Secure your 100% welcome bonus up to ₹20,000, 10% daily cashback on
                  live dealer casinos, and exciting referral rewards.
                </p>
                <div className="flex flex-row gap-3 justify-center lg:justify-start mb-6">
                  <a href="#cta-section" className="btn btn-gold inline-flex items-center justify-center gap-2">
                    <i className="bi bi-gift-fill"></i> Claim Bonus
                  </a>
                  <a href="#promotions" className="btn btn-gold-outline inline-flex items-center justify-center gap-2">
                    <i className="bi bi-tag-fill"></i> Promotions
                  </a>
                </div>
                <div className="supported-by-row flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <span className="uppercase text-faint text-[0.65rem] font-bold tracking-widest">Offer Status:</span>
                  <span className="uppercase text-white border-l border-white/50 pl-2 text-[0.8rem] font-black tracking-wider">
                    ACTIVE TODAY · 18+ RESPONSIBLE PLAY
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 text-center">
                <div className="hero-visual-wrap relative flex items-center justify-center">
                  <div className="hero-img-card relative z-5">
                    <img
                      src="/images/WOMEN WITH CASINO.png"
                      alt="Reddy Book"
                      className="w-full relative z-2 max-w-[460px]"
                      loading="lazy"
                    />
                    <div className="hero-img-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
