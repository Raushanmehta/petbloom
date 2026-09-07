"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { headerContainer, fadeUp, cardsContainer, cardAnimation, } from "@/utils/animations";
import LocationCard from "@/components/cards/LocationCard";
import data from "@/data/data.json";
import { LocationDataWrapper } from "@/types";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const { locationsData } = data as { locationsData: LocationDataWrapper };

export default function LocationSection() {
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
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-8">

            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-16 top-12 hidden flex-col items-center text-[#387478] lg:flex xl:left-24"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-15, -10, -15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}>
                    <FaPaw className="h-24 w-24 rotate-[-15deg]" />
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
                className="absolute right-16 top-12 hidden flex-col items-center text-[#387478] lg:flex xl:right-24"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [15, 10, 15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}>
                    <FaPaw className="h-24 w-24 rotate-[15deg]" />
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

            <motion.div
                className="relative z-10 mx-auto max-w-[1300px] text-center"
                variants={headerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Badge */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md"
                >
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, }}>
                        <MapPin className="h-6 w-6 text-[#387478]" />
                    </motion.div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                        {locationsData.sectionData.badgeText}
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={fadeUp}
                    className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}
                >
                    {locationsData.sectionData.titleWhite} <span className="text-[#387478]">{locationsData.sectionData.titleColored}</span>
                </motion.h2>

                {/* Divider */}
                <motion.div
                    variants={fadeUp}
                    className="mx-auto mt-4 flex items-center justify-center gap-4"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-[2px] rounded-full bg-[#387478]/30"
                    />

                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                        <FaPaw className="h-6 w-6 text-[#387478]" />
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-[2px] rounded-full bg-[#387478]/30"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-4 max-w-xl text-base font-medium text-gray-600 sm:text-lg"
                >
                    {locationsData.sectionData.descriptionPart1 ? (
                        <>
                            {locationsData.sectionData.descriptionPart1}
                            <span className="font-bold text-[#387478]">{locationsData.sectionData.descriptionPart2}</span>
                        </>
                    ) : (
                        locationsData.sectionData.description
                    )}
                </motion.p>
            </motion.div>

            <motion.div
                className="relative z-10 mx-auto mt-14 max-w-7xl px-2 sm:px-6"
                variants={cardsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Left Arrow */}
                <motion.button
                    variants={fadeUp}
                    onClick={() => scroll("left")}
                    whileHover={{ scale: 1.12, x: -3, }}
                    whileTap={{ scale: 0.9, }}
                    className="absolute -left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#387478] text-white shadow-xl sm:-left-6"
                    aria-label="Scroll left">
                    <ChevronLeft className="h-6 w-6" />
                </motion.button>

                {/* Right Arrow */}
                <motion.button
                    variants={fadeUp}
                    onClick={() => scroll("right")}
                    whileHover={{ scale: 1.12, x: 3, }}
                    whileTap={{ scale: 0.9, }}
                    className="absolute -right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#387478] text-white shadow-xl sm:-right-6"
                    aria-label="Scroll right">
                    <ChevronRight className="h-6 w-6" />
                </motion.button>

                {/* Cards */}
                <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 no-scrollbar"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {locationsData.locations.map((locationItem, index) => (
                        <motion.div
                            key={`${locationItem.id}-${index}`}
                            variants={cardAnimation}
                            className="w-[280px] shrink-0 snap-center sm:w-[320px] lg:w-[calc(20%-1.2rem)]"
                        >
                            <LocationCard location={locationItem} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative z-10 mt-8 flex justify-center gap-2"
            >
                <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, }}
                    className="h-3 w-3 rounded-full bg-[#387478]"
                />

                <span className="h-3 w-3 rounded-full bg-[#387478]/30" />
                <span className="h-3 w-3 rounded-full bg-[#387478]/30" />
            </motion.div>
        </section>
    );
}

