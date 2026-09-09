// COMMON SECTION TYPES
export interface SectionHeaderData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description?: string;
    descriptionPart1?: string;
    descriptionPart2?: string;
    button?: { label: string; href: string };
    images?: { main: string; badgeIcon?: string };
    badge?: { text1?: string; text2?: string; line1?: string; line2?: string };
}

export interface StatisticsItem {
    id: string;
    count: string;
    label: string;
    icon?: string;
}

// HERO  TYPES
export interface HeroSlide {
    id: number;
    titleWhite: string;
    titleColored: string;
    description: string;
    image: string;
}

export interface HeroData {
    slides: HeroSlide[];
    button1: { label: string; href: string };
    button2: { label: string; href: string };
}

// ABOUT SECTION TYPES
export interface AboutHeaderData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description1: string;
    description2: string;
}

export interface AboutFeature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface AboutDataWrapper {
    pageData: AboutHeaderData;
    sectionData: AboutHeaderData;
    features: AboutFeature[];
    images: { main: string; secondary: string; badgeIcon: string };
    badge: { line1: string; line2: string; line3: string };
}

export type AboutSectionData = AboutDataWrapper;

// location SECTION TYPES
export interface LocationFeature {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
}

export interface TrustFeatureItem {
    id: string;
    icon: string;
    title: string;
}

export interface BookServiceCardData {
    title: string;
    icon: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    buttonIcon?: string;
    helpText: string;
    helpPhone: string;
    helpIcon: string;
}

export interface LocationDetail {
    heroImage: string;
    heroImageAlt?: string;
    title: string;
    titleHighlight: string;
    titleIcon?: string;
    description: string;
    features: LocationFeature[];
    aboutTitle: string;
    aboutIcon: string;
    aboutDescription: string;
    aboutImage: string;
    aboutImageAlt?: string;
    trustTitle: string;
    trustFeatures: TrustFeatureItem[];
    sidebarTitle: string;
    sidebarIcon: string;
    bookService: BookServiceCardData;
}

export interface Location {
    id: string;
    name: string;
    title?: string;
    image: string;
    slug?: string;
    active?: boolean;
    detail?: LocationDetail;
}

export type location = Location;
export type LocationItem = Location;
export type ServiceArea = Location;

export interface LocationDataWrapper {
    pageData: SectionHeaderData;
    sectionData: SectionHeaderData;
    locations: LocationItem[];
}

// SERVICES SECTION TYPES
export interface ServiceDetailFeature {
    icon: string;
    title: string;
}

export interface ServiceDetailIncludedFeature {
    id: string;
    title: string;
    description: string;
}

export interface ServiceDetail {
    heroTitle: string;
    heroTitleHighlight: string;
    heroDescription: string;
    heroFeatures: ServiceDetailFeature[];
    overviewText1: string;
    overviewText2: string;
    overviewImage: string;
    includedFeatures: ServiceDetailIncludedFeature[];
}

export interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    slug: string;
    icon: string;
    detail: ServiceDetail;
}

// WHY CHOOSE US SECTION TYPES
export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

export interface WhyChooseDataWrapper {
    pageData: SectionHeaderData;
    sectionData: SectionHeaderData;
    images?: { main: string };
    badge?: { line1?: string; line2?: string };
    features: (FeatureItem & { icon: string })[];
}

// TEAM SECTION TYPES
export interface TeamSkillItem {
    id: string;
    title: string;
    percentage: number;
    icon: string;
}

export interface TeamDetail {
    bio: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    experience: string;
    aboutMeText1: string;
    aboutMeText2: string;
    skillsDescription: string;
    skills: TeamSkillItem[];
}

export interface Team {
    id: string;
    name: string;
    slug?: string;
    role: string;
    image: string;
    detail?: TeamDetail;
}

export interface TeamDataWrapper {
    pageData: SectionHeaderData;
    sectionData: SectionHeaderData;
    teams: Team[];
}

export interface TeamSectionData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description: string;
    teamMembers?: Team[];
    teams?: Team[];
}

// TESTIMONIAL SECTION TYPES
export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    image: string;
}

export interface TestimonialDataWrapper {
    pageData: SectionHeaderData;
    sectionData: SectionHeaderData;
    image: string;
    testimonials: Testimonial[];
}

export type TestimonialSectionData = TestimonialDataWrapper;

// FAQ SECTION TYPES
export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FaqDataWrapper {
    pageData: SectionHeaderData;
    sectionData: SectionHeaderData;
    image: string;
    faqs: FAQItem[];
}

export type FaqSectionData = FaqDataWrapper;

// BLOG SECTION TYPES
export interface BlogPost {
    id: string;
    title: string;
    excerpt?: string;
    category: string;
    date: string;
    image?: string;
    heroImage?: string;
    featured?: boolean;
    author?: string;
    readTime?: string;
    introText?: string;
    sections?: BlogDetailSection[];
}

export interface BlogSectionData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description: string;
}

// PAGE TOP SECTION
export interface PageTopSectionData {
    backgroundImage: string;
    backgroundAlt: string;
}

// MISSION VISION SECTION
export interface MissionVisionHeader {
    badgeText: string;
    titleStart: string;
    titleHighlight1: string;
    titleMiddle: string;
    titleHighlight2: string;
}

export interface MissionVisionDataWrapper {
    pageData: MissionVisionHeader;
    sectionData: MissionVisionHeader;
    centerImage: {
        src: string;
        alt: string;
    };
    mission: {
        iconName: string;
        title: string;
        description: string;
        themeColor: string;
        borderColor: string;
        bgAccent: string;
    };
    vision: {
        iconName: string;
        title: string;
        description: string;
        themeColor: string;
        borderColor: string;
        bgAccent: string;
    };
}

