export const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
export const columnVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
export const linkContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
export const linkItemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
export const fadeUpVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
export const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } } };
export const featureVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
export const featureContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
export const headerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
export const statVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
export const cardsContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const cardAnimation = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
export const cardVariant = { hidden: { opacity: 0, y: 50, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } } };
export const heroContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.18 }, }, exit: { opacity: 0, transition: { duration: 0.2 }, }, };
export const heroHeadingVariants = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const }, }, };
export const heroButtonsVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const }, }, };
export const statisticsContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } } };
export const statisticsItemVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } } };
export const teamHeaderContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const teamFadeUpVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
export const teamCardsContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
export const teamCardVariants = { hidden: { opacity: 0, y: 60, scale: 0.94 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } } };
// Testimonials
export const testimonialHeaderContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const testimonialFadeUpVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
export const testimonialCarouselVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: "easeOut" as const } } };
export const testimonialCardContentContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const testimonialCardFadeUpVariants = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
export const testimonialStarContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
export const testimonialStarVariants = { hidden: { opacity: 0, scale: 0, rotate: -30 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 260, damping: 14 } } };
// FAQ Section
export const faqHeaderContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const faqFadeUpVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
export const faqContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const faqItemVariants = { hidden: { opacity: 0, x: 50, y: 15 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
export const faqAnswerVariants = { hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.05, ease: "easeOut" as const } } };
// Blog Section
export const blogContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const blogFadeUpVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };
export const blogFeaturedVariants = { hidden: { opacity: 0, x: -50, scale: 0.97 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };
export const blogSideContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
export const blogSideCardVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };
// Mission Vision Section
export const missionHeaderContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
export const missionFadeUpVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };
export const missionCardsContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
export const missionLeftCardVariants = { hidden: { opacity: 0, x: -70, scale: 0.96 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };
export const missionCenterImageVariants = { hidden: { opacity: 0, y: 50, scale: 0.94 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } } };
export const missionRightCardVariants = { hidden: { opacity: 0, x: 70, scale: 0.96 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };
// Services Section
export const servicesHeaderContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
export const servicesFadeUpVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
export const breadcrumbVariants = { hidden: { opacity: 0, y: -15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
export const heroItemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
export const featureItemVariants = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } } };
export const sectionVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } } };
export const includedContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
export const includedItemVariants = { hidden: { opacity: 0, y: 25, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } } };
export const sidebarVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
export const sidebarItemVariants = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };
export const servicesCardsContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
// Team Detail Page
export const teamDetailContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1, }, }, };
export const teamDetailLeftCardVariants = { hidden: { opacity: 0, x: -50, scale: 0.96 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: "easeOut" as const }, }, };
export const teamDetailRightCardVariants = { hidden: { opacity: 0, x: 50, scale: 0.96 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: "easeOut" as const }, }, };
export const teamDetailBottomCardVariants = { hidden: { opacity: 0, y: 40, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const }, }, };
export const teamDetailItemVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const }, }, };
// Pricing Section
export const pricingFadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };
export const pricingFadeUpFast = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
export const pricingCardContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
export const pricingCardVariants = { hidden: { opacity: 0, y: 70, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };
export const pricingFeatureContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
export const pricingFeatureVariants = { hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } } };
export const pricingIconVariants = { hidden: { scale: 0, rotate: -45 }, visible: { scale: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 300, damping: 15 } } };

