const http = require('http');
const d = require('../data/data.json');

const linksToCheck = [
    ...d.navLinks.map(l => ({ group: 'Navbar', label: l.label, href: l.href })),
    { group: 'Navbar CTA', label: 'Book Appointment', href: '/appointment' },
    ...d.footerData.quickLinks.map(l => ({ group: 'Footer Quick', label: l.label, href: l.href })),
    ...d.footerData.serviceLinks.map(l => ({ group: 'Footer Services', label: l.label, href: l.href })),
    ...d.footerData.resourceLinks.map(l => ({ group: 'Footer Resources', label: l.label, href: l.href })),
    ...d.footerData.supportLinks.map(l => ({ group: 'Footer Support', label: l.label, href: l.href })),
    // Also check redirected legacy links
    { group: 'Redirect Test', label: 'Old Appointment', href: '/book-appointment' },
    { group: 'Redirect Test', label: 'Old Cookie Spelled', href: '/coockie-policy' },
    { group: 'Redirect Test', label: 'Old Service Pet Grooming', href: '/services/pet-grooming' },
];

function checkUrl(item) {
    return new Promise((resolve) => {
        const req = http.get('http://localhost:3000' + item.href, (res) => {
            resolve({ ...item, status: res.statusCode, location: res.headers.location || null });
        });
        req.on('error', (err) => resolve({ ...item, status: 'ERR: ' + err.message }));
        req.setTimeout(8000, () => {
            req.destroy();
            resolve({ ...item, status: 'TIMEOUT' });
        });
    });
}

(async () => {
    console.log('Testing total links:', linksToCheck.length);
    const results = [];
    for (const item of linksToCheck) {
        const res = await checkUrl(item);
        results.push(res);
        const redirectInfo = res.location ? ` -> ${res.location}` : '';
        console.log(`[${res.status}] ${item.group} -> ${item.label} (${item.href})${redirectInfo}`);
    }
    const failed = results.filter(r => r.status !== 200 && r.status !== 308 && r.status !== 307);
    if (failed.length === 0) {
        console.log('\n>>> ALL LINKS VERIFIED SUCCESSFULLY! 100% PASS <<<');
    } else {
        console.log('\n>>> FAILURES DETECTED <<<', failed);
        process.exit(1);
    }
})();
