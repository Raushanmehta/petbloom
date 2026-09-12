"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Phone, Mail, Globe, MapPin, Briefcase, User, Star, ChevronRight, } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { site, TeamMember, SectionProps } from "@/data";
import { teamDetailContainerVariants, teamDetailLeftCardVariants, teamDetailRightCardVariants, teamDetailBottomCardVariants, teamDetailItemVariants, fadeUpVariants, } from "@/utils/animations";
import StatisticsSection from "@/components/common/StatisticsSection";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export interface TeamDetailPageProps extends SectionProps<TeamMember> {
    team?: TeamMember;
}

export default function TeamDetailPage({ data, team: propTeam, className }: TeamDetailPageProps = {}) {
    const team = data || propTeam || site.team.teams[0];
    if (!team || !team.detail) return null;

    const contactItems = [
        { icon: Phone, label: "Phone Number", value: team.detail.phone },
        { icon: Mail, label: "Email", value: team.detail.email },
        { icon: Globe, label: "Website", value: team.detail.website },
        { icon: MapPin, label: "Address", value: team.detail.address, alignRight: true },
        { icon: Briefcase, label: "Experience", value: team.detail.experience },
    ];

    return (
        <section className={`relative overflow-hidden bg-[#FEFDFB] py-10 sm:py-14 md:py-16 lg:py-16 ${className || ""}`}>
            <motion.div
                initial={{ opacity: 0, x: -30, rotate: -25 }}
                whileInView={{ opacity: 0.08, x: 0, rotate: -15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="pointer-events-none absolute left-6 top-20 hidden text-[#387478] lg:block">
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-15, -8, -15] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                    <FaPaw className="h-28 w-28" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30, rotate: 25 }}
                whileInView={{ opacity: 0.08, x: 0, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="pointer-events-none absolute right-6 top-32 hidden text-[#E67E22] lg:block">
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [15, 8, 15] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                    <FaPaw className="h-24 w-24" />
                </motion.div>
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8 space-y-10">


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <motion.div
                        variants={teamDetailLeftCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.35 }}
                        className="group relative h-[360px] sm:h-[480px] lg:h-[615px] w-full overflow-hidden rounded-2xl sm:rounded-[1.75rem] shadow-xl border border-gray-100/90 lg:col-span-6 bg-gray-100">
                        <Image
                            src={team.image}
                            alt={`${team.name} - ${team.role}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 220 }}
                            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-white/30 bg-white/90 p-2.5 sm:px-4 sm:py-3 shadow-lg backdrop-blur-md">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#387478] text-white">
                                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-500">Experience</p>
                                <p className="text-sm sm:text-base font-extrabold text-gray-900">{team.detail.experience}</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Profile Info & Contact Details */}
                    <motion.div
                        variants={teamDetailRightCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col justify-between rounded-2xl sm:rounded-[1.75rem] bg-white p-5 sm:p-8 border border-gray-100/90 shadow-xl shadow-gray-100/70 lg:col-span-6">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className={`${lilitaOne.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-gray-900`}
                            >
                                {team.name}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className="mt-1.5 text-base sm:text-lg font-bold text-[#E67E22]"
                            >
                                {team.role}
                            </motion.p>
                            {/* Decorative Divider */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 56 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="h-1 mt-1 w-14 rounded-full bg-[#E67E22]"
                            />

                            {/* Bio Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-4 text-xs sm:text-sm font-medium text-gray-600 leading-relaxed"
                            >
                                {team.detail.bio}
                            </motion.p>
                        </div>

                        {/* Contact List Table with Interactive Row Hover */}
                        <motion.div
                            variants={teamDetailContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-8 space-y-3.5 pt-6 border-t border-gray-100 text-xs sm:text-sm font-medium text-gray-700"
                        >
                            {contactItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={teamDetailItemVariants}
                                    whileHover={{ x: 6 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                    className="group/row flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pb-2.5 border-b border-gray-50 last:border-0"
                                >
                                    <div className="flex items-center gap-3 text-gray-900 font-bold shrink-0">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 10 }}
                                            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#EAF2F2] text-[#387478] shadow-sm transition-colors group-hover/row:bg-[#387478] group-hover/row:text-white"
                                        >
                                            <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </motion.div>
                                        <span className="transition-colors group-hover/row:text-[#387478]">{item.label}</span>
                                    </div>
                                    <span className="hidden sm:inline text-gray-400 font-semibold px-2">:</span>
                                    <span className={`text-gray-600 font-semibold transition-colors group-hover/row:text-gray-900 break-words ${item.alignRight ? "sm:text-right" : ""}`}>
                                        {item.value}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Box: About Me */}
                    <motion.div
                        variants={teamDetailBottomCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col justify-between rounded-[1.5rem] bg-white p-5 sm:p-8 shadow-xl shadow-gray-100/70 border border-gray-100/90 lg:col-span-6">
                        <div>
                            {/* Heading */}
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#387478] text-white shadow-md shadow-[#387478]/30"
                                >
                                    <User className="h-6 w-6" />
                                </motion.div>
                                <div>
                                    <h3 className={`${lilitaOne.className} text-2xl sm:text-3xl tracking-wide text-gray-900`}>
                                        About Me
                                    </h3>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 56 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: 0.4 }}
                                        className="h-1 mt-1 w-14 rounded-full bg-[#E67E22]"
                                    />

                                </div>

                            </div>

                            {/* Paragraphs */}
                            <div className="space-y-4 text-xs sm:text-sm font-medium text-gray-600 leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                >
                                    {team.detail.aboutMeText1}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    {team.detail.aboutMeText2}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Box: Personal Skills Progress Bars */}
                    <motion.div
                        variants={teamDetailBottomCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col justify-between rounded-[1.5rem] bg-white p-6 sm:p-10 shadow-xl shadow-gray-100/70 border border-gray-100/90 lg:col-span-6"
                    >
                        <div>
                            {/* Heading */}
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#387478] text-white shadow-md shadow-[#387478]/30"
                                >
                                    <Star className="h-6 w-6 fill-white" />
                                </motion.div>
                                <div>
                                    <h3 className={`${lilitaOne.className} text-2xl sm:text-3xl tracking-wide text-gray-900`}>
                                        Personal Skills
                                    </h3>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 56 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: 0.4 }}
                                        className="h-1 mt-1 w-14 rounded-full bg-[#E67E22]"
                                    />

                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-6 leading-relaxed">
                                {team.detail.skillsDescription}
                            </p>

                            {/* Progress Bars List with smooth animated width on view */}
                            <div className="space-y-6">
                                {team.detail.skills.map((skill, index) => {
                                    const IconComponent = (LucideIcons as any)[skill.icon] || Star;
                                    return (
                                        <motion.div
                                            key={skill.id || index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.15 }}
                                            whileHover={{ scale: 1.01 }}
                                            className="flex items-center gap-4 group/skill"
                                        >
                                            {/* Left Icon Badge */}
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF2F2] shadow-sm transition-colors group-hover/skill:bg-[#387478] group-hover/skill:text-white">
                                                <IconComponent className="h-6 w-6 text-[#387478] transition-colors group-hover/skill:text-white" />
                                            </div>

                                            {/* Right: Title, Percentage & Progress Bar */}
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                                                    <span className="transition-colors group-hover/skill:text-[#387478]">{skill.title}</span>
                                                    <span className="text-[#E67E22] font-extrabold">{skill.percentage}%</span>
                                                </div>

                                                {/* Animated Track and Fill Bar */}
                                                <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 p-0.5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.percentage}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                                                        className="h-full rounded-full bg-gradient-to-r from-[#E67E22] to-[#f39c12] shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <StatisticsSection />
            </div>
        </section>
    );
}