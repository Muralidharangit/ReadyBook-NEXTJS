"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const testimonialsData = [
  {
    name: "Rahul S.",
    location: "Chennai",
    initials: "RS",
    quote: "I've been using Reddy Book for more than a year, and my experience has been excellent. Every deposit is processed quickly, withdrawals are always smooth, and the platform provides a secure and user-friendly experience."
  },
  {
    name: "Arjun P.",
    location: "Mumbai",
    initials: "AP",
    quote: "I started using Reddy Book during the IPL season and immediately noticed how easy it is to navigate. Live odds are updated in real time, and there are plenty of betting options for cricket fans."
  },
  {
    name: "Sneha K.",
    location: "Hyderabad",
    initials: "SK",
    quote: "What I appreciate most is the platform's commitment to security. My account was verified quickly, and every transaction feels safe and secure. I recommend it to anyone looking for a trusted platform."
  },
  {
    name: "Vikram T.",
    location: "Bangalore",
    initials: "VT",
    quote: "Whenever I have a question, the support team responds promptly. The customer service is professional and helpful, which is one reason I continue using the platform."
  },
  {
    name: "Mohit D.",
    location: "Pune",
    initials: "MD",
    quote: "I enjoy Teen Patti and Roulette on the platform. The live casino section runs smoothly and provides a realistic gaming experience. Every session is entertaining and engaging."
  },
  {
    name: "Priya N.",
    location: "Ahmedabad",
    initials: "PN",
    quote: "As someone new to online gaming, I found Reddy Book incredibly easy to use. Registration was simple, and the interface helped me understand everything quickly."
  },
  {
    name: "Karan M.",
    location: "Delhi",
    initials: "KM",
    quote: "The payment system is one of the biggest strengths. Deposits are instant, and withdrawals are processed quickly. Because of this, I trust the platform with all my gaming activities."
  },
  {
    name: "Sandeep R.",
    location: "Kolkata",
    initials: "SR",
    quote: "Whether it's cricket, football, kabaddi, or tennis, the platform covers everything. The wide range of sports makes it my preferred choice for exploring different betting markets."
  },
  {
    name: "Fatima A.",
    location: "Hyderabad",
    initials: "FA",
    quote: "I've used Reddy Book consistently for months, and it has always performed well. The platform is stable, the odds are competitive, and the experience is smooth from login to withdrawal."
  },
  {
    name: "Ankit J.",
    location: "Jaipur",
    initials: "AJ",
    quote: "After trying multiple platforms, I chose Reddy Book because it combines security, convenience, and excellent features. The overall experience is unmatched."
  },
  {
    name: "Rohit V.",
    location: "Surat",
    initials: "RV",
    quote: "Every feature works exactly as expected. From account management to live betting, the platform delivers a premium experience. Reliability is what keeps me coming back."
  },
  {
    name: "Nikhil P.",
    location: "Lucknow",
    initials: "NP",
    quote: "I've never had issues with the platform. It is responsive, secure, and easy to use. The smooth experience makes it my preferred choice for online entertainment."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dot-matrix-pattern overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">Winner Testimonials</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            WHAT OUR <span className="gold-text">WINNERS</span> SAY
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            We build features that empower players and set new milestones in the online gaming market.
          </p>
        </div>

        <div className="reveal-up relative">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {testimonialsData.map((t, index) => (
              <SwiperSlide key={index} className="h-auto">
                {/* Replaced 'testimonial-card' class to disable CSS hover rules */}
                <div className="h-full flex flex-col justify-between p-[30px] bg-[#11141d] border border-white/10 rounded-[20px] transition-colors duration-300">
                  <div>
                    <div className="testimonial-stars mb-4 flex gap-1">
                      <i className="bi bi-star-fill text-gold"></i>
                      <i className="bi bi-star-fill text-gold"></i>
                      <i className="bi bi-star-fill text-gold"></i>
                      <i className="bi bi-star-fill text-gold"></i>
                      <i className="bi bi-star-fill text-gold"></i>
                    </div>
                    <p className="testimonial-text mb-5 text-[0.92rem] text-muted italic leading-relaxed">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  <div className="testimonial-user flex items-center gap-3 mt-auto">
                    <div className="user-avatar-initials w-10 h-10 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center font-bold text-sm">
                      {t.initials}
                    </div>
                    <div className="user-info">
                      <h5 className="text-[0.88rem] font-bold text-white mb-0">{t.name}</h5>
                      <span className="text-[0.75rem] text-gold font-semibold">{t.location}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
