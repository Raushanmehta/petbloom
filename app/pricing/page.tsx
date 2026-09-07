"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import PageTopSection from "@/components/common/PageTopSection";
import { fadeUpVariants, pricingCardContainer } from "@/utils/animations";
import PricingCard from "@/components/cards/PricingCard";
import data from "@/data/data.json";
import { PricingPackage } from "@/types/sections";


const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const { pricingData } = data;
const pricingPackages: PricingPackage[] = pricingData.pricingPackages;
const pageData = pricingData.pageData;

export default function PricingPage() {
    return (
        <main>
            <PageTopSection title="Pricing" subTitle="Pricing" />
            <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
                <div className="mx-auto max-w-[1300px]">
                    <motion.div
                        initial={{ opacity: 0, x: -30, rotate: -25 }}
                        whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="absolute left-10 top-12 hidden text-[#E67E22] lg:block">
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
                        className="absolute right-10 top-12 hidden text-[#E67E22] lg:block">
                        <motion.div
                            animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}>
                            <FaPaw className="h-24 w-24" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2, }}
                        className="mx-auto mb-16 max-w-2xl text-center">

                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.05, y: -2, }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0], }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                            </motion.div>

                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {pageData.badgeText}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`} >
                            {pageData.titleWhite} {""}
                            <span className="text-[#E67E22]">
                                {pageData.titleColored}
                            </span>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 flex items-center justify-center gap-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut", }}
                                className="h-[2px] rounded-full bg-[#387478]/30" />

                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0], }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                            </motion.div>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut", }}
                                className="h-[2px] rounded-full  bg-[#387478]/30" />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 text-base font-medium text-gray-600 sm:text-lg">
                            {pageData.description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={pricingCardContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15, }}
                        className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
                        {pricingPackages.map((pkg) => (
                            <PricingCard key={pkg.id} pkg={pkg} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

