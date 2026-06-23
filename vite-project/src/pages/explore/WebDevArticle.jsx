import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import { Link } from "react-router-dom";

// FAQ Schema for AEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is custom web development better than website templates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom web development is better than website templates for growing businesses because it offers unmatched scalability, security, and brand differentiation. While templates are cheaper and faster to launch, they restrict functionality and often include bloated code that slows down page speed, negatively impacting SEO and user experience."
      }
    },
    {
      "@type": "Question",
      "name": "How much does custom web development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of custom web development depends on the scope, complexity, and specific features required. While a template-based site might cost a few hundred dollars annually, a custom React-based website built by a premium studio like Yotvis is an investment ranging from thousands to tens of thousands, designed to scale with your business and deliver measurable ROI through higher conversion rates."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I choose React and Vite for my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should choose React and Vite for your website because they offer lightning-fast page loads, a highly interactive user experience, and scalable architecture. Vite's modern build tooling drastically improves Core Web Vitals scores, which is a confirmed Google ranking factor."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a custom website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Building a custom website typically takes 6 to 12 weeks, depending on the number of pages, custom UI/UX design requirements, and backend integrations. At Yotvis, our 4-step process—Understand, Plan, Build, Launch—ensures structured timelines and on-time delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Does Yotvis offer web development services in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Yotvis offers premium custom web development services in Chennai, India. We help local startups and growing brands build scalable, high-performance digital platforms using modern tech stacks like React and Vite."
      }
    }
  ]
};

// Article Schema for GEO & SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Custom Web Development vs. Website Templates: Which Is Right for Growing Brands?",
  "description": "A complete guide comparing custom web development to website templates. Learn why growing brands choose custom React architecture for scalability, speed, and SEO.",
  "author": {
    "@type": "Organization",
    "name": "Yotvis",
    "url": "https://yotvis.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Yotvis",
    "url": "https://yotvis.com"
  },
  "datePublished": "2026-06-22",
  "dateModified": "2026-06-22",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yotvis.com/explore/custom-web-dev-vs-templates"
  }
};

