import { useState } from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Zap, Clock } from "lucide-react";
import { usePageTransition } from "@/App";

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Yotvis Digital Insight Hub",
  "description": "A curated library of premium articles on web development, UI/UX design, AI automation, and digital strategy for growing brands.",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "The Ultimate Guide to Building a Digital Presence in 2026", "url": "https://yotvis.com/explore/building-digital-presence-2026" },
    { "@type": "ListItem", "position": 2, "name": "Branding for Tech Startups: How to Build Trust and Authority", "url": "https://yotvis.com/explore/branding-for-tech-startups" },
    { "@type": "ListItem", "position": 3, "name": "Scalable Cloud Solutions: Architecting Startups for Global Growth", "url": "https://yotvis.com/explore/cloud-solutions-for-startups" },
    { "@type": "ListItem", "position": 4, "name": "Native vs. Cross-Platform App Development", "url": "https://yotvis.com/explore/native-vs-cross-platform-apps" },
    { "@type": "ListItem", "position": 5, "name": "Core Web Vitals: How Page Speed Directly Impacts SEO", "url": "https://yotvis.com/explore/core-web-vitals-seo" },
    { "@type": "ListItem", "position": 6, "name": "React and Vite: The Premium Tech Stack for Startups", "url": "https://yotvis.com/explore/react-and-vite-tech-stack" },
    { "@type": "ListItem", "position": 7, "name": "How AI Automation Helps Growing Businesses Save Time", "url": "https://yotvis.com/explore/ai-automation-for-business" },
    { "@type": "ListItem", "position": 8, "name": "UI/UX Design Principles for High-Converting Websites", "url": "https://yotvis.com/explore/ui-ux-design-principles" },
    { "@type": "ListItem", "position": 9, "name": "Custom Web Development vs. Website Templates", "url": "https://yotvis.com/explore/custom-web-dev-vs-templates" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Yotvis Explore hub?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Yotvis Explore hub is our digital insight library where we publish in-depth masterclass articles on web development, UI/UX design, AI automation, and digital strategy. It is designed to help startups and growing brands build a scalable digital presence."
      }
    },
    {
      "@type": "Question",
      "name": "Does Yotvis write about AI automation and React development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Yotvis writes extensively about AI automation and React development. Our Explore hub features detailed guides on how businesses can use AI workflows to save time, and why modern tech stacks like React and Vite are the premium choice for startup web development."
      }
    },
    {
      "@type": "Question",
      "name": "How often does Yotvis publish new articles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We publish new in-depth articles consistently, targeting the technical and strategic questions that founders and growing brands actually search for. Each article is written to a masterclass standard — not a quick 500-word summary, but a complete guide with real examples, implementation details, and actionable frameworks. Quality over velocity."
      }
    },
    {
      "@type": "Question",
      "name": "Are the articles on Yotvis Explore free to read?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all articles in the Yotvis Explore hub are completely free. We publish them because educating our audience on web development, branding, and AI automation builds the trust that eventually converts a reader into a client. No paywalls, no email gates — just the content."
      }
    },
    {
      "@type": "Question",
      "name": "Can I hire Yotvis to implement what I read in the articles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Every article in the Explore hub reflects something we have built or optimized for a real project. If you read an article on Core Web Vitals and want us to run the same audit and optimization on your site, or if you read our branding guide and want us to build your visual identity — that is exactly what we do. Use the Book a Call button to start a conversation."
      }
    }
  ]
};

const exploreFaqs = [
  {
    id: "01",
    question: "What is the Yotvis Explore hub?",
    answer: "The Yotvis Explore hub is our digital insight library where we publish in-depth masterclass articles on web development, UI/UX design, AI automation, and digital strategy. It is designed to help startups and growing brands build a scalable digital presence."
  },
  {
    id: "02",
    question: "Does Yotvis write about AI automation and React development?",
    answer: "Yes, Yotvis writes extensively about AI automation and React development. Our Explore hub features detailed guides on how businesses can use AI workflows to save time, and why modern tech stacks like React and Vite are the premium choice for startup web development."
  },
  {
    id: "03",
    question: "How often does Yotvis publish new articles?",
    answer: "We publish new in-depth articles consistently, targeting the technical and strategic questions that founders and growing brands actually search for. Each article is written to a masterclass standard — not a quick 500-word summary, but a complete guide with real examples, implementation details, and actionable frameworks. Quality over velocity."
  },
  {
    id: "04",
    question: "Are the articles on Yotvis Explore free to read?",
    answer: "Yes, all articles in the Yotvis Explore hub are completely free. We publish them because educating our audience on web development, branding, and AI automation builds the trust that eventually converts a reader into a client. No paywalls, no email gates — just the content."
  },
  {
    id: "05",
    question: "Can I hire Yotvis to implement what I read in the articles?",
    answer: "Absolutely. Every article in the Explore hub reflects something we have built or optimized for a real project. If you read an article on Core Web Vitals and want us to run the same audit and optimization on your site, or if you read our branding guide and want us to build your visual identity — that is exactly what we do. Use the Book a Call button to start a conversation."
  }
];

