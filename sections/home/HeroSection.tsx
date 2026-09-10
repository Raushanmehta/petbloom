"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { site, PetBloomHeroData, SectionProps } from "@/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const lilitaOne = Lilita_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export interface HeroSectionProps extends SectionProps<PetBloomHeroData> {}

export default function HeroSection({ data, className }: HeroSectionProps = {}) {
    const hero = data || site.hero;
    const slides = hero.slides;
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
        <div className={`relative w-full overflow-hidden bg-[#F2EDE9] p-4 sm:p-4 md:p-6 lg:p-6 ${className || ""}`}>
            <Carousel
                setApi={setApi}
                className="relative w-full"
                opts={{ loop: true }}
            >
                <CarouselContent className="ml-0 rounded-2xl sm:rounded-[2.5rem]">
                    {slides.map((slide, index) => {
                        const isActive = currentSlide === index;

                        return (
                            <CarouselItem
                                key={slide.id}
                                className="relative flex min-h-[610px] h-[calc(100vh-2rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-3rem)] items-center pl-0 rounded-[2.5rem] sm:rounded-[2.5rem]"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-2xl sm:rounded-[2.5rem]">
                                    <motion.div
                                        className="relative h-full w-full"
                                        animate={{ scale: isActive ? 1.08 : 1 }}
                                        transition={{ duration: 6, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={slide.image}
                                            alt={slide.titleWhite}
                                            fill
                                            sizes="100vw"
                                            priority={slide.id === 1}
                                            className="object-cover object-center"
                                        />
                                    </motion.div>
                                    {/* Left Side Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent sm:from-black/80 sm:via-black/45" />
                                </div>

                                {/* Slide Content */}
                                <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-[85px] sm:px-12 sm:pb-24 sm:pt-[120px] lg:pb-28 lg:pt-[150px]">
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                key={slide.id}
                                                className="flex max-w-2xl flex-col items-start gap-4 sm:gap-6"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.16 } },
                                                    exit: { opacity: 0, transition: { duration: 0.2 } },
                                                }}
                                            >
                                                {/* Heading */}
                                                <motion.h1
                                                    variants={{
                                                        hidden: { opacity: 0, y: 50 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                                                    }}
                                                    className={`${lilitaOne.className} text-5xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[90px] leading-[1.1] tracking-tight text-white`}
                                                >
                                                    {slide.titleWhite}
                                                    <br />
                                                    <span className="text-[#e5a942]">
                                                        {slide.titleColored}
                                                    </span>
                                                </motion.h1>

                                                {/* Description */}
                                                <motion.p
                                                    variants={{
                                                        hidden: { opacity: 0, y: 30 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                                                    }}
                                                    className="max-w-lg text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#d1d8d8]"
                                                >
                                                    {slide.description}
                                                </motion.p>

                                                {/* CTA Buttons */}
                                                <motion.div
                                                    variants={{
                                                        hidden: { opacity: 0, y: 25 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                                                    }}
                                                    className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto sm:gap-4 sm:pt-2"
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.04, y: -2 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="w-full sm:w-auto"
                                                    >
                                                        <Link
                                                            href={hero.button1.href}
                                                            className="block w-full rounded-full border border-white/10 bg-black/85 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-black sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                                                        >
                                                            {hero.button1.label}
                                                        </Link>
                                                    </motion.div>

                                                    <motion.div
                                                        whileHover={{ scale: 1.04, y: -2 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="w-full sm:w-auto"
                                                    >
                                                        <Link
                                                            href={hero.button2.href}
                                                            className="block w-full rounded-full border border-white/40 bg-transparent px-6 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                                                        >
                                                            {hero.button2.label}
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

                {/* Navigation Arrows: scaled and visible across devices */}
                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 sm:gap-3">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CarouselPrevious className="relative static h-9 w-9 sm:h-12 sm:w-12 translate-y-0 rounded-full border-2 border-white/30 bg-black/30 backdrop-blur-sm text-white transition-all hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]" />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CarouselNext className="relative static h-9 w-9 sm:h-12 sm:w-12 translate-y-0 rounded-full border-2 border-white/30 bg-black/30 backdrop-blur-sm text-white transition-all hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]" />
                    </motion.div>
                </div>
            </Carousel>
        </div>
    );
}
