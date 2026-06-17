"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/common/Button";

interface DemoModalProps {
  isOpen: boolean;
  gameTitle: string;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, gameTitle, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Reset state
    setProgress(0);
    setIsLoaded(false);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 400);
      }
      setProgress(currentProgress);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isOpen, gameTitle]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[500px] modal-content-glass p-8 bordergold shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-dim hover:text-white text-2xl font-bold focus:outline-none transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        {!isLoaded ? (
          <div className="text-center py-4">
            <h4 className="mb-4 font-heading font-extrabold text-[1.4rem]">
              LOADING <span className="gold-text">{gameTitle.toUpperCase()}</span>
            </h4>
            <p className="text-muted text-[0.88rem] mb-6">Connecting to secure exchange lobby...</p>
            <div className="demo-progress mb-4 bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
              <div 
                className="demo-bar h-full bg-gold shadow-[0_0_10px_#fcd45a] transition-all duration-100 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-[0.75rem] text-faint font-semibold">{progress}% Loaded</span>
          </div>
        ) : (
          <div className="text-center py-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="mb-6 text-5xl text-green-500 animate-bounce">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h4 className="mb-4 font-heading font-extrabold text-[1.4rem]">
              <span className="gold-text">DEMO LOADED</span> SUCCESSFULLY
            </h4>
            <p className="text-dim text-[0.9rem] leading-relaxed mb-6">
              Your free trial account is active. To start placing live bets and withdraw winnings, secure your custom Betting ID instantly.
            </p>
            <div className="flex flex-col gap-3">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="w-full py-4 font-bold text-center">
                <i className="bi bi-whatsapp"></i> Get Live ID Now
              </Button>
              <button 
                type="button" 
                onClick={onClose}
                className="btn-gold-outline w-full py-2.5 text-center font-bold text-dim hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
