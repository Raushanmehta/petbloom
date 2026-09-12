"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ChevronRight } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { site, ServiceItem, SectionProps } from "@/data";
import { breadcrumbVariants, heroContainerVariants, heroItemVariants, featureContainerVariants, featureItemVariants, sectionVariants, includedContainerVariants, includedItemVariants, sidebarVariants, sidebarItemVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export interface ServiceDetailPageProps extends SectionProps<ServiceItem> {
    service?: ServiceItem;
}

export default function ServiceDetailPage({ data, service: propService, className }: ServiceDetailPageProps = {}) {
    const servicesData = site.services;
    const defaultService = servicesData.services[0];
    const service = data || propService || defaultService;
    const pathname = usePathname();

    if (!service) return null;

    return (
        <section className={`relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20 ${className || ""}`}>
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

            <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                <motion.div
                    variants={breadcrumbVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-8 flex items-center gap-2 text-xs font-semibold text-gray-500 sm:text-sm">
                    <motion.div whileHover={{ x: 3 }}>
                        <Link href="/" className="transition-colors hover:text-[#387478]">Home</Link>
                    </motion.div>
                    <ChevronRight className="h-3.5 w-3.5 text-[#E67E22]" />

                    <motion.div whileHover={{ x: 3 }}>
                        <Link href="/services" className="transition-colors hover:text-[#387478]">Services</Link>
                    </motion.div>
                    <ChevronRight className="h-3.5 w-3.5 text-[#E67E22]" />
                    <span className="font-bold text-[#E67E22]">
                        {service.title}
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    <div className="space-y-10 lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.97, }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, }}
                            viewport={{ once: true, amount: 0.25, }}
                            transition={{ duration: 0.8, ease: "easeOut", }}
                            whileHover={{ y: -4, }}
                            className="group relative flex min-h-[380px] items-center overflow-hidden rounded-2xl sm:rounded-[1.75rem] border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-xl">

                            <motion.div
                                initial={{ scale: 1.08, }}
                                whileInView={{ scale: 1, }}
                                viewport={{ once: true, }}
                                transition={{ duration: 1.2, ease: "easeOut", }}
                                className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt="Dog getting groomed"
                                    fill
                                    className="object-cover object-right"
                                />
                            </motion.div>
                            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/80" />
                            <motion.div
                                variants={heroContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, }}
                                className="relative z-20 max-w-lg space-y-4">

                                <motion.div
                                    variants={heroItemVariants}
                                    whileHover={{ scale: 1.05, y: -2, }}
                                    className="inline-flex cursor-default items-center gap-2 rounded-full border border-[#387478]/20 bg-white px-4 py-1.5 shadow-sm">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0], }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                        <FaPaw className="h-6 w-6 text-[#387478]" />
                                    </motion.div>

                                    <span className="text-sm font-bold uppercase px-2 tracking-wider text-[#387478]">
                                        {service.title}
                                    </span>
                                </motion.div>

                                {/* Heading */}

                                <motion.h1
                                    variants={heroItemVariants}
                                    className={`${lilitaOne.className} text-3xl leading-tight tracking-wide text-gray-900 sm:text-4xl lg:text-5xl`}>
                                    {service.detail.heroTitle}
                                    <br />
                                    {service.detail.heroTitleHighlight && (
                                        <span className="text-[#E67E22]">
                                            {service.detail.heroTitleHighlight}
                                        </span>
                                    )}
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    variants={heroItemVariants}
                                    className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                                    {service.detail.heroDescription}
                                </motion.p>

                                {/* Small Features */}
                                <motion.div
                                    variants={featureContainerVariants}
                                    className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
                                    {service.detail.heroFeatures.map((item: any) => {
                                        const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={featureItemVariants}
                                                whileHover={{ y: -5, scale: 1.03, }}
                                                className="flex cursor-default flex-col items-center rounded-2xl bg-white/90 p-2 text-center shadow-sm backdrop-blur-sm">
                                                <motion.div
                                                    whileHover={{ scale: 1.15, rotate: 5, }}
                                                    transition={{ type: "spring", stiffness: 300, }}>
                                                    <IconComponent className="mb-1 h-8 w-8 text-[#387478]" />
                                                </motion.div>

                                                <span className="text-xs font-bold text-gray-800">
                                                    {item.title}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2, }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                viewport={{ once: true, }}
                                transition={{ duration: 0.5, }}
                                className="mb-4 flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}>
                                    <FaPaw className="h-6 w-6 text-[#387478]" />
                                </motion.div>

                                <h2 className={`${lilitaOne.className} text-2xl tracking-wide text-gray-900 sm:text-3xl`}>
                                    Overview
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -30, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    viewport={{ once: true, }}
                                    transition={{ duration: 0.6, }}
                                    className="space-y-4 text-sm font-medium leading-relaxed text-gray-600 sm:text-base md:col-span-7">
                                    <p>{service.detail.overviewText1}</p>
                                    <p>{service.detail.overviewText2}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30, scale: 0.95, }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1, }}
                                    whileHover={{ scale: 1.03, }}
                                    viewport={{ once: true, }}
                                    transition={{ duration: 0.7, }}
                                    className="group relative h-[220px] w-full overflow-hidden rounded-xl shadow-md md:col-span-5">
                                    <Image
                                        src={service.detail.overviewImage}
                                        alt="Dog bath overview"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2, }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                viewport={{ once: true, }}
                                transition={{ duration: 0.5, }}
                                className="mb-6 flex items-center gap-3">
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                                <h2 className={`${lilitaOne.className} text-2xl tracking-wide text-gray-900 sm:text-3xl`}>
                                    What&apos;s Included
                                </h2>
                            </motion.div>

                            <motion.div
                                variants={includedContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1, }}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {service.detail.includedFeatures.map((item: any) => (
                                    <motion.div
                                        key={item.id}
                                        variants={includedItemVariants}
                                        whileHover={{ y: -6, scale: 1.02, }}
                                        className="group flex cursor-default items-start gap-4 rounded-xl border border-gray-100 bg-[#F2F4F3] p-5 shadow-sm transition-colors hover:border-[#387478]/30 hover:shadow-md">
                                        <motion.div
                                            whileHover={{ rotate: 8, scale: 1.1, }}
                                            transition={{ type: "spring", stiffness: 250, }}
                                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-[#387478]">
                                            {(() => { const IncludedIcon = (LucideIcons as any)[service.icon] || LucideIcons.Check; return <IncludedIcon className="h-8 w-8" /> })()}
                                        </motion.div>

                                        <div className="flex flex-col pt-1">
                                            <h3 className="text-base font-bold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-xs font-medium leading-relaxed text-gray-600 sm:text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={sidebarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2, }}
                        className="sticky top-6 lg:col-span-4">
                        <motion.div
                            whileHover={{ y: -3, }}
                            className="rounded-[1.5rem] bg-white p-6 text-black shadow-xl">
                            <div className="mb-6 flex items-center gap-3 px-2">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}>
                                    <FaPaw className="h-6 w-6 text-[#387478]" />
                                </motion.div>

                                <h3 className={`${lilitaOne.className} text-2xl tracking-wide text-black sm:text-3xl`}>
                                    Our Services
                                </h3>
                            </div>
                            <motion.div
                                variants={sidebarItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, }}
                                className="space-y-3">
                                {servicesData.services.map((nav, index) => {
                                    const linkHref = `/services/${nav.slug}`;
                                    const isActive = pathname === linkHref;
                                    return (
                                        <motion.div
                                            key={nav.id}
                                            initial={{ opacity: 0, x: 20, }}
                                            whileInView={{ opacity: 1, x: 0, }}
                                            viewport={{ once: true, }}
                                            transition={{ duration: 0.4, delay: index * 0.08, }}>
                                            <Link
                                                href={linkHref}
                                                className={`group flex items-center justify-between rounded-2xl border border-transparent p-2 pr-5 text-sm font-bold transition-all duration-300 ${isActive
                                                    ? "translate-x-1 border-gray-100 bg-white text-gray-900 shadow-lg"
                                                    : "bg-white text-gray-900 shadow-sm hover:border-[#387478]/30 hover:shadow-md"
                                                    }`}>
                                                <div className="flex items-center gap-3">
                                                    <motion.div
                                                        whileHover={{ scale: 1.08, }}
                                                        className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                                        <Image
                                                            src={nav.image}
                                                            alt={nav.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </motion.div>
                                                    <span>
                                                        {nav.title}
                                                    </span>
                                                </div>

                                                <motion.div
                                                    animate={{ x: isActive ? 3 : 0, }}
                                                    whileHover={{ x: 5, }}
                                                    transition={{ duration: 0.2, }}>
                                                    <ChevronRight className="h-6 w-6 text-[#E67E22]" />
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

