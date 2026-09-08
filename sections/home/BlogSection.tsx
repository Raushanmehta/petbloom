"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import BlogCard from "@/components/cards/BlogCard";
import type { BlogPost, BlogSectionData } from "@/types/sections";
import { blogFeaturedVariants, blogSideCardVariants, blogSideContainerVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import allData from "@/data/data.json";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export default function BlogSection() {
    const rawBlog = (allData as any)?.blogData;
    const blogSectionData: BlogSectionData = rawBlog?.sectionData || {
        badgeText: "BLOG & NEWS",
        titleWhite: "Latest",
        titleColored: "Blog Articles",
        description: ""
    };
    const blogsData: BlogPost[] = rawBlog?.blogs || [];
    const featuredBlog =
        blogsData.find((blog) => blog.featured) || blogsData[0];

    const sideBlogs = blogsData.filter((blog) => !blog.featured);

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-[1300px]">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mx-auto mb-16 max-w-2xl text-center">
                    {/* Badge */}
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
                            {blogSectionData.badgeText}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        variants={fadeUpVariants}
                        className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}>
                        {blogSectionData.titleWhite}{" "}
                        <span className="text-[#E67E22]">
                            {blogSectionData.titleColored}
                        </span>
                    </motion.h2>

                    {/* Divider */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="mx-auto mt-4 flex items-center justify-center gap-4">
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

                    {/* Description */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="mx-auto mt-4 text-base font-medium text-gray-600 sm:text-lg" >
                        {blogSectionData.description}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

                    {/* FEATURED BLOG */}
                    <motion.div
                        variants={blogFeaturedVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex flex-col overflow-hidden rounded-[1rem] bg-white shadow-xl shadow-gray-100 lg:col-span-6">
                        {/* Image */}
                        <Link href={`/blog/${featuredBlog.id}`} className="group relative block h-[320px] w-full overflow-hidden rounded-[1rem] sm:h-[360px]">
                            <Image
                                src={featuredBlog.image || featuredBlog.heroImage || ""}
                                alt={featuredBlog.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </Link>

                        {/* Content */}
                        <div className="flex flex-grow flex-col justify-between px-6 py-8">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="mb-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#387478] px-3 py-1 font-bold tracking-wide text-white">
                                        <FaPaw className="h-3 w-3" />
                                        {featuredBlog.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-gray-600">
                                        <Calendar className="h-4 w-4 text-[#387478]" />
                                        {featuredBlog.date}
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <Link href={`/blog/${featuredBlog.id}`} className="block">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="text-xl font-bold leading-snug tracking-wide text-gray-900 transition-colors duration-300 hover:text-[#387478] sm:text-2xl">
                                        {featuredBlog.title}
                                    </motion.h3>
                                </Link>

                                {/* Excerpt */}
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="mt-2 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                                    {featuredBlog.excerpt}
                                </motion.p>
                            </div>

                            {/* Read More */}
                            <motion.div
                                initial={{ opacity: 0, }}
                                whileInView={{ opacity: 1, }}
                                viewport={{ once: true, }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="mt-6 border-t border-gray-100 pt-4">
                                <Link
                                    href={`/blog/${featuredBlog.id}`}
                                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#387478] transition-colors hover:text-[#2d5d61]">
                                    Read More
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* SIDE BLOGS */}
                    <motion.div
                        variants={blogSideContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="space-y-6 lg:col-span-6">
                        {sideBlogs.map((blog) => (
                            <motion.div
                                key={blog.id}
                                variants={blogSideCardVariants}>
                                <BlogCard blog={blog} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.95, }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3, }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], }}
                    className="mt-14 flex justify-center">
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-3 rounded-full bg-[#387478] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#2d5d61]">
                        <FaPaw className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                        View All Blogs
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
