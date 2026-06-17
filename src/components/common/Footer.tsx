import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gradient-to-b from-bg-primary to-[#030405] border-t border-white/5 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 gap-y-10 lg:gap-y-12 mb-12">
          {/* Logo & About */}
          <div className="w-full lg:w-5/12 px-4 text-center lg:text-left">
            <img 
              src="/images/Logo.png" 
              alt="Reddy Book" 
              style={{ height: "65px", width: "auto" }}
              className="mx-auto lg:mx-0 mb-[18px] filter drop-shadow-[0_0_8px_rgba(255,213,74,0.22)]"
            />
            <p className="text-dim text-[0.88rem] max-w-[380px] mx-auto lg:mx-0 leading-[1.7]">
              Reddy Book is the industry-leading Sports Betting and Casino Exchange. Back & lay your bets on top
              leagues with the absolute best liquidity and instant UPI withdrawal times.
            </p>
          </div>

          {/* Payment Partners */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center lg:text-left">
            <div className="footer-title">Payment Partners</div>
            <div className="payment-grid justify-center lg:justify-start">
              <div className="payment-badge"><i className="bi bi-phone-fill"></i> UPI</div>
              <div className="payment-badge"><i className="bi bi-bank2"></i> NetBanking</div>
              <div className="payment-badge"><i className="bi bi-currency-bitcoin"></i> Crypto</div>
              <div className="payment-badge"><i className="bi bi-credit-card-2-front-fill"></i> Cards</div>
            </div>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 text-center lg:text-left">
            <div className="footer-title">Customer Support</div>
            <p className="text-dim text-[0.88rem] leading-[1.7] mb-2 mx-auto lg:mx-0 max-w-[320px]">
              Get instant support 24/7/365. Our dedicated customer service agents are ready to assist you.
            </p>
            <a 
              href="https://wa.me/919999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-gold hover:text-gold-light font-bold transition-colors"
            >
              <i className="bi bi-whatsapp mr-1"></i> Live Chat Support
            </a>
            <br />
            <span className="text-faint text-[0.8rem] block mt-1">Email: support@reddybook.club</span>
          </div>
        </div>

        {/* Responsible Gaming & Copyright */}
        <div className="pt-6 border-t border-gray-700/30 text-[0.78rem] text-dim text-center lg:text-left">
          <p className="mb-2">
            ⚖️ <strong>Responsible Gaming:</strong> We are committed to responsible gaming. Players must be
            18+ to register. Play within your limits.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pt-2">
            <p className="mb-0">
              © 2026 Reddy Book Exchange. All rights reserved. | Developed by <span className="gold-text">Murali Theme</span>
            </p>
            <div className="flex gap-4">
              <Link href="#" className="footer-link hover:text-gold p-0 transition-colors">Privacy Policy</Link>
              <Link href="#" className="footer-link hover:text-gold p-0 transition-colors">Terms & Conditions</Link>
              <Link href="#" className="footer-link hover:text-gold p-0 transition-colors">Responsible Play</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
