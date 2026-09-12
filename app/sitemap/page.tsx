"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import PageTopSection from "@/components/common/PageTopSection";
import SitemapCard from "@/components/cards/SitemapCard";
import { fadeUpVariants, containerVariants, columnVariants } from "@/utils/animations";
import { site } from "@/data";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export default function SitemapPage() {
    const sitemapData = site.sitemap || {
        pageData: {
            title: "Site Map",
            subTitle: "Explore all our pages",
            badgeText: "Sitemap Directory",
        },
        categories: [],
    };

    const { pageData, categories } = sitemapData;

    return (
        <main>
            <PageTopSection
                title={pageData?.title || "Site Map"}
                subTitle={pageData?.subTitle || "Explore all our pages"}
            />
            <section className="relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20">
                {/* Decorative Background Paws */}
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="pointer-events-none absolute left-6 top-12 hidden text-[#E67E22] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-20 w-20 xl:h-24 xl:w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: 15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="pointer-events-none absolute right-6 top-12 hidden text-[#E67E22] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-20 w-20 xl:h-24 xl:w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -40, rotate: 25 }}
                    whileInView={{ opacity: 0.08, x: 0, rotate: 25 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="pointer-events-none absolute left-10 bottom-24 text-[#387478] hidden lg:block">
                    <motion.div
                        animate={{ y: [0, 10, 0], rotate: [25, 32, 25] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-24 w-24 xl:h-28 xl:w-28" />
                    </motion.div>
                </motion.div>

                <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                    {/* Header Section */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                            </motion.div>
                            <span className="text-sm font-bold uppercase px-2 tracking-wider text-[#387478]">
                                {"Sitemap Directory"}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} mt-4 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-tight`}>
                            {pageData?.title || "Explore All"} {" "}
                            <span className="text-[#E67E22]">
                                Website Pages
                            </span>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 flex items-center justify-center gap-3 sm:gap-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="h-[2px] rounded-full bg-[#E67E22]/30 w-8 sm:w-12" />
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#E67E22]" />
                            </motion.div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="h-[2px] rounded-full bg-[#E67E22]/30 w-8 sm:w-12" />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed max-w-xl">
                            {pageData?.subTitle || "Easily find and navigate to every section, service, package, and policy across PetBloom."}
                        </motion.p>
                    </motion.div>

                    {/* Grid of Sitemap Cards (4 columns on desktop, 2 on tablet, 1 on mobile) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
                        {(categories || []).map((category) => (
                            <motion.div
                                key={category.id}
                                variants={columnVariants}>
                                <SitemapCard category={category} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Tagline Footer Banner */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-14 sm:mt-16 text-center space-y-2">
                        <div className="inline-flex items-center justify-center gap-2 text-[#387478]">
                            <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#E67E22]" />
                            <span className="text-sm font-bold text-gray-900 uppercase px-2 tracking-wider">
                                All Pages Indexed & Regularly Updated
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-600">
                            Can’t find what you’re looking for? Feel free to{" "}
                            <Link href="/contact-us" className="font-bold text-[#E67E22] hover:underline underline-offset-4">
                                Contact Us
                            </Link>
                            .
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}