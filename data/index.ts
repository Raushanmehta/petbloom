import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type PetBloomSchema = typeof siteData.PetBloom;
export type PetBloomSections = PetBloomSchema["sections"];
export type PetBloomTemplateComponents = PetBloomSchema["templateComponents"];

// Reference schema convention aliases
export type ServicesSchema = PetBloomSchema;
export type ServicesSections = PetBloomSections;
export type ServicesTemplateComponents = PetBloomTemplateComponents;

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type PetBloomNavbarData = PetBloomSections["navbar"]["variants"]["PetBloomNavbar1"];
export type PetBloomPageTopSectionData = PetBloomSections["pageTopSection"]["variants"]["PetBloomPageTopSection1"];
export type PetBloomServicesData = PetBloomSections["services"]["variants"]["PetBloomServices1"];
export type PetBloomTeamData = PetBloomSections["team"]["variants"]["PetBloomTeam1"];
export type PetBloomLocationsData = PetBloomSections["locations"]["variants"]["PetBloomLocations1"];
export type PetBloomPricingData = PetBloomSections["pricing"]["variants"]["PetBloomPricing1"];
export type PetBloomPartnersData = PetBloomSections["partners"]["variants"]["PetBloomPartners1"];
export type PetBloomGalleryData = PetBloomSections["gallery"]["variants"]["PetBloomGallery1"];
export type PetBloomAppointmentData = PetBloomSections["appointment"]["variants"]["PetBloomAppointment1"];
export type PetBloomLegalPageData = PetBloomSections["legalPage"]["variants"]["PetBloomLegalPage1"];
export type PetBloomNotFoundData = PetBloomSections["notFound"]["variants"]["PetBloomNotFound1"];
export type PetBloomSitemapData = PetBloomSections["sitemap"]["variants"]["PetBloomSitemap1"];
export type PetBloomBlogData = PetBloomSections["blog"]["variants"]["PetBloomBlog1"];
export type PetBloomWhyChooseUsData = PetBloomSections["whyChooseUs"]["variants"]["PetBloomWhyChooseUs1"];
export type PetBloomStatsSectionData = PetBloomSections["statsSection"]["variants"]["PetBloomStatsSection1"];
export type PetBloomHeroData = PetBloomSections["hero"]["variants"]["PetBloomHero1"];
export type PetBloomAboutData = PetBloomSections["about"]["variants"]["PetBloomAbout1"];
export type PetBloomTestimonialsData = PetBloomSections["testimonials"]["variants"]["PetBloomTestimonials1"];
export type PetBloomFaqsPageData = PetBloomSections["faqsPage"]["variants"]["PetBloomFaqsPage1"];
export type PetBloomMissionVisionData = PetBloomSections["missionVision"]["variants"]["PetBloomMissionVision1"];
export type PetBloomContactPageData = PetBloomSections["contactPage"]["variants"]["PetBloomContactPage1"];
export type PetBloomFooterData = PetBloomSections["footer"]["variants"]["PetBloomFooter1"];

// ── Inferred Sub-item Data Models ──
export type ServiceItem = PetBloomServicesData["services"][number];
export type TeamMember = PetBloomTeamData["teams"][number];
export type LocationItem = PetBloomLocationsData["locations"][number];
export type PricingPackage = PetBloomPricingData["pricingPackages"][number];
export type PartnerItem = PetBloomPartnersData["partners"][number];
export type PhotoItem = PetBloomGalleryData["photos"][number];
export type VideoItem = PetBloomGalleryData["videos"][number];
export type PolicyItem = PetBloomLegalPageData["policies"][number];
export type BlogPost = PetBloomBlogData["blogs"][number];
export type BlogItem = BlogPost;
export type WhyChooseUsFeature = PetBloomWhyChooseUsData["features"][number];
export type StatItem = PetBloomStatsSectionData[number];
export type HeroSlide = PetBloomHeroData["slides"][number];
export type AboutFeature = PetBloomAboutData["features"][number];
export type TestimonialItem = PetBloomTestimonialsData["testimonials"][number];
export type FaqItem = PetBloomFaqsPageData["faqs"][number];
export type ContactInfoCard = PetBloomContactPageData["infoCards"][number];
export type SitemapCategory = PetBloomSitemapData["categories"][number];
export type NavItem = PetBloomNavbarData[number];
export type NavLink = NavItem;
export type Team = TeamMember;
export type Location = LocationItem;
export type Testimonial = TestimonialItem;

