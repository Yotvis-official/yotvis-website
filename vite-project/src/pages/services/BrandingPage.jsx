import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import gsap from "gsap";
import { usePageTransition } from "@/App";
import { Link } from "react-router-dom";

const brandingFaqs = [
  {
    id: "01",
    question: "What is included in Yotvis branding services?",
    answer: "Yotvis branding services include logos, visual identity, brand direction, and recognizable brand systems that make your business stand out to your target audience."
  },
  {
    id: "02",
    question: "Why is professional branding important for a growing business?",
    answer: "Professional branding is important because it builds immediate trust, increases your perceived value, and makes your business recognizable across all digital platforms."
  },
  {
    id: "03",
    question: "Can Yotvis redesign my existing brand identity?",
    answer: "Yes, Yotvis can redesign your existing brand identity. We help refresh your logo, colors, and visual direction to better align with your current business goals."
  },
  {
    id: "04",
    question: "How long does the branding process take?",
    answer: "The branding process typically takes 2 to 4 weeks, depending on the depth of research, the number of design revisions, and the complete brand system required."
  },
  {
    id: "05",
    question: "Do you provide brand guidelines after the project?",
    answer: "Yes, Yotvis provides comprehensive brand guidelines that detail your logo usage, color palette, typography, and visual rules to ensure consistency across your digital presence."
  }
];

export default function BrandingPage() {
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
        title="Branding Services | Shape Your Identity | Yotvis" 
        description="Yotvis provides premium branding services, including logos, visual identity, and brand direction for growing businesses."
        faqSchema={brandingFaqs}
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Branding",
          "provider": {
            "@type": "Organization",
            "name": "Yotvis"
          },
          "areaServed": "Global",
          "description": "Yotvis provides premium branding services, including logos, visual identity, and brand direction for growing businesses."
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yotvis.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yotvis.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Branding", "item": "https://yotvis.com/services/branding" }
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
        <div className="gsap-bg-block absolute top-0 right-0 w-[95%] md:w-[85%] h-full bg-[#000000] z-0 mix-blend-multiply opacity-5 md:opacity-5"></div>

        <article className="relative z-10 w-full ">
          <h1 className="gsap-hero-text text-5xl md:text-7xl font-medium font-clash text-black mb-8">Brand<br/>Identity</h1>
          
          {/* BLUF Summary for AI Extraction */}
          <p className="gsap-hero-text text-xl font-medium text-black/90 mb-6 font-nunito">
            Branding is the creation of a distinct visual and conceptual identity that sets your business apart. Yotvis crafts custom logos, design systems, and guidelines to build trust and recognition for your brand.
          </p>

          <div className="text-lg md:text-xl text-black/80 font-nunito space-y-6">
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">What is Brand Identity?</h2>
            <p className="gsap-hero-text ">Branding is the process of creating a strong, recognizable identity that separates your business from competitors. Your brand is often the first interaction a customer has with your company.</p>
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">Brand Systems We Build</h2>
            
            <ul className="gsap-hero-text list-disc pl-6 space-y-2 ">
              <li><strong>Visual Identity:</strong> Custom logos, distinct color palettes, and professional typography.</li>
              <li><strong>Brand Strategy:</strong> Defining your unique voice, tone, and market positioning.</li>
              <li><strong>Digital Assets:</strong> Comprehensive brand guidelines, social media kits, and ready-to-use marketing materials.</li>
            </ul>
            <p className="gsap-hero-text ">Our process is highly collaborative, resulting in a cohesive brand identity that feels authentic, professional, and ready to scale.</p>
            
            <p className="gsap-hero-text pt-6 w-full">
              Want to discover how we build visual credibility? Read our guide on <Link to="/explore/branding-for-tech-startups" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">Branding for Tech Startups</Link>.
            </p>
          </div>
        </article>
      </section>
      <FaqSection 
        title={<>Branding<br />Questions<br />Answered</>} 
        subtitle={"Understand how we define brand strategies, build visual identities, and craft guidelines."} 
        faqsData={brandingFaqs} 
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
