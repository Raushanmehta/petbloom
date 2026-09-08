"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { faqHeaderContainerVariants as headerContainerVariants, faqFadeUpVariants as fadeUpVariants, faqContainerVariants, faqItemVariants, faqAnswerVariants as answerVariants } from "@/utils/animations";
import { FaqDataWrapper } from "@/types/sections";
import data from "@/data/data.json";


const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

interface FaqSectionProps {
    isPage?: boolean;
}

export default function FaqSection({ isPage = false }: FaqSectionProps) {
    const rawFaq = (data as unknown as { faqData: FaqDataWrapper })?.faqData;
    const headerData = (isPage ? rawFaq?.pageData : rawFaq?.sectionData) || {
        badgeText: "FAQS",
        titleWhite: "Frequently Asked ",
        titleColored: "Questions",
        description: ""
    };
    const image = rawFaq?.image || "";
    const faqs = rawFaq?.faqs || [];
    const [openId, setOpenId] = useState<string | null>("1");

    const toggleAccordion = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
                animate={{ y: [0, -10, 0] }}
                viewport={{ once: true }}
                transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8, ease: "easeOut" }, rotate: { duration: 0.8 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, }}
                className="absolute left-10 top-16 hidden text-[#387478] lg:block">
                <FaPaw className="h-20 w-20" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 40, }}
                whileInView={{ opacity: 0.1, scale: 1, rotate: 20, }}
                animate={{ y: [0, 12, 0], }}
                viewport={{ once: true }}
                transition={{ opacity: { duration: 0.8, delay: 0.2, }, scale: { duration: 0.8, delay: 0.2, ease: "easeOut", }, rotate: { duration: 0.8, delay: 0.2, }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", }, }}
                className="absolute right-12 top-24 hidden text-[#387478] lg:block">
                <FaPaw className="h-24 w-24" />
            </motion.div>

            <div className="mx-auto max-w-[1300px]">
                <motion.div
                    variants={headerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3, }}
                    className="mx-auto mb-16 max-w-4xl text-center">
                    <motion.div
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05, y: -3, }}
                        whileTap={{ scale: 0.97, }}
                        transition={{ type: "spring", stiffness: 300, damping: 18, }}
                        className="inline-flex cursor-default items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                        <motion.div animate={{ rotate: [0, 10, -10, 0], }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>

                        <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                            {headerData.badgeText}
                        </span>
                    </motion.div>

                    {/* Main Title */}

                    <motion.h2
                        variants={fadeUpVariants}
                        className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}>
                        {headerData.titleWhite}
                        <motion.span
                            initial={{ opacity: 0, x: 15, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.6, delay: 0.2, }}
                            className="inline-block text-[#387478]">
                            {headerData.titleColored}
                        </motion.span>
                    </motion.h2>

                    {/* Divider */}

                    <motion.div
                        variants={fadeUpVariants}
                        className="mx-auto mt-4 flex items-center justify-center gap-4">
                        <motion.div
                            initial={{ width: 0, opacity: 0, }}
                            whileInView={{ width: 48, opacity: 1, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.7, ease: "easeOut", }}
                            className="h-[2px] rounded-full bg-[#387478]/30" />

                        <motion.div
                            initial={{ scale: 0, rotate: -90, }}
                            whileInView={{ scale: 1, rotate: 0, }}
                            viewport={{ once: true, }}
                            animate={{ rotate: [0, 10, -10, 0], }}
                            transition={{
                                scale: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 250, },
                                rotate: { duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", },
                            }}>
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                        </motion.div>

                        <motion.div
                            initial={{ width: 0, opacity: 0, }}
                            whileInView={{ width: 48, opacity: 1, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.7, ease: "easeOut", }}
                            className="h-[2px] rounded-full bg-[#387478]/30" />
                    </motion.div>

                    {/* Description */}

                    <motion.p
                        variants={fadeUpVariants}
                        className="mx-auto mt-4 max-w-lg text-base font-medium leading-relaxed text-gray-600 sm:text-lg"
                        dangerouslySetInnerHTML={{ __html: headerData.description || "" }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

                    <motion.div
                        initial={{ opacity: 0, x: -80, scale: 0.95, }}
                        whileInView={{ opacity: 1, x: 0, scale: 1, }}
                        viewport={{ once: true, amount: 0.25, }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        whileHover={{ y: -6, }}
                        className="group relative h-[520px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl lg:col-span-5">
                        <Image
                            src={image}
                            alt="Dog relaxing during grooming"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Image Overlay */}


                    </motion.div>

                    <motion.div
                        variants={faqContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15, }}
                        className="space-y-4 lg:col-span-7">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id;

                            return (
                                <motion.div
                                    key={faq.id}
                                    variants={faqItemVariants}
                                    whileHover={{ y: -2, }}
                                    transition={{ duration: 0.25, }}
                                    className={`group overflow-hidden rounded-3xl border transition-colors duration-300 ${isOpen
                                        ? "border-[#387478]/30 bg-[#EAF2F2]/50 shadow-md"
                                        : "border-gray-100/90 bg-white shadow-sm hover:border-[#387478]/20 hover:shadow-md"
                                        }`}>

                                    <motion.button
                                        type="button"
                                        onClick={() => toggleAccordion(faq.id)}
                                        whileTap={{ scale: 0.99, }}
                                        className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left">
                                        <motion.span
                                            animate={{ color: isOpen ? "#387478" : "#111827", }}
                                            transition={{ duration: 0.25, }}
                                            className="text-base font-bold tracking-wide sm:text-lg"
                                        >
                                            {faq.question}
                                        </motion.span>

                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.05 : 1, }}
                                            transition={{ type: "spring", stiffness: 300, damping: 18, }}
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen
                                                ? "bg-[#387478] text-white"
                                                : "bg-gray-100 text-gray-700"}`}>
                                            <AnimatePresence mode="wait" initial={false}>
                                                {isOpen ? (
                                                    <motion.div
                                                        key="minus"
                                                        initial={{ opacity: 0, rotate: -90, scale: 0.5, }}
                                                        animate={{ opacity: 1, rotate: 0, scale: 1, }}
                                                        exit={{ opacity: 0, rotate: 90, scale: 0.5, }}
                                                        transition={{ duration: 0.2, }}>
                                                        <Minus className="h-5 w-5" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="plus"
                                                        initial={{ opacity: 0, rotate: 90, scale: 0.5, }}
                                                        animate={{ opacity: 1, rotate: 0, scale: 1, }}
                                                        exit={{ opacity: 0, rotate: -90, scale: 0.5, }}
                                                        transition={{ duration: 0.2, }}>
                                                        <Plus className="h-5 w-5" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.button>

                                    {/* Answer */}

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, }}
                                                animate={{ height: "auto", opacity: 1, }}
                                                exit={{ height: 0, opacity: 0, }}
                                                transition={{ height: { duration: 0.4, ease: "easeInOut", }, opacity: { duration: 0.25, }, }}>
                                                <motion.div
                                                    variants={answerVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className="px-6 pb-6 pt-0 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                                                    {faq.answer}
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

