import SEO from "@/components/ui/SEO";
import CareersHero from "@/components/sections/careers-hero";
import CareersOpenings from "@/components/sections/careers-openings";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/footer-section";
import { usePageTransition } from "@/App";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const careersFaqs = [
  {
    id: "01",
    question: "Who can apply for careers or internships at Yotvis?",
    answer: "Students, early learners, and emerging professionals with basic skills, curiosity, and discipline can apply for opportunities at Yotvis."
  },
  {
    id: "02",
    question: "Do I need advanced experience to join Yotvis?",
    answer: "No, you do not need advanced experience to join Yotvis, but you must have a basic foundation in your field and a willingness to learn and execute consistently."
  },
  {
    id: "03",
    question: "What kind of work will I do at Yotvis?",
    answer: "You will work on real project tasks across design, development, AI automation, motion, or digital systems based on your specific role and skillset."
  },
  {
    id: "04",
    question: "Are Yotvis roles remote or in-office?",
    answer: "Yotvis roles may be remote, offline, or hybrid depending on the specific project requirements and team coordination needs."
  },
  {
    id: "05",
    question: "How can I apply for a role at Yotvis?",
    answer: "To apply for a role at Yotvis, choose the position that matches your skillset, click Apply Now, and submit your details for review."
  }
];

export default function CareersPage() {
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
      const panels = gsap.utils.toArray(".gsap-overlap-panel");
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight <= window.innerHeight ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 1000);
    }, containerRef);

    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <main ref={containerRef} className="w-full min-h-screen bg-black overflow-hidden">
      <SEO 
        title="Careers at Yotvis | Work That Ships, Not Just Practice" 
        description="Tired of internships that go nowhere and studios that treat you like a resource? At Yotvis, you work on live projects, your name goes on real work, and your growth is not an afterthought."
        keywords="Careers, Jobs, Hiring, Web Design Jobs, Yotvis Careers"
        faqSchema={careersFaqs}
      />
      {/* 1. Hero */}
      <div className="gsap-overlap-panel relative z-[1] w-[calc(100%+4px)] -ml-[2px] bg-black">
        <CareersHero />
      </div>

      {/* 2. Openings */}
      <div className="gsap-overlap-panel relative z-[2] w-[calc(100%+4px)] -ml-[2px] bg-[#D3E4BF] rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden shadow-2xl border-t border-white/10">
        <CareersOpenings />
      </div>

      {/* 3. FAQ */}
      <div className="gsap-overlap-panel relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden shadow-2xl border-t border-black/5">
        <FaqSection 
          title={<>Frequently<br/>Asked<br/>Questions</>}
          subtitle="Clear answers for people who want to start building with Yotvis."
          faqsData={careersFaqs}
          ctaText="Still have questions?"
          ctaLabel="Contact Careers"
          onCtaClick={() => navigateTo("/contact")}
          className="pt-24"
        />
      </div>

      {/* 4. Footer */}
      <div className="relative z-[4] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3]">
        <FooterSection />
      </div>
    </main>
  );
}
