import React, { useState, useEffect } from "react";
import { usePageTransition } from "@/App";

export default function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    const consent = localStorage.getItem("yotvis_cookie_consent");
    if (consent) {
      return;
    }

    // Add a tiny delay so it doesn't interrupt the GSAP hero animation
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("yotvis_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("yotvis_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-3xl bg-black text-[#FFFFF3] rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="font-clash text-lg font-medium mb-1">We value your privacy.</p>
          <p className="text-sm text-[#FFFFF3]/70 font-nunito">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.{" "}
            <button 
              onClick={() => navigateTo("/privacy-policy")} 
              className="underline hover:text-[#FCFF7C] transition-colors cursor-pointer bg-transparent border-none p-0 inline font-nunito"
            >
              Read Policy
            </button>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-shrink-0 gap-3">
          <button 
            onClick={handleDecline}
            className="px-5 py-2.5 text-sm font-medium rounded-full border border-white/20 text-[#FFFFF3]/80 hover:bg-white/10 transition-colors font-clash cursor-pointer"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-[#FCFF7C] text-black hover:bg-[#E6E86C] transition-colors font-clash cursor-pointer"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
}
