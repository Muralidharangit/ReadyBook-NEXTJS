"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Construct WhatsApp URL
      const text = encodeURIComponent(
        `Hi Support! I submitted a contact request:\n\n` +
        `Name: ${name}\n` +
        `WhatsApp: ${phone}\n` +
        `Subject: ${subject}\n` +
        `Message: ${message}`
      );
      const url = `https://wa.me/919999999999?text=${text}`;
      
      setWhatsAppUrl(url);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setSubject("");
    setMessage("");
    setIsSubmitted(false);
    setWhatsAppUrl("");
  };

  return (
    <section id="contact-form-section" className="py-12">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">✍️ Drop Us A Line</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            SUBMIT A <span className="gold-text">REQUEST</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            Need support but not on WhatsApp? Fill out this secure form and an agent will reply via email.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 gap-y-6 justify-center">
          <div className="w-full lg:w-2/3 px-4">
            <div className="glass-card p-6 md:p-12 relative overflow-hidden rounded-2xl bordergold">
              
              {/* Success Message Overlay */}
              <div 
                className={`form-success-wrapper absolute inset-0 bg-bg-dark/98 z-10 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-300 ${
                  isSubmitted ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="mb-4 text-green-500 text-5xl">
                  <i className="bi bi-patch-check-fill animate-bounce"></i>
                </div>
                <h3 className="font-heading font-black text-white text-[1.4rem] mb-2 uppercase">REQUEST SUBMITTED</h3>
                <p className="text-dim text-[0.95rem] max-w-[480px] leading-relaxed mb-6">
                  We have received your support request! To receive priority assistance and resolve this immediately, click below to chat with an agent on WhatsApp.
                </p>
                <div className="w-full flex flex-col gap-2 max-w-[320px]">
                  <Button 
                    href={whatsAppUrl} 
                    target="_blank" 
                    variant="gold" 
                    className="w-full py-4 text-center font-bold"
                  >
                    <i className="bi bi-whatsapp"></i> Priority WhatsApp Chat
                  </Button>
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="btn-gold-outline w-full py-2 text-center text-dim hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4 gap-y-6">
                  {/* Name */}
                  <div className="w-full md:w-1/2 px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">Full Name *</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      placeholder="e.g. Ramesh Kumar" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="w-full md:w-1/2 px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      placeholder="e.g. +91 99999 99999" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                    />
                  </div>
                  
                  {/* Subject */}
                  <div className="w-full px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">Subject *</label>
                    <select 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    >
                      <option value="" disabled className="bg-bg-dark">Select a topic</option>
                      <option value="General Support" className="bg-bg-dark">General Support / ID Setup</option>
                      <option value="Payment Settlement" className="bg-bg-dark">Deposit / Withdrawal Issue</option>
                      <option value="Account ID Lock" className="bg-bg-dark">Betting ID Lock / Password Reset</option>
                      <option value="Business Proposal" className="bg-bg-dark">Business / Marketing Partnership</option>
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div className="w-full px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">Message *</label>
                    <textarea 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      rows={5} 
                      placeholder="Write your query here..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="w-full px-4 text-center mt-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto btn btn-gold btn-lg px-12 py-4 flex items-center justify-center gap-2 mx-auto disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-bg-dark border-t-transparent rounded-full animate-spin"></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Support Request"
                      )}
                    </button>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
