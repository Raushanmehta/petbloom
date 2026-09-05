const fs = require("fs");

function replaceInFile(path, replacer) {
    let content = fs.readFileSync(path, "utf8");
    content = replacer(content);
    fs.writeFileSync(path, content);
}

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/components/layout/Navbar.tsx", (c) => {
    c = c.replace(/import \{ NavLink, ServiceItem, ServicesPageData \} from "@\/types";/, "import { NavLink, ServiceItem } from \"@/types\";");
    c = c.replace(/const \{ navLinks, contactPhone, servicesPageData \} = data as \{ navLinks: NavLink\[\], contactPhone: string, servicesPageData: ServicesPageData \};\nconst \{ servicesData \} = servicesPageData;/, "const { navLinks, contactPhone, servicesData } = data as { navLinks: NavLink[], contactPhone: string, servicesData: ServiceItem[] };");
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/sections/home/ServicesSection.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem, SectionHeaderData, ServicesPageData \} from "@\/types";/, "import { ServiceItem, SectionHeaderData } from \"@/types\";");
    c = c.replace(/const \{ servicesPageData \} = data as \{ servicesPageData: ServicesPageData \};\nconst \{ servicesData \} = servicesPageData;/, "const { servicesData } = data as { servicesData: ServiceItem[] };");
    
    c = c.replace(/\{servicesPageData\.badgeText\}/g, "\"Our Services\"");
    c = c.replace(/\{servicesPageData\.titleWhite\}/g, "\"Premium Care For \"");
    c = c.replace(/\{servicesPageData\.titleColored\}/g, "\"Your Pet\"");
    c = c.replace(/\{servicesPageData\.description\}/g, "\"We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best.\"");
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/page.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem, SectionHeaderData, ServicesPageData \} from "@\/types";/, "import { ServiceItem } from \"@/types\";");
    c = c.replace(/const \{ servicesPageData \} = data as \{ servicesPageData: ServicesPageData \};\nconst \{ servicesData \} = servicesPageData;/, "const { servicesData } = data as { servicesData: ServiceItem[] };");
    c = c.replace(/const \{ servicesData \} = data;/, "const { servicesData } = data as { servicesData: ServiceItem[] };");
    
    c = c.replace(/\{\.badgeText\}/g, "\"Our Services\"");
    c = c.replace(/\{titleWhite\}/g, "\"Premium Care For \"");
    c = c.replace(/\{titleColored\}/g, "\"Your Pet\"");
    c = c.replace(/\{\.description\}/g, "\"We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best.\"");

    c = c.replace(/\{servicesPageData\.badgeText\}/g, "\"Our Services\"");
    c = c.replace(/\{servicesPageData\.titleWhite\}/g, "\"Premium Care For \"");
    c = c.replace(/\{servicesPageData\.titleColored\}/g, "\"Your Pet\"");
    c = c.replace(/\{servicesPageData\.description\}/g, "\"We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best.\"");
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/[slug]/page.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem, ServicesPageData \} from "@\/types";/, "import { ServiceItem } from \"@/types\";");
    c = c.replace(/const \{ servicesPageData \} = data as \{ servicesPageData: ServicesPageData \};\nconst \{ servicesData \} = servicesPageData;/, "const { servicesData } = data as { servicesData: ServiceItem[] };");
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/pages/ServiceDetailPage.tsx", (c) => {
    c = c.replace(/import \{ ServiceItem, ServicesPageData \} from "@\/types";/, "import { ServiceItem } from \"@/types\";");
    c = c.replace(/const \{ servicesPageData \} = data as \{ servicesPageData: ServicesPageData \};\nconst \{ servicesData \} = servicesPageData;/, "const { servicesData } = data as { servicesData: ServiceItem[] };");
    return c;
});

console.log("Fixed all files");

