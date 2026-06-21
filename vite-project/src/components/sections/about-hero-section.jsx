import React, { useEffect, useRef } from "react";
import gsap from "gsap";


export default function AboutHeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Fade in the text elements
      gsap.fromTo(
        ".hero-text-line",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2
        }
      );

      gsap.fromTo(
        ".hero-para",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.6
        }
      );

      gsap.fromTo(
        ".hero-white-band",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 3,
          ease: "power3.inOut",
          transformOrigin: "right center",
          delay: 0.3
        }
      );

      // Transition the text color to blue as the white band sweeps in
      gsap.to(".hero-blue-text", {
        color: "#7F7CFF",
        duration: 1.5,
        ease: "power2.inOut",
        delay: 1.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#D3E4BF] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <h1 className="hero-text-line mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-black">
          About Yotvis
        </h1>
        <div className="hero-text-line text-[clamp(4.5rem,10vw,11rem)] leading-[1.05] tracking-tight font-medium text-black font-clash">
          Built for
        </div>
      </div>
      
      {/* The White Band Row */}
      <div className="relative w-full mt-2 mb-2">
        {/* Background spans from ~15% left to absolute right */}
        <div className="hero-white-band absolute right-0 top-0 bottom-0 w-[90vw] md:w-[85vw] bg-[#FFFFF3] z-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex-none">
            <div className="flex flex-col items-start">
              <div className="items-start !gap-0 flex flex-col">
                <span className="hero-blue-text text-[clamp(4.5rem,10vw,11rem)] leading-[1.05] tracking-tight font-medium text-black font-clash">clear</span>
              </div>
              <div className="items-start !gap-0 flex flex-col mt-[-10px]">
                <span className="hero-blue-text text-[clamp(4.5rem,10vw,11rem)] leading-[1.05] tracking-tight font-medium text-black font-clash">digital</span>
              </div>
              <div className="items-start !gap-0 flex flex-col md:hidden mt-[-10px]">
                <span className="hero-blue-text text-[clamp(4.5rem,10vw,11rem)] leading-[1.05] tracking-tight font-medium text-black font-clash">presence.</span>
              </div>
            </div>
          </div>
          <div className="flex-none ml-auto py-12 md:py-0 flex items-center">
            <p className="hero-para text-lg md:text-xl lg:text-[22px] leading-[1.65] text-black font-nunito max-w-[550px]">
              Yotvis exists to help businesses{" "}
              <span style={{ backgroundColor: "#FCFF7C" }}>
                turn ideas into a clear, credible,
              </span>{" "}
              and growth-ready digital presence. We believe technology should do
              more than place a business online. It should{" "}
              <span style={{ borderBottom: "2px solid #7F7CFF" }}>
                shape how people see a brand
              </span>
              , improve how they experience it, and create digital systems
              that{" "}
              <span style={{ backgroundColor: "#D3E4BF" }}>
                solve real problems
              </span>
              , build trust, and{" "}
              <span style={{ borderBottom: "2px solid #F5FF4A" }}>
                support long-term growth
              </span>.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 hidden md:block">
        <div className="hero-text-line text-[clamp(4.5rem,10vw,11rem)] leading-[1.05] tracking-tight font-medium text-black font-clash">
          presence.
        </div>
      </div>

    </section>
  );
}
