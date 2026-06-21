import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "@/components/ui/flow-button";
import { usePageTransition } from "@/App";
import "./ServiceSection.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 1, title: "Branding", text: "Crafting memorable identities that resonate and establish a strong market presence.", bg: "#000000", textColor: "#FFFFF3" },
  { id: 2, title: "UI/UX Design", text: "Designing intuitive and engaging user experiences tailored to your audience.", bg: "#FCFF7C", textColor: "#000000" },
  { id: 3, title: "Website Development", text: "Building robust, scalable, and lightning-fast web applications.", bg: "#7F7CFF", textColor: "#000000" },
  { id: 4, title: "App Development", text: "Creating seamless mobile experiences across iOS and Android platforms.", bg: "#D3E4BF", textColor: "#000000" },
  { id: 5, title: "AI Automation", text: "Integrating smart AI solutions to optimize workflows and scale operations.", bg: "#FFFFF3", textColor: "#000000" },
  { id: 6, title: "Cloud Solutions", text: "Deploying secure and efficient cloud infrastructure for modern businesses.", bg: "#000000", textColor: "#FFFFF3" }
];

export default function ServiceSection() {
  const { navigateTo } = usePageTransition();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);
  const yellowRef = useRef(null);
  const greenRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Text Animation
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".ss-word");
        if (words.length > 0) {
          gsap.fromTo(
            words,
            { y: 50, opacity: 0, rotateX: -45 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      const descBox = gsap.utils.toArray(".ss-desc-box");
      if (descBox.length > 0) {
        gsap.fromTo(
          descBox,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate highlight blocks (slowed down, trigger when section is fully visible)
      if (yellowRef.current) {
        gsap.fromTo(
          yellowRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            delay: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (greenRef.current) {
        gsap.fromTo(
          greenRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            delay: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Infinite spinning is now handled perfectly by CSS animation 

      // Infinite spinning is now handled perfectly by CSS animation 
      // in ServiceSection.css to prevent any JS frame-overlap lag.

      // Entrance animation removed: 
      // Animating opacity on a parent with preserve-3d causes the browser to flatten all 3D children into 2D.
      // Additionally, GSAP transforms fight with the infinite CSS rotate animation. 
      // The carousel will now smoothly spin from the moment it enters the viewport.

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingText = "What we help you build".split(" ");

  return (
    <section className="service-section flex flex-col" ref={sectionRef}>
      <div 
        className="w-full pt-10 pb-4 opacity-20 pointer-events-none select-none overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div className="animate-marquee-container text-[clamp(3rem,6vw,5rem)] font-clash uppercase font-bold text-black tracking-widest px-4">
          <span>OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES •&nbsp;</span>
          <span>OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES • OUR SERVICES •&nbsp;</span>
        </div>
      </div>
      <div className="ss-container flex-1">
        
        {/* Left Column */}
        <div className="ss-left">
          <div className="ss-heading-wrapper relative z-10">
            <h2 ref={headingRef}>
              <span className="relative inline-block">
                <div className="ss-highlight-yellow" ref={yellowRef} style={{ width: '108%', height: '110%', top: '-5%', left: '-4%', zIndex: -1 }}></div>
                {headingText.slice(0, 2).map((word, i) => (
                  <React.Fragment key={`w1-${i}`}>
                    <span className="ss-word-wrap">
                      <span className="ss-word">{word}</span>
                    </span>
                    {i < 1 ? "\u00a0" : ""}
                  </React.Fragment>
                ))}
              </span>
              {"\u00a0"}
              {headingText.slice(2).map((word, i) => (
                <React.Fragment key={`w2-${i}`}>
                  <span className="ss-word-wrap">
                    <span className="ss-word">{word}</span>
                  </span>
                  {i < headingText.slice(2).length - 1 ? "\u00a0" : ""}
                </React.Fragment>
              ))}
            </h2>
          </div>
          
          <div className="ss-desc-box flex flex-col gap-6 items-start">
            <div className="relative">
              <p>
                Select the service that fits your current stage, and build forward with clarity.
              </p>
            </div>
            <div className="ss-button-wrapper">
              <FlowButton text="Explore Services" hoverText="Go" className="!bg-[#7F7CFF] text-black !border-[#7F7CFF] hover:!bg-[#7F7CFF]/90 hover:!text-white" />
            </div>
          </div>
        </div>

        {/* Right Column (3D Carousel) */}
        <div className="ss-right">
          <div className="ss-carousel-scene">
            <div className="ss-carousel" ref={carouselRef}>
              {services.map((service, index) => (
                <div 
                  className="ss-card cursor-pointer" 
                  key={service.id} 
                  style={{ 
                    backgroundColor: service.bg,
                    transform: `rotateY(${index * (360 / services.length)}deg) translateZ(var(--carousel-radius, 260px))`
                  }}
                  onClick={() => navigateTo(`/services?card=${index + 1}`)}
                >
                  <div className="ss-card-inner">
                    <div className="ss-card-shine"></div>
                    <div className="ss-card-content" style={{ color: service.textColor }}>
                      <span className="ss-card-number" style={{ color: service.textColor }}>0{index + 1}</span>
                      <h3 style={{ color: service.textColor }}>{service.title}</h3>
                      <p style={{ color: service.textColor, opacity: 0.8 }}>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
