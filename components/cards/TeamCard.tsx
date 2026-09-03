"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Team } from "@/types";
import { teamCardVariants } from "@/utils/animations";

interface TeamCardProps {
    team: Team;
}

export default function TeamCard({
    team,
}: TeamCardProps) {
    return (
        <motion.div
            variants={teamCardVariants}
            whileHover={{ y: -10, scale: 1.02, }}
            transition={{ duration: 0.3, ease: "easeOut", }}
            className="group relative flex flex-col items-center rounded-3xl border border-gray-100/80 bg-white p-1 shadow-xl shadow-gray-100">

            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl">
                <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#387478]/30 to-transparent"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 15, }}
                whileInView={{ opacity: 1, scale: 1, y: 0, }}
                viewport={{ once: true, }}
                transition={{ type: "spring", stiffness: 220, damping: 15, delay: 0.25, }}
                whileHover={{ scale: 1.15, rotate: 10, }}
                className="relative -mt-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#EAF2F2] text-[#387478] ">
                <motion.div
                    animate={{ rotate: [0, 8, -8, 0], }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, }}>
                    <FaPaw className="h-6 w-6" />
                </motion.div>
            </motion.div>

            <div className="flex flex-col items-center gap-2 py-6 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 10, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    viewport={{ once: true, }}
                    transition={{ duration: 0.5, delay: 0.35, }}
                    className="text-2xl font-bold tracking-wide text-gray-900">
                    {team.name}
                </motion.h3>
                <motion.div
                    initial={{ width: 0, opacity: 0, }}
                    whileInView={{ width: 64, opacity: 1, }}
                    viewport={{ once: true, }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut", }}
                    className="mx-auto h-[2px] rounded-full bg-[#387478]/40"
                />
                <motion.p
                    initial={{ opacity: 0, y: 8, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    viewport={{ once: true, }}
                    transition={{ duration: 0.5, delay: 0.5, }}
                    className="mt-1 text-sm font-semibold text-[#387478]">
                    {team.role}
                </motion.p>
            </div>
        </motion.div>
    );
}
