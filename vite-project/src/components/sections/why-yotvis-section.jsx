"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./why-yotvis-section.css";

gsap.registerPlugin(ScrollTrigger);

export default function WhyYotvisSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".why-text");
      
      texts.forEach((text) => {
        // Text color fill (scrub)
        gsap.fromTo(
          text,
          { backgroundSize: "0% 100%" },
          {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              end: "center 40%",
              scrub: true,
            },
          }
        );
      });

      // Fade up the newly added concluding text
      const whyFooterTexts = gsap.utils.toArray(".why-footer-text p");
      if (whyFooterTexts.length > 0) {
        gsap.fromTo(
          whyFooterTexts,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".why-footer-text",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-yotvis-section">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12">
        <h2 className="why-text m-0 p-0 font-normal">
          WHY
          <span>WHY NOT</span>
        </h2>
        <div className="why-text">
          YOTVIS
          <span>YOTVIS</span>
        </div>

        {/* Concluding Statement */}
        <div className="why-footer-text mt-40 md:mt-56 max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 text-[#FFFFF3]/80 font-nunito">
          <p className="text-[1.3rem] md:text-[1.7rem] leading-relaxed flex-1 font-medium max-w-[600px]">
            At Yotvis, every project begins with understanding before execution. We define the right direction, explain the process clearly, and build with practical thinking, keeping the work focused and aligned with what the business actually needs.
          </p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-[1.3rem] md:text-[1.7rem] leading-relaxed font-medium text-[#7F7CFF] max-w-[500px]">
              Yotvis is built for businesses that want a dependable team, not just a service provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
