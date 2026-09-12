"use client";

import Image from "next/image";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Lilita_One } from "next/font/google";
import { FaPaw } from "react-icons/fa";
import { site, PetBloomStatsSectionData, SectionProps } from "@/data";
import { statisticsContainerVariants, statisticsItemVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export interface StatisticsSectionProps extends SectionProps<PetBloomStatsSectionData> {
    statisticsData?: PetBloomStatsSectionData;
}

function AnimatedCounter({ from = 0, to }: { from?: number; to: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, amount: 0.5 });
    
    // Extract the numeric part and the suffix/prefix
    const numericMatch = to.match(/(\d+)/);
    const numericPart = numericMatch ? parseInt(numericMatch[0], 10) : 0;
    const suffixIndex = numericMatch ? (numericMatch.index || 0) + numericMatch[0].length : 0;
    const prefix = numericMatch ? to.substring(0, numericMatch.index) : "";
    const suffix = numericMatch ? to.substring(suffixIndex) : to;

    useEffect(() => {
        if (inView && nodeRef.current) {
            animate(from, numericPart, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = prefix + Math.round(value) + suffix;
                    }
                },
            });
        }
    }, [inView, from, numericPart, suffix, prefix]);

    return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
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
            className={`relative overflow-hidden mt-12 sm:mt-16 lg:mt-20 rounded-[1.5rem] sm:rounded-[2rem] bg-[#387478] px-5 py-7 sm:px-8 sm:py-9 lg:px-6 xl:px-8 lg:py-10 text-white shadow-xl ${className || ""}`}
        >
            {/* Decorative Background Graphics */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                <FaPaw className="absolute -left-4 top-1/2 h-20 w-20 -translate-y-1/2 rotate-[-15deg] text-white/[0.03]" />
                <FaPaw className="absolute right-10 top-4 h-14 w-14 rotate-[20deg] text-white/[0.03]" />
                <FaPaw className="absolute bottom-4 left-1/3 h-16 w-16 rotate-[-10deg] text-white/[0.03]" />
            </div>

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
                                className="flex h-18 w-18 sm:h-18 sm:w-18 shrink-0 items-center justify-center"
                            >
                                <Image
                                    src={iconPath}
                                    alt={stat.label}
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 sm:w-16 sm:h-16 object-contain brightness-0 invert"
                                />
                            </motion.div>

                            {/* Text */}
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                                    className={`${lilitaOne.className} text-2xl sm:text-3xl lg:text-5xl tracking-wide leading-tight`}
                                >
                                    <AnimatedCounter to={stat.count as string} />
                                </motion.h3>

                                <p className="mt-0.5 sm:mt-1 text-sm sm:text-md font-medium text-white/85 leading-snug max-w-[150px] sm:max-w-[160px]">
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
