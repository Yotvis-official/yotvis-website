const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/explore');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports
  if (!content.includes('import React, { useEffect, useRef } from "react";')) {
    content = content.replace('import SEO', 'import React, { useEffect, useRef } from "react";\nimport gsap from "gsap";\nimport SEO');
  }

  // Find component name
  const componentMatch = content.match(/export default function (\w+)\(\) \{/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    
    // Add hooks if not present
    if (!content.includes('const containerRef = useRef(null);')) {
      const hooks = `  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate background elements
      gsap.fromTo(".gsap-blog-bg", 
        { scaleX: 0, transformOrigin: "left center" }, 
        { scaleX: 1, duration: 1.2, ease: "power4.inOut" }
      );
      // Animate text elements
      gsap.fromTo(".gsap-blog-text", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out", delay: 0.4 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);\n`;
      content = content.replace(`export default function ${componentName}() {\n`, `export default function ${componentName}() {\n${hooks}`);
    }

    // Add ref to main
    content = content.replace('<main className="w-full min-h-screen bg-[#FFFFF3]">', '<main className="w-full min-h-screen bg-[#FFFFF3]" ref={containerRef}>');
    
    // Add classes to h1, p, h2, li
    content = content.replace(/<h1 className="/g, '<h1 className="gsap-blog-text ');
    content = content.replace(/<p className="/g, '<p className="gsap-blog-text ');
    content = content.replace(/<p>/g, '<p className="gsap-blog-text">');
    content = content.replace(/<h2 className="/g, '<h2 className="gsap-blog-text ');
    content = content.replace(/<li(?! className)/g, '<li className="gsap-blog-text"');
    content = content.replace(/<li className="/g, '<li className="gsap-blog-text ');

    // BLUF bg
    content = content.replace('className="border-l-4 border-[#7F7CFF] pl-6 py-2 bg-[#7F7CFF]/5 rounded-r-lg"', 'className="gsap-blog-bg border-l-4 border-[#7F7CFF] pl-6 py-2 bg-[#7F7CFF]/5 rounded-r-lg"');

    // Add animated word bg to h1
    if (!content.includes('gsap-word-bg')) {
      content = content.replace(
        /<h1 className="gsap-blog-text([^>]+)>([\s\S]*?)<\/h1>/,
        `<div className="relative inline-block mb-6">
          <div className="gsap-blog-bg absolute inset-0 bg-[#FCFF7C] z-0 -rotate-1 rounded-sm mix-blend-multiply opacity-60"></div>
          <h1 className="gsap-blog-text relative z-10 $1>$2</h1>
        </div>`
      );
    }
  }

  fs.writeFileSync(filePath, content);
});

console.log('Blogs updated with GSAP animations.');
