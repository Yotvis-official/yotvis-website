import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import gsap from "gsap";
import { usePageTransition } from "@/App";
import { Link } from "react-router-dom";

const appDevFaqs = [
  {
    id: "01",
    question: "What platforms does Yotvis develop apps for?",
    answer: "Yotvis develops custom mobile and web applications built with structure, usability, and scalability in mind for growing businesses."
  },
  {
    id: "02",
    question: "How long does it take to build a custom application?",
    answer: "Building a custom application typically takes 8 to 16 weeks, depending on the complexity of the features, the number of platforms (iOS, Android, Web), and the backend infrastructure required."
  },
  {
    id: "03",
    question: "Can Yotvis build both customer-facing apps and internal dashboards?",
    answer: "Yes, Yotvis can build both customer-facing mobile apps and complex internal web dashboards tailored to streamline your business operations and user experience."
  },
  {
    id: "04",
    question: "Do you provide support after the app is launched?",
    answer: "Yes, Yotvis provides post-launch support, updates, and maintenance to ensure your application remains secure, fast, and compatible with new operating system versions."
  },
  {
    id: "05",
    question: "How much does custom app development cost?",
    answer: "The cost of custom app development depends on the scope, design complexity, and backend infrastructure. Yotvis provides custom quotes based on your specific business goals and project requirements."
  }
];

export default function AppDevelopmentPage() {
  const containerRef = useRef(null);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".gsap-app-bg", 
        { scaleX: 0, transformOrigin: "right center" }, 
        { scaleX: 1, duration: 1.5, ease: "power4.inOut" }
      );
      gsap.fromTo(".gsap-app-text", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.6, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FFFFF3]" ref={containerRef}>
      <SEO 
        title="App Development Services | Mobile & Web Apps That Scale" 
        description="An app that crashes or frustrates loses users permanently. Get a scalable, smooth mobile or web app designed for real users, real growth, and performance that holds up long term."
        faqSchema={appDevFaqs}
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "App Development",
          "provider": {
            "@type": "Organization",
            "name": "Yotvis"
          },
          "areaServed": "Global",
          "description": "Yotvis builds custom mobile and web applications with structure, usability, and scalability in mind to support your business growth."
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yotvis.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yotvis.com/services" },
            { "@type": "ListItem", "position": 3, "name": "App Development", "item": "https://yotvis.com/services/app-development" }
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
        
        {/* Animated Black Background */}
        <div className="gsap-app-bg absolute top-0 right-0 w-[95%] md:w-[85%] h-full bg-black z-0 mix-blend-multiply opacity-5 md:opacity-5"></div>

        <article className="relative z-10 w-full ">
          <h1 className="gsap-app-text text-5xl md:text-7xl font-medium font-clash text-black mb-8">App<br/>Development</h1>
          
          {/* BLUF Summary for AI Extraction */}
          <p className="gsap-app-text text-xl font-medium text-black/90 mb-6 font-nunito">
            App development is the creation of mobile applications that deliver native performance, offline support, and smooth user experiences. Yotvis develops iOS and Android applications to keep your business connected to customers.
          </p>

          <div className="text-lg md:text-xl text-black/80 font-nunito space-y-6">
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">What is Custom App Development?</h2>
            <p className="gsap-hero-text ">App development is the process of building robust, scalable mobile and web applications designed to deliver seamless digital experiences. Custom applications are the engines of modern digital businesses.</p>
            
            <h2 className="gsap-hero-text text-3xl font-medium font-clash text-black pt-4">App Solutions We Provide</h2>
            
            <ul className="gsap-hero-text list-disc pl-6 space-y-2 ">
              <li><strong>Native & Cross-Platform Apps:</strong> Reaching iOS and Android users seamlessly.</li>
              <li><strong>Complex Web Dashboards:</strong> Internal tools and portals for streamlined operations.</li>
              <li><strong>End-to-End Development:</strong> From initial wireframing to API integration and deployment.</li>
            </ul>
            <p className="gsap-hero-text ">We focus on clean code structure and superior usability to ensure your app performs flawlessly under pressure and scales effortlessly.</p>
            
            <p className="gsap-hero-text pt-6 ">
              Not sure which tech stack to use for your next app? Read our guide on <Link to="/explore/native-vs-cross-platform-apps" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">Native vs. Cross-Platform App Development</Link>.
            </p>
          </div>
        </article>
      </section>
      <FaqSection 
        title={<>App Dev<br />Questions<br />Answered</>} 
        subtitle={"Understand our mobile app development process, cross-platform choices, and scaling strategies."} 
        faqsData={appDevFaqs} 
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
