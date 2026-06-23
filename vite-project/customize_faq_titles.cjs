const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/explore');
const faqConfigs = {
  'AiAutomationArticle.jsx': {
    title: '<>AI Workflow<br />Questions<br />Answered</>',
    subtitle: '"Understanding AI agents, automated operations, and cost-effective scaling strategies."'
  },
  'AppDevArticle.jsx': {
    title: '<>App Dev<br />Questions<br />Answered</>',
    subtitle: '"Understanding native development, cross-platform frameworks, and tech stack choices."'
  },
  'BrandingArticle.jsx': {
    title: '<>Branding<br />Questions<br />Answered</>',
    subtitle: '"Understanding brand guidelines, visual authority, and startup identity development."'
  },
  'CloudSolutionsArticle.jsx': {
    title: '<>Cloud & DevOps<br />Questions<br />Answered</>',
    subtitle: '"Understanding serverless scaling, cloud costs, and automated deployment pipelines."'
  },
  'CoreWebVitalsArticle.jsx': {
    title: '<>Web Speed<br />Questions<br />Answered</>',
    subtitle: '"Understanding page speed metrics, Core Web Vitals, and search ranking signals."'
  },
  'DigitalPresenceGuide.jsx': {
    title: '<>Digital Strategy<br />Questions<br />Answered</>',
    subtitle: '"Understanding brand systems, React development, cloud solutions, and automation."'
  },
  'ReactViteArticle.jsx': {
    title: '<>Tech Stack<br />Questions<br />Answered</>',
    subtitle: '"Understanding React & Vite performance, single page apps, and technical scalability."'
  },
  'UiUxArticle.jsx': {
    title: '<>UI/UX Design<br />Questions<br />Answered</>',
    subtitle: '"Understanding design principles, user behavior, and high-converting visual flows."'
  },
  'WebDevArticle.jsx': {
    title: '<>Web Dev<br />Questions<br />Answered</>',
    subtitle: '"Understanding custom development, template trade-offs, and speed optimization."'
  }
};

Object.entries(faqConfigs).forEach(([file, config]) => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <FaqSection faqsData={blogFaqs} /> with customized props
  const target = '<FaqSection faqsData={blogFaqs} />';
  const replacement = `<FaqSection \n        title={${config.title}} \n        subtitle={${config.subtitle}} \n        faqsData={blogFaqs} \n      />`;

  content = content.replace(target, replacement);

  fs.writeFileSync(filePath, content);
});

console.log('FAQ titles customized for all articles.');
