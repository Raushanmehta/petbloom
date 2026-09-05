const fs = require("fs");

// 1. Update data.json
const dataPath = "c:/Users/raush/Desktop/css/pet-bloom/data/data.json";
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

data.servicesPageData = {
    badgeText: "Our Services",
    titleWhite: "Premium Care For ",
    titleColored: "Your Pet",
    description: "We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best."
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

function replaceInFile(path, replacer) {
    let content = fs.readFileSync(path, "utf8");
    content = replacer(content);
    fs.writeFileSync(path, content);
}

// 2. ServicesSection.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/sections/home/ServicesSection.tsx", (c) => {
    // Add imports if missing
    if (!c.includes("SectionHeaderData")) {
        c = c.replace(/import \{ ServiceItem \} from "@\/types";/, "import { ServiceItem, SectionHeaderData } from \"@/types\";");
    }
    
    // Update destructuring
    c = c.replace(/const \{ servicesData \} = data as \{ servicesData: ServiceItem\[\] \};/, "const { servicesData, servicesPageData } = data as { servicesData: ServiceItem[], servicesPageData: SectionHeaderData };");
    
    // Replace hardcoded text with variables
    c = c.replace(/\"Our Services\"/g, "servicesPageData.badgeText");
    c = c.replace(/\"Premium Care For \"/g, "servicesPageData.titleWhite");
    c = c.replace(/\"Your Pet\"/g, "servicesPageData.titleColored");
    c = c.replace(/\"We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best.\"/g, "servicesPageData.description");
    
    return c;
});

// 3. app/services/page.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/page.tsx", (c) => {
    // Add imports if missing
    if (!c.includes("SectionHeaderData")) {
        c = c.replace(/import \{ ServiceItem \} from "@\/types";/, "import { ServiceItem, SectionHeaderData } from \"@/types\";");
    }
    
    // Update destructuring
    c = c.replace(/const \{ servicesData \} = data as \{ servicesData: ServiceItem\[\] \};/, "const { servicesData, servicesPageData } = data as { servicesData: ServiceItem[], servicesPageData: SectionHeaderData };");
    
    // Replace hardcoded text with variables
    c = c.replace(/\"Our Services\"/g, "servicesPageData.badgeText");
    c = c.replace(/\"Premium Care For \"/g, "servicesPageData.titleWhite");
    c = c.replace(/\"Your Pet\"/g, "servicesPageData.titleColored");
    c = c.replace(/\"We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best.\"/g, "servicesPageData.description");
    
    return c;
});

console.log("Data updated and components wired.");

