"use client"
import data from "@/data/data.json";
import PageTopSection from "@/components/common/PageTopSection";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { containerVariants, fadeUpVariants, teamCardsContainerVariants, } from "@/utils/animations";
import TeamCard from "@/components/cards/TeamCard";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

import { TeamDataWrapper } from "@/types";
const { teamData } = data as { teamData: TeamDataWrapper };

export default function TeamPage() {
    return (
        <main>
            <PageTopSection title="Our Team" subTitle="Our Team " />
            <section className="relative overflow-hidden bg-[#FCF7F3] px-4 py-20 sm:px-6 lg:px-12">
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
                            {teamData.pageData.badgeText}
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        variants={fadeUpVariants}
                        className={`${lilitaOne.className} mx-auto mt-4 max-w-4xl text-center text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}
                    >
                        {teamData.pageData.titleWhite}{" "}
                        <span className="text-[#387478]">
                            {teamData.pageData.titleColored}
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
                        className="mx-auto mt-4 max-w-3xl text-base font-medium text-gray-600 sm:text-lg">
                        {teamData.pageData.description}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={teamCardsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15, }}
                    className="relative z-10 mx-auto mt-14 grid max-w-[1300px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamData.teams.map((member, index) => (<TeamCard key={member.id || index} team={member} />))}
                </motion.div>

            </section>
        </main>
    );
}