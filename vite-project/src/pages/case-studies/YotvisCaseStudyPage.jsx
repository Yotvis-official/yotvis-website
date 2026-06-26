import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import { ArrowLeft, ArrowRight, X, TrendingUp, Zap, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FaqSection from "@/components/sections/FaqSection";
import { usePageTransition } from "@/App";

// ── Schema ────────────────────────────────────────────────────────────────────
const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Yotvis Achieved 95/100 PageSpeed & Google Indexing in 3 Days",
  "author": {
    "@type": "Organization",
    "name": "Yotvis",
    "url": "https://yotvis.com",
    "description": "Yotvis is a Chennai-based digital innovation agency specializing in web development, branding, UI/UX, AI automation, and cloud solutions.",
    "areaServed": "IN",
    "foundingLocation": "Chennai, Tamil Nadu, India"
  },
  "about": [
    { "@type": "Thing", "name": "Search Engine Optimization" },
    { "@type": "Thing", "name": "Core Web Vitals" },
    { "@type": "Thing", "name": "Answer Engine Optimization" },
    { "@type": "Thing", "name": "React" },
    { "@type": "Thing", "name": "Google Search Console" }
  ],
  "datePublished": "2026-06-26",
  "dateModified": "2026-06-26",
  "publisher": {
    "@type": "Organization",
    "name": "Yotvis",
    "url": "https://yotvis.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yotvis.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yotvis.com/case-studies/yotvis-seo-performance"
  }
};

// ── Proof screenshots with labels ─────────────────────────────────────────────
const proofScreenshots = [
  {
    src: "/proof/pagespeed-mobile-95.png",
    label: "PageSpeed Insights — Mobile 95/100",
    date: "Jun 26, 2026 · 16:24 IST",
    tag: "Performance"
  },
  {
    src: "/proof/pagespeed-desktop-99.png",
    label: "PageSpeed Insights — Desktop 99/100",
    date: "Jun 26, 2026 · 16:31 IST",
    tag: "Performance"
  },
  {
    src: "/proof/gsc-indexed.png",
    label: "GSC URL Inspection — URL is on Google",
    date: "Jun 26, 2026 · 16:51 IST",
    tag: "Indexing"
  },
  {
    src: "/proof/gsc-crawl-success.png",
    label: "GSC — Crawl Allowed, Page Fetch Successful",
    date: "Jun 23, 2026 · 16:09 IST",
    tag: "Indexing"
  },
  {
    src: "/proof/gsc-indexing-requested.png",
    label: "GSC — Indexing Requested Confirmation",
    date: "Jun 23, 2026 · 15:51 IST",
    tag: "Indexing"
  }
];

// ── Metrics ───────────────────────────────────────────────────────────────────
const metrics = [
  { label: "Mobile Performance", before: "73", after: "95", delta: "+22", icon: "zap" },
  { label: "Desktop Performance", before: "—", after: "99", delta: "—", icon: "trending" },
  { label: "LCP", before: "5.1s", after: "2.8s", delta: "-2.3s", icon: "zap" },
  { label: "TBT", before: "220ms", after: "50ms", delta: "-170ms", icon: "zap" },
  { label: "SEO Score", before: "—", after: "100", delta: "Perfect", icon: "trending" },
  { label: "Indexed In", before: "0", after: "3 Days", delta: "72h sprint", icon: "clock" },
];

const checklist = [
  "Configure vite.config.js with manualChunks for react-vendor and helmet, enable cssCodeSplit, minify with esbuild",
  "Install react-helmet-async and wrap the application root with <HelmetProvider>",
  "Create a route registry as single source of truth for both React Router and sitemap generator",
  "Generate sitemap.xml and robots.txt at build time from the route registry; emit to /public",
  "Author JSON-LD payloads per page type and validate each with the Rich Results Test",
  "Add a <Helmet> block to every route — title, meta description, canonical, robots, Open Graph",
  "Run Lighthouse on production build; iterate on LCP, TBT, and CLS until mobile Performance ≥ 90",
  "Deploy to edge CDN with Brotli compression and immutable cache headers for hashed assets",
  "Submit sitemap.xml and request indexing for homepage in Google Search Console",
  "Verify via GSC URL Inspection: crawl allowed = Yes, page fetch = Successful, indexing allowed = Yes"
];

