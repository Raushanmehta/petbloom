"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { HeroSectionData } from "@/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from "@/components/ui/carousel";



const lilitaOne = Lilita_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});


const { heroSectionData } = data as { heroSectionData: HeroSectionData };
const slides = heroSectionData.slides;

export default function HeroSection() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const updateSlide = () => {
            setCurrentSlide(api.selectedScrollSnap());
        };

        updateSlide();

        api.on("select", updateSlide);

        return () => {
            api.off("select", updateSlide);
        };
    }, [api]);

    return (
        <div className="relative w-full overflow-hidden">
            <Carousel
                setApi={setApi}
                className="relative w-full"
                opts={{ loop: true }}
            >
                <CarouselContent className="ml-0">
                    {slides.map((slide, index) => {
                        const isActive = currentSlide === index;

                        return (
                            <CarouselItem
                                key={slide.id}
                                className="relative flex min-h-[650px] items-center pl-0 lg:min-h-[730px]"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                                    <motion.div className="relative h-full w-full" animate={{ scale: isActive ? 1.08 : 1, }} transition={{ duration: 6, ease: "easeOut", }} >
                                        <Image src={slide.image} alt={slide.titleWhite} fill sizes="100vw" priority={slide.id === 1} className="object-cover object-center" />
                                    </motion.div> {/* Left Side Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
                                </div>

                                {/* Slide Content */}
                                <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-[120px] sm:px-12 sm:pb-24 sm:pt-[140px] lg:pb-28 lg:pt-[160px]">
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                key={slide.id}
                                                className="flex max-w-2xl flex-col items-start gap-6"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, }, }, exit: { opacity: 0, transition: { duration: 0.2, }, }, }}>
                                                {/* Heading */}
                                                <motion.h1
                                                    variants={{ hidden: { opacity: 0, y: 60, }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", }, }, }}
                                                    className={`${lilitaOne.className} text-4xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[90px]`}>
                                                    {slide.titleWhite}
                                                    <br />
                                                    <span className="text-[#e5a942]">
                                                        {slide.titleColored}
                                                    </span>
                                                </motion.h1>

                                                {/* Description */}
                                                <motion.p
                                                    variants={{ hidden: { opacity: 0, y: 35, }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", }, }, }}
                                                    className="max-w-lg text-base font-normal leading-relaxed text-[#d1d8d8] sm:text-lg">
                                                    {slide.description}
                                                </motion.p>

                                                {/* CTA Buttons */}
                                                <motion.div
                                                    variants={{ hidden: { opacity: 0, y: 30, }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", }, }, }}
                                                    className="flex flex-wrap items-center gap-4 pt-2">
                                                    <motion.div
                                                        whileHover={{ scale: 1.05, y: -3, }}
                                                        whileTap={{ scale: 0.97, }}>
                                                        <Link href={heroSectionData.button1.href} className="block rounded-full border border-white/10 bg-black/80 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-black">
                                                            {heroSectionData.button1.label}
                                                        </Link>
                                                    </motion.div>

                                                    <motion.div
                                                        whileHover={{ scale: 1.05, y: -3, }}
                                                        whileTap={{ scale: 0.97, }}>
                                                        <Link href={heroSectionData.button2.href} className="block rounded-full border border-white/40 bg-transparent px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-white/10">
                                                            {heroSectionData.button2.label}
                                                        </Link>
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>

                {/* Navigation Arrows */}
                <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 sm:flex">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CarouselPrevious className="relative static h-12 w-12 translate-y-0 rounded-full border-2 border-white/30 bg-transparent text-white transition-all hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]" />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CarouselNext className="relative static h-12 w-12 translate-y-0 rounded-full border-2 border-white/30 bg-transparent text-white transition-all hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]" />
                    </motion.div>
                </div>
            </Carousel>
        </div>
    );
}
