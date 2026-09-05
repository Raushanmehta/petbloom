"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import {
    columnVariants,
    featureContainerVariants,
    featureItemVariants,
    sidebarVariants,
    linkContainerVariants,
    linkItemVariants,
} from "@/utils/animations";
import data from "@/data/data.json";
import { LocationDataWrapper, LocationItem, LocationDetail } from "@/types";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const { locationData } = data as { locationData: LocationDataWrapper };

// Helper to render dynamic icons by string name
function DynamicLocationIcon({ name, className }: { name?: string; className?: string }) {
    if (!name) return <LucideIcons.MapPin className={className} />;
    if (name === "FaPaw" || name.toLowerCase() === "paw") {
        return <FaPaw className={className} />;
    }
    const IconComponent = (LucideIcons as Record<string, any>)[name];
    if (IconComponent) {
        return <IconComponent className={className} />;
    }
    return <LucideIcons.MapPin className={className} />;
}

interface LocationDetailPageProps {
    location?: LocationItem;
}

export default function LocationDetailPage({ location: propLocation }: LocationDetailPageProps) {
    // Current location either from props or fallback to first/active location in locationData
    const defaultLocation = locationData.locationsData.find((l) => l.active) || locationData.locationsData[0];
    const currentLocation = propLocation || defaultLocation;

    // Detail data strictly from locationData
    const fallbackDetail = locationData.locationsData[0]?.detail as LocationDetail;
    const detail: LocationDetail = (currentLocation?.detail || fallbackDetail) as LocationDetail;

    if (!detail) return null;

    const allLocations = locationData.locationsData;

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
            {/* Background Decorative Paws */}
            <motion.div
                initial={{ opacity: 0, x: -30, rotate: -25 }}
                whileInView={{ opacity: 0.08, x: 0, rotate: -15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="pointer-events-none absolute left-6 top-20 hidden text-[#387478] lg:block">
                <motion.div
                    animate={{ y: [0, -12, 0], rotate: [-15, -8, -15] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                    <FaPaw className="h-28 w-28" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30, rotate: 25 }}
                whileInView={{ opacity: 0.08, x: 0, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="pointer-events-none absolute right-6 top-32 hidden text-[#E67E22] lg:block">
                <motion.div
                    animate={{ y: [0, -12, 0], rotate: [15, 8, 15] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                    <FaPaw className="h-24 w-24" />
                </motion.div>
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-8">

                        {/* Top Hero Banner Card */}
                        <motion.div
                            variants={columnVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-[1.5rem] bg-white shadow-xl shadow-gray-100 border border-gray-100/90 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center">

                                {/* Left Side Image */}
                                <div className="md:col-span-5 relative h-[280px] sm:h-[385px] w-full overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative h-full w-full">
                                        <Image
                                            src={detail.heroImage}
                                            alt={detail.heroImageAlt || detail.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </div>

                                {/* Right Side Info */}
                                <div className="md:col-span-7 space-y-4 p-6 sm:p-8">
                                    <h1 className={`${lilitaOne.className} text-3xl sm:text-5xl tracking-wide text-gray-900 leading-tight`}>
                                        {detail.title} <br />
                                        <span className="inline-flex items-center gap-2 text-[#E67E22] whitespace-nowrap">
                                            {detail.titleHighlight}
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                className="inline-block"
                                            >
                                                <DynamicLocationIcon
                                                    name={detail.titleIcon || "MapPin"}
                                                    className="h-7 w-7 sm:h-10 sm:w-10 text-[#387478] shrink-0"
                                                />
                                            </motion.span>
                                        </span>
                                    </h1>
                                    <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed">
                                        {detail.description}
                                    </p>

                                    {/* 4 Feature Badges Row */}
                                    <motion.div
                                        variants={featureContainerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                                        {detail.features.map((feat, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const iconColor = isEven ? "text-[#387478]" : "text-[#E67E22]";
                                            const hoverBg = isEven ? "hover:bg-[#EAF2F2]/40" : "hover:bg-[#FDF6F0]/60";
                                            const rotateAngle = isEven ? 6 : -6;

                                            return (
                                                <motion.div
                                                    key={feat.id || idx}
                                                    variants={featureItemVariants}
                                                    whileHover={{ y: -4, scale: 1.05 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                    className={`flex flex-col items-center text-center cursor-default p-2 rounded-2xl ${hoverBg} transition-colors`}>
                                                    <motion.div
                                                        whileHover={{ scale: 1.15, rotate: rotateAngle }}
                                                        transition={{ type: "spring", stiffness: 350 }}>
                                                        <DynamicLocationIcon
                                                            name={feat.icon}
                                                            className={`h-8 w-8 ${iconColor} mb-1`}
                                                        />
                                                    </motion.div>
                                                    <span className="text-[12px] font-bold text-gray-800">{feat.title}</span>
                                                    <span className="text-[11px] font-semibold text-gray-500">{feat.subtitle}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </div>

                            </div>
                        </motion.div>

                        {/* About Section Card */}
                        <motion.div
                            variants={columnVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-[1.5rem] bg-white p-6 sm:p-8 shadow-xl shadow-gray-100 border border-gray-100/90">
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2F2] text-[#387478] shadow-sm">
                                    <DynamicLocationIcon name={detail.aboutIcon || "FaPaw"} className="h-8 w-8" />
                                </motion.div>
                                <h2 className={`${lilitaOne.className} text-2xl sm:text-3xl tracking-wide text-gray-900`}>
                                    {detail.aboutTitle}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                <div className="md:col-span-5 space-y-4 text-xs sm:text-sm font-medium text-gray-600 leading-relaxed">
                                    <p>{detail.aboutDescription}</p>
                                </div>

                                <div className="md:col-span-7 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.04, y: -2 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full flex items-center justify-center cursor-pointer">
                                        <Image
                                            src={detail.aboutImage}
                                            alt={detail.aboutImageAlt || detail.aboutTitle}
                                            width={800}
                                            height={272}
                                            className="w-full h-auto object-contain"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Why Pet Parents Trust Us Section */}
                        <motion.div
                            variants={columnVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-[1.5rem] bg-white p-6 sm:p-8 shadow-xl shadow-gray-100 border border-gray-100/90">
                            <div className="pb-4 mb-6 border-b border-gray-100">
                                <h2 className={`${lilitaOne.className} text-xl sm:text-2xl tracking-wide text-gray-900`}>
                                    {detail.trustTitle}
                                </h2>
                            </div>

                            <motion.div
                                variants={featureContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-gray-100 gap-4 sm:gap-6 lg:gap-0"
                            >
                                {detail.trustFeatures.map((feat, index) => {
                                    const isEven = index % 2 === 0;
                                    const borderBg = isEven
                                        ? "border-[#387478]/30 bg-[#EAF2F2]"
                                        : "border-[#E67E22]/30 bg-[#FDF6F0]";
                                    const iconColor = isEven ? "text-[#387478]" : "text-[#E67E22]";

                                    return (
                                        <motion.div
                                            key={feat.id || index}
                                            variants={featureItemVariants}
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            transition={{ duration: 0.25 }}
                                            className="flex items-center gap-3.5 pt-3 first:pt-0 sm:pt-0 lg:px-3 first:lg:pl-0 last:lg:pr-0 group cursor-default"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.15, rotate: isEven ? 8 : -8 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${borderBg} shadow-sm`}
                                            >
                                                <DynamicLocationIcon
                                                    name={feat.icon}
                                                    className={`h-5 w-5 sm:h-8 sm:w-8 ${iconColor}`}
                                                />
                                            </motion.div>
                                            <span className="text-xs sm:text-[13px] font-bold text-gray-800 whitespace-pre-line leading-snug">
                                                {feat.title}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4 space-y-6 sticky top-6">

                        {/* 1. Our Service Locations Card */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-[1.5rem] bg-white shadow-xl shadow-gray-100 border border-gray-100/90 overflow-hidden">
                            <div className="flex items-center gap-3 bg-[#387478] p-5 text-white">
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                                    <DynamicLocationIcon
                                        name={detail.sidebarIcon || "MapPin"}
                                        className="h-8 w-8 text-white shrink-0"
                                    />
                                </motion.div>
                                <h3 className={`${lilitaOne.className} text-2xl sm:text-2xl tracking-wide text-white`}>
                                    {detail.sidebarTitle}
                                </h3>
                            </div>

                            <motion.div
                                variants={linkContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-4 space-y-2 bg-white">
                                {allLocations.map((loc) => {
                                    const isCurrentActive =
                                        Boolean(loc.slug && currentLocation.slug && loc.slug === currentLocation.slug) ||
                                        loc.id === currentLocation.id ||
                                        Boolean(loc.name && currentLocation.name && loc.name.toLowerCase() === currentLocation.name.toLowerCase());

                                    const targetHref = loc.slug ? `/locations/${loc.slug}` : `/locations/${(loc.name || loc.id).toLowerCase().replace(/\s+/g, '-')}`;

                                    return (
                                        <motion.div
                                            key={loc.id}
                                            variants={linkItemVariants}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                                            <Link
                                                href={targetHref}
                                                className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-300 ${isCurrentActive
                                                    ? "text-[#387478] shadow-sm border border-[#387478]/25 bg-[#EAF2F2]/40"
                                                    : "text-gray-900 hover:text-black hover:bg-gray-50 border border-gray-100"
                                                    }`}>
                                                <div className="flex items-center gap-3">
                                                    <LucideIcons.MapPin
                                                        className={`h-8 w-8 shrink-0 transition-colors ${isCurrentActive ? "text-[#387478]" : "text-gray-400 group-hover:text-[#387478]"
                                                            }`}
                                                    />
                                                    <span>{loc.name}</span>
                                                </div>
                                                <LucideIcons.ChevronRight
                                                    className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 ${isCurrentActive ? "text-[#E67E22]" : "text-gray-400 group-hover:text-[#E67E22]"
                                                        }`}
                                                />
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>

                        {/* 2. Book Our Service Card */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-[1.5rem] bg-white shadow-xl shadow-gray-100 border border-gray-100/90 overflow-hidden">
                            <div className="flex items-center gap-3 bg-[#387478] p-5 text-white">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                                    <DynamicLocationIcon
                                        name={detail.bookService.icon || "CalendarCheck"}
                                        className="h-8 w-8 text-white shrink-0"
                                    />
                                </motion.div>
                                <h3 className={`${lilitaOne.className} text-2xl sm:text-2xl tracking-wide text-white`}>
                                    {detail.bookService.title}
                                </h3>
                            </div>

                            <div className="p-5 sm:p-6 space-y-6 bg-white text-gray-900">
                                <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed">
                                    {detail.bookService.description}
                                </p>

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <Link
                                        href={detail.bookService.buttonLink || "/appointment"}
                                        className="flex items-center justify-center gap-2.5 w-full rounded-full bg-[#E67E22] py-4 text-sm font-bold text-white shadow-lg shadow-[#E67E22]/20 transition-all duration-300 hover:bg-[#d5701b]">
                                        <DynamicLocationIcon
                                            name={detail.bookService.buttonIcon || "CalendarCheck"}
                                            className="h-5 w-5 shrink-0"
                                        />
                                        <span>{detail.bookService.buttonText}</span>
                                    </Link>
                                </motion.div>

                                {/* Help Widget Bottom Box */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    transition={{ duration: 0.25 }}
                                    className="rounded-xl bg-[#EAF2F2] p-2 flex items-center justify-center gap-3 text-gray-900 border border-[#387478]/10 cursor-pointer">
                                    <motion.div
                                        whileHover={{ rotate: [0, -15, 15, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#387478] text-white shadow-sm">
                                        <DynamicLocationIcon
                                            name={detail.bookService.helpIcon || "Phone"}
                                            className="h-8 w-8"
                                        />
                                    </motion.div>
                                    <div>
                                        <p className="text-[12px] font-semibold text-gray-500 leading-tight">
                                            {detail.bookService.helpText}
                                        </p>
                                        <p className="text-sm font-bold text-gray-900">
                                            {detail.bookService.helpPhone}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}