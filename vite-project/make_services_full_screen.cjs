const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/services');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change <article className="relative z-10 max-w-3xl"> to w-full
  content = content.replace(/className="([^"]*)max-w-3xl([^"]*)"/g, (match, p1, p2) => {
    return `className="${p1.trim()} w-full ${p2.trim()}"`.trim().replace(/\s+/g, ' ');
  });

  // Remove max-w-2xl from paragraphs and lists
  content = content.replace(/className="([^"]*)max-w-2xl([^"]*)"/g, (match, p1, p2) => {
    return `className="${p1.trim()} ${p2.trim()}"`.trim().replace(/\s+/g, ' ').replace('className=""', '');
  });

  fs.writeFileSync(filePath, content);
});

console.log('Services content expanded to full screen.');
