"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Premium Color Wipe (Perfectly tracks scroll up and down)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Triggers when section is comfortably in view
          end: "+=100%", // Animates over a massive scroll distance to make it feel slow
          scrub: 2.5, // 2.5-second smoothing creates an extremely luxurious, heavy momentum
        },
      });

      // Add a small pause at the start of the scroll before the wipe begins
      tl.to({}, { duration: 0.2 });

      // Purple box wipes UP from the bottom
      tl.fromTo(
        ".gsap-vm-purple-box",
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "none" },
        0.2 // Starts after pause
      );

      // Yellow background wipes DOWN from the top
      tl.fromTo(
        ".gsap-vm-right-bg",
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "none" },
        0.2 // Starts after pause
      );

      // Text Content Fade Up
      tl.fromTo(
        ".gsap-vm-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.4 // Text starts fading in halfway through the wipe
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden border-t border-black/10">
      
      {/* Left Side: Vision */}
      <div className="flex-1 bg-[#FFFFF3] relative py-24 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-center items-center">
        
        <div className="relative w-full max-w-[600px] mt-24">
          
          {/* Purple Box - Acts as mask for content during scroll */}
          <div className="gsap-vm-purple-box bg-[#7F7CFF] w-full pt-[clamp(8rem,14vw,11rem)] pb-[clamp(5rem,8vw,8rem)] px-10 md:px-12 text-black relative z-0">
            <h3 className="gsap-vm-text text-[19px] font-normal mb-10 font-sans">Our Vision</h3>
            <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.65] font-sans font-normal text-black/90">
              <p className="gsap-vm-text">
                Our vision is to become a trusted and valued digital
                transformation partner for businesses that want to
                build a stronger place in the digital world. We believe
                the best digital presence is not only seen; it is
                remembered, trusted, and valued by the people it
                reaches.
              </p>
              <p className="gsap-vm-text">
                At Yotvis, our goal is to help brands create a digital
                presence that reflects their ambition, earns customer
                trust, and supports long-term growth. We aim to be a
                partner businesses can rely on for clear direction,
                thoughtful execution, and digital solutions that turn
                vision into a presence built to last.
              </p>
            </div>
          </div>
          
          {/* Large overlapping text wrapper to protect Tailwind transforms from GSAP */}
          <div className="gsap-vm-text absolute top-0 left-[8%] z-10">
            <h2 className="-translate-y-[50%] text-[clamp(4.5rem,15vw,11.5rem)] font-sans font-light leading-[0.8] tracking-tight text-black mix-blend-normal">
              Vision
            </h2>
          </div>

        </div>

      </div>

      {/* Right Side: Mission */}
      <div className="flex-1 bg-transparent relative py-24 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-center items-center">
        
        {/* Animated Yellow Background Layer */}
        <div className="gsap-vm-right-bg absolute inset-0 bg-[#F5FF4A] z-0"></div>

        <div className="w-full max-w-[600px] relative z-10">
          <h2 className="gsap-vm-text text-[clamp(4.5rem,15vw,11.5rem)] font-sans font-light leading-[0.8] tracking-tight text-black mb-[clamp(4rem,6vw,5rem)] lg:-ml-2">
            Mission
          </h2>

          <div className="space-y-8 md:space-y-10">
            <div className="gsap-vm-text">
              <h3 className="text-[2.2rem] md:text-[2.8rem] font-normal mb-2 text-black font-sans">Bridge</h3>
              <p className="text-[17px] md:text-[19px] text-black/90 font-sans leading-relaxed">
                Ideas and digital presence, connected with clear direction.
              </p>
            </div>
            <div className="gsap-vm-text">
              <h3 className="text-[2.2rem] md:text-[2.8rem] font-normal mb-2 text-black font-sans">Build</h3>
              <p className="text-[17px] md:text-[19px] text-black/90 font-sans leading-relaxed">
                Solutions shaped with reliability, purpose, and long-term value.
              </p>
            </div>
            <div className="gsap-vm-text">
              <h3 className="text-[2.2rem] md:text-[2.8rem] font-normal mb-2 text-black font-sans">Trust</h3>
              <p className="text-[17px] md:text-[19px] text-black/90 font-sans leading-relaxed">
                Confidence built through quality, consistency, and thoughtful execution.
              </p>
            </div>
            <div className="gsap-vm-text">
              <h3 className="text-[2.2rem] md:text-[2.8rem] font-normal mb-2 text-black font-sans">Grow</h3>
              <p className="text-[17px] md:text-[19px] text-black/90 font-sans leading-relaxed">
                Stronger brands through better presence, smoother operations, and sustainable progress.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
