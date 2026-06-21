import React, { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import gsap from "gsap";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/footer-section";
import { Link } from "react-router-dom";
import { usePageTransition } from "@/App";

const contactFaqs = [
  {
    id: "01",
    question: "Do I need a complete plan before contacting Yotvis?",
    answer: "No, you do not need a complete plan before contacting Yotvis. You can reach out with a rough idea and we will help shape the direction."
  },
  {
    id: "02",
    question: "What details should I include in my project message?",
    answer: "You should include your business name, service requirement, project goal, timeline, budget range, and any existing references or links in your message."
  },
  {
    id: "03",
    question: "Can I contact Yotvis for only one specific service?",
    answer: "Yes, you can contact Yotvis for a single service such as branding, web development, or AI automation based on your immediate needs."
  },
  {
    id: "04",
    question: "How soon will Yotvis respond to my inquiry?",
    answer: "Yotvis reviews your message and responds as soon as possible with next steps, clarification questions, or a call option."
  },
  {
    id: "05",
    question: "Does Yotvis offer long-term digital support?",
    answer: "Yes, Yotvis offers long-term support for redesigns, updates, automation, cloud setup, and ongoing digital improvements."
  }
];

export default function ContactPage() {
  const { navigateTo } = usePageTransition();
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const bottomRef = useRef(null);
  const titleRef = useRef(null);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const iconRef3 = useRef(null);
  const pixelsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(bgRef.current, { x: '100%' });
    if (textRef.current) gsap.set(textRef.current.children, { y: 60, opacity: 0 });
    gsap.set([titleRef.current, iconRef1.current, iconRef2.current, iconRef3.current], { y: 40, opacity: 0 });
    if (bottomRef.current) gsap.set(bottomRef.current.children, { y: 40, opacity: 0 });

    tl.to(bgRef.current, { x: '0%', duration: 1.2, ease: "power4.out" })
      .to(textRef.current.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.8")
      .to([titleRef.current, iconRef1.current, iconRef2.current, iconRef3.current], { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.6")
      .to(bottomRef.current.children, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4");
  }, []);

  const handleHoverEnter = () => {
    gsap.to(pixelsRef.current, {
      opacity: 0.25,
      scale: 0.8,
      duration: 0.4,
      stagger: {
        amount: 0.5,
        grid: [10, 15],
        from: "random"
      },
      ease: "power2.out"
    });
  };

  const handleHoverLeave = () => {
    gsap.to(pixelsRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.4,
      stagger: {
        amount: 0.4,
        grid: [10, 15],
        from: "center"
      },
      ease: "power2.inOut"
    });
  };

  const numCols = 15;
  const numRows = 10;
  const pixels = Array.from({ length: numCols * numRows });

  return (
    <main ref={containerRef} className="w-full min-h-screen bg-[#FFFFF3] text-black overflow-hidden font-clash">
      <SEO 
        title="Contact Yotvis | Start Your Digital Project" 
        description="Get in touch with Yotvis. Tell us what you want to build and we'll guide the next step in creating your digital presence."
        keywords="Contact Yotvis, Digital Agency Contact, Web Development Query"
        faqSchema={contactFaqs}
      />
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto z-10 flex flex-col justify-center min-h-[80vh]">
        
        {/* Main Banner Area */}
        <div className="relative w-full max-w-[1100px] mx-auto flex flex-col md:block min-h-[450px] mb-24 mt-10">
          
          {/* Purple Background Box */}
          <div ref={bgRef} className="absolute right-0 top-0 bottom-0 w-full md:w-[65%] bg-[#7F7CFF] z-0 flex flex-wrap content-start overflow-hidden rounded-3xl md:rounded-none">
            {pixels.map((_, i) => (
              <div 
                key={i} 
                ref={el => pixelsRef.current[i] = el}
                className="bg-white opacity-0"
                style={{ width: `${100/numCols}%`, height: `${100/numRows}%` }}
              ></div>
            ))}
          </div>

          {/* Text Left (Absolutely positioned to overlap the purple box) */}
          <div className="relative md:absolute md:left-0 z-10 md:top-1/2 md:-translate-y-1/2 pointer-events-none w-full md:w-max pt-12 md:pt-0 px-6 md:px-12 text-left">
            <h1 ref={textRef} className="text-[3rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.05] tracking-tight font-normal text-black font-clash">
              <div className="overflow-hidden"><div className="pb-1">Let’s Build</div></div>
              <div className="overflow-hidden"><div className="pb-1">Your Next</div></div>
              <div className="overflow-hidden"><div className="pb-1">Digital</div></div>
              <div className="overflow-hidden"><div>Step.</div></div>
            </h1>
          </div>

          {/* Icons Right */}
          <div className="relative md:absolute md:right-10 lg:right-16 md:top-1/2 md:-translate-y-1/2 z-10 flex flex-col items-center justify-center py-16 md:py-0">
            <p ref={titleRef} className="text-xl md:text-[1.35rem] font-medium text-black mb-6">Stay Connected</p>
            <div className="flex gap-4 md:gap-6 justify-center">
              {/* Mail */}
              <a 
                ref={iconRef1}
                href="mailto:contact@yotvis.com" 
                className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] bg-[#FFFFF3] rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center hover:scale-105 transition-transform text-black shadow-sm relative z-20"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 pointer-events-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              {/* Instagram */}
              <a 
                ref={iconRef2}
                href="#" 
                className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] bg-[#FFFFF3] rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center hover:scale-105 transition-transform text-black shadow-sm relative z-20"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 pointer-events-none">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                ref={iconRef3}
                href="#" 
                className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] bg-[#FFFFF3] rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center hover:scale-105 transition-transform text-black shadow-sm relative z-20"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 pointer-events-none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Part: Not Sure Where to Start? */}
        <div ref={bottomRef} className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-[2.5rem] font-medium font-clash mb-8 text-black tracking-tight">Not Sure Where to Start?</h2>
          <p className="text-xl md:text-[1.35rem] font-normal text-black opacity-90 leading-relaxed mb-12 font-nunito">
            Tell us what you want to build. We’ll guide the next step
          </p>
          <a 
            href="/book-a-call" 
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/book-a-call');
            }}
            className="inline-block bg-[#FCFF7C] text-black font-medium text-sm md:text-base px-10 py-4 rounded-full hover:bg-[#E6E86C] transition-colors uppercase tracking-widest shadow-sm font-clash cursor-pointer"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* 5. Contact Page FAQ */}
      <div className="relative z-[2] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] overflow-hidden mt-10">
        <FaqSection 
          title={<>Questions<br />Before You<br />Contact Us</>}
          subtitle="Know what to expect before starting a conversation with Yotvis."
          faqsData={contactFaqs}
        />
      </div>

      {/* 6. Footer */}
      <div className="relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3]">
        <FooterSection />
      </div>
    </main>
  );
}
