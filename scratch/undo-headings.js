const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('.');

files.forEach(file => {
    if (file.includes('HeroSection.tsx')) return;

    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Reverse: font-bold -> ${lilitaOne.className}
    const regex = /className=\{`font-bold /g;
    if (regex.test(content)) {
        content = content.replace(regex, 'className={`${lilitaOne.className} ');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Reverted ${file}`);
    }
});
