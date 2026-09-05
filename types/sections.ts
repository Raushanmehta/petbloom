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

// HERO SECTION TYPES
export interface HeroSlide {
    id: number;
    titleWhite: string;
    titleColored: string;
    description: string;
    image: string;
}

export interface HeroSectionData {
    slides: HeroSlide[];
    button1: { label: string; href: string };
    button2: { label: string; href: string };
}

// ABOUT SECTION TYPES
export interface AboutSectionData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description1: string;
    description2: string;
    features: { id: string; icon: string; title: string; description: string }[];
    images: { main: string; secondary: string; badgeIcon: string };
    badge: { line1: string; line2: string; line3: string };
}

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
    locationsData: LocationItem[];
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

export interface TestimonialSectionData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description: string;
    image: string;
    testimonials: Testimonial[];
}

// FAQ SECTION TYPES
export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FaqSectionData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description: string;
    image: string;
    faqs: FAQItem[];
}

// BLOG SECTION TYPES
export interface BlogPost {
    id: string;
    title: string;
    excerpt?: string;
    category: string;
    date: string;
    image: string;
    featured?: boolean;
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
export interface MissionVisionSectionData {
    header: {
        badgeText: string;
        titleStart: string;
        titleHighlight1: string;
        titleMiddle: string;
        titleHighlight2: string;
    };
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
