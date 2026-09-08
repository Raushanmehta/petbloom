"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import allData from "@/data/data.json";
import { Target, Eye } from "lucide-react";
import type { MissionVisionDataWrapper } from "@/types/sections";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { missionHeaderContainerVariants, missionFadeUpVariants, missionCardsContainerVariants, missionLeftCardVariants, missionCenterImageVariants, missionRightCardVariants } from "@/utils/animations";
import { IoMdHeartEmpty } from "react-icons/io";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const iconMap: Record<string, React.ElementType> = {
    Target,
    Eye,
};

interface MissionVisionSectionProps {
    isPage?: boolean;
}

export default function MissionVisionSection({ isPage = false }: MissionVisionSectionProps) {
    const rawMV = (allData as unknown as { missionVisionData: MissionVisionDataWrapper })?.missionVisionData;
    const header = (isPage ? rawMV?.pageData : rawMV?.sectionData) || {
        badgeText: "OUR PURPOSE",
        titleStart: "Our",
        titleHighlight1: "Mission",
        titleMiddle: "&",
        titleHighlight2: "Vision"
    };
    const centerImage = rawMV?.centerImage || { src: "", alt: "" };
    const missionData = rawMV?.mission || {
        iconName: "Target",
        title: "Our Mission",
        description: "",
        themeColor: "text-[#387478]",
        borderColor: "border-[#387478]/20",
        bgAccent: "bg-[#EAF2F2]"
    };
    const visionData = rawMV?.vision || {
        iconName: "Eye",
        title: "Our Vision",
        description: "",
        themeColor: "text-[#E67E22]",
        borderColor: "border-[#E67E22]/20",
        bgAccent: "bg-[#FDF6F0]"
    };
    const MissionIcon = iconMap[missionData.iconName] || Target;
    const VisionIcon = iconMap[visionData.iconName] || Eye;
    return (
        <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-[1300px]">
                <motion.div
                    variants={missionHeaderContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mx-auto mb-16 max-w-2xl text-center">

                    <motion.div
                        variants={missionFadeUpVariants}
                        className="mx-auto mt-4 flex items-center justify-center gap-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", }} className="h-[2px] rounded-full bg-[#387478]/30" />
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1, 1.08, 1], }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>

                        <motion.div
                            variants={missionFadeUpVariants}
                            whileHover={{ scale: 1.05, y: -3 }}
                            transition={{ duration: 0.25 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {header.badgeText}
                            </span>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1, 1.08, 1], }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.7, ease: "easeOut", }}
                            className="h-[2px] rounded-full bg-[#387478]/30"
                        />
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        variants={missionFadeUpVariants}
                        className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}>
                        {header.titleStart}{" "}
                        <span className="text-[#387478]">
                            {header.titleHighlight1}
                        </span>{" "}
                        {header.titleMiddle}{" "}
                        <span className="text-[#E67E22]">
                            {header.titleHighlight2}
                        </span>
                    </motion.h2>

                    {/* Divider */}
                    <motion.div
                        variants={missionFadeUpVariants}
                        className="mx-auto mt-4 flex items-center justify-center gap-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", }} className="h-[2px] rounded-full bg-[#387478]/30" />
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1, 1.08, 1], }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.7, ease: "easeOut", }}
                            className="h-[2px] rounded-full bg-[#387478]/30"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={missionCardsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15, }}
                    className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">

                    <motion.div
                        variants={missionLeftCardVariants}
                        whileHover={{ y: -8, scale: 1.01, }}
                        transition={{ duration: 0.35, ease: "easeOut", }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-100/90 bg-white p-8 text-center shadow-xl shadow-gray-100 lg:col-span-4">

                        <motion.div
                            initial={{ scale: 0, opacity: 0, }}
                            whileInView={{ scale: 1, opacity: 1, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.8, delay: 0.2, }}
                            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#EAF2F2]"
                        />

                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ rotate: 8, scale: 1.08, }}
                                transition={{ duration: 0.3, }}
                                className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#387478]/40 p-2" >
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, }}
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF2F2] text-[#387478]">
                                    <MissionIcon className="h-8 w-8" />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0, }}
                                whileInView={{ opacity: 1, scaleX: 1, }}
                                viewport={{ once: true, }}
                                transition={{ duration: 0.6, delay: 0.3, }}
                                className="mb-6 flex items-center justify-center gap-2 text-[#387478]">
                                <div className="h-[2px] w-10 bg-[#387478]/30" />
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }} >
                                    <FaPaw className="h-6 w-6" />
                                </motion.div>

                                <div className="h-[2px] w-10 bg-[#387478]/30" />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                variants={missionFadeUpVariants}
                                className={`${lilitaOne.className} mb-4 text-3xl tracking-wide text-[#387478]`}>
                                {missionData.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                variants={missionFadeUpVariants}
                                className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                                {missionData.description}
                            </motion.p>
                        </div>

                        {/* Bottom Heart */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.6, delay: 0.5, }}
                            className="relative z-10 mt-8 flex items-center justify-center gap-2 border-t border-gray-100 pt-6 text-[#387478]">
                            <span className="text-xs tracking-widest text-gray-300">
                                ~~~~~
                            </span>

                            <motion.div
                                whileHover={{ scale: 1.15, rotate: -8, }}
                                transition={{ duration: 0.3, }}
                                className="flex h-16 w-16 items-center justify-center">
                                <IoMdHeartEmpty className="h-8 w-8 text-[#387478]" />
                            </motion.div>
                            <span className="text-xs tracking-widest text-gray-300">
                                ~~~~~
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={missionCenterImageVariants}
                        whileHover={{ y: -8, }}
                        transition={{ duration: 0.35, ease: "easeOut", }}
                        className="group relative h-[520px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl lg:col-span-4">
                        <Image
                            src={centerImage.src}
                            alt={centerImage.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            priority
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />

                        <motion.div
                            initial={{ opacity: 0, }}
                            whileHover={{ opacity: 1, }}
                            transition={{ duration: 0.4, }}
                            className="absolute inset-0 bg-gradient-to-t from-[#387478]/40 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                        variants={missionRightCardVariants}
                        whileHover={{ y: -8, scale: 1.01, }}
                        transition={{ duration: 0.35, ease: "easeOut", }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-100/90 bg-white p-8 text-center shadow-xl shadow-gray-100 lg:col-span-4">
                        <motion.div
                            initial={{ scale: 0, opacity: 0, }}
                            whileInView={{ scale: 1, opacity: 1, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.8, delay: 0.2, }}
                            className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#FDF6F0]" />
                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ rotate: -8, scale: 1.08, }}
                                transition={{ duration: 0.3, }}
                                className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#E67E22]/40 p-2">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, }}
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF6F0] text-[#E67E22]">
                                    <VisionIcon className="h-8 w-8" />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0, }}
                                whileInView={{ opacity: 1, scaleX: 1, }}
                                viewport={{ once: true, }}
                                transition={{ duration: 0.6, delay: 0.3, }}
                                className="mb-6 flex items-center justify-center gap-2 text-[#E67E22]">
                                <div className="h-[2px] w-10 bg-[#E67E22]/30" />
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                    <FaPaw className="h-6 w-6" />
                                </motion.div>

                                <div className="h-[2px] w-10 bg-[#E67E22]/30" />
                            </motion.div>

                            <motion.h3
                                variants={missionFadeUpVariants}
                                className={`${lilitaOne.className} mb-4 text-3xl tracking-wide text-[#E67E22]`}>
                                {visionData.title}
                            </motion.h3>
                            <motion.p
                                variants={missionFadeUpVariants}
                                className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                                {visionData.description}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.6, delay: 0.5, }}
                            className="relative z-10 mt-8 flex items-center justify-center gap-2 border-t border-gray-100 pt-6 text-[#E67E22]">
                            <span className="text-xs tracking-widest text-gray-300">
                                ~~~~~
                            </span>

                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 8, }}
                                transition={{ duration: 0.3, }}
                                className="flex h-16 w-16 items-center justify-center">
                                <IoMdHeartEmpty className="h-8 w-8 text-[#E67E22]" />
                            </motion.div>
                            <span className="text-xs tracking-widest text-gray-300">
                                ~~~~~
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
