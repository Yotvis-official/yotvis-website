const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/explore');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip the old FAQ block cleanly using indexOf
  const startIndex = content.indexOf('{/* ── FAQ SECTION ── */}');
  const endIndex = content.indexOf('{/* ── CTA BLOCK ── */}');
  
  if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + content.substring(endIndex);
  }

  // Double check that we didn't duplicate the FaqSection component
  // Since we already ran the previous script once, we should clean up any duplicate <FaqSection ... /> calls
  // Wait, let's see how many times '<FaqSection faqsData={blogFaqs} />' exists.
  const faqComponent = '<FaqSection faqsData={blogFaqs} />';
  const occurrences = content.split(faqComponent).length - 1;
  if (occurrences > 1) {
    // Keep only the last one or remove duplicates
    content = content.replace(new RegExp(faqComponent.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), '');
    content = content.replace('</article>', `</article>\n\n      ${faqComponent}`);
  }

  fs.writeFileSync(filePath, content);
});

console.log('FAQs cleaned and synced with FaqSection.');
