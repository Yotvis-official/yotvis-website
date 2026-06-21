import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import gsap from "gsap";
import { usePageTransition } from "@/App";

const aiFaqs = [
  {
    id: "01",
    question: "What are the benefits of AI automation for a growing business?",
    answer: "AI automation reduces manual work, improves operational efficiency, and saves time by building smart workflows that handle repetitive tasks for your growing business."
  },
  {
    id: "02",
    question: "What business processes can Yotvis automate with AI?",
    answer: "Yotvis can automate business processes such as customer support chatbots, automated data processing, internal reporting, and seamless system integrations using AI technology."
  },
  {
    id: "03",
    question: "Can you integrate AI into my existing website or app?",
    answer: "Yes, Yotvis can integrate AI models and smart workflows directly into your existing website, app, or internal dashboard to improve functionality and user experience."
  },
  {
    id: "04",
    question: "How secure is AI automation for my business data?",
    answer: "AI automation built by Yotvis is highly secure. We implement industry-standard security protocols to ensure your business data and customer information remain protected."
  },
  {
    id: "05",
    question: "How long does it take to build an AI automation workflow?",
    answer: "Building an AI automation workflow typically takes 2 to 6 weeks, depending on the complexity of the integration, the amount of data being processed, and the specific business logic required."
  }
];

export default function AiAutomationPage() {
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
        title="AI Automation Services | Smart Workflows | Yotvis" 
        description="Streamline your operations with custom AI automation workflows built by Yotvis to save time and boost efficiency."
        faqSchema={aiFaqs}
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Automation",
          "provider": {
            "@type": "Organization",
            "name": "Yotvis"
          },
          "areaServed": "Global",
          "description": "Streamline your operations with custom AI automation workflows built by Yotvis to save time and boost efficiency."
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yotvis.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yotvis.com/services" },
            { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://yotvis.com/services/ai-automation" }
          ]
        }}
      />
      
      {/* Back Button */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-32">
        <button 
          onClick={() => navigateTo("/services")} 
          className="gsap-hero-text group text-sm md:text-base font-semibold font-nunito tracking-wider text-black/60 hover:text-black transition-colors flex items-center gap-2"
        >
          <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-2">←</span> 
          Back to All Services
        </button>
      </div>

      <section className="relative pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[50vh] flex items-center overflow-hidden">
        
        {/* Animated Background Block */}
        <div className="gsap-bg-block absolute top-0 right-0 w-[95%] md:w-[85%] h-full bg-[#000000] z-0 opacity-5 md:opacity-5"></div>

        <article className="relative z-10 max-w-3xl">
          <h1 className="gsap-hero-text text-5xl md:text-7xl font-medium font-clash text-black mb-8">AI<br/>Automation</h1>
          <div className="text-lg md:text-xl text-black/80 font-nunito space-y-6">
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">What is AI Automation?</h2>
            <p className="gsap-hero-text max-w-2xl">AI automation reduces manual work, improves operational efficiency, and saves time by building smart workflows that handle repetitive tasks for your growing business.</p>
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">AI Workflows We Build</h2>
            
            <ul className="gsap-hero-text list-disc pl-6 space-y-2 max-w-2xl">
              <li><strong>Customer Support Chatbots:</strong> Intelligent agents available 24/7.</li>
              <li><strong>Data Processing:</strong> Automated internal reporting and data entry.</li>
              <li><strong>System Integrations:</strong> Seamlessly connecting your existing tools and APIs.</li>
            </ul>
            <p className="gsap-hero-text max-w-2xl">By integrating AI directly into your existing infrastructure, we create systems that work tirelessly in the background, freeing your team to focus on growth and strategy.</p>
          </div>
        </article>
      </section>
      <FaqSection faqsData={aiFaqs} />

      {/* Last Updated Date for AEO Freshness */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-black/10 mt-10">
        <p className="text-sm text-black/40 font-nunito">
          Last updated: <time dateTime="2026-05-20">May 2026</time>
        </p>
      </div>

      <FooterSection />
    </main>
  );
}
