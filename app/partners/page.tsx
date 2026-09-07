
"use client";

import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import PartnerCard from "@/components/cards/PartnerCard";
import PageTopSection from "@/components/common/PageTopSection";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

import data from "@/data/data.json";
import { PartnersDataWrapper } from "@/types/sections";

const { partnersData } = data as { partnersData: PartnersDataWrapper };

export default function PartnersPage() {
    return (
        <main>
            <PageTopSection title="Partners" subTitle="our partners" />
            <section className="relative overflow-hiddenbg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="absolute left-10 top-12 hidden text-[#387478] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}>
                        <FaPaw className="h-24 w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: 15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="absolute right-10 top-12 hidden text-[#387478] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}>
                        <FaPaw className="h-24 w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative z-10 mx-auto max-w-7xl text-center">
                    {/* Badge */}
                    <motion.div
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05, y: -3, }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>

                        <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                            {partnersData.pageData.badgeText}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUpVariants}
                        className={`${lilitaOne.className} mx-auto mt-4 max-w-xl text-center text-4xl tracking-wide text-[#387478] sm:text-5xl lg:text-6xl`}
                    >
                        {partnersData.pageData.titleWhite} {""}
                        <span className="text-[#E67E22]">
                            {partnersData.pageData.titleColored}
                        </span>
                    </motion.h2>

                    {/* Divider */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="mx-auto mt-4 flex items-center justify-center gap-4"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", }}
                            className="h-[2px] rounded-full bg-[#E67E22]/30" />

                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                            <FaPaw className="h-6 w-6 text-[#E67E22]" />
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", }}
                            className="h-[2px] rounded-full  bg-[#E67E22]/30" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="mx-auto mt-4 max-w-xl text-base font-medium text-gray-600 sm:text-lg">
                        {partnersData.pageData.description}
                    </motion.p>
                </motion.div>

                {/* 12 Partner Cards Grid Layout (4 columns on desktop) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative z-10 mx-auto mt-14 grid max-w-[1300px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {partnersData.partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            variants={columnVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <PartnerCard partner={partner} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Tagline Footer Banner */}
                <motion.div
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 text-center space-y-2"
                >
                    <div className="inline-flex items-center justify-center gap-2 text-[#387478]">
                        <FaPaw className="h-6 w-6  bg-[#FCF7F3] rounded-full" />
                        <span className="text-sm font-extrabold text-gray-900">
                            Stronger partnerships. Happier pets.
                        </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-[#387478]">
                        Together, we create a better world for pets.
                    </p>
                </motion.div>
            </section>
        </main >
    )
}