import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";
import FaqSection from "@/components/sections/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "@/App";

// 1. ItemList Schema for GEO (Tells AI this is a curated library of articles)
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

// 2. FAQ Schema for AEO (Helps AI answer questions about your content hub)
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
  }
];

export default function ExplorePage() {
  const { navigateTo } = usePageTransition();
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
          <span className="text-xs font-nunito text-black/40">
            {article.date}
          </span>
        </div>
        
        <h2 className="text-2xl font-clash font-medium text-black mb-4 group-hover:text-[#7F7CFF] transition-colors line-clamp-3">
          {article.title}
        </h2>
        
        <p className="text-sm font-nunito text-black/60 mb-8 line-clamp-3">
          {article.description}
        </p>
      </div>
      
      <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-auto">
        <span className="text-xs font-nunito text-black/50">
          {article.readTime}
        </span>
        <span className="flex items-center text-sm font-nunito font-medium text-black group-hover:text-[#7F7CFF] transition-colors">
          Read Article <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );

  return (
    <main className="w-full min-h-screen bg-[#FFFFF3] flex flex-col">
      <SEO 
        title="Explore Digital Insights & Strategy | Yotvis"
        description="Explore the Yotvis insight hub for in-depth masterclasses on web development, UI/UX design, AI automation, and digital strategy for growing brands in 2026."
        canonical="https://yotvis.com/explore"
      />

      {/* 3. JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pt-36 md:pt-44 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Row 1, Cols 1-3: Page Title */}
          <div className="col-span-1 md:col-span-3 flex flex-col justify-start">
            <h1 className="text-[clamp(5.5rem,12vw,14rem)] font-clash font-medium text-black leading-[0.85] tracking-tighter mb-4">
              Explore<br />Insights
            </h1>
          </div>

          {/* Row 2, Cols 1-2: BLUF Description for AI Extraction (Moved up for mobile source order) */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <div className="border-l-4 border-[#7F7CFF] pl-6 py-2 bg-[#7F7CFF]/5 rounded-r-lg">
              <p className="text-lg md:text-xl font-nunito text-black/70 leading-relaxed">
                Welcome to the Yotvis insight hub—a curated library of deep, masterclass articles on web development, UI/UX design, AI automation, and brand strategy. We built this to help founders and growing brands navigate the technical complexities of building a premium digital presence in 2026.
              </p>
            </div>
          </div>

          {/* Row 1, Col 4: Card 1 (Explicitly placed on desktop) */}
          <div className="col-span-1 h-full md:col-start-4 md:row-start-1">
            <ArticleCard article={articles[0]} />
          </div>

          {/* Row 2, Col 3: Card 2 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[1]} />
          </div>

          {/* Row 2, Col 4: Card 3 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[2]} />
          </div>

          {/* Row 3, Col 1: Card 4 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[3]} />
          </div>

          {/* Row 3, Col 2: Card 5 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[4]} />
          </div>

          {/* Row 3, Col 3: Card 6 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[5]} />
          </div>

          {/* Row 3 & 4, Col 4: Vertical text "Explore Industry Trends" */}
          <div className="col-span-1 md:row-span-2 flex items-center justify-center py-12 md:py-0 select-none">
            <h3 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-clash font-medium text-black tracking-tighter leading-none text-center md:whitespace-nowrap [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]">
              Explore Industry Trends
            </h3>
          </div>

          {/* Row 4, Col 1: Card 7 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[6]} />
          </div>

          {/* Row 4, Col 2: Card 8 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[7]} />
          </div>

          {/* Row 4, Col 3: Card 9 */}
          <div className="col-span-1 h-full">
            <ArticleCard article={articles[8]} />
          </div>

          {/* Row 4, Col 4 is now occupied by the row-spanning text above */}

        </div>
      </section>

      {/* 4. AEO FAQ Section */}
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
