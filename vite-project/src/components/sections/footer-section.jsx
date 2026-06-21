import React from "react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/App";

export default function FooterSection() {
  const { navigateTo } = usePageTransition();

  return (
    <footer 
      id="contact" 
      className="relative w-full min-h-[80vh] bg-[#000000] text-[#FFFFF3] overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] z-20 flex flex-col pt-12 pb-8"
      style={{ paddingLeft: "clamp(2.5rem, 7vw, 9rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)" }}
    >
      {/* Blurred Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img 
          src="/logo.png" 
          alt="" 
          loading="lazy"
          className="gsap-footer-logo w-[80vw] max-w-[1100px] opacity-[0.12] blur-md scale-125 mix-blend-screen"
        />
      </div>

      <div className="w-full relative z-10 flex-1 flex flex-col">
        
        {/* Top Area: Heading & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="gsap-footer-kicker text-[#D3E4BF] text-sm font-semibold tracking-[0.2em] uppercase font-clash mb-6">
              YOTVIS
            </span>
            <h2 className="gsap-footer-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] font-clash mb-8 max-w-2xl">
              Have an Idea Ready to Build?
            </h2>
            <p className="gsap-footer-desc text-[#FFFFF3]/70 text-lg md:text-xl leading-relaxed max-w-lg font-light">
              Bring your idea to Yotvis, and we’ll shape it into a clear, reliable digital solution built to grow with your business.
            </p>
          </div>

          {/* Right: CTA Block */}
          <div className="gsap-footer-cta lg:col-span-4 lg:col-start-9 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
            <p className="text-[#FFFFF3]/70 text-lg mb-8 max-w-sm">
              Building complete digital presence through design, development, automation, and cloud solutions.
            </p>
            <button 
              className="bg-[#FCFF7C] text-[#000000] px-10 py-6 rounded-full font-medium text-lg hover:bg-[#FFFFF3] transition-colors duration-300 w-full sm:w-auto"
              onClick={() => navigateTo('/book-a-call')}
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Middle Area: Quick Links, Services, Contact */}
        <div className="gsap-footer-links grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 border-t border-white/10 pt-12 mb-12">

          {/* Quick Links */}
          <div className="gsap-footer-col flex flex-col space-y-4">
            <h4 className="text-[#D3E4BF] font-clash text-lg font-medium mb-2">Quick Links</h4>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <button 
                key={link.name} 
                onClick={() => navigateTo(link.path)} 
                className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Services */}
          <div className="gsap-footer-col flex flex-col space-y-4">
            <h4 className="text-[#D3E4BF] font-clash text-lg font-medium mb-2">Services</h4>
            {[
              { name: "Branding", path: "/services/branding" },
              { name: "UI/UX Design", path: "/services/ui-ux-design" },
              { name: "Website Development", path: "/services/web-development" },
              { name: "App Development", path: "/services/app-development" },
              { name: "AI Automation", path: "/services/ai-automation" },
              { name: "Cloud Solutions", path: "/services/cloud-solutions" }
            ].map((service) => (
              <button 
                key={service.name} 
                onClick={() => navigateTo(service.path)} 
                className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Contact Details & Socials */}
          <div className="gsap-footer-col flex flex-col space-y-4 lg:items-end lg:text-right">
            <h4 className="text-[#D3E4BF] font-clash text-lg font-medium mb-2">Contact</h4>
            <a href="mailto:contact@yotvis.com" className="group flex items-center justify-start lg:justify-end gap-2 text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg">
              <span>contact@yotvis.com</span>
            </a>
            <span className="group flex items-center justify-start lg:justify-end gap-2 text-[#FFFFF3]/70 transition-colors text-lg">
              <span>Location: India</span>
            </span>
            <a href="#" className="group flex items-center justify-start lg:justify-end gap-2 text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg mt-2">
              <span>LinkedIn</span>
            </a>
            <a href="#" className="group flex items-center justify-start lg:justify-end gap-2 text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg">
              <span>Instagram</span>
            </a>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="border-t border-white/10 pt-8 mt-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FFFFF3]/50 text-sm font-light">
            © 2026 Yotvis. All rights reserved.
          </p>
          <p className="text-[#FFFFF3]/50 text-sm font-light uppercase tracking-widest font-clash">
            Creating Vision Into Presence
          </p>
        </div>

      </div>
    </footer>
  );
}
