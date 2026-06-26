import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import { gsap } from "gsap";
import { usePageTransition } from "@/App";
import { Link } from "react-router-dom";

const webDevFaqs = [
  {
    id: "01",
    question: "Does Yotvis build responsive websites?",
    answer: "Yes, Yotvis builds modern, responsive websites that present your brand clearly and professionally across all mobile, tablet, and desktop devices."
  },
  {
    id: "02",
    question: "How long does it take to design and launch a custom website?",
    answer: "Yotvis typically designs and launches a custom, responsive website in 4 to 8 weeks, depending on the number of pages, custom UI/UX features, and infrastructure required."
  },
  {
    id: "03",
    question: "Do you use modern tech stacks like React and Vite?",
    answer: "Yes, Yotvis uses modern tech stacks like React, Vite, and advanced CSS to create blazingly fast, secure, and scalable website experiences."
  },
  {
    id: "04",
    question: "Will my website be optimized for technical SEO?",
    answer: "Yes, your website will be technically SEO-optimized with fast load times, semantic HTML structure, and clean code to ensure search engines can crawl and rank it effectively."
  },
  {
    id: "05",
    question: "Do you provide website maintenance after launch?",
    answer: "Yes, Yotvis provides ongoing website maintenance, security updates, and technical support to ensure your digital presence remains fast and reliable long-term."
  }
];

export default function WebDevelopmentPage() {
  const containerRef = useRef(null);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the blue bg
      gsap.fromTo(".gsap-blue-bg", 
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
        title="Website Development | Fast, Responsive & Built to Convert" 
        description="Your website is your most powerful sales tool — if it is built right. Get a fast, modern website with React and Vite that loads instantly, looks sharp, and turns visitors into clients."
        faqSchema={webDevFaqs}
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Website Development",
          "provider": {
            "@type": "Organization",
            "name": "Yotvis"
          },
          "areaServed": "Global",
          "description": "Yotvis develops fast, secure, and fully custom websites designed to convert visitors into loyal customers."
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yotvis.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yotvis.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://yotvis.com/services/web-development" }
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
        
        {/* Animated Blue Background (Yotvis Brand Color) */}
        <div className="gsap-blue-bg absolute top-0 right-0 w-[95%] md:w-[85%] h-full bg-[#7F7CFF] z-0 mix-blend-multiply opacity-20 md:opacity-100"></div>

        <article className="relative z-10 w-full ">
          <h1 className="gsap-hero-text text-5xl md:text-7xl font-medium font-clash text-black mb-8">Website<br/>Development</h1>
          
          {/* BLUF Summary for AI Extraction */}
          <p className="gsap-hero-text text-xl font-medium text-black/90 mb-6 font-nunito">
            Website development is the process of building fast, secure, and custom digital platforms. Yotvis uses modern tech stacks like React and Vite to convert visitors into loyal customers.
          </p>

          <div className="text-lg md:text-xl text-black/80 font-nunito space-y-6">
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">What is Custom Website Development?</h2>
            <p className="gsap-hero-text ">Website development is the process of building fast, secure, and fully custom digital platforms that convert visitors into loyal customers. It ensures your brand is represented technically without the limitations of basic templates.</p>
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">Modern Tech Stacks We Use</h2>
            
            <ul className="gsap-hero-text list-disc pl-6 space-y-2 ">
              <li><strong>React & Vite:</strong> For blazingly fast, single-page application architectures.</li>
              <li><strong>Node.js:</strong> For scalable, high-performance backend infrastructure.</li>
              <li><strong>Cloud Deployment:</strong> Automated CI/CD pipelines for zero-downtime updates.</li>
            </ul>
            <p className="gsap-hero-text ">Beyond aesthetics, we focus on technical SEO, accessibility, and security. We build digital platforms that don't just exist, but actively work to grow your online presence and support your business operations.</p>
            
            <p className="gsap-hero-text pt-6 ">
              Want to know how we achieve flawless page speeds? Read our guide on <Link to="/explore/core-web-vitals-seo" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">Core Web Vitals and SEO</Link>.
            </p>
          </div>
        </article>
      </section>
      <FaqSection 
        title={<>Web Dev<br />Questions<br />Answered</>} 
        subtitle={"Understand our front-end performance focus, custom CMS development, and web speed guarantees."} 
        faqsData={webDevFaqs} 
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
