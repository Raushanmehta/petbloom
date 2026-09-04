"use client";
import Image from "next/image";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import { Lilita_One, Courgette } from "next/font/google";
import { FaPaw } from "react-icons/fa";
import StatisticsSection from "@/components/common/StatisticsSection";
import { FeatureItem, StatisticsItem, SectionHeaderData } from "@/types";
import { containerVariants, fadeUpVariants, featureContainerVariants, featureVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const courgette = Courgette({
    subsets: ["latin"],
    weight: "400",
});

const { whyChooseUsFeatures, statisticsData, whyChooseUsSectionData } = data as {
    whyChooseUsFeatures: FeatureItem[] & { icon: string }[];
    statisticsData: StatisticsItem[];
    whyChooseUsSectionData: SectionHeaderData;
};

export default function WhyChooseUsSection() {

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">

            <motion.div
                initial={{ opacity: 0, y: -30, rotate: 0 }}
                whileInView={{ opacity: 0.1, y: 0, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute right-1/4 top-10 hidden text-[#387478] lg:block"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [15, 20, 15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}>
                    <FaPaw className="h-28 w-28" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute right-12 top-40 hidden text-[#387478] lg:block"
            >
                <motion.div
                    animate={{ y: [0, -6, 0], rotate: [-10, -5, -10], }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", }}>
                    <FaPaw className="h-20 w-20" />
                </motion.div>
            </motion.div>

            <div className="relative z-10 mx-auto mx-auto max-w-[1300px]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-8 lg:col-span-7"
                    >
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
                                {whyChooseUsSectionData.badgeText}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} text-4xl leading-[1.15] tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}
                        >
                            {whyChooseUsSectionData.titleWhite}
                            <br />
                            <span className="text-[#387478]">{whyChooseUsSectionData.titleColored}</span>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="flex items-center gap-3"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 64 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, }}
                                className="h-[2px] rounded-full bg-[#387478]/40" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0, rotate: -90, }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0, }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 12, }}>
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                            </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            className="max-w-xl text-base font-medium text-gray-600 sm:text-lg"
                        >
                            {whyChooseUsSectionData.description}
                        </motion.p>
                        <motion.div
                            variants={featureContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2"
                        >
                            {whyChooseUsFeatures.map((item, index) => {
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={featureVariants}
                                        whileHover={{ y: -6, scale: 1.02, }}
                                        transition={{ duration: 0.25, }}
                                        className="group flex items-start gap-4 rounded-3xl bg-[#EAF2F2]/60 p-5 ">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 8, scale: 1.12, }}
                                            transition={{ duration: 0.3, }}
                                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-transparent">
                                            <Image src={item.icon || "/icon/heart-icon.svg"} width={40} height={40} alt="grooming" />
                                        </motion.div>

                                        {/* Text */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#387478]">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1 text-xs font-medium leading-relaxed text-gray-600 sm:text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 80, }}
                        whileInView={{ opacity: 1, x: 0, }}
                        viewport={{ once: true, amount: 0.2, }}
                        transition={{ duration: 0.9, ease: "easeOut", }}
                        className="relative flex justify-center lg:col-span-5">
                        {/* Main Image */}
                        <motion.div
                            initial={{ scale: 0.92, }}
                            whileInView={{ scale: 1, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.8, delay: 0.15, }}
                            whileHover={{ scale: 1.02, }}
                            className="relative h-[550px] w-full max-w-[440px] overflow-hidden rounded-[3rem]  shadow-2xl">
                            <Image
                                src={whyChooseUsSectionData.images?.main || ""}
                                alt="Pet Grooming Professional"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                        </motion.div>

                        {/* Paw Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 30, }}
                            whileInView={{ opacity: 1, scale: 1, y: 0, }}
                            viewport={{ once: true, }}
                            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.4, }}
                            whileHover={{ scale: 1.08, rotate: 8, }}
                            className="absolute -bottom-6 left-2 z-20 flex h-30 w-30 items-center justify-center rounded-full border-4 border-white bg-[#387478] text-white shadow-xl sm:left-4">
                            <FaPaw className="h-14 w-14" />
                        </motion.div>

                        {/* Healthy Pets Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 30, }}
                            whileInView={{ opacity: 1, scale: 1, y: 0, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut", }}
                            whileHover={{ y: -5, scale: 1.03, }}
                            className="absolute -bottom-6 right-2 z-20 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-md sm:right-6">
                            <motion.div
                                animate={{ scale: [1, 1.08, 1], }}
                                transition={{ duration: 2, repeat: Infinity, }}
                                className="flex h-16 w-16 shrink-0 items-center justify-center  text-[#387478]">
                                <Image src="/icon/heart-icon.png" width={40} height={40} alt="grooming" />
                            </motion.div>

                            <div className={`${courgette.className} text-base`}>
                                <p className="font-bold leading-tight text-gray-900">
                                    {whyChooseUsSectionData.badge?.line1}
                                </p>
                                <p className="font-bold leading-tight text-gray-900">
                                    {whyChooseUsSectionData.badge?.line2}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <StatisticsSection statisticsData={statisticsData} />
            </div>
        </section>
    );
}
