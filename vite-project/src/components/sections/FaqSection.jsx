import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: "01",
    question: "What does Yotvis help businesses build?",
    answer: "Yotvis helps businesses build a complete digital presence through branding, UI/UX design, website development, app development, AI automation, and cloud solutions."
  },
  {
    id: "02",
    question: "Who is Yotvis designed for?",
    answer: "Yotvis is designed for businesses, creators, professionals, startups, and growing brands that want a sharper identity, better online presence, or stronger digital systems."
  },
  {
    id: "03",
    question: "Can Yotvis handle everything from idea to launch?",
    answer: "Yes, Yotvis handles the complete project lifecycle from strategy and design to development, deployment, automation, and long-term support."
  },
  {
    id: "04",
    question: "Do I need a clear plan before contacting Yotvis?",
    answer: "No, you do not need a clear plan before contacting Yotvis. If your idea is unclear, we help shape the direction first before moving into design and execution."
  },
  {
    id: "05",
    question: "Why should I choose Yotvis over other agencies?",
    answer: "You should choose Yotvis because we do not just build websites; we create digital presences that look credible, work smoothly, build trust, and support long-term growth."
  }
];

export default function FaqSection({ 
  title = <>Questions<br />Before We<br />Build</>, 
  subtitle = "Clear answers for businesses planning their next digital step with Yotvis.", 
  faqsData = faqs,
  ctaText = null,
  ctaLabel = null,
  onCtaClick = null,
  className = ""
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const answerRefs = useRef([]);
  const iconRefs = useRef([]);
  const faqItemsRef = useRef([]);

  // Scroll Entrance Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in left side text
      const faqLeft = gsap.utils.toArray(".gsap-faq-left");
      if (faqLeft.length > 0) {
        gsap.fromTo(
          faqLeft,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // GSAP scroll pin effect for the left column (Sticky/Parallel effect)
      let mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: ".gsap-faq-left",
          start: "top 20%",
          end: () => sectionRef.current ? `+=${Math.max(0, sectionRef.current.offsetHeight - window.innerHeight)}` : "+=0",
          pin: true,
          pinSpacing: false,
        });
      });

      // Stagger fade in FAQ items
      gsap.fromTo(
        faqItemsRef.current,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Accordion Expand/Collapse Animation
  const toggleFaq = (index) => {
    const isCurrentlyOpen = openIndex === index;
    
    // Close the currently open one if it exists
    if (openIndex !== null && openIndex !== index) {
      gsap.to(answerRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      gsap.to(iconRefs.current[openIndex], {
        rotation: 90, // plus icon horizontal line
        duration: 0.3
      });
    }

    if (isCurrentlyOpen) {
      // Close this one
      setOpenIndex(null);
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      gsap.to(iconRefs.current[index], {
        rotation: 90,
        duration: 0.3
      });
    } else {
      // Open this one
      setOpenIndex(index);
      gsap.fromTo(answerRefs.current[index], 
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut"
        }
      );
      gsap.to(iconRefs.current[index], {
        rotation: 0, // minus icon (horizontal)
        duration: 0.3
      });
    }
  };

  return (
    <section ref={sectionRef} className={`w-full bg-[#FFFFF3] py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-10 ${className}`}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24">
        
        {/* Left Content */}
        <div className="gsap-faq-left flex flex-col justify-start">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.04em] font-medium font-clash text-black mb-12">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-normal leading-[1.5] text-black/80 font-nunito max-w-[340px]">
            {subtitle}
          </p>
        </div>

        {/* Right Content - Accordion */}
        <div className="flex flex-col justify-center">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={faq.id} 
                ref={(el) => (faqItemsRef.current[index] = el)}
                className="border-b-2 border-black overflow-hidden flex flex-col"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="text-xl md:text-2xl font-medium font-nunito text-black pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {/* Horizontal line (always visible) */}
                    <div className="absolute w-full h-[3px] bg-black"></div>
                    {/* Vertical line (rotates to become horizontal/disappear on open) */}
                    <div 
                      ref={(el) => (iconRefs.current[index] = el)}
                      className="absolute w-full h-[3px] bg-black rotate-90"
                    ></div>
                  </div>
                </button>

                {/* Answer Container (Animated via GSAP) */}
                <div 
                  ref={(el) => (answerRefs.current[index] = el)}
                  className="h-0 opacity-0 overflow-hidden"
                >
                  <div className="pb-8 pr-12 text-lg text-black/70 font-nunito leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Optional CTA */}
          {ctaLabel && (
            <div className="mt-12 flex flex-col items-start">
              {ctaText && <p className="text-black/60 font-nunito mb-4">{ctaText}</p>}
              <button 
                onClick={onCtaClick} 
                className="inline-flex items-center rounded-full bg-[#FCFF7C] px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-[1.03] uppercase tracking-wider"
              >
                {ctaLabel}
                <span className="ml-2">→</span>
              </button>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}
