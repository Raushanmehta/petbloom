const fs = require("fs");

// 1. Update data.json
const dataPath = "c:/Users/raush/Desktop/css/pet-bloom/data/data.json";
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

if (Array.isArray(data.servicesData)) {
    const pageData = data.servicesPageData || {
        badgeText: "Our Services",
        titleWhite: "Premium Care For ",
        titleColored: "Your Pet",
        description: "We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best."
    };
    
    data.servicesData = {
        pageData: pageData,
        services: data.servicesData
    };
    
    delete data.servicesPageData;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// 2. Update Types
const typesPath = "c:/Users/raush/Desktop/css/pet-bloom/types/sections.ts";
let types = fs.readFileSync(typesPath, "utf8");
if (!types.includes("ServicesDataWrapper")) {
    types += `\nexport interface ServicesDataWrapper {\n    pageData: SectionHeaderData;\n    services: ServiceItem[];\n}\n`;
    fs.writeFileSync(typesPath, types);
}

function replaceInFile(path, replacer) {
    let content = fs.readFileSync(path, "utf8");
    content = replacer(content);
    fs.writeFileSync(path, content);
}

// 3. Update Components

// Navbar.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/components/layout/Navbar.tsx", (c) => {
    c = c.replace(/import \{ NavLink, ServiceItem \} from "@\/types";/, "import { NavLink, ServicesDataWrapper } from \"@/types\";");
    c = c.replace(/const \{ navLinks, contactPhone, servicesData \} = data as \{ navLinks: NavLink\[\], contactPhone: string, servicesData: ServiceItem\[\] \};/, "const { navLinks, contactPhone, servicesData } = data as { navLinks: NavLink[], contactPhone: string, servicesData: ServicesDataWrapper };");
    c = c.replace(/servicesData\.map/g, "servicesData.services.map");
    return c;
});

// ServicesSection.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/sections/home/ServicesSection.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem, SectionHeaderData \} from "@\/types";/, "import { ServicesDataWrapper } from \"@/types\";");
    c = c.replace(/const \{ servicesData, servicesPageData \} = data as \{ servicesData: ServiceItem\[\], servicesPageData: SectionHeaderData \};/, "const { servicesData } = data as { servicesData: ServicesDataWrapper };");
    c = c.replace(/servicesPageData\.badgeText/g, "servicesData.pageData.badgeText");
    c = c.replace(/servicesPageData\.titleWhite/g, "servicesData.pageData.titleWhite");
    c = c.replace(/servicesPageData\.titleColored/g, "servicesData.pageData.titleColored");
    c = c.replace(/servicesPageData\.description/g, "servicesData.pageData.description");
    c = c.replace(/servicesData\.map/g, "servicesData.services.map");
    return c;
});

// app/services/page.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/page.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem, SectionHeaderData \} from "@\/types";/, "import { ServicesDataWrapper } from \"@/types\";");
    c = c.replace(/const \{ servicesData, servicesPageData \} = data as \{ servicesData: ServiceItem\[\], servicesPageData: SectionHeaderData \};/, "const { servicesData } = data as { servicesData: ServicesDataWrapper };");
    c = c.replace(/servicesPageData\.badgeText/g, "servicesData.pageData.badgeText");
    c = c.replace(/servicesPageData\.titleWhite/g, "servicesData.pageData.titleWhite");
    c = c.replace(/servicesPageData\.titleColored/g, "servicesData.pageData.titleColored");
    c = c.replace(/servicesPageData\.description/g, "servicesData.pageData.description");
    c = c.replace(/servicesData\.map/g, "servicesData.services.map");
    return c;
});

// app/services/[slug]/page.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/[slug]/page.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem \} from "@\/types";/, "import { ServicesDataWrapper } from \"@/types\";");
    c = c.replace(/const \{ servicesData \} = data as \{ servicesData: ServiceItem\[\] \};/, "const { servicesData } = data as { servicesData: ServicesDataWrapper };");
    c = c.replace(/servicesData\.find/g, "servicesData.services.find");
    c = c.replace(/servicesData\.map/g, "servicesData.services.map");
    return c;
});

// pages/ServiceDetailPage.tsx
replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/pages/ServiceDetailPage.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem \} from "@\/types";/, "import { ServicesDataWrapper } from \"@/types\";");
    c = c.replace(/const \{ servicesData \} = data as \{ servicesData: ServiceItem\[\] \};/, "const { servicesData } = data as { servicesData: ServicesDataWrapper };");
    c = c.replace(/servicesData\.map/g, "servicesData.services.map");
    c = c.replace(/servicesData\.slice/g, "servicesData.services.slice");
    c = c.replace(/servicesData\.filter/g, "servicesData.services.filter");
    return c;
});

console.log("Restructured to use ServicesDataWrapper");

