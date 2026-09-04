"use client";

import React from "react";
import Image from "next/image";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import { Scissors, Leaf, Heart } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One, Courgette } from "next/font/google";
import { AboutSectionData } from "@/types";
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

const { aboutSectionData } = data as { aboutSectionData: AboutSectionData };

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-[#FCF7F3] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center justify-between gap-16 sm:gap-24 lg:gap-12 lg:grid-cols-12">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative flex justify-center lg:col-span-5 lg:justify-start">
                    {/* Background Teal Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0, }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut", }}
                        className="absolute -bottom-10 -left-2 sm:-left-6 z-0 h-[90%] w-[80%] sm:w-[70%] rounded-[2rem] bg-[#387478]"
                    />

                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -30, }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut", }}
                        whileHover={{ scale: 1.02 }}
                        className="relative z-10 h-[380px] sm:h-[500px] lg:h-[480px] w-full max-w-[300px] sm:max-w-[480px] lg:max-w-[420px] lg:-right-4 lg:-top-6 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl">
                        <Image
                            src={aboutSectionData.images.main}
                            alt="Dog getting groomed"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Floating Secondary Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 80, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut", }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="absolute -bottom-12 left-0 sm:-bottom-8 sm:-left-10 z-20 h-36 w-36 sm:h-48 sm:w-48 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border-4 border-white shadow-lg">
                        <Image
                            src={aboutSectionData.images.secondary}
                            alt="Dog bath"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6, y: 30, }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 180, damping: 15, delay: 0.7, }}
                        whileHover={{ scale: 1.05, y: -5, }}
                        className="absolute -bottom-6 right-0 sm:-bottom-2 sm:right-0 lg:right-4 z-30 flex scale-90 sm:scale-100 items-center gap-2 sm:gap-3 rounded-2xl border border-gray-100 bg-white/95 px-3 py-3 sm:px-4 sm:py-4 shadow-xl backdrop-blur-md">
                        <div className="rounded-xl bg-[#E67E22] p-2.5 text-white shadow-md">
                            <Image
                                src={aboutSectionData.images.badgeIcon}
                                alt="Pet friendly"
                                width={24}
                                height={24}
                            />
                        </div>

                        <div>
                            <p className={`${courgette.className} text-base font-bold leading-tight text-gray-900`}>
                                {aboutSectionData.badge.line1}
                            </p>
                            <p className={`${courgette.className} text-base font-bold leading-tight text-gray-900`}>
                                {aboutSectionData.badge.line2}
                            </p>
                            <p className="text-sm font-semibold text-gray-500">
                                {aboutSectionData.badge.line3}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="space-y-6 lg:col-span-7"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Subtitle */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex items-center gap-2">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>

                        <span className="text-sm font-bold uppercase tracking-wider text-[#387478]">
                            {aboutSectionData.badgeText}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        variants={fadeUpVariants}
                        className={`${lilitaOne.className} text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}
                    >
                        {aboutSectionData.titleWhite}
                        <br />
                        <span className="text-[#E67E22]">{aboutSectionData.titleColored}</span>
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex items-center gap-2"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4, }}
                            className="h-1 rounded-full bg-[#E67E22]" />

                        <FaPaw className="h-6 w-6 text-[#E67E22]" />
                    </motion.div>

                    {/* Paragraph 1 */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base"
                    >
                        {aboutSectionData.description1}
                    </motion.p>

                    {/* Paragraph 2 */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base"
                    >
                        {aboutSectionData.description2}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2"
                    >
                        {aboutSectionData.features.map((feature) => {
                            const IconComponent = IconMap[feature.icon];
                            return (
                                <motion.div
                                    key={feature.id}
                                    variants={featureVariants}
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex items-start gap-3 p-2"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F4E6D8] text-[#387478]"
                                    >
                                        {IconComponent && <IconComponent className="h-8 w-8" />}
                                    </motion.div>

                                    <div className="flex flex-col pt-0.5">
                                        <h4 className="text-sm leading-tight tracking-wide text-gray-900 font-semibold">
                                            {feature.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-600">
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