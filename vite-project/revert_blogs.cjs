const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/explore');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Match the wrapped h1 and extract the h1 itself
  const regex = /<div className="relative inline-block mb-6">\s*<div className="gsap-blog-bg absolute inset-0 bg-\[#FCFF7C\] z-0 -rotate-1 rounded-sm mix-blend-multiply opacity-60"><\/div>\s*(<h1 className="gsap-blog-text relative z-10 [^>]+>[\s\S]*?<\/h1>)\s*<\/div>/g;

  content = content.replace(regex, (match, h1) => {
    // remove the "relative z-10 " from the h1 class
    return h1.replace('relative z-10  ', '').replace('relative z-10 ', '');
  });

  fs.writeFileSync(filePath, content);
});

console.log('Yellow bg removed from blog titles.');
