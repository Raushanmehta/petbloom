"use client";
import Image from "next/image";
import { site, PetBloomWhyChooseUsData, SectionProps } from "@/data";
import { motion } from "framer-motion";
import { Lilita_One, Courgette } from "next/font/google";
import { FaPaw, FaRegHeart } from "react-icons/fa";
import StatisticsSection from "@/components/common/StatisticsSection";
import { containerVariants, fadeUpVariants, featureContainerVariants, featureVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const courgette = Courgette({
    subsets: ["latin"],
    weight: "400",
});

export interface WhyChooseUsSectionProps extends SectionProps<PetBloomWhyChooseUsData> {
    isPage?: boolean;
}

export default function WhyChooseUsSection({ data, className, isPage = false }: WhyChooseUsSectionProps = {}) {
    const rawWhyChoose = data || site.whyChooseUs;
    const sectionHeader = (isPage ? rawWhyChoose?.pageData : rawWhyChoose?.sectionData) || {
        badgeText: "Why Choose Us",
        titleWhite: "Why PetBloom",
        titleColored: "Is the Right Choice",
        description: ""
    };
    const features = rawWhyChoose?.features || [];
    const images = rawWhyChoose?.images || { main: "" };
    const badge = rawWhyChoose?.badge || { line1: "", line2: "" };
    const statisticsData = site.statsSection;

    return (
        <section className={`relative overflow-hidden bg-[#FEFDFB]  py-10 sm:py-14 md:py-16 lg:py-16 ${className || ""}`}>


            {/* Decorative background paw right */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 0.08, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute right-10 top-12 hidden flex-col items-center text-[#387478] lg:flex xl:right-20"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [15, 10, 15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaPaw className="h-20 w-20 xl:h-24 xl:w-24 rotate-[15deg]" />
                </motion.div>
            </motion.div>


            <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6 sm:space-y-4 lg:col-span-7"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                            >
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                            </motion.div>

                            <span className="text-sm font-bold uppercase px-2 tracking-wider text-[#387478]">
                                {sectionHeader.badgeText}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-wide text-gray-900`}
                        >
                            {sectionHeader.titleWhite}
                            <br />
                            <span className="text-[#387478]">{sectionHeader.titleColored}</span>
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
                                transition={{ duration: 0.7 }}
                                className="h-[2px] rounded-full bg-[#387478]/40"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                            >
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                            </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            className="max-w-xl text-sm sm:text-base font-medium text-gray-600 md:text-lg"
                        >
                            {sectionHeader.description}
                        </motion.p>

                        <motion.div
                            variants={featureContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2 sm:gap-4"
                        >
                            {features.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={featureVariants}
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ duration: 0.25 }}
                                    className="group flex items-start gap-3.5 rounded-2xl sm:rounded-3xl bg-[#EAF2F2]/60 p-4 sm:p-5"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 8, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
                                    >
                                        <div
                                            className="w-10 h-10 sm:w-10 sm:h-10 bg-[#387478]"
                                            style={{
                                                WebkitMaskImage: `url(${item.icon || "/icon/heart-icon.svg"})`,
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                maskImage: `url(${item.icon || "/icon/heart-icon.svg"})`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center',
                                                filter: 'drop-shadow(0px 0px 0.8px #387478) drop-shadow(0px 0px 0.5px #387478)'
                                            }}
                                        />
                                    </motion.div>

                                    {/* Text */}
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-black">
                                            {item.title}
                                        </h4>

                                        <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual Image with Scaled Badges */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative flex justify-center mb-16 sm:mb-16 lg:mb-0 lg:col-span-5"
                    >
                        <div className="relative w-[320px] sm:w-[450px] lg:w-[500px] max-w-full">
                            {/* Decorative background paw left (moved next to image) */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 0.08, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="absolute -left-12 sm:-left-20 top-20 hidden flex-col items-center text-[#387478] lg:flex"
                            >
                                <motion.div
                                    animate={{ y: [0, -8, 0], rotate: [-15, -10, -15] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <FaPaw className="h-20 w-20 xl:h-24 xl:w-24 rotate-[-15deg]" />
                                </motion.div>
                            </motion.div>

                            {/* Main Image */}
                            <motion.div
                                initial={{ scale: 0.92 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                whileHover={{ scale: 1.015 }}
                                className="relative h-[340px] sm:h-[450px] lg:h-[550px] w-full overflow-hidden rounded-[2.5rem] sm:rounded-[2rem] shadow-2xl"
                            >
                                <Image
                                    src={images?.main || ""}
                                    alt="Pet Grooming Professional"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                            </motion.div>

                            {/* Paw Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.4 }}
                                whileHover={{ scale: 1.08, rotate: 8 }}
                                className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-4 lg:-left-4 z-20 flex h-16 w-16 sm:h-32 sm:w-32 items-center justify-center rounded-full border-4 border-white bg-[#387478] text-white shadow-xl"
                            >
                                <FaPaw className="h-8 w-8 sm:h-18 sm:w-18" />
                            </motion.div>

                            {/* Healthy Pets Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="absolute -bottom-4 right-0 sm:-bottom-8 sm:right-2 lg:-bottom-8 lg:right-8 z-20 flex scale-[0.85] sm:scale-100 origin-bottom-right items-center gap-2.5 sm:gap-3 rounded-2xl border border-gray-100 bg-white/95 px-3.5 py-3 sm:px-5 sm:py-4 shadow-xl backdrop-blur-md"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.08, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center text-[#387478]"
                                >
                                    <FaRegHeart
                                        className="w-8 h-8 sm:w-12 sm:h-12"
                                    />
                                </motion.div>

                                <div className={`${courgette.className} text-sm sm:text-lg`}>
                                    <p className="font-bold leading-tight text-gray-900">
                                        {badge?.line1}
                                    </p>
                                    <p className="font-bold leading-tight text-gray-900">
                                        {badge?.line2}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Component */}
                <StatisticsSection statisticsData={statisticsData} />
            </div>
        </section>
    );
}
