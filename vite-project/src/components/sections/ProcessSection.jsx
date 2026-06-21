import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import "./ProcessSection.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Understand",
    text: "Your business, audience, goals, and requirements are understood with clarity.",
  },
  {
    title: "Plan",
    text: "A focused structure, design direction, and execution path are shaped.",
  },
  {
    title: "Build",
    text: "Design, development, and automation come together with precision.",
  },
  {
    title: "Launch",
    text: "The final solution is tested, deployed, and prepared for real use.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const introRef = useRef(null);
  const stepRefs = useRef([]);
  const lineRefs = useRef([]);
  const cubeRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // ── Heading animation is now handled by AnimatedText component ──

      // ── Label & Intro fade ───────────────────────────────────────
      const labelIntroTargets = [labelRef.current, introRef.current].filter(Boolean);
      if (labelIntroTargets.length > 0) {
        gsap.fromTo(
          labelIntroTargets,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // ── Each step: scroll-scrub animation ─────────────────────────
      stepRefs.current.forEach((step, i) => {
        if (!step) return;

        const num = step.querySelector(".process-number");
        const title = step.querySelectorAll(".ps-step-word");
        const text = step.querySelector("p");
        const line = lineRefs.current[i];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 72%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        });

        // number
        if (num) {
          tl.fromTo(
            num,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
            0
          );
        }

        // title words stagger
        if (title && title.length > 0) {
          tl.fromTo(
            title,
            { yPercent: 100, opacity: 0, rotateX: -35 },
            {
              yPercent: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.7,
              ease: "expo.out",
              stagger: 0.06,
            },
            0.1
          );
        }

        // supporting text
        if (text) {
          tl.fromTo(
            text,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            0.35
          );
        }

        // accent line grows in
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.7, ease: "expo.out", transformOrigin: "left center" },
            0
          );
        }
      });

      // ── Ambient glow scrub on each step ───────────────────────────
      stepRefs.current.forEach((step) => {
        if (!step) return;
        const glow = step.querySelector(".ps-glow");
        if (!glow) return;
        gsap.fromTo(
          glow,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1.2,
            },
          }
        );
      });

      // ── 3D Cube Scroll Movement & True 3D Rotation ────────────────
      if (cubeRef.current && sectionRef.current) {
        // 1. Move container vertically
        gsap.fromTo(
          cubeRef.current,
          { y: 0 },
          {
            y: () => sectionRef.current.offsetHeight * 0.45,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );

        // 2. Rotate inner 3D cube element (preserve-3d target)
        const innerCube = cubeRef.current.querySelector(".ps-cube");
        if (innerCube) {
          gsap.fromTo(
            innerCube,
            {
              rotateX: -12,
              rotateY: 18,
              rotateZ: -8,
            },
            {
              rotateX: 65,
              rotateY: 320,
              rotateZ: 25,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom bottom",
                scrub: 1,
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Heading is now passed directly to AnimatedText

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-grid-bg" />

      {/* 3D White Cuboid - Positioned absolutely in the section */}
      <div
        ref={cubeRef}
        className="ps-cube-container absolute right-0 md:left-[8vw] top-[10vh] md:top-[40vh] z-10 block scale-[0.4] md:scale-100 opacity-40 md:opacity-100 pointer-events-none"
      >
        <div className="ps-cube">
          <div className="ps-cube-face ps-cube-front"></div>
          <div className="ps-cube-face ps-cube-back"></div>
          <div className="ps-cube-face ps-cube-right"></div>
          <div className="ps-cube-face ps-cube-left"></div>
          <div className="ps-cube-face ps-cube-top"></div>
          <div className="ps-cube-face ps-cube-bottom"></div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-[60px] md:gap-[90px] relative z-10">
        <div className="process-left">
          <div>
            <p className="process-label" ref={labelRef}>
              Our Process
            </p>
            <AnimatedText 
              text="How We Bring Ideas to Life"
              underlineDuration={1.2}
              className="items-start !w-full"
            />
            <p className="process-intro" ref={introRef} style={{ opacity: 0 }}>
              From first idea to final launch, every step is shaped with clarity,
              direction, and execution.
            </p>
          </div>
        </div>

        <div className="process-right">
          {steps.map((step, index) => (
            <div
              className="process-step"
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              {/* Ambient glow blob */}
              <div className="ps-glow" />

              {/* Top accent line */}
              <div
                className="ps-accent-line"
                ref={(el) => (lineRefs.current[index] = el)}
              />

              <span className="process-number">0{index + 1}</span>

              <h3>
                {step.title.split(" ").map((word, wi) => (
                  <span className="ps-step-word-wrap" key={wi}>
                    <span className="ps-step-word">{word}</span>
                    {wi < step.title.split(" ").length - 1 ? "\u00a0" : ""}
                  </span>
                ))}
              </h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
