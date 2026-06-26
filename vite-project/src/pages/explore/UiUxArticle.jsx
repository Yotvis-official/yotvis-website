import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
      "name": "What is the difference between UI and UX design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The difference between UI and UX design is that UI (User Interface) focuses on the visual and interactive elements of a website, such as colors, typography, and buttons. UX (User Experience) focuses on the overall flow, functionality, and logic of the site. UI is how it looks; UX is how it works."
      }
    },
    {
      "@type": "Question",
      "name": "How does UI/UX design impact website conversion rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UI/UX design impacts website conversion rates by reducing friction in the user journey. According to Forrester Research, a well-designed user interface can increase conversion rates by up to 200%, while a seamless UX can increase them by up to 400%. Clear visual hierarchy and intuitive navigation guide users directly to the call-to-action."
      }
    },
    {
      "@type": "Question",
      "name": "What is cognitive load in UI/UX design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cognitive load in UI/UX design refers to the amount of mental effort required to use a website. High cognitive load occurs when a page is cluttered, navigation is confusing, or too many choices are presented. Reducing cognitive load through minimalist design and clear hierarchy directly improves user retention and conversions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Yotvis provide UI/UX design services in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Yotvis provides premium UI/UX design services in Chennai, India. We help local startups and global brands architect intuitive, high-converting digital experiences using our 4-step framework: Understand, Plan, Build, and Launch."
      }
    },
    {
      "@type": "Question",
      "name": "Why is visual hierarchy important in web design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visual hierarchy is important in web design because it dictates the order in which the human eye perceives information. By using size, color, and spacing effectively, designers can guide users to the most important elements first, such as the value proposition and the call-to-action, thereby increasing the likelihood of conversion."
      }
    }
  ]
};

// Article Schema for GEO & SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "UI/UX Design Principles | What Separates High-Converting Sites",
  "description": "Most websites look fine but convert poorly. Learn the UI/UX principles behind visual hierarchy, user flows, cognitive load, and interface design that actually turns visitors into leads.",
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
    "@id": "https://yotvis.com/explore/ui-ux-design-principles"
  }
};

