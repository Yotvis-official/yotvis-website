import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useCallback, useState, useRef, useEffect, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

import Navbar from "@/components/ui/Navbar";
const HomePage     = lazy(() => import("@/pages/HomePage"));
const AboutPage    = lazy(() => import("@/pages/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const CareersPage  = lazy(() => import("@/pages/CareersPage"));
const ContactPage  = lazy(() => import("@/pages/ContactPage"));
const BookCallPage = lazy(() => import("@/pages/BookCallPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
import PrivacyNotice from "@/components/ui/PrivacyNotice";

const BrandingPage = lazy(() => import("@/pages/services/BrandingPage"));
const UiUxDesignPage = lazy(() => import("@/pages/services/UiUxDesignPage"));
const WebDevelopmentPage = lazy(() => import("@/pages/services/WebDevelopmentPage"));
const AppDevelopmentPage = lazy(() => import("@/pages/services/AppDevelopmentPage"));
const AiAutomationPage = lazy(() => import("@/pages/services/AiAutomationPage"));
const CloudSolutionsPage = lazy(() => import("@/pages/services/CloudSolutionsPage"));

const ExplorePage = lazy(() => import("@/pages/ExplorePage"));
const AiAutomationArticle = lazy(() => import("@/pages/explore/AiAutomationArticle"));
const WebDevArticle = lazy(() => import("@/pages/explore/WebDevArticle"));
const DigitalPresenceGuide = lazy(() => import("@/pages/explore/DigitalPresenceGuide"));
const UiUxArticle = lazy(() => import("@/pages/explore/UiUxArticle"));
const ReactViteArticle = lazy(() => import("@/pages/explore/ReactViteArticle"));
const CoreWebVitalsArticle = lazy(() => import("@/pages/explore/CoreWebVitalsArticle"));
const AppDevArticle = lazy(() => import("@/pages/explore/AppDevArticle"));
const BrandingArticle = lazy(() => import("@/pages/explore/BrandingArticle"));
const CloudSolutionsArticle = lazy(() => import("@/pages/explore/CloudSolutionsArticle"));
const YotvisCaseStudyPage = lazy(() => import("@/pages/case-studies/YotvisCaseStudyPage"));
/* ─────────────────────────────────────────────────────────────
   Route config — label + unique slide direction per page
   from = where the card starts  |  exitTo = where it goes after
────────────────────────────────────────────────────────────── */
const ROUTE_CONFIG = {
  "/":         { label: "Home",     from: { x: 0,       y: "100%"  }, exitTo: { x: 0,       y: "-100%" } },
  "/about":    { label: "About",    from: { x: "100%",  y: 0       }, exitTo: { x: "-100%", y: 0       } },
  "/services": { label: "Services", from: { x: "-100%", y: 0       }, exitTo: { x: "100%",  y: 0       } },
  "/careers":  { label: "Careers",  from: { x: 0,       y: "-100%" }, exitTo: { x: 0,       y: "100%"  } },
  "/contact":     { label: "Contact",     from: { x: "100%",  y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/book-a-call": { label: "Book a Call", from: { x: "-100%", y: 0 }, exitTo: { x: "100%",  y: 0 } },
  "/privacy-policy": { label: "Privacy Policy", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/terms-and-conditions": { label: "Terms & Conditions", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/services/branding":       { label: "Branding",       from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/services/ui-ux-design":   { label: "UI/UX",          from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/services/web-development":{ label: "Web Dev",        from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/services/app-development":{ label: "App Dev",        from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/services/ai-automation":  { label: "AI Automation",  from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/services/cloud-solutions":{ label: "Cloud Solutions",from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore":                 { label: "Explore",        from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/building-digital-presence-2026": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/branding-for-tech-startups": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/cloud-solutions-for-startups": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/native-vs-cross-platform-apps": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/core-web-vitals-seo": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/ai-automation-for-business": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/ui-ux-design-principles": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/react-and-vite-tech-stack": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/explore/custom-web-dev-vs-templates": { label: "Article", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
  "/case-studies/yotvis-seo-performance": { label: "Case Study", from: { x: "100%", y: 0 }, exitTo: { x: "-100%", y: 0 } },
};

/* ─────────────────────────────────────────────────────────────
   Transition Context
────────────────────────────────────────────────────────────── */
export const TransitionContext = createContext({ navigateTo: () => {} });
export const usePageTransition = () => useContext(TransitionContext);

/* ─────────────────────────────────────────────────────────────
   Single directional overlay card
────────────────────────────────────────────────────────────── */
function TransitionCard({ config }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-end justify-start pointer-events-none"
      style={{ paddingLeft: "clamp(2.5rem,7vw,9rem)", paddingBottom: "3rem" }}
      initial={config.from}
      animate={{
        x: 0,
        y: 0,
        transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
      }}
      exit={{
        ...config.exitTo,
        transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <motion.span
        className="font-clash font-black uppercase text-[#FCFF7C] select-none leading-none tracking-tighter"
        style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        {config.label}
      </motion.span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Inner app — has access to hooks
────────────────────────────────────────────────────────────── */
function AnimatedApp() {
  const location   = useLocation();
  const realNav    = useNavigate();
  const timerRef   = useRef([]);
  const cardKeyRef = useRef(0);
  const [card, setCard] = useState(null); // null | { config, key }

  // Automatically scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigateTo = useCallback(
    (path) => {
      if (path === location.pathname) return;

      // Clear any in-flight timers from a rapid double-click
      timerRef.current.forEach(clearTimeout);

      const basePath = path.split(/[?#]/)[0];
      const config = ROUTE_CONFIG[basePath] ?? ROUTE_CONFIG["/"];
      cardKeyRef.current += 1;
      setCard({ config, key: cardKeyRef.current });

      // Route change fires while the card is fully covering the screen
      timerRef.current[0] = setTimeout(() => realNav(path), 680);

      // Remove card → AnimatePresence triggers its exit slide
      timerRef.current[1] = setTimeout(() => setCard(null), 1480);
    },
    [location.pathname, realNav]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {/* ── Persistent navbar ── */}
      <Navbar />

      {/* ── Page content (simple fade, no curtain inside) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.45, delay: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <Suspense fallback={<div className="min-h-screen bg-[#FFFFF3]" />}>
            <Routes location={location}>
              <Route path="/"         element={<HomePage />}     />
              <Route path="/about"    element={<AboutPage />}    />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/careers"  element={<CareersPage />}  />
              <Route path="/contact"  element={<ContactPage />}  />
              <Route path="/book-a-call" element={<BookCallPage />} />
              <Route path="/services/branding" element={<BrandingPage />} />
              <Route path="/services/ui-ux-design" element={<UiUxDesignPage />} />
              <Route path="/services/web-development" element={<WebDevelopmentPage />} />
              <Route path="/services/app-development" element={<AppDevelopmentPage />} />
              <Route path="/services/ai-automation" element={<AiAutomationPage />} />
              <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/explore/building-digital-presence-2026" element={<DigitalPresenceGuide />} />
              <Route path="/explore/branding-for-tech-startups" element={<BrandingArticle />} />
              <Route path="/explore/cloud-solutions-for-startups" element={<CloudSolutionsArticle />} />
              <Route path="/explore/native-vs-cross-platform-apps" element={<AppDevArticle />} />
              <Route path="/explore/core-web-vitals-seo" element={<CoreWebVitalsArticle />} />
              <Route path="/explore/react-and-vite-tech-stack" element={<ReactViteArticle />} />
              <Route path="/explore/ai-automation-for-business" element={<AiAutomationArticle />} />
              <Route path="/explore/ui-ux-design-principles" element={<UiUxArticle />} />
              <Route path="/explore/custom-web-dev-vs-templates" element={<WebDevArticle />} />
              <Route path="/case-studies/yotvis-seo-performance" element={<YotvisCaseStudyPage />} />
              <Route path="*"         element={<HomePage />}     />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* ── Single global directional card (no overlap ever) ── */}
      <AnimatePresence>
        {card && <TransitionCard key={card.key} config={card.config} />}
      </AnimatePresence>

      <PrivacyNotice />
    </TransitionContext.Provider>
  );
}

/* ─────────────────────────────────────────────────────────────
   Root export
────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <BrowserRouter>
        <div className="w-full min-h-screen bg-[#FFFFF3] font-sans overflow-x-hidden">
          <AnimatedApp />
        </div>
    </BrowserRouter>
  );
}