export type MissionVisionSectionData = MissionVisionDataWrapper;

export interface ServicesPageData extends SectionHeaderData {
    servicesData: ServiceItem[];
}

export interface ServicesSectionData {
    badgeText: string;
    titleBlack: string;
    titleWhite?: string;
    titleColored?: string;
    description: string;
}

export interface ServicesDataWrapper {
    pageData: SectionHeaderData;
    sectionData: ServicesSectionData;
    services: ServiceItem[];
}

// PRICING SECTION TYPES
export interface PricingPackage {
    id: string;
    name: string;
    description: string;
    price: string;
    popular?: boolean;
    features: string[];
}

export interface PricingDataWrapper {
    pageData: SectionHeaderData;
    pricingPackages: PricingPackage[];
}

// PARTNERS SECTION TYPES
export interface Partner {
    id: string;
    name: string;
    tagline: string;
    logoImage: string;
    logoColor?: string;
}

export interface PartnersDataWrapper {
    pageData: SectionHeaderData;
    partners: Partner[];
}

// GALLERY SECTION TYPES
export interface PhotoItem {
    id: string;
    image: string;
    alt: string;
}

export interface VideoItem {
    id: string;
    title: string;
    description: string;
    duration: string;
    image: string;
}

export interface GalleryDataWrapper {
    pageData: SectionHeaderData;
    videoPageData?: SectionHeaderData;
    photos: PhotoItem[];
    videos: VideoItem[];
}

// APPOINTMENT SECTION TYPES
export interface AppointmentFeature {
    icon: string;
    title: string;
}

export interface AppointmentSectionData {
    bannerImage: string;
    bannerTitleWhite: string;
    bannerTitleColored: string;
    bannerDescription: string;
    features: AppointmentFeature[];
    formTitleBlack: string;
    formTitleColored: string;
    formDescription: string;
}

export interface AppointmentDataWrapper {
    pageData: SectionHeaderData;
    appointment: AppointmentSectionData;
}

// LEGAL TYPES
export interface LegalItem {
    id: string;
    number: string;
    title: string;
    content: string;
}

export interface LegalDataWrapper {
    pageData: SectionHeaderData;
    introDescription: string;
    policies: PolicyItem[];
    contactEmail: string;
    contactPhoneDisplay: string;
    contactPhoneValue: string;
}

// PRIVACY POLICY TYPES
export interface PolicyItem {
    id: string;
    number: string;
    title: string;
    content: string;
}

export interface LDataWrapper {
    pageData: SectionHeaderData;
    introDescription: string;
    policies: PolicyItem[];
    contactEmail: string;
    contactPhoneDisplay: string;
    contactPhoneValue: string;
}

// NOT FOUND PAGE TYPES
export interface NotFoundData {
    badgeText: string;
    titleWhite: string;
    description: string;
    homeButtonText: string;
    servicesButtonText: string;
    servicesButtonLink: string;
    bgImage: string;
    dogImage: string;
}

// SITEMAP TYPES
export interface SitemapLink {
    label: string;
    href: string;
}

export interface SitemapCategory {
    id: string;
    number: string;
    title: string;
    iconType: string;
    links: SitemapLink[];
}

export interface SitemapData {
    pageData: {
        title?: string;
        subTitle?: string;
        badgeText?: string;
        titleWhite?: string;
        titleColored?: string;
        description?: string;
    };
    categories: SitemapCategory[];
}
export interface BlogDetailSection {
    id: string;
    number: string;
    title: string;
    content: string;
    subheading?: string;
    bullets?: string[];
    footerNote?: string;
    quote?: { text: string; author: string };
    image?: string;
    images?: string[];
    imagePosition: 'right' | 'bottom-banner' | 'split-right' | 'full-bottom-image';
}

export interface BlogDetailData {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    heroImage: string;
    introText: string;
    sections: BlogDetailSection[];
}

export interface BlogDataWrapper {
    pageData: SectionHeaderData;
    sectionData: SectionHeaderData;
    blogs: BlogPost[];
    blogDetailData?: BlogDetailData;
}

// CONTACT SECTION TYPES
export interface ContactHeaderData {
    badgeText?: string;
    titleWhite?: string;
    titleColored?: string;
    brandStart?: string;
    brandEnd?: string;
    titleStart?: string;
    titleMiddle?: string;
    description?: string;
}

export interface ContactInfoCard {
    id: string;
    icon: string;
    title: string;
    lines: string[];
}

export interface ContactSocialLink {
    id: string;
    platform: string;
    href: string;
}

export interface ContactSocialSection {
    titleWhite: string;
    titleColored: string;
    description: string;
    links: ContactSocialLink[];
}

export interface ContactFormSelectOption {
    value: string;
    label: string;
}

export interface ContactFormData {
    titleWhite: string;
    titleColored: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    datePlaceholder?: string;
    messagePlaceholder?: string;
    subjects: ContactFormSelectOption[];
    timeSlots: ContactFormSelectOption[];
    submitButtonText: string;
    privacyNotice: string;
    successMessage?: string;
}

export interface ContactDataWrapper {
    pageData: ContactHeaderData;
    sectionData: ContactHeaderData;
    infoCards: ContactInfoCard[];
    social: ContactSocialSection;
    illustrationImage: {
        src: string;
        alt: string;
    };
    form: ContactFormData;
}

export type ContactSectionData = ContactDataWrapper;
