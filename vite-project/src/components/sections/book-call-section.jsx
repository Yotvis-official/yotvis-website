import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookCallForm from "@/components/ui/book-call-form";

gsap.registerPlugin(ScrollTrigger);

export default function BookCallSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Background Drop Panel slides down from top
      tl.fromTo(".gsap-call-bg-drop",
        { y: "-100%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }
      )
      // Background Word drops down from top
      .fromTo(".gsap-call-bg-word",
        { opacity: 0, scale: 0.8, y: -250 },
        { opacity: 0.05, scale: 1, y: 0, duration: 1.4, ease: "back.out(1.2)" },
        "-=0.9"
      )
      // Small Labels
      .fromTo(".gsap-call-label", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=1.0"
      )
      // Main Heading
      .fromTo(".gsap-call-heading",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
        "-=0.8"
      )
      // Trust Points staggered
      .fromTo(".gsap-call-trust-item",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      )
      // Form Container
      .fromTo(".gsap-call-form",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="book-call" 
      className="relative w-full min-h-screen pt-36 pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 bg-[#FFFFF3] overflow-hidden flex flex-col justify-center items-center z-10"
    >
      {/* Background Drop Panel */}
      <div className="gsap-call-bg-drop absolute inset-0 bg-[#D3E4BF] pointer-events-none z-0" />

      {/* Optional Giant Background Word */}
      <div className="gsap-call-bg-word absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center opacity-5 mix-blend-multiply z-0">
        <h2 className="text-[15rem] md:text-[25rem] lg:text-[30rem] font-bold text-black font-clash leading-none tracking-tighter">
          CALL
        </h2>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 z-10 relative flex flex-col items-center justify-center text-center">
        
        {/* Top Content */}
        <div className="w-full flex flex-col items-center mb-12">
          
          {/* Small Label & Accent Pill */}
          <div className="gsap-call-label flex items-center justify-center space-x-3 mb-6">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 font-clash">
              BOOK A CALL
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#7F7CFF]/10 text-[#7F7CFF] border border-[#7F7CFF]/20">
              DISCOVERY FIRST
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="gsap-call-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] font-clash mb-6 max-w-3xl">
            Let's understand your vision before we build it.
          </h1>

          {/* Description */}
          <p className="gsap-call-label text-lg text-black/70 leading-relaxed mb-10 max-w-2xl">
            Share a few details about your business, goals, timeline, and project needs. Yotvis will use this to understand where you are now and what kind of digital presence you want to create.
          </p>

          {/* Trust Points */}
          <div className="gsap-call-trust flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
            <div className="gsap-call-trust-item flex items-center space-x-3">
              <span className="text-[#7F7CFF] font-medium font-clash">01</span>
              <p className="text-black/80 font-medium text-lg whitespace-nowrap">Clear project direction</p>
            </div>
            <div className="gsap-call-trust-item flex items-center space-x-3">
              <span className="text-[#7F7CFF] font-medium font-clash">02</span>
              <p className="text-black/80 font-medium text-lg whitespace-nowrap">No random pricing guesswork</p>
            </div>
            <div className="gsap-call-trust-item flex items-center space-x-3">
              <span className="text-[#7F7CFF] font-medium font-clash">03</span>
              <p className="text-black/80 font-medium text-lg whitespace-nowrap">Better planning</p>
            </div>
          </div>

          {/* Small Bottom Line */}
          <div className="gsap-call-label pt-6 border-t border-black/10 w-full max-w-lg mx-auto">
            <p className="text-sm text-black/50 italic">
              A short discovery call helps us understand the right path before design, development, or launch begins.
            </p>
          </div>

        </div>

        {/* Form */}
        <div className="gsap-call-form w-full max-w-2xl text-left">
          <BookCallForm />
        </div>

      </div>
    </section>
  );
}
