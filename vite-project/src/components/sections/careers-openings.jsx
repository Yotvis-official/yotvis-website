import React, { useEffect, useRef, useState } from "react";
import { usePageTransition } from "@/App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobOpenings = [
  {
    id: 1,
    number: "01.",
    title: "UI/UX Designer",
    tags: ["User Research", "User Personas", "Usability Testing", "Wireframing", "Prototyping", "Visual Design"],
    description: "Craft intuitive, engaging, and highly functional digital experiences. You will lead the design process from initial wireframes to high-fidelity prototypes, ensuring every interaction aligns with user needs and business goals.",
  },
  {
    id: 2,
    number: "02.",
    title: "Full Stack Developer",
    tags: ["ReactJS Development", "Node JS Development", "MongoDB", "Express", "System Architecture"],
    description: "Build robust, scalable, and lightning-fast web applications. Work across the entire stack to architect robust backend APIs and construct beautiful, responsive frontend interfaces that drive real business value.",
  },
  {
    id: 3,
    number: "03.",
    title: "App Developer",
    tags: ["Android App Development", "iOS App Development", "Flutter App Development", "React Native"],
    description: "Create seamless mobile experiences across iOS and Android platforms. You'll build performant, native-feeling applications using modern cross-platform frameworks and ensure high quality and responsiveness.",
  },
  {
    id: 4,
    number: "04.",
    title: "AI Automation Specialist",
    tags: ["Machine Learning", "Workflow Automation", "Python", "Data Processing", "Process Optimization"],
    description: "Integrate smart AI solutions to optimize workflows and scale operations. You will analyze existing business processes, identify automation opportunities, and deploy intelligent models to streamline execution.",
  },
  {
    id: 5,
    number: "05.",
    title: "Motion Designer",
    tags: ["After Effects", "Web Animations", "GSAP", "Framer Motion", "Interaction Design"],
    description: "Bring digital products to life with fluid motion and visual effects. You'll work closely with the engineering team to design and implement micro-interactions and scroll-based animations that delight users.",
  }
];

export default function OpeningsSection() {
  const { navigateTo } = usePageTransition();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [expandedId, setExpandedId] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the heading and description
      gsap.fromTo(
        ".openings-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Staggered animation for job cards
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (id) => {
    const isExpanding = expandedId !== id;
    
    // Collapse previously opened
    if (expandedId && contentRefs.current[expandedId]) {
      gsap.to(contentRefs.current[expandedId], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }

    // Expand newly clicked
    if (isExpanding && contentRefs.current[id]) {
      gsap.fromTo(contentRefs.current[id], 
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );
      setExpandedId(id);
    } else {
      setExpandedId(null);
    }
  };

  return (
    <section 
      id="openings" 
      ref={sectionRef}
      className="relative w-full bg-[#D3E4BF] py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 openings-header">
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-clash font-medium leading-[1] tracking-tight text-black mb-4">
            Current Openings
          </h2>
          <p className="text-xl font-nunito text-black/70 max-w-2xl">
            Find the role that matches your skillset and take the next step with Yotvis.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {jobOpenings.map((job, index) => {
            const isExpanded = expandedId === job.id;

            return (
              <div 
                key={job.id}
                ref={el => cardsRef.current[index] = el}
                className={`group flex flex-col p-8 rounded-[2rem] bg-white/60 hover:bg-white border border-black/5 hover:border-black/10 transition-colors duration-300 ${isExpanded ? 'bg-white shadow-xl' : ''}`}
              >
                {/* Header Row */}
                <div 
                  className="flex flex-col md:flex-row md:items-start justify-between cursor-pointer"
                  onClick={() => toggleAccordion(job.id)}
                >
                  <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16 w-full">
                    {/* Number & Title Area */}
                    <div className="flex gap-4 md:gap-8 items-start mb-6 md:mb-0 w-full md:w-auto shrink-0">
                      <span className="text-xl md:text-2xl font-bold font-nunito mt-1 text-black">
                        {job.number}
                      </span>
                      <div className="flex flex-col max-w-md">
                        <h3 className="text-2xl md:text-3xl font-clash font-semibold text-black">
                          {job.title}
                        </h3>
                        {!isExpanded && (
                          <span className="mt-2 text-sm text-black/40 font-nunito group-hover:text-black/60 transition-colors">
                            Click for more details
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="flex items-center gap-4 mt-6 md:mt-0 shrink-0">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTo("/contact");
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#FCFF7C] hover:bg-[#FCFF7C]/80 transition-colors text-xs font-bold text-black uppercase tracking-wider"
                    >
                      Learn More
                    </button>
                    <button 
                      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-[#FFFFF3] group-hover:scale-105 transition-transform duration-300"
                      onClick={() => toggleAccordion(job.id)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'rotate-90 md:rotate-0'}`}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded Content Area */}
                <div 
                  ref={el => contentRefs.current[job.id] = el}
                  className="h-0 overflow-hidden opacity-0"
                >
                  <div className="pt-8 md:pt-10 flex flex-col gap-8 lg:ml-[4.5rem]">
                    <div className="w-full max-w-4xl">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-black/10 rounded-full text-[11px] md:text-xs font-semibold text-black/70 whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-black/80 font-nunito leading-relaxed text-sm md:text-base">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-black/60 font-nunito text-lg">
            Don't see a role that fits? 
            <button onClick={() => navigateTo("/contact")} className="text-[#7F7CFF] font-bold ml-2 hover:underline">
              Send us your resume
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
