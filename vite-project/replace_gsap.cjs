const fs = require('fs');
const path = require('path');

function replaceImports(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            replaceImports(filePath);
        } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf-8');
            const originalContent = content;
            
            // replace double quotes
            content = content.replace(/import\s+gsap\s+from\s+"gsap";?/g, 'import { gsap } from "gsap";');
            // replace single quotes
            content = content.replace(/import\s+gsap\s+from\s+'gsap';?/g, "import { gsap } from 'gsap';");
            
            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`Updated ${filePath}`);
            }
        }
    }
}

replaceImports(path.join(__dirname, 'src'));
