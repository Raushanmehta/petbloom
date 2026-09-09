import rawData from "./data.json";

const siteData: any = {};
const actualData: any = (rawData as any).default || rawData;

const templateKey = Object.keys(actualData).find(
    (k) => actualData[k]?.sections
);

if (templateKey && actualData[templateKey]?.sections) {
    const sections: any = actualData[templateKey].sections;
    for (const key of Object.keys(sections)) {
        const variantKey = Object.keys(sections[key].variants)[0];
        const val = sections[key].variants[variantKey];
        siteData[key] = val;
        // Also provide backward-compatible raw keys
        siteData[`${key}Data`] = val;
    }
    // Specific aliases for backward compatibility
    if (siteData.navbar) siteData.navLinks = siteData.navbar;
    if (siteData.whyChooseUs) siteData.whychooseData = siteData.whyChooseUs;
    if (siteData.faqsPage) siteData.faqData = siteData.faqsPage;
    if (siteData.statsSection) siteData.statisticsData = siteData.statsSection;
    if (siteData.locations) siteData.locationsData = siteData.locations;
    if (siteData.appointment) siteData.appointmentData = siteData.appointment;
    if (siteData.legalPage) siteData.legalData = siteData.legalPage;
    if (siteData.notFound) siteData["404Data"] = siteData.notFound;
    if (siteData.pageTopSection) siteData.pageTopSectionData = siteData.pageTopSection;
} else {
    Object.assign(siteData, actualData);
}

export default siteData;
