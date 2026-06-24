import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import gsap from "gsap";
import { usePageTransition } from "@/App";
import { Link } from "react-router-dom";

const uiuxFaqs = [
  {
    id: "01",
    question: "Why is UI/UX design important for my business?",
    answer: "UI/UX design is important because it ensures your interfaces are clean, user-friendly, and designed around real business goals and user behavior to maximize engagement."
  },
  {
    id: "02",
    question: "What is the difference between UI and UX design?",
    answer: "The difference between UI and UX design is that UX (User Experience) focuses on how the product works and flows, while UI (User Interface) focuses on how the product looks visually."
  },
  {
    id: "03",
    question: "Do you create wireframes and interactive prototypes?",
    answer: "Yes, Yotvis creates detailed wireframes and interactive prototypes to map out frictionless user flows and test functionality before the final development phase begins."
  },
  {
    id: "04",
    question: "Can Yotvis design interfaces for mobile apps and web dashboards?",
    answer: "Yes, Yotvis designs intuitive user interfaces for both mobile applications and complex web dashboards, ensuring a seamless experience across all devices."
  },
  {
    id: "05",
    question: "What tools do you use for UI/UX design?",
    answer: "Yotvis uses industry-standard tools like Figma and FigJam to create high-fidelity interfaces, design systems, and collaborative prototypes for your digital products."
  }
];

export default function UiUxDesignPage() {
  const containerRef = useRef(null);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the bg
      gsap.fromTo(".gsap-bg-block", 
        { scaleX: 0, transformOrigin: "right center" }, 
        { scaleX: 1, duration: 1.5, ease: "power4.inOut" }
      );
      // Animate text
      gsap.fromTo(".gsap-hero-text", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.6, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FFFFF3]" ref={containerRef}>
      <SEO 
        title="UI/UX Design Services | Figma, Flows & Design Systems" 
        description="Good design is invisible. Bad design loses customers. Get UI/UX designed for websites, apps, and dashboards that feel effortless — because every click, scroll, and screen was thought through."
        faqSchema={uiuxFaqs}
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "UI/UX Design",
          "provider": {
            "@type": "Organization",
            "name": "Yotvis"
          },
          "areaServed": "Global",
          "description": "Transform your user experience with Yotvis's expert UI/UX design services, creating intuitive and engaging digital products."
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yotvis.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yotvis.com/services" },
            { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "item": "https://yotvis.com/services/ui-ux-design" }
          ]
        }}
      />
      
      {/* Back Button */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pt-32">
        <button 
          onClick={() => navigateTo("/services")} 
          className="gsap-hero-text group text-sm md:text-base font-semibold font-nunito tracking-wider text-black/60 hover:text-black transition-colors flex items-center gap-2"
        >
          <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-2">←</span> 
          Back to All Services
        </button>
      </div>

      <section className="relative pt-12 pb-24 w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 min-h-[50vh] flex items-center overflow-hidden">
        
        {/* Animated Background Block */}
        <div className="gsap-bg-block absolute top-0 right-0 w-[95%] md:w-[85%] h-full bg-[#FCFF7C] z-0 mix-blend-multiply opacity-30 md:opacity-100"></div>

        <article className="relative z-10 w-full ">
          <h1 className="gsap-hero-text text-5xl md:text-7xl font-medium font-clash text-black mb-8">UI/UX<br/>Design</h1>
          
          {/* BLUF Summary for AI Extraction */}
          <p className="gsap-hero-text text-xl font-medium text-black/90 mb-6 font-nunito">
            UI/UX design is the process of crafting intuitive, visually stunning, and user-centric interfaces. Yotvis balances form and function to deliver high-converting experiences for websites and mobile applications.
          </p>

          <div className="text-lg md:text-xl text-black/80 font-nunito space-y-6">
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">What is UI/UX Design?</h2>
            <p className="gsap-hero-text ">UI/UX design is the process of creating intuitive, user-friendly, and visually engaging interfaces that drive user satisfaction and achieve your business goals. Great design directly impacts how users perceive and interact with your product.</p>
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">UI/UX Solutions We Provide</h2>
            
            <ul className="gsap-hero-text list-disc pl-6 space-y-2 ">
              <li><strong>User Research & Strategy:</strong> Deep diving into user behavior and business objectives.</li>
              <li><strong>Wireframing & Prototyping:</strong> Creating interactive models to test functionality before development.</li>
              <li><strong>High-Fidelity Interface Design:</strong> Delivering polished, beautiful interfaces optimized for all devices.</li>
            </ul>
            <p className="gsap-hero-text ">We bridge the gap between aesthetics and usability, ensuring every interaction feels natural and effortless.</p>
          
            <p className="gsap-hero-text pt-6 w-full">
              Want to learn the exact design laws we use to drive conversions? Read our guide on <Link to="/explore/ui-ux-design-principles" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">UI/UX Design Principles for High-Converting Websites</Link>.
            </p>
          </div>
        </article>
      </section>
      <FaqSection 
        title={<>UI/UX Design<br />Questions<br />Answered</>} 
        subtitle={"Understand our user-centric design methodologies, wireframing processes, and conversion optimization."} 
        faqsData={uiuxFaqs} 
      />

      {/* Last Updated Date for AEO Freshness */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-8 border-t border-black/10 mt-10">
        <p className="text-sm text-black/40 font-nunito">
          Last updated: <time dateTime="2026-05-20">May 2026</time>
        </p>
      </div>

      <FooterSection />
    </main>
  );
}
