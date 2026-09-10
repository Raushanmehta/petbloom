"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { cardVariant, fadeUpVariants } from "@/utils/animations";
import type { BlogPost } from "@/data";

interface BlogCardProps {
    blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link href={`/blog/${blog.id}`} className="block h-full">
            <motion.article
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.01, }}
                transition={{ duration: 0.3, ease: "easeOut", }}
                className="group flex h-full cursor-pointer flex-col items-center gap-4 sm:gap-6 rounded-[1rem] border border-gray-100/90 bg-white p-2.5 shadow-lg shadow-gray-100 sm:flex-row">

                <div className="relative h-[160px] sm:h-[180px] w-full shrink-0 overflow-hidden rounded-2xl shadow-sm sm:w-[170px] md:w-[190px] xl:w-[200px]">
                    <Image
                        src={blog.image || blog.heroImage || ""}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 200px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                <div className="flex w-full flex-grow flex-col justify-between px-4 py-4">
                    <div>
                        <motion.div
                            variants={fadeUpVariants}
                            className="mb-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500">

                            <motion.span
                                whileHover={{ scale: 1.04, }}
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#387478]/65 px-3 py-1 font-bold tracking-wide text-white">
                                <FaPaw className="h-4 w-4" />
                                {blog.category}
                            </motion.span>

                            <span className="flex items-center gap-1 text-gray-500">
                                <Calendar className="h-3.5 w-3.5 text-[#387478]" />
                                {blog.date}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h4
                            variants={fadeUpVariants}
                            className="line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#387478] sm:text-lg">
                            {blog.title}
                        </motion.h4>
                    </div>

                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-3 border-t border-gray-100 pt-3">
                        <span
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#387478] transition-colors group-hover:text-[#2d5d61]">
                            Read More
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </motion.div>
                </div>
            </motion.article>
        </Link>
    );
}
