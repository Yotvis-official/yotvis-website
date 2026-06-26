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
      "name": "What are Core Web Vitals in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Core Web Vitals in 2026 are Google's official set of metrics for measuring real-world user experience on a website. They consist of Largest Contentful Paint (LCP) for loading speed, Interaction to Next Paint (INP) for interactivity, and Cumulative Layout Shift (CLS) for visual stability. Google uses these metrics as a confirmed ranking factor in search algorithms."
      }
    },
    {
      "@type": "Question",
      "name": "How does page speed affect SEO rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Page speed affects SEO rankings because Google's algorithm prioritizes fast-loading websites to ensure a positive user experience. According to Google's own data, as page load times increase from 1 second to 3 seconds, the probability of a bounce increases by 32%. Sites with poor Core Web Vitals are pushed down in search results in favor of faster competitors."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between FID and INP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The difference between FID (First Input Delay) and INP (Interaction to Next Paint) is that FID only measured the delay of the very first user interaction, while INP measures the responsiveness of all user interactions throughout the entire page lifecycle. Google replaced FID with INP in March 2024 because INP provides a much more accurate picture of a website's overall interactivity and user experience."
      }
    },
    {
      "@type": "Question",
      "name": "How does Yotvis optimize Core Web Vitals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yotvis optimizes Core Web Vitals by building custom websites using React and Vite, pre-rendering static HTML to ensure instant Time-To-First-Byte (TTFB), implementing lazy loading for all below-the-fold images, and writing semantic HTML to reduce JavaScript execution time. Our Chennai-based studio rigorously tests every site in Google PageSpeed Insights before launch."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good Largest Contentful Paint (LCP) score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A good Largest Contentful Paint (LCP) score is 2.5 seconds or less. To achieve this, websites must prioritize loading the largest visible element (usually a hero image or headline) immediately. LCP scores between 2.5 seconds and 4.0 seconds need improvement, and anything over 4.0 seconds is considered poor and will negatively impact SEO."
      }
    }
  ]
};

// Article Schema for GEO & SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Core Web Vitals Explained | Page Speed, SEO & Conversions",
  "description": "A slow page does not just frustrate users — it drops your Google ranking and kills conversions. Learn how LCP, INP, and CLS affect your site and exactly how to fix them.",
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
    "@id": "https://yotvis.com/explore/core-web-vitals-seo"
  }
};

