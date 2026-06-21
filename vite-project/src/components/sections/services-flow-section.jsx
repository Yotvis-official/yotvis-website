import React, { useEffect } from "react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { useLocation } from "react-router-dom";

export default function ServicesFlowSection() {
  const location = useLocation();
  const panels = [
    {
      id: "01",
      bg: "bg-[#000000]",
      text: "text-[#FFFFF3]",
      accent: "text-[#FCFF7C]",
      border: "border-[#FFFFF3]/20",
      label: "01",
      heading: "Branding",
      link: "/services/branding",
      paragraph: (
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase font-clash text-[#FCFF7C] opacity-90">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-lg">
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 1: Brand Understanding</span>
              <p className="mt-1 opacity-90">We understand your business, audience, values, and the impression your brand should create.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 2: Identity Direction</span>
              <p className="mt-1 opacity-90">The style, colors, typography, logo direction, and visual tone are planned clearly.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 3: Design & Refinement</span>
              <p className="mt-1 opacity-90">Brand elements are designed, reviewed, and refined for a consistent identity.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 4: Brand Handoff</span>
              <p className="mt-1 opacity-90">Final logo files, colors, typography, and key brand assets are prepared for use.</p>
            </div>
          </div>
        </div>
      ),
      items: []
    },
    {
      id: "02",
      bg: "bg-[#FCFF7C]",
      text: "text-[#000000]",
      accent: "text-[#7F7CFF]",
      border: "border-[#000000]/20",
      label: "02",
      heading: "UI/UX",
      link: "/services/ui-ux-design",
      paragraph: (
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase font-clash text-[#7F7CFF] opacity-90">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-lg">
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 1: Research & Insights</span>
              <p className="mt-1 opacity-90">We study user behavior, business goals, and market direction to create a strong project foundation.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 2: Structure & UX Flow</span>
              <p className="mt-1 opacity-90">Clear user journeys are mapped and organized for simple, smooth navigation.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 3: Visual Design & Prototype</span>
              <p className="mt-1 opacity-90">Polished screens and interactive prototypes are created to match the brand direction.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 4: Testing & Refinement</span>
              <p className="mt-1 opacity-90">Usability is reviewed, feedback is considered, and the design is refined before final handoff.</p>
            </div>
          </div>
        </div>
      ),
      items: []
    },
    {
      id: "03",
      bg: "bg-[#7F7CFF]",
      text: "text-[#FFFFF3]",
      accent: "text-[#FCFF7C]",
      border: "border-[#FFFFF3]/20",
      label: "03",
      heading: "Web dev",
      link: "/services/web-development",
      paragraph: (
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase font-clash text-[#FCFF7C] opacity-90">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-lg">
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 1: Planning & Requirements</span>
              <p className="mt-1 opacity-90">We understand your business goals, website purpose, target audience, pages, features, and content needs before development begins.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 2: Structure & Layout</span>
              <p className="mt-1 opacity-90">The sitemap, page flow, and layout direction are organized to create a clear and easy browsing experience.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 3: Development & Integration</span>
              <p className="mt-1 opacity-90">The website is built with responsive design, clean structure, required features, forms, links, and basic integrations.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 4: Testing & Launch</span>
              <p className="mt-1 opacity-90">Performance, responsiveness, forms, links, and user experience are checked before the website is deployed for real use.</p>
            </div>
          </div>
        </div>
      ),
      items: []
    },
    {
      id: "04",
      bg: "bg-[#D3E4BF]",
      text: "text-[#000000]",
      accent: "text-[#7F7CFF]",
      border: "border-[#000000]/20",
      label: "04",
      heading: "App dev",
      link: "/services/app-development",
      paragraph: (
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase font-clash text-[#7F7CFF] opacity-90">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-lg">
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 1: Requirement & Feature Planning</span>
              <p className="mt-1 opacity-90">We understand your app idea, users, core features, goals, and platform needs before development begins.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 2: User Flow & App Structure</span>
              <p className="mt-1 opacity-90">The app screens, navigation, features, and user journey are organized for smooth usage.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 3: Development & Integration</span>
              <p className="mt-1 opacity-90">The app is built with responsive interfaces, backend logic, APIs, and required integrations.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 4: Testing & Release</span>
              <p className="mt-1 opacity-90">Performance, usability, security, and device compatibility are tested before launch.</p>
            </div>
          </div>
        </div>
      ),
      items: []
    },
    {
      id: "05",
      bg: "bg-[#FFFFF3]",
      text: "text-[#000000]",
      accent: "text-[#7F7CFF]",
      border: "border-[#000000]/20",
      label: "05",
      heading: "Ai automation",
      link: "/services/ai-automation",
      paragraph: (
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase font-clash text-[#7F7CFF] opacity-90">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-lg">
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 1: Process Understanding</span>
              <p className="mt-1 opacity-90">We understand your current workflow, repeated tasks, business goals, and areas where automation can save time or reduce manual effort.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 2: Automation Mapping</span>
              <p className="mt-1 opacity-90">The right automation flow, tools, triggers, actions, and data movement are planned to match your business process.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 3: AI Workflow Setup</span>
              <p className="mt-1 opacity-90">The automation is built using AI tools, integrations, forms, email, chatbots, dashboards, or custom workflows based on your needs.</p>
            </div>
            <div>
              <span className="block font-medium text-[#7F7CFF] font-clash tracking-wide">Step 4: Testing & Optimization</span>
              <p className="mt-1 opacity-90">The workflow is tested, refined, and optimized to ensure it works reliably before being used in real business operations.</p>
            </div>
          </div>
        </div>
      ),
      items: []
    },
    {
      id: "06",
      bg: "bg-[#000000]",
      text: "text-[#FFFFF3]",
      accent: "text-[#FCFF7C]",
      border: "border-[#FFFFF3]/20",
      label: "06",
      heading: "Cloud Solutions",
      link: "/services/cloud-solutions",
      paragraph: (
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase font-clash text-[#FCFF7C] opacity-90">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-lg">
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 1: Cloud Requirement Planning</span>
              <p className="mt-1 opacity-90">We understand your deployment, storage, performance, and scalability needs.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 2: Architecture & Setup</span>
              <p className="mt-1 opacity-90">The hosting structure, server environment, database, and security basics are planned.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 3: Deployment & Configuration</span>
              <p className="mt-1 opacity-90">The product is deployed with cloud setup, domain connection, environment configuration, and integrations.</p>
            </div>
            <div>
              <span className="block font-medium text-[#FCFF7C] font-clash tracking-wide">Step 4: Monitoring & Support</span>
              <p className="mt-1 opacity-90">Performance, uptime, access, and stability are checked after launch.</p>
            </div>
          </div>
        </div>
      ),
      items: []
    }
  ];

  useEffect(() => {
    // Check if there is a ?card=X in the URL
    const searchParams = new URLSearchParams(location.search);
    const cardParam = searchParams.get("card");
    if (cardParam) {
      const cardIndex = parseInt(cardParam, 10) - 1;
      if (cardIndex >= 0 && cardIndex < panels.length) {
        // Wait for page transition and GSAP ScrollTrigger to initialize
        setTimeout(() => {
          const container = document.getElementById("services");
          if (container) {
            const offsetTop = container.offsetTop;
            const scrollTarget = offsetTop + (cardIndex * window.innerHeight);
            window.scrollTo({ top: scrollTarget, behavior: "smooth" });
          }
        }, 800); // 800ms to ensure the transition curtain is clear and GSAP is ready
      }
    }
  }, [location.search, panels.length]);

  return (
    <section id="services" className="relative z-30">
      <FlowArt>
        {panels.map((panel, index) => (
          <FlowSection key={panel.id} className={`gsap-service-panel ${panel.bg} ${panel.text} pt-28 pb-6 px-6 md:pt-32 md:pb-8 md:px-8 lg:pt-36 lg:pb-10 lg:px-10 flex flex-col justify-between`}>
            <div className="flex flex-col w-full h-full justify-between max-w-7xl mx-auto">
              {/* Top Label */}
              <div className="w-full">
                <p className={`gsap-service-label text-sm md:text-base font-semibold tracking-widest uppercase mb-4 font-clash ${panel.accent}`}>
                  {panel.label}
                </p>
                <hr className={panel.border} />
              </div>

              {/* Huge Heading */}
              <div className="flex-1 flex flex-col justify-center py-4">
                {index === 0 ? (
                  <h1 className="gsap-service-heading text-[clamp(3rem,9vw,10rem)] font-black uppercase leading-[0.85] tracking-tight font-clash">
                    {panel.heading}
                  </h1>
                ) : (
                  <h2 className="gsap-service-heading text-[clamp(3rem,9vw,10rem)] font-black uppercase leading-[0.85] tracking-tight font-clash">
                    {panel.heading}
                  </h2>
                )}
              </div>

              {/* Bottom Content */}
              <div className="gsap-service-items flex flex-col gap-5 w-full">
                <hr className={panel.border} />
                <div className="max-w-4xl text-base md:text-xl font-medium leading-relaxed">
                  {panel.paragraph}
                  {panel.link && (
                    <a href={panel.link} className={`inline-block mt-8 text-sm md:text-base font-bold uppercase tracking-widest ${panel.accent} hover:opacity-80 transition-opacity`}>
                      View Full Details →
                    </a>
                  )}
                </div>
                <hr className={panel.border} />
                {panel.items && panel.items.length > 0 && (
                  <div className="flex flex-col gap-4 pb-2">
                    <p className={`text-xs md:text-sm font-semibold tracking-widest uppercase font-clash ${panel.accent} opacity-90`}>
                      What we provide
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-12">
                      {panel.items.map((item, i) => (
                        <div key={i} className="gsap-service-item flex flex-col gap-1">
                          <span className={`${panel.accent} text-xs md:text-sm font-bold font-clash uppercase`}>0{i + 1}</span>
                          <span className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tight font-clash">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FlowSection>
        ))}
      </FlowArt>
    </section>
  );
}
