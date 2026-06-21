import { useLocation } from "react-router-dom";
import { Home, User, Layers, Briefcase, Mail } from "lucide-react";
import { usePageTransition } from "@/App";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navItems = [
  { name: "Home",     icon: Home,    path: "/" },
  { name: "About",    icon: User,    path: "/about" },
  { name: "Services", icon: Layers,  path: "/services" },
  { name: "Careers",  icon: Briefcase, path: "/careers" },
  { name: "Contact",  icon: Mail,    path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { navigateTo } = usePageTransition();
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })
        // Hamburger to X animation
        .to(".hamburger-top", { y: 6, rotation: 45, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(".hamburger-mid", { opacity: 0, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(".hamburger-bot", { y: -6, rotation: -45, duration: 0.3, ease: "power2.inOut" }, 0)
        // Menu background reveal (clip path expands from top right)
        .to(".mobile-menu", { clipPath: "circle(150% at calc(100% - 3rem) 3rem)", duration: 0.7, ease: "power3.inOut" }, 0)
        // Menu links fade up
        .fromTo(".mobile-link", 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }, 
        0.3);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl.current) {
      if (isOpen) tl.current.play();
      else tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 pointer-events-none">
      <div className="pointer-events-auto w-[94%] max-w-7xl h-16 bg-black rounded-full flex items-center justify-between px-6 md:px-8 shadow-[0_4px_40px_rgba(0,0,0,0.35)]">

        {/* Logo */}
        <button
          onClick={() => navigateTo("/")}
          className="flex-shrink-0 flex items-center h-full w-32 md:w-48 relative overflow-hidden rounded-l-full ml-2 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Yotvis Logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] md:w-[180px] max-w-none mix-blend-screen"
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map(({ name, icon: Icon, path }) => {
            const isActive = pathname === path;
            return (
              <button
                key={name}
                onClick={() => navigateTo(path)}
                className={`relative group flex items-center justify-center overflow-hidden text-sm font-semibold tracking-wide transition-colors duration-300 px-2 py-1 ${
                  isActive ? "text-[#FCFF7C]" : "text-[#FFFFF3]/80 hover:text-[#FCFF7C]"
                }`}
              >
                <span className="transform translate-y-0 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                  {name}
                </span>
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-[#FCFF7C] transition-all duration-300 ease-in-out">
                  <Icon className="w-4 h-4" strokeWidth={2.5} />
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FCFF7C]" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => navigateTo("/book-a-call")}
            className="text-[#FFFFF3] text-sm font-medium hover:text-[#FFFF66] transition-colors"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="lg:hidden text-[#FFFFF3] relative z-[101] w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible">
            <line className="hamburger-top" x1="4" x2="20" y1="6"  y2="6" style={{ transformOrigin: "center" }} />
            <line className="hamburger-mid" x1="4" x2="20" y1="12" y2="12" style={{ transformOrigin: "center" }} />
            <line className="hamburger-bot" x1="4" x2="20" y1="18" y2="18" style={{ transformOrigin: "center" }} />
          </svg>
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div 
      className="mobile-menu fixed inset-0 z-[90] bg-[#111111] pointer-events-auto flex flex-col justify-center px-10" 
      style={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
    >
      <div className="flex flex-col space-y-6 mt-16 max-w-md w-full mx-auto">
        {navItems.map(({ name, path }) => (
          <button
            key={name}
            onClick={() => {
              setIsOpen(false);
              navigateTo(path);
            }}
            className="mobile-link text-4xl sm:text-5xl font-clash font-black text-[#FFFFF3] text-left uppercase tracking-tight hover:text-[#FCFF7C] transition-colors"
          >
            {name}
          </button>
        ))}
        <button
          onClick={() => {
            setIsOpen(false);
            navigateTo("/book-a-call");
          }}
          className="mobile-link mt-8 w-fit bg-[#FCFF7C] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
        >
          Book a Call
        </button>
      </div>
    </div>
    </>
  );
}
