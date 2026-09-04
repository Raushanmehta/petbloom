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

// SERVICE AREAS SECTION TYPES
export interface ServiceArea {
    id: string;
    title: string;
    image: string;
}

// SERVICES SECTION TYPES
export interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}

// WHY CHOOSE US SECTION TYPES
export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

// TEAM SECTION TYPES
export interface Team {
    id: string;
    name: string;
    role: string;
    image: string;
}

export interface TeamSectionData {
    badgeText: string;
    titleWhite: string;
    titleColored: string;
    description: string;
    teamMembers: Team[];
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