export default function WebDevArticle() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate background elements
      gsap.fromTo(".gsap-blog-bg", 
        { scaleX: 0, transformOrigin: "left center" }, 
        { scaleX: 1, duration: 1.2, ease: "power4.inOut" }
      );
      // Animate text elements
      gsap.fromTo(".gsap-blog-text", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out", delay: 0.4 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);
  const blogFaqs = faqSchema.mainEntity.map((item, idx) => ({
    id: String(idx + 1).padStart(2, "0"),
    question: item.name,
    answer: item.acceptedAnswer.text
  }));

  return (
    <main className="w-full min-h-screen bg-[#FFFFF3]" ref={containerRef}>
      <SEO
        title="Custom Web Development vs. Website Templates | Yotvis"
        description="A complete guide comparing custom web development to website templates. Learn why growing brands choose custom React architecture for scalability, speed, and SEO."
        canonical="https://yotvis.com/explore/custom-web-dev-vs-templates"
      />

      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-32">

        {/* Breadcrumb */}
        <nav className="text-sm font-nunito text-black/40 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/explore" className="hover:text-black transition-colors">Explore</Link>
          <span className="mx-2">/</span>
          <span className="text-black/70">Custom Web Dev vs. Templates</span>
        </nav>

        {/* Category Tag */}
        <span className="inline-block text-xs font-nunito font-semibold tracking-widest uppercase text-[#7F7CFF] mb-6">
          Web Development
        </span>

        <h1 className="gsap-blog-text text-4xl md:text-6xl font-clash font-medium text-black mb-6 leading-tight">
          Custom Web Development vs. Website Templates: Which Is Right for Growing Brands?
        </h1>

        <p className="gsap-blog-text text-black/50 font-nunito mb-4 text-sm">
          Last updated: June 2026 · By Yotvis Studio · 10 min read
        </p>

        {/* Topic tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Web Development", "React", "Vite", "UI/UX", "Chennai Startups"].map((tag) => (
            <span key={tag} className="text-xs font-nunito px-3 py-1 border border-black/20 rounded-full text-black/60">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-lg md:text-xl text-black/80 font-nunito space-y-8 leading-relaxed">

          {/* ── BLUF ── */}
          <div className="gsap-blog-bg border-l-4 border-[#7F7CFF] pl-6 py-2 bg-[#7F7CFF]/5 rounded-r-lg">
            <p className="gsap-blog-text font-semibold text-black">Bottom line up front:</p>
            <p className="gsap-blog-text mt-2">
              Custom web development is the superior choice for growing brands because it provides unmatched scalability, brand differentiation, and performance optimization. While website templates (like Wix or WordPress themes) offer a fast, cheap launch, they restrict functionality, introduce bloated code that hurts SEO, and force your business to adapt to the template's limitations. For startups in competitive markets like Chennai aiming for high conversion rates and long-term digital growth, a custom-built website using modern tech stacks like React and Vite is the definitive strategic investment.
            </p>
          </div>

          {/* ── SECTION 1 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            What Are the Core Differences Between Custom Web Development and Templates?
          </h2>
          <p className="gsap-blog-text">
            The core difference between custom web development and templates lies in ownership and flexibility. A website template is a pre-designed, pre-coded shell where your content is poured into a fixed structure. Custom web development is the process of designing and coding a website entirely from scratch, tailored precisely to your business logic, brand identity, and user experience goals.
          </p>
          <p className="gsap-blog-text">
            At Yotvis, our Chennai-based digital studio frequently encounters founders who initially tried a template and hit a hard ceiling. They wanted a specific user flow, a custom integration with their CRM, or a unique interactive element, only to find the template couldn't support it without messy, brittle workarounds. Custom development removes that ceiling entirely.
          </p>
          <p className="gsap-blog-text">The fundamental distinctions break down into three areas:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Code Ownership:</strong> Templates are licensed; you don’t own the underlying code. Custom sites are your proprietary intellectual property.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Performance:</strong> Templates load excess "bloat code" to support features you might not even use. Custom sites only contain the code necessary for your specific features.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Scalability:</strong> Templates force you to fit your growing business into a static box. Custom architecture scales alongside your operational needs.</li>
          </ul>

          {/* ── SECTION 2 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Does Page Speed and SEO Impact Your Choice?
          </h2>
          <p className="gsap-blog-text">
            Page speed and SEO heavily favor custom web development over templates. In 2026, Google's Core Web Vitals are not just suggestions—they are confirmed ranking factors. A fast website directly correlates with higher search rankings and better conversion rates. 
          </p>
          <p className="gsap-blog-text">
            According to a 2023 study by Portent, <strong>e-commerce sites that load in 1 second have a conversion rate of 2.5 times higher than sites that load in 5 seconds.</strong> Furthermore, Google’s own research indicates that as page load times go from 1 second to 3 seconds, the probability of a bounce increases by 32%. 
          </p>
          <p className="gsap-blog-text">
            Website templates are notoriously slow. They come packed with unnecessary plugins, inline styles, and rigid frameworks that block the browser's rendering path. Custom web development allows studios like Yotvis to use modern build tools—like <strong>Vite</strong>—which pre-bundles code and serves static HTML files instantly to the browser. This guarantees lightning-fast Time-To-First-Byte (TTFB) and flawless Core Web Vitals scores, giving your brand an immediate competitive edge in search engines.
          </p>

          {/* ── SECTION 3 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            Why Are React and Vite the Premium Choice for Growing Brands?
          </h2>
          <p className="gsap-blog-text">
            React and Vite are the premium choice for growing brands because they solve the two biggest problems in modern web development: user experience and developer experience. React allows developers to build highly interactive, Single Page Applications (SPAs) that feel instantaneous to the user, while Vite provides the build architecture that makes those applications load instantly.
          </p>
          <p className="gsap-blog-text">
            When Yotvis builds a custom platform, we don't use legacy code. We architect systems using React for its component-based structure, allowing us to reuse UI elements efficiently and scale features without rewriting the entire codebase. Vite acts as the engine, compiling that React code into highly optimized, static HTML and JavaScript files that browsers can parse in milliseconds.
          </p>
          <p className="gsap-blog-text">The benefits of this stack for a growing brand include:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Instant Navigation:</strong> React's client-side routing means clicking between pages doesn't trigger a full browser reload, creating an app-like experience.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Future-Proofing:</strong> React has the largest ecosystem in the world. If you want to add a complex dashboard, AI chatbot, or mobile app later, the foundation is already there.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Technical SEO:</strong> When paired with pre-rendering tools, React sites deliver fully formed HTML to search engine crawlers, ensuring 100% indexability.</li>
          </ul>

          {/* ── SECTION 4 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            When Does a Website Template Actually Make Sense?
          </h2>
          <p className="gsap-blog-text">
            A website template makes sense only in very specific, early-stage scenarios. If you are a solopreneur testing an unvalidated idea, a local restaurant that just needs a menu and phone number online, or a hobby project with zero budget, a template is a perfectly valid starting point. They allow you to establish a web presence in a weekend for less than $100.
          </p>
          <p className="gsap-blog-text">
            However, the moment your business transitions from "existing" to "growing," the template becomes a liability. The moment you need to scale your traffic, integrate custom software, or differentiate your brand visually from competitors, the template will fight you at every step. The money saved on the template will be burned paying developers to hack around its limitations.
          </p>
          <p className="gsap-blog-text">
            We often see this in the Chennai startup ecosystem: a founder launches on a cheap WordPress theme, gains traction, and then tries to scale their digital marketing. They discover their site is too slow for Google Ads, the mobile experience is broken, and adding a custom lead-capture flow requires a complete rebuild. Starting custom from day one avoids this expensive migration.
          </p>

          {/* ── SECTION 5 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Does Yotvis Approach Custom Web Development?
          </h2>
          <p className="gsap-blog-text">
            Yotvis approaches custom web development through a rigorous, 4-step framework designed to eliminate risk and ensure the final product aligns perfectly with your business goals. We don't just write code; we architect digital presence.
          </p>
          <p className="gsap-blog-text">Our process ensures that every line of code serves a strategic purpose:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Understand:</strong> We map your business model, audience intent, and technical requirements. We identify the exact features needed to drive conversions, avoiding unnecessary scope creep.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Plan:</strong> We architect the UI/UX design and technical stack. This is where we decide how React, Vite, and cloud infrastructure will work together to achieve your performance goals.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Build:</strong> Our developers write clean, semantic, component-based code. We implement strict Core Web Vitals standards, ensuring the site is blazing fast on mobile and desktop.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Launch:</strong> We deploy to scalable cloud infrastructure, submit XML sitemaps to Google Search Console, and monitor the first 30 days for performance and security.</li>
          </ol>
          <p className="gsap-blog-text">
            By following this structured path, Yotvis delivers websites that don't just look premium—they perform premium. They load in milliseconds, rank higher due to flawless technical SEO, and provide a foundation that scales infinitely with your business.
          </p>

          </div>
      </article>

      <FaqSection 
        title={<>Web Dev<br />Questions<br />Answered</>} 
        subtitle={"Understanding custom development, template trade-offs, and speed optimization."} 
        faqsData={blogFaqs} 
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pb-32">
        {/* ── CTA BLOCK ── */}
          <div className="mt-16 bg-black text-[#FFFFF3] rounded-2xl p-10 text-center">
            <p className="gsap-blog-text text-xs font-nunito font-semibold tracking-widest uppercase text-[#FCFF7C] mb-3">
              Yotvis Web Development
            </p>
            <h3 className="text-3xl font-clash font-medium mb-4">
              Ready to Build a Website That Scales?
            </h3>
            <p className="gsap-blog-text font-nunito text-white/70 mb-8 max-w-lg mx-auto">
              Stop fighting template limitations. Yotvis builds premium, high-performance websites using React and Vite for growing brands in Chennai and globally.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FCFF7C] text-black font-nunito font-semibold px-8 py-4 rounded-full hover:bg-[#eef070] transition-colors"
            >
              Start Your Project →
            </Link>
          </div>

          {/* ── AUTHOR BIO ── */}
          <div className="mt-12 flex items-start gap-4 pt-8 border-t border-black/10">
            <div className="w-12 h-12 rounded-full bg-[#7F7CFF]/20 flex-shrink-0 flex items-center justify-center text-[#7F7CFF] font-clash font-medium text-lg">
              Y
            </div>
            <div>
              <p className="gsap-blog-text font-clash font-medium text-black">Yotvis Studio</p>
              <p className="gsap-blog-text text-sm font-nunito text-black/60 mt-1">
                Yotvis is a Chennai-based digital innovation studio specializing in web development, branding, UI/UX design, and AI automation for growing businesses. We help founders turn ideas into scalable digital presence.
              </p>
              <Link to="/about" className="text-sm text-[#7F7CFF] font-nunito font-medium hover:underline mt-2 inline-block">
                About Yotvis →
              </Link>
            </div>
          </div>
      </div>

      <FooterSection />
    </main>
  );
}
