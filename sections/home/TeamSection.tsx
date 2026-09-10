"use client";

import { site, PetBloomTeamData, SectionProps } from "@/data";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import TeamCard from "@/components/cards/TeamCard";
import { Lilita_One } from "next/font/google";
import { teamHeaderContainerVariants, teamFadeUpVariants, teamCardsContainerVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export interface TeamSectionProps extends SectionProps<PetBloomTeamData> {}

export default function TeamSection({ data, className }: TeamSectionProps = {}) {
    const teamData = data || site.team;

    return (
        <section className={`relative overflow-hidden bg-[#FCF7F3] py-16 sm:py-20 ${className || ""}`}>
            <motion.div
                initial={{ opacity: 0, x: -30, rotate: -25 }}
                whileInView={{ opacity: 0.08, x: 0, rotate: -15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="absolute left-10 top-12 hidden text-[#387478] lg:block"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaPaw className="h-24 w-24" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30, rotate: 25 }}
                whileInView={{ opacity: 0.08, x: 0, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="absolute right-10 top-12 hidden text-[#387478] lg:block"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaPaw className="h-24 w-24" />
                </motion.div>
            </motion.div>

            <motion.div
                variants={teamHeaderContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 mx-auto max-w-[1355px] text-center px-4 sm:px-4 md:px-6 lg:px-8"
            >
                {/* Badge */}
                <motion.div
                    variants={teamFadeUpVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    >
                        <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                    </motion.div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                        {teamData.sectionData.badgeText}
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    variants={teamFadeUpVariants}
                    className={`${lilitaOne.className} mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-[1.15]`}
                >
                    {teamData.sectionData.titleWhite}{" "}
                    <span className="text-[#387478]">
                        {teamData.sectionData.titleColored}
                    </span>
                </motion.h2>

                {/* Divider */}
                <motion.div
                    variants={teamFadeUpVariants}
                    className="mx-auto mt-4 flex items-center justify-center gap-4"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-[2px] rounded-full bg-[#387478]/30"
                    />

                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    >
                        <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-[2px] rounded-full bg-[#387478]/30"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={teamFadeUpVariants}
                    className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-medium text-gray-600 md:text-lg"
                >
                    {teamData.sectionData.description}
                </motion.p>
            </motion.div>

            <motion.div
                variants={teamCardsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative z-10 mx-auto mt-10 sm:mt-14 grid max-w-[1355px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 px-4 sm:px-4 md:px-6 lg:px-8"
            >
                {teamData.teams.map((team) => (
                    <TeamCard
                        key={team.id}
                        team={team}
                    />
                ))}
            </motion.div>
        </section>
    );
}
