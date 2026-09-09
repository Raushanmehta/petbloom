"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, User, CheckCircle2 } from "lucide-react";
import { FaPaw, FaQuoteLeft } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, fadeUpVariants } from "@/utils/animations";
import allData from "@/data/data.json";
import { BlogPost } from "@/types/sections";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

interface BlogDetailPageProps {
    blog?: BlogPost;
}

export default function BlogDetailPage({ blog }: BlogDetailPageProps = {}) {
    const defaultBlog = (allData.blogData.blogs[0] as unknown) as BlogPost;
    const blogDetailData = blog || defaultBlog;
    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20">
            <motion.div
                initial={{ opacity: 0, x: -30, rotate: -25 }}
                whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="pointer-events-none absolute left-6 top-12 hidden text-[#E67E22] lg:block">
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <FaPaw className="h-20 w-20 xl:h-24 xl:w-24" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30, rotate: 25 }}
                whileInView={{ opacity: 0.1, x: 0, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="pointer-events-none absolute right-6 top-12 hidden text-[#E67E22] lg:block">
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <FaPaw className="h-20 w-20 xl:h-24 xl:w-24" />
                </motion.div>
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Hero Image */}
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-6 relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden rounded-2xl sm:rounded-[1.75rem]">
                        <Image
                            src={blogDetailData.heroImage || blogDetailData.image || ""}
                            alt={blogDetailData.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Right Hero Info */}
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-6 space-y-4">
                        {/* Category Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.25 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                            </motion.div>

                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {blogDetailData.category}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <h1 className={`${lilitaOne.className} text-3xl sm:text-4xl lg:text-6xl tracking-wide text-gray-900 leading-tight`}>
                            {blogDetailData.title}
                        </h1>

                        {/* Divider */}

                        {/* Divider */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="mt-4 flex items-center justify-start gap-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="h-[2px] rounded-full bg-[#387478]/30"
                            />

                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                            </motion.div>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="h-[2px] rounded-full bg-[#387478]/30"
                            />
                        </motion.div>

                        {/* Author & Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-gray-500 pt-2">
                            <div className="flex items-center gap-2">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                                        alt={blogDetailData.author || "Author"}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-gray-800 font-bold">{blogDetailData.author}</span>
                            </div>

                            <div className="flex items-center gap-1.5 text-gray-600">
                                <Calendar className="h-4 w-4 text-[#387478]" />
                                {blogDetailData.date}
                            </div>

                            <div className="flex items-center gap-1.5 text-gray-600">
                                <Clock className="h-4 w-4 text-[#387478]" />
                                {blogDetailData.readTime}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Intro Paragraph */}
                <motion.p
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed py-8 ">
                    {blogDetailData.introText}
                </motion.p>

                <div className="space-y-12">
                    {blogDetailData.sections?.map((sec) => (
                        <motion.div
                            key={sec.id}
                            variants={columnVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 pt-6 border-t border-gray-100">
                            {/* Section Title */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF2F2] text-[#387478]">
                                    <FaPaw className="h-6 w-6" />
                                </div>
                                <h2 className={`${lilitaOne.className} text-xl sm:text-3xl tracking-wide text-gray-900`}>
                                    {sec.number} {sec.title}
                                </h2>
                            </div>

                            {/* Layout based on section type */}
                            {sec.imagePosition === "right" && (
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                    <div className="lg:col-span-8 space-y-3">
                                        <p className="text-md sm:text-md font-medium text-gray-600 leading-relaxed whitespace-pre-line">
                                            {sec.content}
                                        </p>
                                        {sec.subheading && (
                                            <p className="text-md sm:text-md font-bold text-gray-900 pt-1">
                                                {sec.subheading}
                                            </p>
                                        )}
                                        {sec.bullets && (
                                            <ul className="space-y-2 pt-1">
                                                {sec.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-gray-600">
                                                        <CheckCircle2 className="h-5 w-5 text-[#387478] shrink-0 mt-0.5" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="lg:col-span-4 relative h-[220px] w-full overflow-hidden rounded-2xl shadow-md">
                                        <Image src={sec.image!} alt={sec.title} fill className="object-cover" />
                                    </div>
                                </div>
                            )}

                            {sec.imagePosition === "bottom-banner" && (
                                <div className="space-y-4">
                                    <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                                        {sec.content}
                                    </p>
                                    {sec.bullets && (
                                        <ul className="space-y-2">
                                            {sec.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-gray-600">
                                                    <CheckCircle2 className="h-5 w-5 text-[#387478] shrink-0 mt-0.5" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {sec.footerNote && (
                                        <p className="text-md sm:text-md font-bold text-gray-800">
                                            {sec.footerNote}
                                        </p>
                                    )}

                                    {/* Quote Box & Image Banner */}
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4">
                                        <div className="lg:col-span-7 rounded-3xl bg-[#FDF6F0] border border-[#E67E22]/20 p-6 relative">
                                            <FaQuoteLeft className="absolute top-4 left-4 h-10 w-10 text-[#E67E22]/20" />
                                            <p className="relative z-10 text-md sm:text-md font-medium text-gray-700 italic leading-relaxed mb-3">
                                                &ldquo;{sec.quote?.text}&rdquo;
                                            </p>
                                            <span className="text-md sm:text-md font-bold text-[#E67E22] block text-right">
                                                - {sec.quote?.author}
                                            </span>
                                        </div>
                                        <div className="lg:col-span-5 relative h-[180px] w-full overflow-hidden rounded-2xl shadow-md ">
                                            <Image src={sec.image!} alt={sec.title} fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {sec.imagePosition === "split-right" && (
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                    <div className="lg:col-span-7">
                                        <p className="text-md sm:text-md font-medium text-gray-600 leading-relaxed">
                                            {sec.content}
                                        </p>
                                    </div>
                                    <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                                        {sec.images?.map((img, iIdx) => (
                                            <div key={iIdx} className="relative h-[160px] w-full overflow-hidden rounded-2xl shadow-md ">
                                                <Image src={img} alt="Gallery view" fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {sec.imagePosition === "full-bottom-image" && (
                                <div className="space-y-4">
                                    <p className="text-md sm:text-md font-medium text-gray-600 leading-relaxed whitespace-pre-line">
                                        {sec.content}
                                    </p>
                                    <div className="relative h-[285px] w-full overflow-hidden rounded-[2rem] shadow-xl  mt-4">
                                        <Image src={sec.image!} alt={sec.title} fill className="object-cover" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}