export default function CoreWebVitalsArticle() {
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
        title="Core Web Vitals Explained | Page Speed, SEO & Conversions"
        description="A slow page does not just frustrate users — it drops your Google ranking and kills conversions. Learn how LCP, INP, and CLS affect your site and exactly how to fix them."
        canonical="https://yotvis.com/explore/core-web-vitals-seo"
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
          <span className="text-black/70">Core Web Vitals & SEO</span>
        </nav>

        <span className="inline-block text-xs font-nunito font-semibold tracking-widest uppercase text-[#7F7CFF] mb-6">
          Technical SEO
        </span>

        <h1 className="gsap-blog-text text-4xl md:text-6xl font-clash font-medium text-black mb-6 leading-tight">
          Core Web Vitals: How Page Speed Directly Impacts SEO and Conversions
        </h1>

        <p className="gsap-blog-text text-black/50 font-nunito mb-4 text-sm">
          Last updated: June 2026 · By Yotvis Studio · 15 min read
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Core Web Vitals", "Page Speed", "LCP", "INP", "React Vite"].map((tag) => (
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
              Core Web Vitals are Google’s official metrics for measuring real-world user experience, and they directly impact both SEO rankings and revenue conversions. In 2026, a slow website is not just an inconvenience; it is a mathematical penalty on your search visibility and your bottom line. Metrics like Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) evaluate how fast your site loads, how smoothly it responds to clicks, and how visually stable it is. For growing brands, passing Core Web Vitals requires abandoning bloated templates and adopting modern architectures like React, Vite, and pre-rendering.
            </p>
          </div>

          {/* ── SECTION 1 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            What Are Core Web Vitals in 2026?
          </h2>
          <p className="gsap-blog-text">
            Core Web Vitals in 2026 are a subset of Google's Web Vitals program, designed to provide unified guidance for quality signals that are essential to delivering a great user experience on the web. They focus on three specific aspects of the user journey: loading, interactivity, and visual stability. Google updates these metrics periodically, but the current focus remains on LCP, INP, and CLS.
          </p>
          <p className="gsap-blog-text">
            At Yotvis, we treat Core Web Vitals as the baseline for digital presence. A website cannot be considered "premium" if it fails these metrics. Based in Chennai, serving global clients, our development team rigorously audits every project against real-world Chrome User Experience Report (CrUX) data to ensure we are meeting Google's exact standards.
          </p>
          <p className="gsap-blog-text">The three core metrics are defined as:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Interaction to Next Paint (INP):</strong> Measures interactivity and responsiveness. To provide a good user experience, pages should have an INP of 200 milliseconds or less.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1 or less.</li>
          </ul>

          {/* ── SECTION 2 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Does Page Speed Impact SEO Rankings?
          </h2>
          <p className="gsap-blog-text">
            Page speed impacts SEO rankings because Google’s primary goal is to serve users the most relevant, frictionless results. If Google directs a user to a page that takes 8 seconds to load, the user has a bad experience and may blame Google. To protect its own product, Google uses Core Web Vitals as a confirmed ranking factor.
          </p>
          <p className="gsap-blog-text">
            According to a massive study by Backlinko analyzing 11.8 million Google search results, pages with strong Core Web Vitals consistently outrank those with poor scores. However, it is important to understand that Core Web Vitals act as a <strong>"tiebreaker"</strong>. If two pages have equally great content and backlinks, the faster page will win the top spot. But if your content is thin, speed alone cannot save you.
          </p>
          <p className="gsap-blog-text">
            Furthermore, page speed affects "Crawl Budget." Googlebot has a limited amount of time it will spend crawling your site. If your server is slow to respond, Googlebot will crawl fewer pages, meaning your new content won't be indexed as quickly.
          </p>

          {/* ── SECTION 3 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            What Is the Impact of Page Speed on Conversion Rates?
          </h2>
          <p className="gsap-blog-text">
            The impact of page speed on conversion rates is staggering. While SEO gets people to your site, speed is what keeps them there. In the competitive digital landscape of 2026, users have zero tolerance for delay.
          </p>
          <p className="gsap-blog-text">
            According to a landmark study by <strong>Deloitte Digital</strong>, improving mobile site speed by just 0.1 seconds increased retail conversion rates by 8.4% and travel conversion rates by 10.1%. Furthermore, a study by <strong>Portent</strong> showed that e-commerce sites that load in 1 second have a 2.5x higher conversion rate than sites that load in 5 seconds.
          </p>
          <p className="gsap-blog-text">Here is how slow speed destroys conversions:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Increased Bounce Rate:</strong> Google found that as page load times go from 1 second to 3 seconds, the probability of a bounce increases by 32%. At 5 seconds, it increases by 90%.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Cart Abandonment:</strong> If a checkout page lags or buttons take too long to respond (poor INP), users lose trust and abandon their carts.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Lowered Lifetime Value:</strong> Fast sites encourage browsing. Slow sites force users to leave before discovering additional products or services.</li>
          </ol>
          <p className="gsap-blog-text">
            For startups in India, where mobile data speeds can fluctuate, a highly optimized site ensures you capture every possible lead, regardless of the user's network conditions.
          </p>

          {/* ── SECTION 4 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            Why Did Google Replace FID with INP?
          </h2>
          <p className="gsap-blog-text">
            Google replaced FID (First Input Delay) with INP (Interaction to Next Paint) in March 2024 because FID was fundamentally flawed. FID only measured the delay of the <em>very first</em> user interaction on a page. It didn't measure how long it took for the page to actually update after that interaction, nor did it measure any subsequent clicks.
          </p>
          <p className="gsap-blog-text">
            INP is a much stricter and more accurate metric. It measures the time it takes for the screen to visually update after a user clicks a button, types in a form, or taps a menu—and it measures the <em>worst</em> interaction during the entire page lifecycle.
          </p>
          <p className="gsap-blog-text">
            This change devastated websites built with heavy JavaScript frameworks and bloated WordPress themes. If a site has a lot of JavaScript executing in the background, the "Main Thread" gets blocked. When the main thread is blocked, it cannot process user clicks, resulting in a terrible INP score.
          </p>
          <p className="gsap-blog-text">To pass INP, developers must:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Break up Long Tasks:</strong> Slice heavy JavaScript functions into smaller chunks so the browser can handle user inputs between them.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Defer Non-Critical JS:</strong> Delay loading of analytics scripts, chat widgets, and ads until after the main page is interactive.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Use Native CSS:</strong> Instead of using JavaScript for animations (like dropdown menus), use native CSS transitions, which run on a separate compositor thread and never block the main thread.</li>
          </ul>

          {/* ── SECTION 5 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Do React and Vite Architecture Solve Core Web Vitals?
          </h2>
          <p className="gsap-blog-text">
            React and Vite architecture solves Core Web Vitals by eliminating the bloat that plagues legacy websites. Traditional content management systems and page builders inject massive amounts of inline CSS, unused JavaScript, and render-blocking resources. React and Vite allow developers to build exactly what is needed—nothing more.
          </p>
          <p className="gsap-blog-text">
            At Yotvis, we use React to build component-based UIs. React's Virtual DOM ensures that when a user interacts with the site, only the specific component updates, rather than reloading the whole page. This naturally keeps INP scores incredibly low because the browser isn't doing heavy lifting on every click.
          </p>
          <p className="gsap-blog-text">
            Vite handles the build process. It automatically "tree-shakes" the code, meaning it strips out any JavaScript that isn't being used on the current page. It also code-splits the bundle, so a user visiting the "About" page doesn't download the code for the "Contact" page.
          </p>
          <p className="gsap-blog-text">
            Most importantly, to achieve a flawless LCP and perfect SEO, Yotvis pairs React and Vite with <strong>Pre-rendering</strong>. During the build process, we generate static HTML files for every route. When a user or Googlebot requests the page, the server instantly returns fully formed HTML. There is no waiting for JavaScript to execute before the text and images appear. This guarantees a sub-second LCP and a perfect Technical SEO foundation.
          </p>

          {/* ── SECTION 6 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            What Are the Best Tools to Measure Core Web Vitals?
          </h2>
          <p className="gsap-blog-text">
            The best tools to measure Core Web Vitals are those that provide both lab data (simulated tests) and field data (real-world user data). At Yotvis, we use a combination of tools during our <strong>Understand</strong> phase to audit a client's existing digital presence.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Google PageSpeed Insights (PSI):</strong> The gold standard. It provides both Lab Data (how Lighthouse simulates the page) and Field Data (how real Chrome users experienced the page over the last 28 days).</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Google Search Console (GSC):</strong> The Core Web Vitals report in GSC shows you exactly which URLs are failing and whether the issue is LCP, INP, or CLS across your entire domain.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Chrome DevTools (Performance Tab):</strong> For deep debugging. If a page has a poor INP, we use the Performance tab to record a trace and find the exact JavaScript function blocking the main thread.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Web Vitals Chrome Extension:</strong> A lightweight extension that injects a widget into your browser, showing real-time LCP, INP, and CLS scores as you click around your site.</li>
          </ol>

          {/* ── SECTION 7 ── */}
          <h2 className="gsap-blog-text text-3xl font-clash font-medium text-black pt-6">
            How Does Yotvis Guarantee Flawless Core Web Vitals for Clients?
          </h2>
          <p className="gsap-blog-text">
            Yotvis guarantees flawless Core Web Vitals by making performance a core pillar of our 4-step framework: Understand, Plan, Build, and Launch. We do not treat speed as an afterthought; it is baked into the architecture from day one.
          </p>
          <p className="gsap-blog-text">Our performance workflow includes:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="gsap-blog-text gsap-blog-text"><strong>Image Optimization:</strong> We automatically compress all images to WebP/AVIF formats and implement native lazy-loading so images only download when the user scrolls to them.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Font Preloading:</strong> We preload critical web fonts to prevent the "Flash of Invisible Text" (FOIT) which ruins LCP.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Global CDN Deployment:</strong> We deploy your static React/Vite files to a Global Content Delivery Network (like Vercel), ensuring your site loads instantly whether a user is in Chennai, New York, or London.</li>
            <li className="gsap-blog-text gsap-blog-text"><strong>Strict CLS Prevention:</strong> We hardcode width and height dimensions on all images and videos, ensuring the layout never shifts as assets load.</li>
          </ul>
          <p className="gsap-blog-text">
            If you are ready to stop losing SEO traffic and customers to a slow website, Yotvis is ready to help. <Link to="/services/web-development" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">Explore our web development services</Link> or <Link to="/contact" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">contact our team</Link> to start the conversation.
          </p>

          </div>
      </article>

      <FaqSection 
        title={<>Web Speed<br />Questions<br />Answered</>} 
        subtitle={"Understanding page speed metrics, Core Web Vitals, and search ranking signals."} 
        faqsData={blogFaqs} 
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pb-32">
        {/* ── CTA BLOCK ── */}
          <div className="mt-16 bg-black text-[#FFFFF3] rounded-2xl p-10 text-center">
            <p className="gsap-blog-text text-xs font-nunito font-semibold tracking-widest uppercase text-[#FCFF7C] mb-3">
              Yotvis Web Development
            </p>
            <h3 className="text-3xl font-clash font-medium mb-4">
              Is Your Website Losing Traffic Due to Slow Speed?
            </h3>
            <p className="gsap-blog-text font-nunito text-white/70 mb-8 max-w-lg mx-auto">
              Stop letting bloated code ruin your SEO and conversions. Yotvis builds blazing-fast React and Vite websites that score 100/100 on Core Web Vitals for growing brands globally.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FCFF7C] text-black font-nunito font-semibold px-8 py-4 rounded-full hover:bg-[#eef070] transition-colors"
            >
              Audit My Website Speed →
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
