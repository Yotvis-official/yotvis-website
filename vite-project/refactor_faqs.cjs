const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/explore');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('import FaqSection from')) {
    content = content.replace('import { Link }', 'import FaqSection from "@/components/sections/FaqSection";\nimport { Link }');
  }

  // Inject blogFaqs calculation inside the component (right after the hooks, or inside the component before return)
  // Let's locate the return statement, and inject it just before return.
  const returnRegex = /return\s*\(\s*<main/;
  if (returnRegex.test(content) && !content.includes('const blogFaqs =')) {
    content = content.replace(returnRegex, `const blogFaqs = faqSchema.mainEntity.map((item, idx) => ({
    id: String(idx + 1).padStart(2, "0"),
    question: item.name,
    answer: item.acceptedAnswer.text
  }));\n\n  return (\n    <main`);
  }

  // Remove the hardcoded FAQ section block inside the article
  // We can look for the {/* ── FAQ SECTION ── */} comment and match until the next comment, which is {/* ── CTA BLOCK ── */}
  const faqBlockRegex = /\{\/\* ── FAQ SECTION ── \*\/\s*<div[\s\S]*?<\/div>\s*<\/div>\s*(?=\{\/\* ── CTA BLOCK ── \*\/)/;
  content = content.replace(faqBlockRegex, '');

  // Add the <FaqSection faqsData={blogFaqs} /> component after </article>
  const articleCloseRegex = /<\/article>/;
  if (!content.includes('<FaqSection faqsData={blogFaqs} />')) {
    content = content.replace(articleCloseRegex, `</article>\n\n      <FaqSection faqsData={blogFaqs} />`);
  }

  fs.writeFileSync(filePath, content);
});

console.log('FAQs updated to use FaqSection component.');
