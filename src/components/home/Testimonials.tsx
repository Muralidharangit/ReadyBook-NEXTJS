import React from "react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg-dark">
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

        <div className="flex flex-wrap -mx-4 gap-y-6">
          {/* Testimonial 1 */}
          <div className="w-full md:w-1/3 px-4 reveal-up">
            <div className="testimonial-card">
              <div className="testimonial-stars mb-4 flex gap-1">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text mb-5 text-[0.92rem] text-muted italic leading-relaxed">
                &quot;ReedyBook is incredibly reliable. I won ₹41,500 in Nomination I last month and received the cash prize
                in my account within minutes. Absolutely outstanding support!&quot;
              </p>
              <div className="testimonial-user flex items-center gap-3">
                <div className="user-avatar-initials">RS</div>
                <div className="user-info">
                  <h5 className="text-[0.88rem] font-bold text-white mb-0">Rahul Sharma</h5>
                  <span className="text-[0.75rem] text-gold font-semibold">Nomination I Winner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full md:w-1/3 px-4 reveal-up">
            <div className="testimonial-card">
              <div className="testimonial-stars mb-4 flex gap-1">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text mb-5 text-[0.92rem] text-muted italic leading-relaxed">
                &quot;Creating my instant ID took less than 2 minutes on WhatsApp. The exchange odds are the best in the
                market, especially for IPL live matches. Highly recommend!&quot;
              </p>
              <div className="testimonial-user flex items-center gap-3">
                <div className="user-avatar-initials">AK</div>
                <div className="user-info">
                  <h5 className="text-[0.88rem] font-bold text-white mb-0">Amit Kumar</h5>
                  <span className="text-[0.75rem] text-gold font-semibold">Verified Creator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-full md:w-1/3 px-4 reveal-up">
            <div className="testimonial-card">
              <div className="testimonial-stars mb-4 flex gap-1">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text mb-5 text-[0.92rem] text-muted italic leading-relaxed">
                &quot;Best experience on a gaming blog contest. The transparent leaderboard rankings update daily, making the
                challenge super competitive and fun.&quot;
              </p>
              <div className="testimonial-user flex items-center gap-3">
                <div className="user-avatar-initials">PM</div>
                <div className="user-info">
                  <h5 className="text-[0.88rem] font-bold text-white mb-0">Priya Mishra</h5>
                  <span className="text-[0.75rem] text-gold font-semibold">League II Winner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
