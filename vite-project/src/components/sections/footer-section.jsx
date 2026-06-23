import React from "react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/App";

export default function FooterSection() {
  const { navigateTo } = usePageTransition();

  return (
    <footer 
      id="contact" 
      className="relative w-full min-h-[80vh] bg-[#000000] text-[#FFFFF3] overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] z-20 flex flex-col pt-12 pb-8"
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

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10 flex-1 flex flex-col">
        
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

        {/* Middle Area: Quick Links, Services, Contact, Legal */}
        <div className="gsap-footer-links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/10 pt-12 mb-12">

          {/* Quick Links */}
          <div className="gsap-footer-col flex flex-col space-y-4">
            <h4 className="text-[#D3E4BF] font-clash text-lg font-medium mb-2">Quick Links</h4>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Explore", path: "/explore" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <button 
                key={link.name} 
                onClick={() => navigateTo(link.path)} 
                className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit cursor-pointer"
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
                className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit cursor-pointer"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Contact Details */}
          <div className="gsap-footer-col flex flex-col space-y-4">
            <h4 className="text-[#D3E4BF] font-clash text-lg font-medium mb-2">Contact Us</h4>
            
            <a 
              href="mailto:contact@yotvis.com" 
              className="group flex items-center gap-3 text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit"
            >
              <svg className="w-5 h-5 text-[#D3E4BF] group-hover:text-[#FCFF7C] transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contact@yotvis.com</span>
            </a>

            <div className="flex items-center gap-3 text-[#FFFFF3]/70 text-lg text-left">
              <svg className="w-5 h-5 text-[#D3E4BF] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            <a 
              href="https://www.linkedin.com/company/yotvis/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit"
            >
              <svg className="w-5 h-5 text-[#D3E4BF] group-hover:text-[#FCFF7C] transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://www.instagram.com/yotvis_tech" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit"
            >
              <svg className="w-5 h-5 text-[#D3E4BF] group-hover:text-[#FCFF7C] transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          {/* Legal */}
          <div className="gsap-footer-col flex flex-col space-y-4">
            <h4 className="text-[#D3E4BF] font-clash text-lg font-medium mb-2">Legal</h4>
            <button 
              onClick={() => navigateTo('/privacy-policy')} 
              className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigateTo('/terms-and-conditions')} 
              className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => navigateTo('/explore')} 
              className="text-[#FFFFF3]/70 hover:text-[#FCFF7C] transition-colors text-lg text-left w-fit cursor-pointer"
            >
              Explore Insights
            </button>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="border-t border-white/10 pt-8 mt-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FFFFF3]/50 text-sm font-light">
            © 2026 Yotvis. All rights reserved.
          </p>
          <p className="text-[#FFFFF3]/50 text-sm font-light uppercase tracking-widest font-clash">
            Crafted with precision in Chennai.
          </p>
        </div>

      </div>
    </footer>
  );
}