const articles = [
  {
    title: "The Ultimate Guide to Building a Digital Presence in 2026",
    description: "A masterclass on building a scalable digital presence in 2026. Covering branding, UI/UX, React web development, cloud infrastructure, and AI automation.",
    category: "Digital Strategy",
    date: "June 2026",
    readTime: "15 min read",
    slug: "/explore/building-digital-presence-2026"
  },
  {
    title: "Branding for Tech Startups: How to Build Trust and Authority",
    description: "A comprehensive guide on startup branding. Discover how to build a visual identity, define your brand strategy, and build customer trust.",
    category: "Branding",
    date: "June 2026",
    readTime: "15 min read",
    slug: "/explore/branding-for-tech-startups"
  },
  {
    title: "Scalable Cloud Solutions: Architecting Startups for Global Growth",
    description: "A deep dive on cloud solutions. Learn serverless architecture, CI/CD automation, cloud cost optimization, and deployment scaling.",
    category: "Cloud",
    date: "June 2026",
    readTime: "16 min read",
    slug: "/explore/cloud-solutions-for-startups"
  },
  {
    title: "Native vs. Cross-Platform App Development: What Founders Need to Know",
    description: "A masterclass comparing native vs. cross-platform app development. Learn how React Native saves money, when to choose native, and how Yotvis architects scalable apps.",
    category: "App Development",
    date: "June 2026",
    readTime: "14 min read",
    slug: "/explore/native-vs-cross-platform-apps"
  },
  {
    title: "Core Web Vitals: How Page Speed Directly Impacts SEO and Conversions",
    description: "A masterclass on Core Web Vitals (LCP, INP, CLS). Learn how page speed impacts Google rankings and conversion rates, and how React and Vite architecture solves performance bottlenecks.",
    category: "Technical SEO",
    date: "June 2026",
    readTime: "15 min read",
    slug: "/explore/core-web-vitals-seo"
  },
  {
    title: "React and Vite: The Premium Tech Stack for Startups in 2026",
    description: "Discover why React and Vite are the ultimate tech stack for startups in 2026. Learn how this architecture improves page speed, SEO, and user experience.",
    category: "Web Development",
    date: "June 2026",
    readTime: "12 min read",
    slug: "/explore/react-and-vite-tech-stack"
  },
  {
    title: "How AI Automation Helps Growing Businesses Save Time",
    description: "A complete guide to AI automation for growing businesses — covering which processes to automate, how much time you can save, and the best tools for SMBs.",
    category: "AI Automation",
    date: "June 2026",
    readTime: "8 min read",
    slug: "/explore/ai-automation-for-business"
  },
  {
    title: "UI/UX Design Principles for High-Converting Websites",
    description: "A masterclass on UI/UX design principles. Learn how visual hierarchy, cognitive load, and user flows impact conversion rates and how to design websites that scale.",
    category: "UI/UX Design",
    date: "June 2026",
    readTime: "12 min read",
    slug: "/explore/ui-ux-design-principles"
  },
  {
    title: "Custom Web Development vs. Website Templates: Which Is Right for Growing Brands?",
    description: "A complete guide comparing custom web development to website templates. Learn why growing brands choose custom React architecture for scalability, speed, and SEO.",
    category: "Web Development",
    date: "June 2026",
    readTime: "10 min read",
    slug: "/explore/custom-web-dev-vs-templates"
  }
];

const caseStudies = [
  {
    title: "How We Achieved 95/100 PageSpeed & Google Indexing in 3 Days",
    description: "A complete breakdown of how Yotvis built, optimized, and indexed its own website — achieving perfect SEO scores, 95/100 mobile performance, and Google indexing within 72 hours of launch.",
    category: "SEO + Performance",
    date: "June 2026",
    slug: "/case-studies/yotvis-seo-performance",
    metrics: [
      { label: "Mobile Performance", before: "73", after: "95", icon: "zap" },
      { label: "Desktop Performance", before: "—", after: "99", icon: "trending" },
      { label: "Indexed In", before: "—", after: "3 Days", icon: "clock" },
    ],
    tags: ["SEO 100/100", "React/Vite", "JSON-LD", "Sitemap", "Core Web Vitals"]
  }
];

