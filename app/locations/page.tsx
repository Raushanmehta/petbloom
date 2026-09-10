"use client";

import { useRef } from "react";
import PageTopSection from "@/components/common/PageTopSection";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { cardAnimation, cardsContainer, fadeUp, headerContainer } from "@/utils/animations";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import LocationCard from "@/components/cards/LocationCard";
import { site } from "@/data";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const locationsData = site.locations;

export default function LocationsPage() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.75;

        scrollRef.current.scrollTo({
            left:
                direction === "left"
                    ? scrollLeft - scrollAmount
                    : scrollLeft + scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <main>
            <PageTopSection title="Our Locations" subTitle="Our Locations" />
            <section className="relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20">
                {/* Decorative Background Graphics */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 0.1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="pointer-events-none absolute left-8 top-12 hidden flex-col items-center text-[#387478] lg:flex xl:left-16"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [-15, -10, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-20 w-20 xl:h-24 xl:w-24 rotate-[-15deg]" />
                    </motion.div>

                    <svg
                        className="mt-2 h-72 w-32 overflow-visible opacity-80"
                        viewBox="0 0 200 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 100 0 C 160 80, 80 200, -20 300"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeDasharray="10 16"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 0.1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="pointer-events-none absolute right-8 top-12 hidden flex-col items-center text-[#387478] lg:flex xl:right-16"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [15, 10, 15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-20 w-20 xl:h-24 xl:w-24 rotate-[15deg]" />
                    </motion.div>

                    <svg
                        className="mt-2 h-72 w-32 overflow-visible opacity-80"
                        viewBox="0 0 200 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 100 0 C 40 80, 120 200, 220 300"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeDasharray="10 16"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.div>

                <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        className="mx-auto max-w-2xl text-center"
                        variants={headerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md"
                        >
                            <motion.div
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                            </motion.div>

                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {locationsData.pageData.badgeText}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            className={`${lilitaOne.className} mt-4 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-tight`}
                        >
                            {locationsData.pageData.titleWhite} <span className="text-[#387478]">{locationsData.pageData.titleColored}</span>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUp}
                            className="mx-auto mt-4 flex items-center justify-center gap-3 sm:gap-4"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="h-[2px] rounded-full bg-[#387478]/30 w-8 sm:w-12"
                            />

                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                            </motion.div>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="h-[2px] rounded-full bg-[#387478]/30 w-8 sm:w-12"
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed"
                        >
                            {locationsData.pageData.description}
                        </motion.p>
                    </motion.div>

                    {/* Carousel Container */}
                    <motion.div
                        className="relative mx-auto mt-12 sm:mt-14"
                        variants={cardsContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* Left Arrow */}
                        <motion.button
                            variants={fadeUp}
                            onClick={() => scroll("left")}
                            whileHover={{ scale: 1.1, x: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -left-2 sm:-left-4 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#387478] text-white shadow-xl backdrop-blur-sm"
                            aria-label="Scroll left">
                            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.button>

                        {/* Right Arrow */}
                        <motion.button
                            variants={fadeUp}
                            onClick={() => scroll("right")}
                            whileHover={{ scale: 1.1, x: 2 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -right-2 sm:-right-4 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#387478] text-white shadow-xl backdrop-blur-sm"
                            aria-label="Scroll right">
                            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.button>

                        {/* Cards Carousel */}
                        <div
                            ref={scrollRef}
                            className="flex snap-x snap-mandatory gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 no-scrollbar"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {locationsData.locations.map((location, index) => (
                                <motion.div
                                    key={`${location.id}-${index}`}
                                    variants={cardAnimation}
                                    className="w-[260px] shrink-0 snap-center sm:w-[300px] lg:w-[calc(20%-1.2rem)]"
                                >
                                    <LocationCard location={location} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pagination Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 sm:mt-8 flex justify-center gap-2"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#387478]"
                        />
                        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#387478]/30" />
                        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#387478]/30" />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}