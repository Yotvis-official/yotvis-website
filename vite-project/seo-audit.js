import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src/pages');
let results = [];

function walkDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDirectory(fullPath);
        } else if (file.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const fileName = fullPath.replace(pagesDir, '');
            
            let checks = {
                file: fileName,
                hasSEO: content.includes('<SEO'),
                hasTitle: content.includes('title='),
                hasDesc: content.includes('description='),
                hasFaqSchema: content.includes('faqSchema') || content.includes('FAQPage') || content.includes('FaqSection'),
                hasMainTag: content.includes('<main'),
                hasH1: content.includes('<h1'),
                hasArticle: content.includes('<article'),
                hasBLUF: content.includes('Bottom line up front') || content.includes('border-l-4') || content.includes('gsap-blog-bg')
            };
            results.push(checks);
        }
    });
}

walkDirectory(pagesDir);

console.log('\n--- YOTVIS SEO/GEO/AEO ON-SITE AUDIT ---\n');
results.forEach(r => {
    console.log(`📄 ${r.file}`);
    console.log(`   SEO Comp:   ${r.hasSEO ? '✅' : '❌'}`);
    console.log(`   Title/Desc: ${r.hasTitle && r.hasDesc ? '✅' : '❌'}`);
    console.log(`   FAQ Schema: ${r.hasFaqSchema ? '✅' : '❌ (Okay if not a service/faq page)'}`);
    console.log(`   <main>:     ${r.hasMainTag ? '✅' : '❌'}`);
    console.log(`   <h1>:       ${r.hasH1 ? '✅' : '❌'}`);
    console.log(`   <article>:  ${r.hasArticle ? '✅' : '❌ (Okay if not a blog)'}`);
    console.log(`   BLUF Box:   ${r.hasBLUF ? '✅' : '❌ (Okay if not a blog)'}`);
    console.log('-----------------------------------------');
});
console.log('\n✅ Audit Complete. Fix any ❌ on Core pages to achieve 100% compliance.\n');
