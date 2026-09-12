"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Team } from "@/data";
import { teamCardVariants } from "@/utils/animations";

interface TeamCardProps {
    team: Team;
}

export default function TeamCard({
    team,
}: TeamCardProps) {
    const slug = team.slug || team.name?.toLowerCase().replace(/\s+/g, "-") || team.id;

    return (
        <Link href={`/team/${slug}`} className="group block w-full h-full">
            <motion.div
                variants={teamCardVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex flex-col items-center rounded-3xl border border-gray-100/80 bg-white p-2 shadow-xl shadow-gray-100/60 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
            >
                {/* Image Container */}
                <div className="relative h-[270px] sm:h-[300px] md:h-[320px] w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                        src={team.image}
                        alt={team.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#387478]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Paw Badge in center */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 15, delay: 0.25 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="relative -mt-8 flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-[#EAF2F2] text-[#387478] "
                >
                    <motion.div
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                        <FaPaw className="h-10 w-10" />
                    </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col items-center gap-2 py-5 text-center w-full px-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="text-2xl font-bold tracking-wide text-gray-900 transition-colors duration-200 group-hover:text-[#387478]"
                    >
                        {team.name}
                    </motion.h3>

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 64, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        className="mx-auto h-[2px] rounded-full bg-[#387478]/40"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-sm font-semibold text-[#387478]">
                        {team.role}
                    </motion.p>
                </div>
            </motion.div>
        </Link>
    );
}
