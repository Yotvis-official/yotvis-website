import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("Error: dist/index.html not found. Run 'vite build' first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

const pages = [
  {
    path: "/",
    title: "Yotvis — Building Digital Presence | Web Design & Development",
    description: "Most businesses struggle to stand out online. Yotvis helps you build a stronger digital presence through branding, high-performance websites, AI automation, and cloud systems."
  },
  {
    path: "/about",
    title: "About Yotvis | We Turn Vision Into Digital Presence",
    description: "Yotvis is a digital studio that partners with ambitious brands, creators, and founders to build credible, growth-ready digital presence from first idea to final launch."
  },
  {
    path: "/services",
    title: "Digital Services That Build Real Business Growth | Yotvis",
    description: "Need a brand that commands attention? A website that converts? AI systems that save you hours? Everything your digital presence needs — strategy, design, development, automation, and cloud — in one studio."
  },
  {
    path: "/contact",
    title: "Contact Yotvis | Start Your Digital Project Today",
    description: "Have an idea? A goal? Even just a problem you need solved? Tell us where you are and we will help you find the right next move — fast, clear, no pressure."
  },
  {
    path: "/careers",
    title: "Careers at Yotvis | Build Real Digital Experience",
    description: "Join Yotvis to work on live digital projects, build real experience, and grow across design, development, automation, motion, and creative systems."
  },
  {
    path: "/book-a-call",
    title: "Book a Strategy Call | Find Your Digital Direction",
    description: "Not sure where to start with your digital presence? Book a call with Yotvis. In 30 minutes we map your goals, identify the gaps, and hand you a clear path forward — no fluff, no obligation."
  },
  {
    path: "/services/branding",
    title: "Branding Services | Logo, Identity & Brand Systems",
    description: "People judge your brand before they read a single word. Get a logo, visual identity, and brand system built to earn trust from the first impression."
  },
  {
    path: "/services/ui-ux-design",
    title: "UI/UX Design Services | Figma, Flows & Design Systems",
    description: "Good design is invisible. Bad design loses customers. Get UI/UX designed for websites, apps, and dashboards that feel effortless — because every click, scroll, and screen was thought through."
  },
  {
    path: "/services/web-development",
    title: "Website Development | Fast, Responsive & Built to Convert",
    description: "Your website is your most powerful sales tool — if it is built right. Get a fast, modern website with React and Vite that loads instantly, looks sharp, and turns visitors into clients."
  },
  {
    path: "/services/app-development",
    title: "App Development Services | Mobile & Web Apps That Scale",
    description: "An app that crashes or frustrates loses users permanently. Get a scalable, smooth mobile or web app designed for real users, real growth, and performance that holds up long term."
  },
  {
    path: "/services/ai-automation",
    title: "AI Automation Services | Stop Doing What a System Can Do",
    description: "You are spending hours on tasks a smart workflow could handle in seconds. Cut the manual work, speed up your operations, and free your team to focus on the work that actually grows your business."
  },
  {
    path: "/services/cloud-solutions",
    title: "Cloud Solutions | Scalable Infrastructure That Does Not Break",
    description: "Get cloud deployment, hosting, and infrastructure built to stay reliable, scale with growth, and support your business with better control."
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Yotvis",
    description: "Read the Yotvis Privacy Policy to understand how we collect, use, protect, and manage personal information shared through our website and services."
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Yotvis",
    description: "Review the Yotvis Terms and Conditions for using our website and engaging our digital services across design, development, automation, and cloud solutions."
  },
  {
    path: "/explore",
    title: "Explore Digital Insights | Strategy, Design & Development",
    description: "Practical insights on branding, UI/UX design, web development, AI automation, cloud solutions, and digital strategy — written for brands that want to grow, not just look good."
  },
  {
    path: "/explore/building-digital-presence-2026",
    title: "How to Build a Strong Digital Presence in 2026",
    description: "A strong digital presence is not one great website. It is branding, speed, automation, and cloud systems working together. Here is how to build the full picture in 2026."
  },
  {
    path: "/explore/branding-for-tech-startups",
    title: "Branding for Startups | Build Trust Before You Have Proof",
    description: "Startups that look unpolished get dismissed — even with great products. Learn how to build a brand identity, visual system, and positioning that make investors and customers take you seriously."
  },
  {
    path: "/explore/cloud-solutions-for-startups",
    title: "Cloud Solutions for Startups | Deploy Faster, Scale Smarter",
    description: "Most startups outgrow their infrastructure before they realize it. Learn how cloud solutions help you deploy faster, cut costs, improve uptime, and scale without starting over."
  },
  {
    path: "/explore/native-vs-cross-platform-apps",
    title: "Native vs. Cross-Platform Apps | Which Is Right for You?",
    description: "Choosing wrong costs months and thousands. This guide breaks down native vs. cross-platform app development — performance, cost, scalability, and exactly when to choose each."
  },
  {
    path: "/explore/core-web-vitals-seo",
    title: "Core Web Vitals Explained | Page Speed, SEO & Conversions",
    description: "A slow page does not just frustrate users — it drops your Google ranking and kills conversions. Learn how LCP, INP, and CLS affect your site and exactly how to fix them."
  },
  {
    path: "/explore/react-and-vite-tech-stack",
    title: "React + Vite in 2026 | Why It Is the Go-To Tech Stack",
    description: "Slow builds and bloated frameworks are costing development teams time and money. Here is why React and Vite are the modern tech stack most serious web projects are moving to."
  },
  {
    path: "/explore/ai-automation-for-business",
    title: "AI Automation for Business | Save Time, Remove Bottlenecks",
    description: "The businesses growing fastest right now are not working harder — they automated the right things. Learn how AI workflows help you cut manual work, manage leads, and move faster."
  },
  {
    path: "/explore/ui-ux-design-principles",
    title: "UI/UX Design Principles | What Separates High-Converting Sites",
    description: "Most websites look fine but convert poorly. Learn the UI/UX principles behind visual hierarchy, user flows, cognitive load, and interface design that actually turns visitors into leads."
  },
  {
    path: "/explore/custom-web-dev-vs-templates",
    title: "Custom Web Development vs. Templates | The Real Difference",
    description: "Templates get you online. Custom development gets you ahead. Compare both on speed, SEO, flexibility, and long-term scalability — and find out which one your business actually needs."
  },
  {
    path: "/case-studies/yotvis-seo-performance",
    title: "How Yotvis Achieved 95/100 PageSpeed & Google Indexing in 3 Days | Yotvis Case Study",
    description: "A full technical breakdown of how Yotvis built, optimized, and indexed its React + Vite website — achieving SEO 100/100, 95/100 mobile performance, and Google indexing in under 72 hours."
  }
];

pages.forEach(page => {
  if (page.path === '/') return; // index.html already has the home page meta
  
  const targetDir = path.join(distDir, page.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetPath = path.join(targetDir, 'index.html');
  
  // Replace title
  let modifiedHtml = baseHtml.replace(
    /<title[^>]*>.*?<\/title>/s,
    `<title data-rh="true">${page.title}</title>`
  );

  // Replace primary description
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?name="description"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" name="description" content="${page.description}" />`
  );

  // Replace og:title
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?property="og:title"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" property="og:title" content="${page.title}" />`
  );

  // Replace og:description
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?property="og:description"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" property="og:description" content="${page.description}" />`
  );

  // Replace twitter:title
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?name="twitter:title"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" name="twitter:title" content="${page.title}" />`
  );

  // Replace twitter:description
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?name="twitter:description"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" name="twitter:description" content="${page.description}" />`
  );

  // Update canonical link
  modifiedHtml = modifiedHtml.replace(
    /<link[^>]*?rel="canonical"[^>]*?href="[^"]*"[^>]*?>/s,
    `<link data-rh="true" rel="canonical" href="https://yotvis.com${page.path}" />`
  );

  // Update og:url
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?property="og:url"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" property="og:url" content="https://yotvis.com${page.path}" />`
  );

  // Update twitter:url
  modifiedHtml = modifiedHtml.replace(
    /<meta[^>]*?name="twitter:url"[^>]*?content="[^"]*"[^>]*?>/s,
    `<meta data-rh="true" name="twitter:url" content="https://yotvis.com${page.path}" />`
  );

  fs.writeFileSync(targetPath, modifiedHtml, 'utf-8');
  console.log(`Generated: ${page.path}/index.html`);
});

console.log("Static SEO pages generated successfully.");
