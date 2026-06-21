import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutHeroSection from "@/components/sections/about-hero-section";
import VisionMissionSection from "@/components/sections/vision-mission-section";
import WhyYotvisSection from "@/components/sections/why-yotvis-section";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/footer-section";

gsap.registerPlugin(ScrollTrigger);

const aboutFaqs = [
  {
    id: "01",
    question: "What is Yotvis?",
    answer: "Yotvis is a digital service studio that helps businesses and growing brands build a complete digital presence through strategy, design, development, and execution."
  },
  {
    id: "02",
    question: "What does the tagline \"Creating Vision Into Digital Presence\" mean?",
    answer: "\"Creating Vision Into Digital Presence\" means we turn your ideas, brand directions, and business goals into visible, usable, and credible digital experiences."
  },
  {
    id: "03",
    question: "What makes Yotvis different from other studios?",
    answer: "Yotvis focuses on clarity, structure, user experience, reliable development, and long-term digital growth rather than just making things look good."
  },
  {
    id: "04",
    question: "What is Yotvis's project process?",
    answer: "Yotvis follows a 4-step process: Understand (your business), Plan (the direction), Build (design and development), and Launch (deployment and support)."
  },
  {
    id: "05",
    question: "Who does Yotvis work with?",
    answer: "Yotvis works with businesses, creators, professionals, and startups that want to improve their brand identity, website, application, or digital systems."
  }
];

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let refreshTimer;
    const ctx = gsap.context(() => {
      /* ── Overlapping panel pinning ───────────────────────────── */
      const panels = gsap.utils.toArray(".gsap-overlap-panel");
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight <= window.innerHeight ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });

      // Refresh to ensure heights are calculated correctly after animations load
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 1000);
    }, containerRef);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <main ref={containerRef} className="w-full min-h-screen">
      <SEO 
        title="About Yotvis | Premium Digital Studio" 
        description="Learn about Yotvis and our mission to shape brands and build powerful digital presence through custom design and development."
        faqSchema={aboutFaqs}
      />
      <div className="gsap-overlap-panel relative z-[1] w-[calc(100%+4px)] -ml-[2px] bg-[#D3E4BF]">
        <AboutHeroSection />
      </div>
      <div className="gsap-overlap-panel relative z-[2] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] rounded-t-[3rem] overflow-hidden border-t border-black/10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <VisionMissionSection />
      </div>
      
      {/* Spacer to delay WhyYotvisSection from rolling over immediately, giving the 1s delay time to play */}
      <div className="h-[100vh] w-full pointer-events-none relative z-[2]"></div>

      <div className="gsap-overlap-panel relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#000000] rounded-t-[3rem] overflow-hidden border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <WhyYotvisSection />
      </div>

      <div className="gsap-overlap-panel relative z-[4] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] rounded-[3rem] overflow-hidden border-t border-black/10 shadow-2xl">
        <FaqSection 
          title={<>Questions<br />About<br />Yotvis</>}
          subtitle="Understand who we are, how we think, and why we build digital presence with purpose."
          faqsData={aboutFaqs}
        />
      </div>

      <div className="relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#FCFF7C] md:bg-gradient-to-r md:from-[#FFFFF3] md:from-[50%] md:to-[#FCFF7C] md:to-[50%] -mt-10 pt-10">
        <FooterSection />
      </div>
    </main>
  );
}
