const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/services');
const serviceConfigs = {
  'AiAutomationPage.jsx': {
    title: '<>AI Automation<br />Questions<br />Answered</>',
    subtitle: '"Understand how AI integrations, agentic workflows, and automated bots drive efficiency for your business."'
  },
  'AppDevelopmentPage.jsx': {
    title: '<>App Dev<br />Questions<br />Answered</>',
    subtitle: '"Understand our mobile app development process, cross-platform choices, and scaling strategies."'
  },
  'BrandingPage.jsx': {
    title: '<>Branding<br />Questions<br />Answered</>',
    subtitle: '"Understand how we define brand strategies, build visual identities, and craft guidelines."'
  },
  'CloudSolutionsPage.jsx': {
    title: '<>Cloud & DevOps<br />Questions<br />Answered</>',
    subtitle: '"Understand our cloud infrastructure deployment, server security, and cost optimization techniques."'
  },
  'UiUxDesignPage.jsx': {
    title: '<>UI/UX Design<br />Questions<br />Answered</>',
    subtitle: '"Understand our user-centric design methodologies, wireframing processes, and conversion optimization."'
  },
  'WebDevelopmentPage.jsx': {
    title: '<>Web Dev<br />Questions<br />Answered</>',
    subtitle: '"Understand our front-end performance focus, custom CMS development, and web speed guarantees."'
  }
};

Object.entries(serviceConfigs).forEach(([file, config]) => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // We look for <FaqSection faqsData={...} /> and replace it with customized props
  const regex = /<FaqSection\s+faqsData=\{([a-zA-Z0-9_]+)\}\s*\/>/;
  
  if (regex.test(content)) {
    content = content.replace(regex, (match, faqsVar) => {
      return `<FaqSection 
        title={${config.title}} 
        subtitle={${config.subtitle}} 
        faqsData={${faqsVar}} 
      />`;
    });
  }

  fs.writeFileSync(filePath, content);
});

console.log('Services FAQ titles customized successfully.');