// ── Convenience & Plumbio Compatibility Aliases ──
export type ServicesNavbarData = PetBloomNavbarData;
export type ServicesPageTopSectionData = PetBloomPageTopSectionData;
export type ServicesHeroData = PetBloomHeroData;
export type ServicesAboutData = PetBloomAboutData;
export type ServicesWhyChooseData = PetBloomWhyChooseUsData;
export type ServicesWhyChooseUsData = PetBloomWhyChooseUsData;
export type ServicesServicesData = PetBloomServicesData;
export type ServicesTeamData = PetBloomTeamData;
export type ServicesLocationsData = PetBloomLocationsData;
export type ServicesPricingData = PetBloomPricingData;
export type ServicesPartnersData = PetBloomPartnersData;
export type ServicesGalleryData = PetBloomGalleryData;
export type ServicesAppointmentData = PetBloomAppointmentData;
export type ServicesLegalPageData = PetBloomLegalPageData;
export type ServicesNotFoundData = PetBloomNotFoundData;
export type ServicesSitemapData = PetBloomSitemapData;
export type ServicesBlogData = PetBloomBlogData;
export type ServicesStatsSectionData = PetBloomStatsSectionData;
export type ServicesTestimonialsData = PetBloomTestimonialsData;
export type ServicesFAQData = PetBloomFaqsPageData;
export type ServicesFaqsPageData = PetBloomFaqsPageData;
export type ServicesMissionVisionData = PetBloomMissionVisionData;
export type ServicesContactPageData = PetBloomContactPageData;
export type ServicesFooterData = PetBloomFooterData;

// Short Aliases
export type HeroData = PetBloomHeroData;
export type AboutData = PetBloomAboutData;
export type WhyChooseUsData = PetBloomWhyChooseUsData;
export type StatsSectionData = PetBloomStatsSectionData;
export type TeamData = PetBloomTeamData;
export type TestimonialsData = PetBloomTestimonialsData;
export type TestimonialData = PetBloomTestimonialsData;
export type BlogData = PetBloomBlogData;
export type ServicesData = PetBloomServicesData;
export type LocationsData = PetBloomLocationsData;
export type FaqData = PetBloomFaqsPageData;
export type PricingData = PetBloomPricingData;
export type GalleryData = PetBloomGalleryData;
export type PartnersData = PetBloomPartnersData;
export type AppointmentData = PetBloomAppointmentData;
export type LegalPageData = PetBloomLegalPageData;
export type MissionVisionData = PetBloomMissionVisionData;
export type ContactData = PetBloomContactPageData;
export type FooterData = PetBloomFooterData;
export type NavbarData = PetBloomNavbarData;

// ── Canonical Mapped Site Data Object ──
const sec = siteData.PetBloom.sections;

const siteMap = {
  navbar: sec.navbar.variants.PetBloomNavbar1,
  pageTopSection: sec.pageTopSection.variants.PetBloomPageTopSection1,
  services: sec.services.variants.PetBloomServices1,
  team: sec.team.variants.PetBloomTeam1,
  locations: sec.locations.variants.PetBloomLocations1,
  pricing: sec.pricing.variants.PetBloomPricing1,
  partners: sec.partners.variants.PetBloomPartners1,
  gallery: sec.gallery.variants.PetBloomGallery1,
  appointment: sec.appointment.variants.PetBloomAppointment1,
  legalPage: sec.legalPage.variants.PetBloomLegalPage1,
  notFound: sec.notFound.variants.PetBloomNotFound1,
  sitemap: sec.sitemap.variants.PetBloomSitemap1,
  blog: sec.blog.variants.PetBloomBlog1,
  whyChooseUs: sec.whyChooseUs.variants.PetBloomWhyChooseUs1,
  statsSection: sec.statsSection.variants.PetBloomStatsSection1,
  hero: sec.hero.variants.PetBloomHero1,
  about: sec.about.variants.PetBloomAbout1,
  testimonials: sec.testimonials.variants.PetBloomTestimonials1,
  faqsPage: sec.faqsPage.variants.PetBloomFaqsPage1,
  missionVision: sec.missionVision.variants.PetBloomMissionVision1,
  contactPage: sec.contactPage.variants.PetBloomContactPage1,
  footer: sec.footer.variants.PetBloomFooter1,

  // Compatibility section shortcuts
  navLinks: sec.navbar.variants.PetBloomNavbar1,
  pageTopSectionData: sec.pageTopSection.variants.PetBloomPageTopSection1,
  servicesData: sec.services.variants.PetBloomServices1,
  teamData: sec.team.variants.PetBloomTeam1,
  locationsData: sec.locations.variants.PetBloomLocations1,
  pricingData: sec.pricing.variants.PetBloomPricing1,
  partnersData: sec.partners.variants.PetBloomPartners1,
  galleryData: sec.gallery.variants.PetBloomGallery1,
  appointmentData: sec.appointment.variants.PetBloomAppointment1,
  legalData: sec.legalPage.variants.PetBloomLegalPage1,
  "404Data": sec.notFound.variants.PetBloomNotFound1,
  sitemapData: sec.sitemap.variants.PetBloomSitemap1,
  blogData: sec.blog.variants.PetBloomBlog1,
  whychooseData: sec.whyChooseUs.variants.PetBloomWhyChooseUs1,
  statisticsData: sec.statsSection.variants.PetBloomStatsSection1,
  heroData: sec.hero.variants.PetBloomHero1,
  aboutData: sec.about.variants.PetBloomAbout1,
  testimonialData: sec.testimonials.variants.PetBloomTestimonials1,
  faqData: sec.faqsPage.variants.PetBloomFaqsPage1,
  missionVisionData: sec.missionVision.variants.PetBloomMissionVision1,
  contactData: sec.contactPage.variants.PetBloomContactPage1,
  footerData: sec.footer.variants.PetBloomFooter1,

  // Root Tree
  PetBloom: siteData.PetBloom,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default siteData;
