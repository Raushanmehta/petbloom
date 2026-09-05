"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { StatisticsItem } from "@/types";
import { statisticsContainerVariants, statisticsItemVariants } from "@/utils/animations";


import data from "@/data/data.json";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

interface StatisticsSectionProps {
    statisticsData?: StatisticsItem[];
}

export default function StatisticsSection({
    statisticsData = (data as any).statisticsData as StatisticsItem[],
}: StatisticsSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 rounded-[1.5rem] bg-[#387478] px-6 py-10 text-white shadow-xl">
            <motion.div
                variants={statisticsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 divide-y divide-white/80 gap-8 sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 lg:grid-cols-4">
                {statisticsData.map((stat, index) => {
                    const iconPath = stat.icon || "/icon/team-icon.png";

                    return (
                        <motion.div
                            key={stat.id}
                            variants={statisticsItemVariants}
                            whileHover={{ y: -6, scale: 1.03 }}
                            transition={{ duration: 0.25 }}
                            className="group flex items-center gap-4 pt-6 first:pt-0 sm:px-6 sm:pt-0 first:sm:pl-0 last:sm:pr-0">
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -30 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 220, damping: 15, delay: index * 0.12 }}
                                whileHover={{ rotate: 8, scale: 1.1 }}
                                className="flex h-14 w-14 shrink-0 items-center justify-center  backdrop-blur-md">
                                <Image src={iconPath} alt={stat.label} width={55} height={55} className="text-white" />
                            </motion.div>

                            {/* Text */}
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    className={`${lilitaOne.className} text-3xl tracking-wide sm:text-4xl`} >
                                    {stat.count}
                                </motion.h3>

                                <p className="mt-1 text-sm font-medium text-white /80">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div >
    );
}

