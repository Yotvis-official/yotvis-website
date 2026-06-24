import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import gsap from "gsap";
import { usePageTransition } from "@/App";
import { Link } from "react-router-dom";

const cloudFaqs = [
  {
    id: "01",
    question: "What cloud solutions does Yotvis offer?",
    answer: "Yotvis offers cloud deployment, hosting, infrastructure setup, and scalable systems designed to support your long-term digital growth."
  },
  {
    id: "02",
    question: "Why do I need cloud solutions for my business?",
    answer: "You need cloud solutions to ensure your website or application remains fast, secure, and accessible. Cloud infrastructure allows your digital products to handle high traffic without crashing and scales seamlessly alongside your business growth."
  },
  {
    id: "03",
    question: "Can Yotvis migrate my existing website to the cloud?",
    answer: "Yes, Yotvis can safely migrate your existing website, databases, and applications to modern, scalable cloud infrastructure with zero data loss and minimal downtime."
  },
  {
    id: "04",
    question: "Do you offer cloud hosting and server management?",
    answer: "Yes, Yotvis offers secure cloud hosting and ongoing server management to ensure your digital products are always online, fast, and performing at their peak."
  },
  {
    id: "05",
    question: "Is my data secure with Yotvis cloud infrastructure?",
    answer: "Yes, your data is secure with Yotvis cloud infrastructure. We implement industry-standard security protocols, secure hosting environments, and regular backups to protect your digital assets."
  }
];

export default function CloudSolutionsPage() {
  const containerRef = useRef(null);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".gsap-cloud-bg", 
        { scaleX: 0, transformOrigin: "right center" }, 
        { scaleX: 1, duration: 1.5, ease: "power4.inOut" }
      );
      gsap.fromTo(".gsap-cloud-text", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.6, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FFFFF3]" ref={containerRef}>
      <SEO 
        title="Cloud Solutions | Scalable Infrastructure That Does Not Break" 
        description="Get cloud deployment, hosting, and infrastructure built to stay reliable, scale with growth, and support your business with better control."
        faqSchema={cloudFaqs}
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Cloud Solutions",
          "provider": {
            "@type": "Organization",
            "name": "Yotvis"
          },
          "areaServed": "Global",
          "description": "Yotvis deploys secure, high-performance cloud solutions to keep your digital business running efficiently and safely."
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yotvis.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yotvis.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Cloud Solutions", "item": "https://yotvis.com/services/cloud-solutions" }
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
        
        {/* Animated Pale Green Background */}
        <div className="gsap-cloud-bg absolute top-0 right-0 w-[95%] md:w-[85%] h-full bg-[#D3E4BF] z-0 mix-blend-multiply opacity-40 md:opacity-100"></div>

        <article className="relative z-10 w-full ">
          <h1 className="gsap-cloud-text text-5xl md:text-7xl font-medium font-clash text-black mb-8">Cloud<br/>Solutions</h1>
          
          {/* BLUF Summary for AI Extraction */}
          <p className="gsap-cloud-text text-xl font-medium text-black/90 mb-6 font-nunito">
            Cloud solutions provide scalable, secure, and highly available infrastructure for modern digital products. Yotvis designs cloud architectures on platforms like AWS and Google Cloud to support your operational scale.
          </p>

          <div className="text-lg md:text-xl text-black/80 font-nunito space-y-6">
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">What are Cloud Solutions?</h2>
            <p className="gsap-hero-text ">Cloud solutions provide the secure, scalable, and high-performance infrastructure needed to keep modern digital businesses running efficiently without downtime.</p>
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">Cloud Services We Provide</h2>
            
            <ul className="gsap-hero-text list-disc pl-6 space-y-2 ">
              <li><strong>Cloud Hosting & Deployment:</strong> Fast, reliable server environments.</li>
              <li><strong>Security & Compliance:</strong> Advanced data protection and SSL configurations.</li>
              <li><strong>Scalability Solutions:</strong> Infrastructure that grows seamlessly with your user base.</li>
            </ul>
            <p className="gsap-hero-text ">We take the complexity out of server management, ensuring your data is protected, your load times are fast, and your business is always online.</p>
            
            <p className="gsap-hero-text pt-6 w-full">
              Want to see how we architect high-availability cloud systems? Read our guide on <Link to="/explore/cloud-solutions-for-startups" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">Scalable Cloud Solutions</Link>.
            </p>
          </div>
        </article>
      </section>
      <FaqSection 
        title={<>Cloud & DevOps<br />Questions<br />Answered</>} 
        subtitle={"Understand our cloud infrastructure deployment, server security, and cost optimization techniques."} 
        faqsData={cloudFaqs} 
      />

      {/* Last Updated Date for AEO Freshness */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-8 border-t border-black/10 mt-10">
        <p className="text-sm text-black/40 font-nunito text-center">
          Last updated: <time dateTime="2026-05-20">May 2026</time>
        </p>
      </div>

      <FooterSection />
    </main>
  );
}
