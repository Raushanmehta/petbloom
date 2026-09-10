"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants } from "@/utils/animations";
import { site } from "@/data";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export default function NotFoundPage() {
    const notFoundData = site.notFound;

    return (
        <section className="relative min-h-screen w-full bg-[#111827] overflow-hidden flex items-center justify-center px-4 py-20 sm:px-6 lg:px-12">
            <div className="absolute inset-0 z-0">
                <Image
                    src={notFoundData.bgImage}
                    alt="Golden Retriever Background"
                    fill
                    className="object-cover opacity-25 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
            </div>
            <div className="absolute left-12 top-16 opacity-10 text-white hidden md:block">
                <FaPaw className="h-20 w-20 rotate-[-20deg]" />
            </div>
            <div className="absolute right-16 bottom-20 opacity-10 text-white hidden md:block">
                <FaPaw className="h-28 w-28 rotate-[15deg]" />
            </div>
            <div className="relative z-10 mx-auto max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <span className={`${lilitaOne.className} text-4xl sm:text-5xl text-[#387478] tracking-wider drop-shadow-md`}>
                            {notFoundData.badgeText}
                        </span>
                    </motion.div>

                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 select-none">
                        <span className={`${lilitaOne.className} text-7xl sm:text-9xl text-[#387478] tracking-wider drop-shadow-lg`}>
                            4
                        </span>
                        <div className="relative flex h-24 w-24 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-[#387478] shadow-2xl text-gray-900">
                            <FaPaw className="h-12 w-12 sm:h-20 sm:w-20 text-[#111827]" />
                        </div>
                        <span className={`${lilitaOne.className} text-7xl sm:text-9xl text-[#387478] tracking-wider drop-shadow-lg`}>
                            4
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`${lilitaOne.className} text-3xl sm:text-5xl text-white tracking-wide`}
                    >
                        {notFoundData.titleWhite}
                    </motion.h2>

                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center justify-center lg:justify-start gap-4 text-[#387478]">
                        <div className="h-[2px] w-12 bg-[#387478]/50 rounded-full" />
                        <FaPaw className="h-6 w-6 text-[#387478]" />
                        <div className="h-[2px] w-12 bg-[#387478]/50 rounded-full" />
                    </motion.div>

                    <motion.p
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-base sm:text-lg font-medium text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed"
                    >
                        {notFoundData.description}
                    </motion.p>
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5 rounded-full bg-[#387478] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#2d5d61] hover:scale-105"
                        >
                            <Home className="h-6 w-6" />
                            {notFoundData.homeButtonText}
                        </Link>

                        <Link
                            href={notFoundData.servicesButtonLink}
                            className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105"
                        >
                            <FaPaw className="h-6 w-6 text-[#387478]" />
                            {notFoundData.servicesButtonText}
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:col-span-5 relative h-[450px] w-full overflow-visible hidden sm:block mt-18 lg:mt-20 translate-y-8">
                    <motion.div
                        className="relative w-full h-full">
                        <Image
                            src={notFoundData.dogImage}
                            alt="Friendly dog looking sideways"
                            fill
                            className="object-contain scale-[1.3] origin-bottom drop-shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}