const caseStudyFaqs = [
  {
    id: "01",
    question: "How did Yotvis achieve Google indexing in just 3 days on a brand-new domain?",
    answer: "By combining three actions on day one: submitting a complete sitemap.xml to Google Search Console, requesting manual indexing via URL Inspection, and ensuring the page fetch returned a clean 200 status with crawl allowed and indexing allowed both set to Yes. The blog articles also provided internal linking signals that Googlebot followed during its first crawl on Jun 25."
  },
  {
    id: "02",
    question: "Why did the mobile PageSpeed score jump from 73 to 95?",
    answer: 'Three fixes drove the improvement: (1) preloading the LCP element (the Yotvis logo) directly in index.html with fetchpriority="high", (2) delaying Google Tag Manager by 3 seconds so it doesn\'t block the initial render, and (3) adding ScrollTrigger.config({ ignoreMobileResize: true }) to stop GSAP from triggering forced reflows every time the mobile address bar resized the viewport. Together these cut TBT from 220ms to 50ms and LCP from 5.1s to 2.8s.'
  },
  {
    id: "03",
    question: "What is AEO and GEO, and why did Yotvis implement it?",
    answer: 'Answer Engine Optimization (AEO) targets AI assistants like ChatGPT and Perplexity that answer questions directly rather than serving blue links. Generative Engine Optimization (GEO) targets large language models that cite sources in generated content. Yotvis implemented both by adding FAQPage schema to every content page, writing concise factual summaries at the top of each service page, and maintaining entity-consistent business information so that AI models can resolve "Yotvis" as a single, well-defined company.'
  },
  {
    id: "04",
    question: "Is react-helmet-async enough for SEO on a React SPA, or is server-side rendering required?",
    answer: "react-helmet-async with build-time pre-rendering of the head shell is sufficient for most SEO use cases on a React SPA. Googlebot executes JavaScript and can index client-rendered content, so the critical requirement is that each route has a correct, unique title, meta description, and canonical tag — which react-helmet-async handles per route. Full SSR adds operational cost and is only necessary if you're targeting crawlers that don't execute JavaScript."
  },
  {
    id: "05",
    question: "Can any agency replicate these results, or is this specific to Yotvis's setup?",
    answer: "The 10-step reproduction checklist in the page is a framework any React + Vite project can follow. The core principles — code-splitting, per-route meta, JSON-LD, sitemap submission on day one — are stack-agnostic. What Yotvis adds is the specific implementation judgment: knowing which GSAP configuration causes forced reflows on mobile, why GTM needs to be deferred, and how to structure JSON-LD for AEO rather than just classic search. That's the expertise we bring to client projects."
  }
];

