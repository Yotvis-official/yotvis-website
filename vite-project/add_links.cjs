const fs = require('fs');
const path = require('path');

function addLinkToPage(filename, linkUrl, linkText, linkPrompt) {
  const filePath = path.join(__dirname, 'src/pages/services', filename);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { Link }')) {
    content = content.replace('import { usePageTransition } from "@/App";', 'import { usePageTransition } from "@/App";\nimport { Link } from "react-router-dom";');
  }

  if (!content.includes(linkUrl)) {
    // Add it before the closing </div> of the article text
    content = content.replace(/(<\/div>\s*<\/article>)/, `
            <p className="gsap-hero-text pt-6 w-full">
              ${linkPrompt} <Link to="${linkUrl}" className="text-[#7F7CFF] underline font-medium hover:text-[#6260e0] transition-colors">${linkText}</Link>.
            </p>
          $1`);
  }
  
  fs.writeFileSync(filePath, content);
}

addLinkToPage('UiUxDesignPage.jsx', '/explore/ui-ux-design-principles', 'UI/UX Design Principles for High-Converting Websites', 'Want to learn the exact design laws we use to drive conversions? Read our guide on');
addLinkToPage('AiAutomationPage.jsx', '/explore/ai-automation-for-business', 'AI Automation for Business Growth', 'Ready to scale your operations without scaling your headcount? Read our guide on');

console.log('Links added to UI/UX and AI Automation pages.');