const ArticleCard = ({ article }) => (
  <Link
    to={article.slug}
    className="group flex flex-col bg-[#D3E4BF] border border-black/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full justify-between"
  >
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-nunito font-semibold tracking-widest uppercase text-[#7F7CFF]">
          {article.category}
        </span>
        <span className="text-xs font-nunito text-black/40">{article.date}</span>
      </div>
      <h2 className="text-2xl font-clash font-medium text-black mb-4 group-hover:text-[#7F7CFF] transition-colors line-clamp-3">
        {article.title}
      </h2>
      <p className="text-sm font-nunito text-black/60 mb-8 line-clamp-3">
        {article.description}
      </p>
    </div>
    <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-auto">
      <span className="text-xs font-nunito text-black/50">{article.readTime}</span>
      <span className="flex items-center text-sm font-nunito font-medium text-black group-hover:text-[#7F7CFF] transition-colors">
        Read Article <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

const CaseStudyCard = ({ cs }) => (
  <Link
    to={cs.slug}
    className="group flex flex-col bg-black border border-black rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full justify-between col-span-1 md:col-span-2"
  >
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-nunito font-semibold tracking-widest uppercase text-[#FCFF7C]">
          {cs.category}
        </span>
        <span className="text-xs font-nunito text-white/30">{cs.date}</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-clash font-medium text-white mb-4 group-hover:text-[#FCFF7C] transition-colors">
        {cs.title}
      </h2>

      <p className="text-sm font-nunito text-white/50 mb-8 line-clamp-3">
        {cs.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {cs.metrics.map((m, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              {m.icon === "zap" && <Zap className="w-3 h-3 text-[#FCFF7C]" />}
              {m.icon === "trending" && <TrendingUp className="w-3 h-3 text-[#FCFF7C]" />}
              {m.icon === "clock" && <Clock className="w-3 h-3 text-[#FCFF7C]" />}
              <span className="text-[10px] font-nunito text-white/40 uppercase tracking-wider">{m.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {m.before !== "—" && (
                <>
                  <span className="text-lg font-clash font-medium text-white/30 line-through">{m.before}</span>
                  <ArrowRight className="w-3 h-3 text-white/20" />
                </>
              )}
              <span className="text-xl font-clash font-semibold text-[#FCFF7C]">{m.after}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {cs.tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-nunito font-semibold tracking-wider uppercase bg-white/10 text-white/60 px-3 py-1 rounded-full border border-white/10">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-8">
      <span className="text-xs font-nunito text-white/30">In-depth breakdown</span>
      <span className="flex items-center text-sm font-nunito font-medium text-white group-hover:text-[#FCFF7C] transition-colors">
        Read Case Study <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default function ExplorePage() {
  const { navigateTo } = usePageTransition();
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <main className="w-full min-h-screen bg-[#FFFFF3] flex flex-col">
      <SEO
        title="Explore Digital Insights | Strategy, Design & Development"
        description="Practical insights on branding, UI/UX design, web development, AI automation, cloud solutions, and digital strategy — written for brands that want to grow, not just look good."
        canonical="https://yotvis.com/explore"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pt-36 md:pt-44 pb-16">

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-start">
            <h1 className="text-[clamp(3.5rem,8vw,14rem)] font-clash font-medium text-black leading-[0.85] tracking-tighter mb-4 whitespace-nowrap">
              Explore Insights
            </h1>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <div className="border-l-4 border-[#7F7CFF] pl-6 py-2 bg-[#7F7CFF]/5 rounded-r-lg">
              <p className="text-lg md:text-xl font-nunito text-black/70 leading-relaxed">
                Welcome to the Yotvis insight hub — a curated library of deep, masterclass articles on web development, UI/UX design, AI automation, and brand strategy. We built this to help founders and growing brands navigate the technical complexities of building a premium digital presence in 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-10 border-b border-black/10 pb-0">
          <button
            onClick={() => setActiveTab("articles")}
            className={`relative px-6 py-3 text-sm font-nunito font-semibold tracking-wide transition-colors duration-200 ${
              activeTab === "articles"
                ? "text-black"
                : "text-black/40 hover:text-black/70"
            }`}
          >
            Blog Articles
            <span className="ml-2 text-xs font-nunito font-normal bg-black/10 text-black/50 px-2 py-0.5 rounded-full">9</span>
            {activeTab === "articles" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("casestudies")}
            className={`relative px-6 py-3 text-sm font-nunito font-semibold tracking-wide transition-colors duration-200 ${
              activeTab === "casestudies"
                ? "text-black"
                : "text-black/40 hover:text-black/70"
            }`}
          >
            Case Studies
            <span className="ml-2 text-xs font-nunito font-normal bg-[#FCFF7C] text-black px-2 py-0.5 rounded-full">1</span>
            {activeTab === "casestudies" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
            )}
          </button>
        </div>

        {/* Blog Articles Grid */}
        {activeTab === "articles" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        )}

        {/* Case Studies Grid */}
        {activeTab === "casestudies" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={i} cs={cs} />
            ))}

            {/* Coming Soon placeholder */}
            <div className="flex flex-col items-center justify-center bg-black/5 border border-dashed border-black/20 rounded-2xl p-8 min-h-[300px]">
              <span className="text-4xl mb-4">🔭</span>
              <p className="text-sm font-nunito font-semibold text-black/40 text-center">More case studies coming soon</p>
              <p className="text-xs font-nunito text-black/30 text-center mt-2">Real results from real client projects</p>
            </div>
          </div>
        )}

      </section>

      {/* FAQ */}
      <div className="relative z-[3] w-full bg-[#FFFFF3] border-t border-black/5">
        <FaqSection
          title={<>Frequently<br/>Asked<br/>Questions</>}
          subtitle="Clear answers about the articles, guides, and technologies we cover."
          faqsData={exploreFaqs}
          ctaText="Ready to build a digital presence?"
          ctaLabel="Contact Us"
          onCtaClick={() => navigateTo("/contact")}
        />
      </div>

      <FooterSection />
    </main>
  );
}
