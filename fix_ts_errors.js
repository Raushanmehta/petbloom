const fs = require("fs");

function replaceInFile(path, replacer) {
    let content = fs.readFileSync(path, "utf8");
    content = replacer(content);
    fs.writeFileSync(path, content);
}

// 1. app/services/page.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/page.tsx", (c) => {
    c = c.replace(/\{pageData\./g, "{servicesData.pageData.");
    c = c.replace(/servicesData\.map/g, "servicesData.services.map");
    // Ensure ServiceItem is imported if needed, but since it is mapping it might not need explicit typing.
    return c;
});

// 2. app/team/page.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/team/page.tsx", (c) => {
    c = c.replace(/<TeamCard \/>/g, "{teamSectionData.teamMembers.map((member, index) => (<TeamCard key={index} team={member} />))}");
    return c;
});

// 3. pages/ServiceDetailPage.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/pages/ServiceDetailPage.tsx", (c) => {
    // Cannot find name ServiceItem. Let us add it to imports.
    if (!c.includes("import { ServiceItem")) {
        c = c.replace(/import \{ ServicesDataWrapper \}/, "import { ServicesDataWrapper, ServiceItem }");
        // Or if it says import { ServiceItem, ServicesDataWrapper } then it is fine.
    }
    // Also Parameter item implicitly has an any type
    c = c.replace(/\(item\) =>/g, "(item: ServiceItem) =>");
    return c;
});

console.log("Fixed TS errors");

