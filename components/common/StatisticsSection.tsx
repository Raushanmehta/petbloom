"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { site, PetBloomStatsSectionData, SectionProps } from "@/data";
import { statisticsContainerVariants, statisticsItemVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export interface StatisticsSectionProps extends SectionProps<PetBloomStatsSectionData> {
    statisticsData?: PetBloomStatsSectionData;
}

export default function StatisticsSection({
    data,
    className,
    statisticsData,
}: StatisticsSectionProps = {}) {
    const stats = data || statisticsData || site.statsSection;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`mt-12 sm:mt-16 lg:mt-20 rounded-[1.5rem] sm:rounded-[2rem] bg-[#387478] px-5 py-7 sm:px-8 sm:py-9 lg:px-6 xl:px-8 lg:py-10 text-white shadow-xl ${className || ""}`}
        >
            <motion.div
                variants={statisticsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-2 sm:divide-y-0 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/25"
            >
                {stats.map((stat, index) => {
                    const iconPath = stat.icon || "/icon/team-icon.png";

                    return (
                        <motion.div
                            key={stat.id}
                            variants={statisticsItemVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.25 }}
                            className="group flex items-center justify-start sm:justify-start lg:justify-center gap-3.5 sm:gap-4 py-4 first:pt-0 last:pb-0 sm:py-0 sm:px-2 md:px-4 lg:px-5 xl:px-6"
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -30 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 220, damping: 15, delay: index * 0.1 }}
                                whileHover={{ rotate: 8, scale: 1.1 }}
                                className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center"
                            >
                                <Image
                                    src={iconPath}
                                    alt={stat.label}
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                />
                            </motion.div>

                            {/* Text */}
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                                    className={`${lilitaOne.className} text-2xl sm:text-3xl lg:text-4xl tracking-wide leading-tight`}
                                >
                                    {stat.count}
                                </motion.h3>

                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-white/85 leading-snug max-w-[150px] sm:max-w-[160px]">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
