import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

const heroParagraphs = [
  "Reddy Book is a trusted online platform that brings sports betting and live casino entertainment together in one secure and user-friendly destination. We are committed to providing an exceptional experience for users through innovative technology, fast transactions, reliable customer support, and a wide range of gaming options.",
  "At Reddy Book, our focus is on creating a platform that combines convenience, security, and entertainment. Whether you enjoy cricket betting, football betting, kabaddi, tennis, or live casino games, Reddy Book is designed to deliver an engaging and enjoyable experience across all devices.",
  "With a strong commitment to transparency and user satisfaction, Reddy Book continues to grow as a preferred choice for users seeking a reliable online gaming platform."
];

export const PageHero: React.FC = () => {
  return (
    <section className="page-hero relative overflow-hidden bg-bg-dark pt-32 pb-24 border-b border-gold/10">
      {/* Background glow orbs */}
      <div className="glow-orb glow-gold w-[500px] h-[500px] top-[-10%] left-[-10%] opacity-40"></div>
      <div className="glow-orb glow-purple w-[600px] h-[600px] bottom-[-20%] right-[-10%] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-5 gap-y-12 items-center">
          {/* Text Info */}
          <div className="w-full lg:w-1/2 px-4 flex flex-col items-center lg:items-start text-center lg:text-left reveal-left space-y-6">
            <div>
              <span className="section-tag inline-block">✨ About Us</span>
            </div>
            <h1 className="uppercase leading-tight font-heading font-black text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
              WELCOME TO <span className="gold-text">REDDY BOOK</span>
            </h1>

            <div className="max-w-[580px] space-y-5 text-left">
              <p className="text-gold font-bold text-lg border-l-2 border-gold pl-4 leading-relaxed">
                {heroParagraphs[0]}
              </p>
              <p className="text-muted text-[0.98rem] leading-relaxed pl-4">
                {heroParagraphs[1]}
              </p>
              <p className="text-muted text-[0.98rem] leading-relaxed pl-4">
                {heroParagraphs[2]}
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="px-6 py-4">
                <i className="bi bi-whatsapp mr-2"></i> Get Live ID
              </Button>
              <Button href="/services" variant="gold-outline" className="px-6 py-4">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Hero Image Visual */}
          <div className="w-full lg:w-1/2 px-4 relative flex justify-center items-center">
            <div className="relative max-w-[500px] w-full group" data-aos="zoom-in" data-aos-delay="200">
              {/* Outer Golden Glow Aura */}
              <div className="absolute -inset-1  rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              {/* Background ambient radial glow */}
              {/* <div className="absolute inset-0 rounded-2xl filter blur-xl"></div> */}

              <div className="relative  rounded-2xl  overflow-hidden  p-2">
                <Image
                  src="/images/about-1.png"
                  alt="Reddy Book"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
