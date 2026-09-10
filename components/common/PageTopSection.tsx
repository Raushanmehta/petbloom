"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { columnVariants } from "@/utils/animations";
import { site, PetBloomPageTopSectionData, SectionProps } from "@/data";

export interface PageTopSectionProps extends SectionProps<PetBloomPageTopSectionData> {
    title?: string;
    subTitle?: string;
}

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

export default function PageTopSection({
    data,
    className,
    title = "About Us",
    subTitle = "About Us"
}: PageTopSectionProps = {}) {
    const pageTop = data || site.pageTopSection;

    return (
        <section className={`relative w-full bg-[#F2EDE9] px-4 py-6 sm:px-6 lg:px-8 ${className || ""}`}>
            <div className="relative mx-auto overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-2xl min-h-[340px] sm:min-h-[380px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={pageTop.backgroundImage}
                        alt={pageTop.backgroundAlt}
                        fill
                        className="object-cover opacity-80 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>

                <div className="relative z-20 px-6 py-16 sm:py-20 text-center">
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <h1 className={`${lilitaOne.className} text-4xl sm:text-6xl tracking-wide text-white drop-shadow-md`}>
                            {title}
                        </h1>
                        <div className="mt-3 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-gray-300">
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                            <span className="text-[#E67E22]">/</span>
                            <span className="text-[#E67E22]">{subTitle}</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}