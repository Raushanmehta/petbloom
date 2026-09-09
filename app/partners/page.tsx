"use client";

import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import PartnerCard from "@/components/cards/PartnerCard";
import PageTopSection from "@/components/common/PageTopSection";
import data from "@/data/data.json";
import { PartnersDataWrapper } from "@/types/sections";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export default function PartnersPage() {
    const partnersData: PartnersDataWrapper = (data as unknown as { partnersData?: PartnersDataWrapper }).partnersData || {
        pageData: {
            badgeText: "Our Partners",
            titleWhite: "Trusted by",
            titleColored: "Leading Pet Brands",
            description: "We are proud to collaborate with top pet care organizations, shelters, and trusted industry brands.",
        },
        partners: [],
    };

    const { pageData, partners } = partnersData;

    return (
        <main>
            <PageTopSection
                title="Partners"
                subTitle="our partners"
            />
            <section className="relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20">
                {/* Decorative Background Paws */}
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="pointer-events-none absolute left-6 top-12 hidden text-[#387478] lg:block">
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
                    className="pointer-events-none absolute right-6 top-12 hidden text-[#387478] lg:block">
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
                    className="pointer-events-none absolute left-10 bottom-24 text-[#E67E22] hidden lg:block">
                    <motion.div
                        animate={{ y: [0, 10, 0], rotate: [25, 32, 25] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-24 w-24 xl:h-28 xl:w-28" />
                    </motion.div>
                </motion.div>

                <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        variants={containerVariants}
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

                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {pageData?.badgeText}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} mx-auto mt-4 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-[#387478] leading-tight`}>
                            {pageData?.titleWhite}{" "}
                            <span className="text-[#E67E22]">
                                {pageData?.titleColored}
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
                        {pageData?.description && (
                            <motion.p
                                variants={fadeUpVariants}
                                className="mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed">
                                {pageData.description}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* 12 Partner Cards Grid Layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
                        {(partners || []).map((partner) => (
                            <motion.div
                                key={partner.id}
                                variants={columnVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}>
                                <PartnerCard partner={partner} />
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
                            <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 bg-[#FCF7F3] text-[#E67E22] rounded-full p-1" />
                            <span className="text-xs sm:text-sm font-extrabold text-gray-900 tracking-wide">
                                Stronger partnerships. Happier pets.
                            </span>
                        </div>
                        <p className="text-sm sm:text-base font-bold text-[#387478]">
                            Together, we create a better world for pets.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}