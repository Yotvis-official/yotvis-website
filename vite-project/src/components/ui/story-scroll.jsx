"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FlowSection({ children, className = "" }) {
  return (
    <div 
      className={`flow-section absolute top-0 left-0 h-screen w-full origin-bottom-left will-change-transform overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default function FlowArt({ children, className = "" }) {
  const containerRef = useRef(null);
  
  React.useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".flow-section", containerRef.current);
      if (sections.length <= 1) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      gsap.set(sections.slice(1), {
        rotation: 30,
        yPercent: 100,
        transformOrigin: "bottom left",
      });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${sections.length * 100}%`,
        }
      });

      sections.forEach((section, i) => {
        if (i === 0) return;
        
        tl.to(section, {
          rotation: 0,
          yPercent: 0,
          ease: "power1.inOut",
          duration: 1,
        }, "+=0.2"); // Very brief scrub pause so it doesn't feel stuck
      });

      // Add a small pause at the end so the final card stays visible before unpinning
      tl.to({}, { duration: 0.5 });
    }
    }, containerRef.current);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []); // Run only once on mount

  return (
    <div ref={containerRef} className={`relative w-full h-screen overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