const timeline = [
  { date: "Jun 23 · 15:49 IST", event: "Site deployed. URL not yet on Google.", status: "start" },
  { date: "Jun 23 · 15:51 IST", event: "Indexing requested — URL added to priority crawl queue.", status: "progress" },
  { date: "Jun 23 · 16:09 IST", event: "Live test: Crawl allowed ✓, Page fetch successful ✓, Indexing allowed ✓", status: "progress" },
  { date: "Jun 25 · 17:20 IST", event: "Googlebot smartphone crawled yotvis.com", status: "progress" },
  { date: "Jun 26 · 16:24 IST", event: "PageSpeed: Mobile 95 / Desktop 99 / SEO 100 / Accessibility 100", status: "progress" },
  { date: "Jun 26 · 16:51 IST", event: "URL is on Google — Page is indexed ✓", status: "done" },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ screenshots, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  const s = screenshots[index];
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#111] rounded-2xl overflow-hidden border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <p className="text-sm font-nunito font-semibold text-white">{s.label}</p>
            <p className="text-xs font-nunito text-white/40 mt-0.5">{s.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-nunito font-semibold tracking-wider uppercase bg-[#FCFF7C]/20 text-[#FCFF7C] px-3 py-1 rounded-full">
              {s.tag}
            </span>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <img src={s.src} alt={s.label} className="w-full object-contain max-h-[70vh]" />
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-sm font-nunito text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <span className="text-xs font-nunito text-white/30">{index + 1} / {screenshots.length}</span>
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-sm font-nunito text-white/50 hover:text-white transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function YotvisCaseStudyPage() {
  const { navigateTo } = usePageTransition();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero load animation
    gsap.from("section:first-of-type > div", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.1
    });

    // Scroll animation for all other sections
    const sections = gsap.utils.toArray("section:not(:first-of-type)");
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () => setLightboxIndex(i => (i - 1 + proofScreenshots.length) % proofScreenshots.length);
  const nextImg = () => setLightboxIndex(i => (i + 1) % proofScreenshots.length);

  return (
    <main ref={containerRef} className="w-full min-h-screen bg-[#FFFFF3] flex flex-col">
      <SEO
        title="How Yotvis Achieved 95/100 PageSpeed & Google Indexing in 3 Days | Yotvis Case Study"
        description="A full technical breakdown of how Yotvis built, optimized, and indexed its React + Vite website — achieving SEO 100/100, 95/100 mobile performance, and Google indexing in under 72 hours."
        canonical="https://yotvis.com/case-studies/yotvis-seo-performance"
        ogTitle="Yotvis Case Study: 95/100 PageSpeed & Google Indexing in 3 Days"
        ogDescription="Zero to indexed in 72 hours. SEO 100/100. Mobile performance 73 → 95. See the exact implementation — React, Vite, JSON-LD, AEO/GEO, and Core Web Vitals optimization."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      {/* ── Hero ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pt-36 md:pt-44 pb-16">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-sm font-nunito text-black/40 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Explore
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {["SEO", "Performance", "React/Vite", "AEO/GEO"].map(tag => (
                <span key={tag} className="text-xs font-nunito font-semibold tracking-widest uppercase bg-black text-[#FCFF7C] px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-clash font-medium text-black leading-[1.05] tracking-tight mb-6">
              How Yotvis Achieved 95/100 PageSpeed & Google Indexing in 3 Days
            </h1>
            
            {/* AEO Direct Answer Block */}
            <div className="bg-[#D3E4BF] border border-black/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-clash font-medium text-black mb-2">What did Yotvis achieve?</h3>
              <p className="text-base font-nunito text-black/80 leading-relaxed">
                Yotvis built and optimized its own website from zero to Google-indexed in 3 days, achieving a 95/100 mobile PageSpeed score, 99/100 desktop, SEO 100/100, and Accessibility 100/100 — using React 18, Vite, react-helmet-async, JSON-LD structured data, and AEO/GEO implementation. The site covers 26 pages including service pages and blog articles.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-nunito text-black/50">
              <span>Client: <strong className="text-black">Yotvis (self)</strong></span>
              <span>Timeline: <strong className="text-black">Jun 23–26, 2026</strong></span>
              <span>Sprint: <strong className="text-black">72 hours</strong></span>
              <span>Pages: <strong className="text-black">26</strong></span>
            </div>
          </div>

          {/* Key metrics summary */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Mobile Performance", value: "95/100", sub: "↑ from 73" },
              { label: "Desktop Performance", value: "99/100", sub: "First run" },
              { label: "Indexed In", value: "3 Days", sub: "New domain" },
              { label: "SEO Score", value: "100/100", sub: "Perfect" },
            ].map((m, i) => (
              <div key={i} className="bg-black rounded-2xl p-6">
                <p className="text-xs font-nunito text-[#FFFFF2]/70 uppercase tracking-wider mb-2">{m.label}</p>
                <p className="text-3xl font-clash font-semibold text-[#FCFF7C]">{m.value}</p>
                <p className="text-xs font-nunito text-[#FFFFF2]/60 mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">01 · Overview</p>
            <h2 className="text-3xl font-clash font-medium text-black">The Brief</h2>
          </div>
          <div className="md:col-span-2 font-nunito text-black/70 text-lg leading-relaxed space-y-4">
            <p>
              Yotvis is a Chennai-based digital agency that builds complete digital presences for startups and growing brands. This case study documents a 4-day technical sprint in which Yotvis designed, developed, and optimized its own website — achieving Google indexing in 3 days, a mobile PageSpeed score of 95/100, desktop score of 99/100, and a perfect SEO score of 100/100 using React 18, Vite, JSON-LD structured data, and Answer Engine Optimization (AEO) strategies.
            </p>
            <p>
              All metrics are sourced from Google PageSpeed Insights and Google Search Console URL Inspection snapshots captured between Jun 23–26, 2026. Screenshots in the Proof section are unedited source captures.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">02 · Stack</p>
            <h2 className="text-3xl font-clash font-medium text-black">Technology Stack</h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Frontend", value: "React 18 + Vite (ESM build)" },
                { label: "Routing", value: "React Router + hover pre-fetching" },
                { label: "Head Management", value: "react-helmet-async" },
                { label: "Structured Data", value: "Hand-authored JSON-LD (6 schema types)" },
                { label: "Crawlers", value: "Static sitemap.xml + robots.txt" },
                { label: "Hosting", value: "Edge CDN · HTTP/2 · Brotli · Immutable cache" },
              ].map((item, i) => (
                <div key={i} className="bg-[#D3E4BF] rounded-xl p-5 border border-black/5">
                  <p className="text-xs font-nunito font-semibold text-black/40 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm font-nunito font-medium text-black">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">03 · Implementation</p>
            <h2 className="text-3xl font-clash font-medium text-black">What We Built</h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            {[
              {
                title: "Site Architecture",
                body: "The build was configured with manual chunk splitting to separate vendor code from route-level application code. Each route exposes a statically known title and meta set so that crawlers receive a meaningful document even before JavaScript hydration completes."
              },
              {
                title: "Sitemap & robots.txt",
                body: "A static sitemap.xml is emitted at build time from a single source-of-truth route list, ensuring no drift between the router and the sitemap. Both files are submitted to Google Search Console immediately after deployment."
              },
              {
                title: "Structured Data — JSON-LD",
                body: "JSON-LD payloads were authored per page type and validated via Rich Results Test before deployment. Homepage carries Organization + WebSite schemas, service pages carry Service + BreadcrumbList, blog articles carry Article + FAQPage."
              },
              {
                title: "AEO & GEO Readiness",
                body: "Three signals weighted heavily by AI search surfaces: (1) explicit Q&A blocks marked up with FAQPage schema, (2) concise factual summaries at the top of each service page, (3) entity-consistent NAP and service taxonomy so that models resolve Yotvis as a single well-defined entity."
              },
              {
                title: "PageSpeed Optimization",
                body: "Largest gains from: (1) deferring non-critical JS via code-splitting and lazy-loading, (2) replacing render-blocking web fonts with system-font stack + font-display: swap, (3) serving all imagery through responsive srcset with lazy loading. Together: TBT from 220ms → 50ms, LCP from 5.1s → 2.8s."
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#7F7CFF] pl-6">
                <h3 className="text-lg font-clash font-medium text-black mb-2">{item.title}</h3>
                <p className="text-base font-nunito text-black/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results Table ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">04 · Results</p>
            <h2 className="text-3xl font-clash font-medium text-black">Before vs After</h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-black rounded-2xl p-6 flex flex-col gap-3">
                  <p className="text-xs font-nunito text-[#FFFFF2]/70 uppercase tracking-wider">{m.label}</p>
                  <div className="flex items-center gap-3">
                    {m.before !== "—" && (
                      <>
                        <span className="text-lg font-clash text-[#FFFFF2]/50 line-through">{m.before}</span>
                        <ArrowRight className="w-3 h-3 text-[#FFFFF2]/40 flex-shrink-0" />
                      </>
                    )}
                    <span className="text-2xl font-clash font-semibold text-[#FCFF7C]">{m.after}</span>
                  </div>
                  <span className="text-xs font-nunito text-[#FCFF7C]/60">{m.delta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">05 · Timeline</p>
            <h2 className="text-3xl font-clash font-medium text-black">Indexation in 72 Hours</h2>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.status === "done" ? "bg-[#FCFF7C]" : item.status === "start" ? "bg-black/20" : "bg-black"}`} />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-black/10 my-1" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-nunito text-black/40 mb-1">{item.date}</p>
                    <p className="text-sm font-nunito text-black/80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Gallery ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="mb-10">
          <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">06 · Proof</p>
          <h2 className="text-3xl font-clash font-medium text-black">Unedited Screenshots</h2>
          <p className="text-base font-nunito text-black/50 mt-2">All screenshots are source captures from Google Search Console and PageSpeed Insights. Click to expand.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofScreenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative bg-black/5 border border-black/10 rounded-2xl overflow-hidden hover:border-black/30 hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="aspect-video bg-black/10 overflow-hidden relative">
                <img
                  src={s.src}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-nunito font-semibold tracking-wider uppercase bg-black text-[#FCFF7C] px-2 py-0.5 rounded-full">
                  {s.tag}
                </span>
                <p className="text-xs font-nunito text-black/70 mt-2 leading-snug">{s.label}</p>
                <p className="text-[10px] font-nunito text-black/30 mt-1">{s.date}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-2xl">
                <span className="text-white text-sm font-nunito font-semibold">View Full</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Checklist ── */}
      <section className="w-full bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-white/30 mb-3">07 · Reproduce It</p>
              <h2 className="text-3xl font-clash font-medium text-white">The 10-Step Checklist</h2>
              <p className="text-sm font-nunito text-white/40 mt-4 leading-relaxed">
                Follow these steps on any new React + Vite deployment to reproduce this SEO baseline.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4">
              {checklist.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FCFF7C]/10 border border-[#FCFF7C]/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-clash font-semibold text-[#FCFF7C]">{i + 1}</span>
                  </div>
                  <p className="text-sm font-nunito text-white/60 leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <p className="text-xs font-nunito font-semibold tracking-widest uppercase text-black/30 mb-3">08 · Takeaways</p>
        <h2 className="text-3xl font-clash font-medium text-black mb-10">Key Findings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "A React + Vite SPA can pass Core Web Vitals on mobile if the build is configured for code-splitting, pre-rendered <head>, and lazy-loaded below-the-fold routes.",
            "Submitting sitemap.xml plus a manual indexing request on day one compresses first-index time from 1–2 weeks to roughly 3 days for a clean new domain.",
            "JSON-LD authored per page type (Organization, Service, Article, FAQPage) is the single highest-leverage action for AEO/GEO readiness.",
            "react-helmet-async with build-time pre-rendering is sufficient for SEO on an SPA without the operational cost of full SSR.",
            "Hitting SEO 100/100 is achievable on day one by enforcing canonical URLs, descriptive meta, alt text, and crawlable link text.",
            "TBT dropped 77% (220ms → 50ms) by deferring GTM load and adding ScrollTrigger.config({ ignoreMobileResize: true }).",
          ].map((point, i) => (
            <div key={i} className="flex gap-3 items-start bg-[#D3E4BF] rounded-2xl p-6 border border-black/5">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
              <p className="text-sm font-nunito text-black/70 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 border-t border-black/10">
        <div className="bg-black rounded-3xl p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-clash font-medium text-white mb-2">Want this for your website?</h2>
            <p className="text-base font-nunito text-white/50">We'll do the same — SEO 100, indexed fast, performance-optimized.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FCFF7C] text-black font-nunito font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FCFF7C]/90 transition-colors"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <div className="relative z-[3] w-full bg-[#FFFFF3] border-t border-black/5">
        <FaqSection
          title={<>Questions<br/>About This<br/>Project</>}
          subtitle="Detailed answers on how we optimized and indexed the Yotvis platform."
          faqsData={caseStudyFaqs}
          ctaText="Want to see results like this for your brand?"
          ctaLabel="Contact Us"
          onCtaClick={() => navigateTo("/contact")}
        />
      </div>

      {/* ── Back to Explore ── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-sm font-nunito text-black/40 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Explore
        </Link>
      </div>

      <FooterSection />

      {/* Lightbox */}
      <Lightbox
        screenshots={proofScreenshots}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImg}
        onNext={nextImg}
      />
    </main>
  );
}
