import React from "react";

const visionGoals = [
  "Build a secure and transparent platform for all users.",
  "Become a preferred destination for sports betting and live casino entertainment.",
  "Continuously innovate and enhance the user experience.",
  "Foster long-term trust and loyalty within our community.",
  "Promote responsible gaming and safe online entertainment.",
  "Provide accessible and seamless services across mobile and desktop devices."
];

const missionGoals = [
  "Delivering smooth and hassle-free gaming experience.",
  "Providing fast and secure transactions for all users.",
  "Offering a diverse range of sports betting and casino options.",
  "Maintaining the highest standards of security and privacy.",
  "Supporting users with dedicated customer service.",
  "Encouraging responsible gaming practices.",
  "Leveraging advanced technology to improve platform performance and reliability."
];

export const VisionMission: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap -mx-4 gap-y-8">
          {/* Vision */}
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up">
            <div className="glass-card value-card p-8 h-full flex flex-col space-y-6 bordergold">
              <div>
                <span className="section-tag inline-block">👁️ Our Vision</span>
              </div>
              <div className="space-y-2">

                <h2 className=" font-heading font-extrabold uppercase leading-tight text-white text-3xl">
                  VISION
                </h2>
                <p className="text-dim text-[1rem]  leading-relaxed">
                  At Reddy Book, our vision to become a leading and trusted online betting and gaming platform by delivering exceptional experiences, innovative technology, and unmatched customer satisfaction.
                </p>
              </div>
              <p className="text-white font-bold">We aim to:</p>
              <ul className="space-y-3">
                {visionGoals.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="bi bi-check-circle-fill gold-text mr-3 mt-1"></i>
                    <span className="text-dim text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-dim text-[1rem] leading-relaxed">
                Our vision is driven by a commitment to excellence, ensuring that Reddy Book remains a trusted name in the online gaming industry.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="100">
            <div className="glass-card value-card p-8 h-full flex flex-col space-y-6 bordergold">
              <div>
                <span className="section-tag inline-block">🎯 Our Mission</span>
              </div>
              <div className="space-y-2">
                <h2 className="font-heading font-extrabold uppercase leading-tight text-white text-3xl">
                  MISSION
                </h2>
                <p className="text-dim text-[1rem] leading-relaxed">
                  The mission of Reddy Book is to provide a secure, reliable user-friendly platform where players can enjoy premium sports betting and casino gaming experiences.
                </p>
              </div>
              <p className="text-white font-bold">Our mission includes:</p>
              <ul className="space-y-3">
                {missionGoals.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="bi bi-check-circle-fill gold-text mr-3 mt-1"></i>
                    <span className="text-dim text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-dim text-[1rem] leading-relaxed">
                At Reddy Book, we strive to create value for our users by combining innovation, trust entertainment in one comprehensive platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
