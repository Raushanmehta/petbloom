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
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Fix span classes
    const spanRegex1 = /className="text-xs font-bold uppercase tracking-wider/g;
    if (spanRegex1.test(content)) {
        content = content.replace(spanRegex1, 'className="text-sm font-bold uppercase px-2 tracking-wider');
        changed = true;
    }
    const spanRegex2 = /className="text-xs sm:text-sm font-bold uppercase tracking-wider/g;
    if (spanRegex2.test(content)) {
        content = content.replace(spanRegex2, 'className="text-sm font-bold uppercase px-2 tracking-wider');
        changed = true;
    }
    const spanRegex3 = /className="text-xs flex gap-2 items-center font-bold uppercase tracking-wider/g;
    if (spanRegex3.test(content)) {
        content = content.replace(spanRegex3, 'className="text-sm flex gap-2 items-center font-bold uppercase px-2 tracking-wider');
        changed = true;
    }
    const spanRegex4 = /className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider/g;
    if (spanRegex4.test(content)) {
        content = content.replace(spanRegex4, 'className="text-sm font-bold text-gray-900 uppercase px-2 tracking-wider');
        changed = true;
    }
    
    // Fix FaPaw icons near badges
    // We look for FaPaw with h-5 w-5 or h-4 w-4 inside badges
    // Let's just blindly upgrade any h-5 w-5 FaPaw that doesn't have sm:h-6 sm:w-6
    const pawRegex1 = /<FaPaw className="h-5 w-5 text-\[(#[A-Fa-f0-9]+)\]" \/>/g;
    if (pawRegex1.test(content)) {
        content = content.replace(pawRegex1, '<FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[$1]" />');
        changed = true;
    }
    
    const pawRegex2 = /<FaPaw className="h-4 w-4 text-\[(#[A-Fa-f0-9]+)\]" \/>/g;
    if (pawRegex2.test(content)) {
        content = content.replace(pawRegex2, '<FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[$1]" />');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
