"use client";

import React from "react";
import Image from "next/image";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import { Scissors, Leaf, Heart } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One, Courgette } from "next/font/google";
import { AboutDataWrapper } from "@/types";
import { containerVariants, fadeUpVariants, featureVariants } from "@/utils/animations";

const IconMap: Record<string, React.ElementType> = {
    scissors: Scissors,
    leaf: Leaf,
    heart: Heart
};

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const courgette = Courgette({
    subsets: ["latin"],
    weight: "400",
});

interface AboutSectionProps {
    isPage?: boolean;
}

export default function AboutSection({ isPage = false }: AboutSectionProps) {
    const rawAbout = (data as unknown as { aboutData: AboutDataWrapper })?.aboutData;
    const headerData = (isPage ? rawAbout?.pageData : rawAbout?.sectionData) || {
        badgeText: "About Us",
        titleWhite: "Where Pets Look Great",
        titleColored: "and Feel Loved",
        description1: "",
        description2: ""
    };
    const images = rawAbout?.images || {
        main: "https://plus.unsplash.com/premium_photo-1707410050552-e94a738102a1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y296eSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
        secondary: "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXNzZWQlMjBkb2d8ZW58MHx8MHx8fDA%3D",
        badgeIcon: "/icon/cat-foot-icon.svg"
    };
    const badge = rawAbout?.badge || {
        line1: "Safe, Gentle",
        line2: "& Pet-Friendly",
        line3: "Grooming"
    };
    const features = rawAbout?.features || [];

    return (
        <section className="relative overflow-hidden bg-[#FCF7F3] py-14 sm:py-18 md:py-20 lg:py-24">
            <div className="mx-auto grid max-w-[1355px] grid-cols-1 items-center justify-between gap-12 sm:gap-14 lg:gap-12 lg:grid-cols-12 px-4 sm:px-4 md:px-6 lg:px-8">

                {/* Left Visual Column */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative flex justify-center mb-16 sm:mb-16 lg:mb-0 lg:col-span-5 lg:justify-start"
                >
                    <div className="relative w-[300px] sm:w-[440px] lg:w-[440px] max-w-full">
                        {/* Background Teal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="absolute -bottom-9 -left-3 sm:-bottom-12 sm:-left-5 lg:-bottom-10 lg:-left-6 z-0 h-[92%] w-[88%] sm:w-[82%] rounded-[2rem] bg-[#387478]"
                        />

                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                            className="relative z-10 h-[340px] sm:h-[460px] lg:h-[480px] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-4 border-white shadow-xl"
                        >
                            <Image
                                src={images.main}
                                alt="Dog getting groomed"
                                fill
                                sizes="(max-width: 640px) 300px, 440px"
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Floating Secondary Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 80, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 z-20 h-28 w-28 sm:h-40 sm:w-40 lg:h-44 lg:w-44 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border-4 border-white shadow-lg"
                        >
                            <Image
                                src={images.secondary}
                                alt="Dog bath"
                                fill
                                sizes="(max-width: 640px) 120px, 160px"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 180, damping: 15, delay: 0.7 }}
                            whileHover={{ scale: 1.04, y: -4 }}
                            className="absolute -bottom-5 -right-2 sm:-bottom-4 sm:-right-4 lg:right-2 z-30 flex scale-[0.85] sm:scale-95 lg:scale-100 origin-bottom-right items-center gap-2 sm:gap-3 rounded-2xl border border-gray-100 bg-white/95 px-3 py-2.5 sm:px-4 sm:py-3.5 shadow-xl backdrop-blur-md"
                        >
                            <div className="rounded-xl bg-[#E67E22] p-2 sm:p-2.5 text-white shadow-md shrink-0">
                                <Image
                                    src={images.badgeIcon}
                                    alt="Pet friendly"
                                    width={22}
                                    height={22}
                                />
                            </div>

                            <div>
                                <p className={`${courgette.className} text-sm sm:text-base font-bold leading-tight text-gray-900`}>
                                    {badge.line1}
                                </p>
                                <p className={`${courgette.className} text-sm sm:text-base font-bold leading-tight text-gray-900`}>
                                    {badge.line2}
                                </p>
                                <p className="text-xs sm:text-sm font-semibold text-gray-500">
                                    {badge.line3}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Content Column */}
                <motion.div
                    className="space-y-5 sm:space-y-6 lg:col-span-7"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Subtitle */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex items-center gap-2"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                        >
                            <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                        </motion.div>

                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#387478]">
                            {headerData.badgeText}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        variants={fadeUpVariants}
                        className={`${lilitaOne.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-[1.15]`}
                    >
                        {headerData.titleWhite}
                        <br />
                        <span className="text-[#E67E22]">{headerData.titleColored}</span>
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex items-center gap-2"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 56 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="h-1 rounded-full bg-[#E67E22]"
                        />
                        <FaPaw className="h-5 w-5 text-[#E67E22]" />
                    </motion.div>

                    {/* Paragraph 1 */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="text-sm sm:text-base font-medium leading-relaxed text-gray-600"
                    >
                        {headerData.description1}
                    </motion.p>

                    {/* Paragraph 2 */}
                    {headerData.description2 && (
                        <motion.p
                            variants={fadeUpVariants}
                            className="text-sm sm:text-base font-medium leading-relaxed text-gray-600"
                        >
                            {headerData.description2}
                        </motion.p>
                    )}

                    {/* Features Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 pt-2"
                    >
                        {features.map((feature) => {
                            const IconComponent = IconMap[feature.icon];
                            return (
                                <motion.div
                                    key={feature.id}
                                    variants={featureVariants}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex items-start gap-3 rounded-2xl bg-white/70 p-3 shadow-xs border border-gray-100/80"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.08 }}
                                        className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4E6D8] text-[#387478]"
                                    >
                                        {IconComponent && <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />}
                                    </motion.div>

                                    <div className="flex flex-col pt-0.5">
                                        <h4 className="text-sm font-bold leading-tight tracking-wide text-gray-900">
                                            {feature.title}
                                        </h4>
                                        <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}