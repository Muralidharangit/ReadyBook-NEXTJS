"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import { api } from "@/lib/api";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await api.submitContactForm({
        name,
        email,
        phone,
        subject,
        message
      });

      // Construct WhatsApp URL for B2B consultation request
      const text = encodeURIComponent(
        `Hi Reddy Book! I submitted a B2B Consultation Request:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `WhatsApp/Phone: ${phone}\n` +
        `Subject: ${subject}\n` +
        `Message/Inquiry: ${message}`
      );
      const url = `https://wa.me/919999999999?text=${text}`;
      
      setWhatsAppUrl(url);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error: any) {
      setIsSubmitting(false);
      setErrorMsg(error.message || "Failed to submit request. Please try again.");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setIsSubmitted(false);
    setWhatsAppUrl("");
    setErrorMsg("");
  };

  return (
    <section id="contact-form-section" className="py-12 bg-bg-dark">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">✍️ Request Consultation</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Submit A <span className="gold-text">Request</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            Fill out this secure form and a B2B gaming advisor will get back to you with platform details and documentation links.
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
                  We have received your B2B inquiry! To fast-track your request and connect with our technical consultants right away, click below to chat on WhatsApp.
                </p>
                <div className="w-full flex flex-col gap-2 max-w-[320px]">
                  <Button 
                    href={whatsAppUrl} 
                    target="_blank" 
                    variant="gold" 
                    className="w-full py-4 text-center font-bold"
                  >
                    <i className="bi bi-whatsapp"></i> Priority Consultant Chat
                  </Button>
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="btn-gold-outline w-full py-2 text-center text-dim hover:text-white cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
                    {errorMsg}
                  </div>
                )}
                
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
                  
                  {/* Email */}
                  <div className="w-full md:w-1/2 px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      placeholder="e.g. ramesh@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>

                  {/* Phone */}
                  <div className="w-full md:w-1/2 px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">WhatsApp/Contact Number *</label>
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
                  <div className="w-full md:w-1/2 px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">Inquiry Subject *</label>
                    <select 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    >
                      <option value="" disabled className="bg-bg-dark">Select a topic</option>
                      <option value="White Label Casino Solution" className="bg-bg-dark">White Label Casino Platform</option>
                      <option value="Online Casino Payment Gateway" className="bg-bg-dark">Payment Processing Gateway</option>
                      <option value="Multi-Provider Game API" className="bg-bg-dark">Game Provider API Integration</option>
                      <option value="Self-Service Casino Platform" className="bg-bg-dark">Self-Service Casino / Developer Tools</option>
                      <option value="Managed Services Consultation" className="bg-bg-dark">Managed Platform Services</option>
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div className="w-full px-4">
                    <label className="block mb-2 font-semibold text-white text-[0.88rem] text-left">Business Inquiry Details *</label>
                    <textarea 
                      className="w-full bg-white/[0.03] text-white border border-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-[0.9rem]"
                      rows={5} 
                      placeholder="Please describe your platform requirements, project timeline, and expected monthly volume..." 
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
                      className="w-full sm:w-auto btn btn-gold btn-lg px-12 py-4 flex items-center justify-center gap-2 mx-auto disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-bg-dark border-t-transparent rounded-full animate-spin"></span>
                          Submitting Request...
                        </>
                      ) : (
                        "Submit B2B Inquiry"
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

