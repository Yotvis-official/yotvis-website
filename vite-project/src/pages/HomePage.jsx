import { useEffect, useRef } from "react";
import SEO from "@/components/ui/SEO";
import { usePageTransition } from "@/App";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import RotatingWords from "@/components/ui/rotating-words";
import ServiceSection from "@/components/sections/ServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { HeroDemo1 } from "@/components/blocks/demo";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import { FlowButton } from "@/components/ui/flow-button";

const homeFaqs = [
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

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const { navigateTo } = usePageTransition();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let refreshTimer;
    const onResize = () => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };

    const ctx = gsap.context(() => {

      /* ── 1. Overlapping panel pinning ───────────────────────────── */
      const panels = gsap.utils.toArray(".gsap-overlap-panel");
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;
        ScrollTrigger.create({
          trigger: panel,
          // <= so a full-viewport panel also uses "top top" (not "bottom bottom")
          start: () =>
            panel.offsetHeight <= window.innerHeight ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });

      // Re-measure after the framer-motion curtain finishes (0.6s delay + 0.8s sweep)
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 1400);


      const statNumbers = gsap.utils.toArray(".gsap-stat-number");
      statNumbers.forEach((stat) => {
        const target = parseFloat(stat.getAttribute("data-target") || 0);
        const suffix = stat.getAttribute("data-suffix") || "";
        
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 2.5,
          ease: "power3.out",
          delay: 0, // Start slightly after fade up
          onUpdate: function () {
            stat.innerText = Math.floor(counter.val) + suffix;
          },
        });
      });


      /* ── 3. Process section heading — fade-up ───────────────────── */
      // Removed old process section GSAP animations that targeted .yp-left and .yp-bg-word
      /* ── 5. Footer section — staggered fade-up ──────────────────── */
      const footerItems = [
        ".gsap-footer-kicker",
        ".gsap-footer-heading",
        ".gsap-footer-desc",
        ".gsap-footer-cta",
        ".gsap-footer-links",
      ].reduce((acc, sel) => [...acc, ...gsap.utils.toArray(sel)], []);
      
      if (footerItems.length > 0) {
        gsap.fromTo(
          footerItems,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: "#contact",
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const footerLogo = gsap.utils.toArray(".gsap-footer-logo");
      if (footerLogo.length > 0) {
        gsap.fromTo(
          footerLogo,
          { opacity: 0, scale: 1.15 },
          {
            opacity: 0.12,
            scale: 1.25,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#contact",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

    }, containerRef);

    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <main ref={containerRef} className="w-full">
      <SEO 
        title="Yotvis — Building Digital Presence | Web Design & Development" 
        description="Most businesses struggle to stand out online. Yotvis helps you build a stronger digital presence through branding, high-performance websites, AI automation, and cloud systems."
        faqSchema={homeFaqs}
        itemListSchema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Yotvis Studio Metrics",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Projects Completed",
              "description": "Yotvis has successfully completed over 17+ digital projects for global clients."
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Expert Team Members",
              "description": "Yotvis consists of a dedicated team of 8+ expert designers and developers."
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Client Satisfaction",
              "description": "Yotvis maintains a 98% client satisfaction rate across all digital service deliveries."
            }
          ]
        }}
      />
      
      {/* 1. Hero Section */}
      <div className="gsap-overlap-panel relative z-[1] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3]">
      <section className="relative w-full h-screen pt-[96px] pb-[40px] md:pt-[120px] md:pb-[60px] bg-[#FFFFF3] overflow-hidden flex flex-col items-center justify-center z-10">

        {/* Decorative Yellow Shape (Right) */}
        <div className="animate-hero-bg absolute top-[-5%] right-0 w-[45%] lg:w-[40%] h-[115%] pointer-events-none hidden md:block">
          <img
            src="/shape.png"
            alt=""
            className="absolute right-0 top-0 w-full h-full object-cover object-right mix-blend-multiply"
          />
        </div>

        {/* Mobile bg orb */}
        <div className="absolute top-0 right-0 w-full h-[60%] bg-[#FFFF66] opacity-30 blur-3xl rounded-full md:hidden pointer-events-none translate-x-1/2 -translate-y-1/4" />

        {/* Hero Content */}
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 flex flex-col justify-center items-start relative z-10">
          <div className="w-full flex flex-col items-start text-left space-y-8 z-10 relative pt-16 md:pt-28">

            {/* Hero Title */}
            <h1 className="animate-hero-heading w-full text-left text-[clamp(2.6rem,5.5vw,6.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-black font-clash">
              <span className="block text-left md:whitespace-nowrap">We build complete digital</span>
              <span className="flex flex-wrap md:flex-nowrap items-baseline justify-start gap-x-3 mt-2 md:mt-0 whitespace-nowrap">
                <span>presence for</span>
                <span className="relative inline-flex min-w-[7.5em] items-baseline justify-start align-baseline leading-[1.05] text-[#7F7CFF]">
                  <RotatingWords className="inline-block font-medium leading-[1.05] tracking-[-0.04em] text-[#7F7CFF]" />
                </span>
              </span>
            </h1>

            {/* Hero Subtext */}
            <p className="animate-hero-sub text-left text-[clamp(16px,1.4vw,22px)] font-normal leading-[1.6] max-w-[720px] text-black/70 font-nunito" style={{ animationDelay: '0.12s' }}>
              We turn vision into digital presence. From brand identity to digital systems, every layer is crafted to look sharp, work seamlessly, and scale with purpose.
            </p>

            <div className="animate-hero-sub pt-2 flex justify-start w-full" style={{ animationDelay: '0.24s' }}>
              <p className="w-fit text-left text-[clamp(16px,1.4vw,22px)] font-normal leading-[1.6] text-[#4B48FF] font-nunito">
                Creators of Vision Into Digital Presence.
              </p>
            </div>

            {/* Hero Button */}
            <div className="animate-hero-sub flex items-center justify-start space-x-6 pt-4 w-full" style={{ animationDelay: '0.36s' }}>
              <FlowButton
                text="Explore Services"
                onClick={() => navigateTo("/services")}
              />
            </div>

          </div>

          {/* Stats List - AEO/GEO Optimized */}
          <div className="w-full mt-auto pt-6 md:pt-10 pb-2 md:pb-4">
            <ul className="animate-hero-sub flex flex-row items-start md:items-center justify-between md:justify-center gap-2 md:gap-16 list-none m-0 p-0 w-full" style={{ animationDelay: '0.48s' }}>
              <li className="flex flex-col items-center flex-1 text-center">
                <span className="gsap-stat-number text-[2rem] md:text-5xl font-medium font-clash text-black mb-1 leading-none" data-target="17" data-suffix="+">0+</span>
                <span className="text-[12px] sm:text-sm md:text-lg font-nunito text-black/80 capitalize leading-tight mt-1">Projects<br className="md:hidden" /> Completed</span>
              </li>
              <li className="flex flex-col items-center flex-1 text-center">
                <span className="gsap-stat-number text-[2rem] md:text-5xl font-medium font-clash text-black mb-1 leading-none" data-target="8" data-suffix="+">0+</span>
                <span className="text-[12px] sm:text-sm md:text-lg font-nunito text-black/80 capitalize leading-tight mt-1">Expert Team<br className="md:hidden" /> Members</span>
              </li>
              <li className="flex flex-col items-center flex-1 text-center">
                <span className="gsap-stat-number text-[2rem] md:text-5xl font-medium font-clash text-black mb-1 leading-none" data-target="98" data-suffix="%">0%</span>
                <span className="text-[12px] sm:text-sm md:text-lg font-nunito text-black/80 capitalize leading-tight mt-1">Client<br className="md:hidden" /> Satisfaction</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>

      {/* 2. Service Section */}
      <div className="gsap-overlap-panel relative z-[2] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] rounded-t-[2.5rem] overflow-hidden border-t border-gray-200/50 shadow-2xl">
        <ServiceSection />
      </div>

      {/* 3. Process Section */}
      <div className="gsap-overlap-panel relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#7F7CFF] rounded-t-[2.5rem] overflow-hidden">
        <ProcessSection />
      </div>

      {/* 4. FAQ Section */}
      <div className="gsap-overlap-panel relative z-[4] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] rounded-t-[2.5rem] overflow-hidden">
        <FaqSection faqsData={homeFaqs} />
      </div>

      {/* 5. Footer Section */}
      <div className="relative z-[5] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3]">
        <FooterSection />
      </div>

    </main>
  );
}