export default function UiUxArticle() {
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
        title="UI/UX Design Principles | What Separates High-Converting Sites"
        description="Most websites look fine but convert poorly. Learn the UI/UX principles behind visual hierarchy, user flows, cognitive load, and interface design that actually turns visitors into leads."
        canonical="https://yotvis.com/explore/ui-ux-design-principles"
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
          <span className="text-black/70">UI/UX Design Principles</span>
        </nav>

        <span className="inline-block text-xs font-nunito font-semibold tracking-widest uppercase text-[#7F7CFF] mb-6">
          UI/UX Design
        </span>

        <h1 className="gsap-blog-text text-4xl md:text-6xl font-clash font-medium text-black mb-6 leading-tight">
          UI/UX Design Principles for High-Converting Websites
        </h1>

        <p className="gsap-blog-text text-black/50 font-nunito mb-4 text-sm">
          Last updated: June 2026 · By Yotvis Studio · 12 min read
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {["UI/UX", "Web Design", "Conversion Rate", "Cognitive Load", "Chennai Startups"].map((tag) => (
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
              UI/UX design is the single most critical factor in converting website traffic into paying customers. While templates provide a quick layout, applying core UI/UX principles—such as reducing cognitive load, establishing strict visual hierarchy, and mapping frictionless user flows—is what actually drives action. For growing brands in 2026, treating UI/UX as an afterthought is equivalent to burning your marketing budget. A well-architected interface can increase conversion rates by up to 200%, making design not just an aesthetic choice, but a fundamental business strategy.
            </p>
          </div>

          {/* ── SECTION 1 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            What Is the Difference Between UI and UX Design?
          </h2>
          <p className="gsap-blog-text">
            The difference between UI and UX design is that UI (User Interface) dictates how a digital product looks, while UX (User Experience) dictates how it works. UI design focuses on the visual elements—colors, typography, button shapes, and spacing. UX design focuses on the logic and flow—how a user navigates from the homepage to the checkout page without getting confused or frustrated.
          </p>
          <p className="gsap-blog-text">
            At Yotvis, we often explain it like this: If a website is a house, UX is the architectural blueprint ensuring the rooms connect logically and the plumbing works. UI is the interior design—the paint on the walls, the style of the furniture, and the lighting. A beautiful house with a terrible floorplan is unusable; a great floorplan with hideous design is unappealing. You need both to create a premium digital presence.
          </p>
          <p className="gsap-blog-text">
            According to Forrester Research, <strong>a seamless UX design can yield conversion rates of up to 400%.</strong> This is because users don't have to think about how to use the site; they just intuitively find what they need and convert.
          </p>

          {/* ── SECTION 2 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Does Cognitive Load Affect Website Conversions?
          </h2>
          <p className="gsap-blog-text">
            Cognitive load affects website conversions by directly impacting a user's ability to make decisions. In cognitive psychology, "cognitive load" refers to the amount of mental effort being used in the working memory. When a website presents too much information, too many options, or a cluttered layout, the cognitive load spikes. The user's brain becomes overwhelmed, leading to decision paralysis and, ultimately, a bounce.
          </p>
          <p className="gsap-blog-text">
            Known as Hick's Law, the time it takes to make a decision increases with the number and complexity of choices. Growing brands often try to cram every feature, testimonial, and pricing tier onto a single page, mistakenly believing that more information equals more value. In reality, more information equals less conversion.
          </p>
          <p className="gsap-blog-text">To reduce cognitive load and increase conversions, Yotvis implements the following strategies:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Progressive Disclosure:</strong> Only show the information necessary for the immediate task. Hide secondary options behind accordions or secondary pages.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Whitespace Utilization:</strong> Empty space isn't wasted space. Generous whitespace around text and buttons reduces visual clutter and directs the eye to what matters.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Familiar Patterns:</strong> Don't reinvent the wheel. Place the logo top-left, the contact button top-right, and the hero text center. Users scan sites in an F-shaped pattern; design accordingly.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Chunking Information:</strong> Break long paragraphs into bulleted lists. Group related items together visually using cards or background shading.</li>
          </ul>

          {/* ── SECTION 3 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            What Role Does Visual Hierarchy Play in Guiding Users?
          </h2>
          <p className="gsap-blog-text">
            Visual hierarchy plays the role of a silent tour guide, showing users exactly where to look, in what order, and what action to take next. It is the deliberate arrangement of elements (size, color, contrast, alignment) to indicate importance. Without visual hierarchy, a webpage is just a flat wall of competing text and images.
          </p>
          <p className="gsap-blog-text">
            When a user lands on your site, you have roughly 3 seconds to communicate your value proposition. If the most prominent element on the page is a stock photo or a secondary link, you have failed. The visual hierarchy must lead the eye in a Z-pattern or F-pattern directly to the H1 headline, the supporting subtext, and finally, the Call to Action (CTA).
          </p>
          <p className="gsap-blog-text">The core pillars of establishing visual hierarchy include:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Scale and Size:</strong> Larger elements demand attention first. Your H1 should be significantly larger than your body text. Your primary CTA button should be larger than secondary navigation links.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Color and Contrast:</strong> A high-contrast color for your CTA (like Yotvis's signature Lime Yellow on a Black background) draws the eye instantly. Low contrast is used for background elements to push them back.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Typography Weight:</strong> Bold fonts carry more visual weight than regular fonts. Use bolding sparingly to highlight key verbs or value propositions within a sentence.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Spacing (Proximity):</strong> Elements placed close together are perceived as related. Space between sections creates clear mental boundaries for the user.</li>
          </ol>

          {/* ── SECTION 4 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            Why Is Mobile-First Design Non-Negotiable for Growing Brands?
          </h2>
          <p className="gsap-blog-text">
            Mobile-first design is non-negotiable for growing brands because over 60% of global web traffic now comes from mobile devices. Designing a complex desktop layout and trying to "shrink" it down to a mobile screen results in a clunky, zoom-heavy, and frustrating user experience. Mobile-first means designing the mobile layout with the absolute core features first, then expanding the layout for larger screens.
          </p>
          <p className="gsap-blog-text">
            Google uses mobile-first indexing, meaning it predominantly uses the mobile version of the content for indexing and ranking. If your mobile UX is broken, your desktop site's rankings will plummet. For startups in competitive tech hubs like Chennai and Bengaluru, where mobile penetration is near-universal, ignoring mobile UX is business suicide.
          </p>
          <p className="gsap-blog-text">At Yotvis, our mobile-first UI/UX checklist includes:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Touch Target Sizing:</strong> All buttons and links must be at least 44x44 pixels to prevent accidental taps.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Sticky Navigation:</strong> A persistent, simplified navigation bar ensures users can access the menu without scrolling back to the top.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Thumb Zone Optimization:</strong> Critical CTAs are placed in the lower third of the screen, easily reachable by a user's thumb while holding the phone.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Form Simplification:</strong> Mobile forms are stripped to the bare minimum. We use native input types (email, numeric) to trigger the correct mobile keyboards.</li>
          </ul>

          {/* ── SECTION 5 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Does Yotvis Approach UI/UX Design for Startups?
          </h2>
          <p className="gsap-blog-text">
            Yotvis approaches UI/UX design for startups through a rigorous, 4-step framework designed to eliminate guesswork and maximize conversion. We don't rely on aesthetics alone; we use data-driven design principles to map user psychology to business goals.
          </p>
          <p className="gsap-blog-text">Our process ensures that every pixel serves a strategic purpose:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Understand (Research):</strong> We analyze your target audience, their pain points, and their digital behavior. We review competitor flows to identify industry standards and gaps to exploit.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Plan (Wireframing):</strong> We build low-fidelity wireframes to map the user flow and content hierarchy. We ensure the logic is sound before applying a single drop of color. This prevents costly redesigns later.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Build (High-Fidelity Design):</strong> Our designers create interactive, high-fidelity prototypes in Figma. We apply strict visual hierarchy, brand colors, and typography systems. We test these prototypes for cognitive load and friction points.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Launch (Handoff & Testing):</strong> We hand off the design system to our React developers with pixel-perfect specs, ensuring the final coded website matches the high-converting UX exactly. Post-launch, we monitor user behavior to iterate and optimize.</li>
          </ol>
          <p className="gsap-blog-text">
            By following this structured path, Yotvis delivers interfaces that don't just look premium—they perform premium. They guide users intuitively, reduce bounce rates, and drive measurable business growth.
          </p>

          </div>
      </article>

      <FaqSection 
        title={<>UI/UX Design<br />Questions<br />Answered</>} 
        subtitle={"Understanding design principles, user behavior, and high-converting visual flows."} 
        faqsData={blogFaqs} 
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pb-32">
        {/* ── CTA BLOCK ── */}
          <div className="mt-16 bg-black text-[#FFFFF3] rounded-2xl p-10 text-center">
            <p className="gsap-blog-text text-xs font-nunito font-semibold tracking-widest uppercase text-[#FCFF7C] mb-3">
              Yotvis UI/UX Design
            </p>
            <h3 className="text-3xl font-clash font-medium mb-4">
              Ready to Design a High-Converting Website?
            </h3>
            <p className="gsap-blog-text font-nunito text-white/70 mb-8 max-w-lg mx-auto">
              Stop losing customers to bad design. Yotvis helps growing brands in Chennai and globally architect intuitive, premium UI/UX systems that drive action.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FCFF7C] text-black font-nunito font-semibold px-8 py-4 rounded-full hover:bg-[#eef070] transition-colors"
            >
              Start Your Design Project →
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
