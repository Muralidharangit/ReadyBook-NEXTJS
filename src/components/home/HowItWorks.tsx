"use client";

import React from "react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "Step 01",
      icon: "bi-box-arrow-in-right",
      title: "Login to Your ID",
      desc: "Access your account using your registered Reddy Book ID and password. Once logged in, you manage all settings related to your Reddy Book ID.",
      delay: "0.1s",
    },
    {
      step: "Step 02",
      icon: "bi-person-circle",
      title: "Open Account Section",
      desc: "Navigate to the profile or account settings area linked to your Reddy Book ID. This section contains all information associated with your Reddy Book account.",
      delay: "0.2s",
    },
    {
      step: "Step 03",
      icon: "bi-file-earmark-text",
      title: "Submit Details",
      desc: "Provide requested details connected to your Reddy Book ID, including your name, contact information, and other account verification requirements.",
      delay: "0.3s",
    },
    {
      step: "Step 04",
      icon: "bi-shield-check",
      title: "Complete Verification",
      desc: "Send necessary verification documents through the official Reddy Book support channels. The Reddy Book team will review the details associated with your Reddy Book ID.",
      delay: "0.4s",
    },
    {
      step: "Step 05",
      icon: "bi-check2-circle",
      title: "Receive Confirmation",
      desc: "Once approved, your Reddy Book ID will be fully verified, giving you unrestricted access to all Reddy Book features and services.",
      delay: "0.5s",
    },
  ];

  return (
    <>
      {/* Step-by-Step Guide to Verify Your Reddy Book ID */}
      <section id="how-it-works" className="py-24 border-t border-white/5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c0e14 0%, #111525 50%, #090b10 100%)' }}>
        <div className="container mx-auto px-4 relative z-10">

          {/* Introductory Section */}
          <div className="flex flex-wrap -mx-4 items-center mb-16 gap-y-8">
            <div className="w-full lg:w-6/12 px-4 reveal-left">
              <span className="section-tag">🔒 Safety & Security</span>
              <h2 className="mb-6 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                How to Verify Your <br />
                <span className="gold-text">Reddy Book ID</span> for Secure Access
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Verifying your Reddy Book ID is one of the most important steps for ensuring a safe, secure, and uninterrupted experience on Reddy Book. A verified Reddy Book ID helps protect your account, secures your transactions, and provides complete access to all services available on Reddy Book.
              </p>
            </div>
            <div className="w-full lg:w-6/12 px-4 reveal-right">
              <div className="p-8 bg-[#11141d] border border-white/5 rounded-2xl flex flex-col gap-4">
                <p className="text-muted leading-relaxed text-sm m-0">
                  By completing the verification process, Reddy Book users can enjoy smooth deposits, faster withdrawals, access sports betting, live casino games, and exclusive promotions. Every Reddy Book ID should be verified to maximize security and platform benefits.
                </p>
                <div className="h-px bg-white/5 my-2"></div>
                <p className="text-gold font-semibold leading-relaxed text-sm m-0">
                  Without verification, a Reddy Book ID may have limitations on certain account features. Therefore, Reddy Book strongly recommends that all users complete verification process as soon as they receive their Reddy Book ID.
                </p>
              </div>
            </div>
          </div>

          {/* Section Header for Timeline */}
          <div className="text-center mb-12 reveal-up">
            <span className="section-tag">📋 Step-by-Step Guide</span>
            <h3 className="mb-4 font-heading font-bold uppercase text-white tracking-wide text-xl md:text-2xl">
              Verify Your <span className="gold-text">Reddy Book ID</span>
            </h3>
          </div>

          {/* Process Timeline Flow */}
          <div className="process-timeline-wrap mt-12">
            <div className="flex flex-wrap -mx-4 gap-y-0 relative justify-center">
              {/* Connection Line (Desktop) */}
              <div className="timeline-connection-line hidden lg:block" style={{ top: "98px" }}></div>

              {steps.map((s, index) => (
                <div key={index} className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-full px-4">
                  <div className="process-step-node reveal-up" style={{ transitionDelay: s.delay }}>
                    <div className="node-badge">{s.step}</div>
                    <div className="node-icon-circle">
                      <i className={`bi ${s.icon}`}></i>
                      <div className="node-ripple"></div>
                    </div>
                    <div className="node-content mt-4">
                      <h4 className="node-title font-bold text-white mb-2 text-base">{s.title}</h4>
                      <p className="node-desc text-muted text-[0.82rem] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    {/* Connector Arrow for Mobile/Tablet */}
                    {index < steps.length - 1 && (
                      <div className="mobile-connector-arrow block lg:hidden mt-4 text-gold text-2xl">
                        <i className="bi bi-arrow-down-short"></i>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concluding Footer */}
          <div className="mt-16 text-center reveal-up">
            <p className="text-muted text-sm max-w-[650px] mx-auto leading-relaxed">
              The verification process for a Reddy Book ID is generally quick and allows users to enjoy a seamless experience across the entire Reddy Book platform.
            </p>
          </div>

        </div>
      </section>

      <hr className="gold-divider mx-auto" style={{ maxWidth: "700px" }} />
    </>
  );
};

export default HowItWorks;
