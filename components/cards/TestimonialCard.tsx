"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaQuoteLeft, FaPaw } from "react-icons/fa";
import {
    linkItemVariants,
    testimonialCardContentContainerVariants as contentContainerVariants,
    testimonialCardFadeUpVariants as fadeUpVariants,
    testimonialStarContainerVariants as starContainerVariants,
    testimonialStarVariants as starVariants
} from "@/utils/animations";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export default function TestimonialCard({
    testimonial,
}: TestimonialCardProps) {
    return (
        <motion.div
            variants={linkItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, }}
            whileHover={{ y: -8, scale: 1.01, }}
            transition={{ duration: 0.35, ease: "easeOut", }}
            className="group relative flex h-full min-h-[340px] w-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-gray-100/80 bg-white p-8 shadow-xl shadow-gray-100">

            <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -20, }}
                whileInView={{ opacity: 0.05, scale: 1, rotate: 0, }}
                viewport={{ once: true, }}
                transition={{ duration: 0.8, ease: "easeOut", }}
                animate={{ y: [0, -6, 0], rotate: [0, 4, 0], }}
                className="pointer-events-none absolute bottom-2 right-2 text-[#387478]">
                <FaPaw className="h-20 w-20" />
            </motion.div>

            <motion.div
                variants={contentContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, }}
                className="relative z-10">
                <motion.div
                    variants={fadeUpVariants}
                    className="mb-6 flex items-center justify-between">

                    <motion.div
                        whileHover={{ scale: 1.1, rotate: -5, }}
                        transition={{ type: "spring", stiffness: 300, damping: 15, }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2F2] text-[#387478]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -20, }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0, }}
                            viewport={{ once: true, }}
                            transition={{ type: "spring", stiffness: 250, damping: 15, delay: 0.15, }}>
                            <FaQuoteLeft className="h-5 w-5" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={starContainerVariants}
                        className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={starVariants}
                                whileHover={{ scale: 1.2, rotate: 8, }}>
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.p
                    variants={fadeUpVariants}
                    className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                    &ldquo;{testimonial.quote}&rdquo;
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ width: 0, opacity: 0, }}
                whileInView={{ width: 64, opacity: 1, }}
                viewport={{ once: true, amount: 0.5, }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut", }}
                className="mx-auto mt-2 h-[2px] rounded-full bg-[#387478]/40" />

            <motion.div
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true, amount: 0.3, }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut", }}
                className="relative z-10 mt-2 flex items-center gap-4">

                <motion.div
                    whileHover={{ scale: 1.1, rotate: 3, }}
                    transition={{ type: "spring", stiffness: 250, damping: 15, }}
                    className="relative h-12 w-12 overflow-hidden rounded-full shadow-md">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110" />

                    <motion.div
                        initial={{ opacity: 0, }}
                        whileHover={{ opacity: 1, }}
                        className="absolute inset-0 bg-[#387478]/10" />
                </motion.div>

                {/* Author Details */}

                <motion.div
                    variants={contentContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, }}>
                    <motion.h4
                        variants={fadeUpVariants}
                        className="text-base font-bold text-gray-900">{testimonial.author}
                    </motion.h4>

                    <motion.p
                        variants={fadeUpVariants}
                        className="text-xs font-semibold text-[#387478]">
                        {testimonial.role}
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ scaleX: 0, opacity: 0, }}
                whileHover={{ scaleX: 1, opacity: 1, }}
                transition={{ duration: 0.4, }}
                className="absolute bottom-0 left-8 right-8 h-[2px] origin-center rounded-full bg-[#387478]"
            />
        </motion.div>
    );
}
