const fs = require("fs");

const dataPath = "c:/Users/raush/Desktop/css/pet-bloom/data/data.json";
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

if (data.servicesData) {
  data.servicesPageData = {
    badgeText: "Our Services",
    titleWhite: "Premium Care For ",
    titleColored: "Your Pet",
    description: "We offer a wide range of professional services to keep your furry friends happy, healthy, and looking their absolute best.",
    servicesData: data.servicesData
  };
  delete data.servicesData;
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
} else {
  console.log("No servicesData found at root");
}

const typesPath = "c:/Users/raush/Desktop/css/pet-bloom/types/sections.ts";
let types = fs.readFileSync(typesPath, "utf8");
if (!types.includes("ServicesPageData")) {
    types += "\nexport interface ServicesPageData extends SectionHeaderData {\n    servicesData: ServiceItem[];\n}\n";
    fs.writeFileSync(typesPath, types);
}

function replaceInFile(path, replacer) {
    let content = fs.readFileSync(path, "utf8");
    content = replacer(content);
    fs.writeFileSync(path, content);
}

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/components/layout/Navbar.tsx", (c) => {
    if (c.includes("import { ServicesPageData }")) return c;
    c = c.replace(
        /import \{ NavLink, ServiceItem \} from "@\/types";/,
        "import { NavLink, ServiceItem, ServicesPageData } from \"@/types\";"
    );
    c = c.replace(
        /const \{ navLinks, contactPhone, servicesData \} = data as \{ navLinks: NavLink\[\], contactPhone: string, servicesData: ServiceItem\[\] \};/,
        "const { navLinks, contactPhone, servicesPageData } = data as { navLinks: NavLink[], contactPhone: string, servicesPageData: ServicesPageData };\nconst { servicesData } = servicesPageData;"
    );
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/sections/home/ServicesSection.tsx", (c) => {
    if (c.includes("import { ServicesPageData }")) return c;
    c = c.replace(
        /import \{ ServiceItem, SectionHeaderData \} from "@\/types";/,
        "import { ServiceItem, SectionHeaderData, ServicesPageData } from \"@/types\";"
    );
    c = c.replace(
        /const \{ servicesData, servicesPageData \} = data as \{\s*servicesData: ServiceItem\[\];\s*servicesPageData: SectionHeaderData;\s*\};/m,
        "const { servicesPageData } = data as { servicesPageData: ServicesPageData };\nconst { servicesData } = servicesPageData;"
    );
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/page.tsx", (c) => {
    if (c.includes("import { ServicesPageData }")) return c;
    c = c.replace(
        /import \{ ServiceItem, SectionHeaderData \} from "@\/types";/,
        "import { ServiceItem, SectionHeaderData, ServicesPageData } from \"@/types\";"
    );
    c = c.replace(
        /const \{ servicesData, servicesPageData \} = data as \{\s*servicesData: ServiceItem\[\];\s*servicesPageData: SectionHeaderData;\s*\};/m,
        "const { servicesPageData } = data as { servicesPageData: ServicesPageData };\nconst { servicesData } = servicesPageData;"
    );
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/app/services/[slug]/page.tsx", (c) => {
    if (c.includes("import { ServicesPageData }")) return c;
    c = c.replace(
        /import \{ ServiceItem \} from "@\/types";/,
        "import { ServiceItem, ServicesPageData } from \"@/types\";"
    );
    c = c.replace(
        /const \{ servicesData \} = data as \{ servicesData: ServiceItem\[\] \};/,
        "const { servicesPageData } = data as { servicesPageData: ServicesPageData };\nconst { servicesData } = servicesPageData;"
    );
    return c;
});

replaceInFile("c:/Users/raush/Desktop/css/pet-bloom/pages/ServiceDetailPage.tsx", (c) => {
    if (c.includes("import { ServicesPageData }")) return c;
    c = c.replace(
        /import \{ ServiceItem \} from "@\/types";/,
        "import { ServiceItem, ServicesPageData } from \"@/types\";"
    );
    c = c.replace(
        /const \{ servicesData \} = data as \{\s*servicesData: ServiceItem\[\];\s*\};/m,
        "const { servicesPageData } = data as { servicesPageData: ServicesPageData };\nconst { servicesData } = servicesPageData;"
    );
    return c;
});

console.log("Done");

