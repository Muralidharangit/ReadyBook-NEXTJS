import React from "react";
import Button from "@/components/common/Button";

export const Channels: React.FC = () => {
  return (
    <section className="py-12 bg-white/[0.01]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap -mx-4 gap-y-6">
          {/* WhatsApp Support */}
          <div className="w-full lg:w-1/3 md:w-1/2 px-4">
            <div className="glass-card p-6 h-full flex flex-col justify-between reveal-up transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="contact-item-icon text-gold text-2xl w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/15">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <h4 className="font-heading font-extrabold text-white text-[1.15rem] mb-0">Consulting WhatsApp</h4>
                </div>
                <p className="text-muted text-[0.9rem] leading-relaxed mb-6">
                  Chat directly with our core advisors to configure self-service dashboards, request live platform demos, and discuss transaction fee models.
                </p>
              </div>
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold-outline" className="w-full py-2.5">
                Start Consultation
              </Button>
            </div>
          </div>

          {/* Telegram Channel */}
          <div className="w-full lg:w-1/3 md:w-1/2 px-4">
            <div className="glass-card p-6 h-full flex flex-col justify-between reveal-up transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="contact-item-icon text-gold text-2xl w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/15">
                    <i className="bi bi-telegram"></i>
                  </div>
                  <h4 className="font-heading font-extrabold text-white text-[1.15rem] mb-0">Telegram Channel</h4>
                </div>
                <p className="text-muted text-[0.9rem] leading-relaxed mb-6">
                  Join our official B2B channel to monitor API announcements, maintenance logs, security patches, and release notes for modules.
                </p>
              </div>
              <Button href="https://t.me/reddybook_official" target="_blank" variant="gold-outline" className="w-full py-2.5">
                Join Channel
              </Button>
            </div>
          </div>

          {/* Email Support */}
          <div className="w-full lg:w-1/3 md:w-full px-4">
            <div className="glass-card p-6 h-full flex flex-col justify-between reveal-up transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="contact-item-icon text-gold text-2xl w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/15">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h4 className="font-heading font-extrabold text-white text-[1.15rem] mb-0">Email Support</h4>
                </div>
                <p className="text-muted text-[0.9rem] leading-relaxed mb-6">
                  Submit enterprise level inquiries, contract proposals, partnership offerings, or customized feature requests to our relationships desk.
                </p>
              </div>
              <Button href="mailto:support@reddybook.club" variant="gold-outline" className="w-full py-2.5">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Channels;
