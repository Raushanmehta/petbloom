"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonialHeaderContainerVariants as headerContainerVariants, testimonialFadeUpVariants as fadeUpVariants, testimonialCarouselVariants as carouselVariants } from "@/utils/animations";
import data from "@/data/data.json";
import { TestimonialSectionData } from "@/types/sections";
import StatisticsSection from "@/components/common/StatisticsSection";


const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const { testimonialSectionData } = data as { testimonialSectionData: TestimonialSectionData };

export default function TestimonialsSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -30 }}
                whileInView={{ opacity: 0.05, x: 0, rotate: -15, }}
                viewport={{ once: true, amount: 0.2, }}
                transition={{ duration: 1, ease: "easeOut" }}
                animate={{ y: [0, -10, 0], }}
                className="pointer-events-none absolute left-4 top-16 hidden text-[#387478] lg:block">
                <FaPaw className="h-28 w-28" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 30 }} whileInView={{ opacity: 0.05, x: 0, rotate: 15, }}
                viewport={{ once: true, amount: 0.2, }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                animate={{ y: [0, -10, 0] }}
                className="pointer-events-none absolute bottom-16 right-4 hidden text-[#387478] lg:block">
                <FaPaw className="h-28 w-28" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1300px]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

                    <motion.div
                        initial={{ opacity: 0, x: -80, scale: 0.92, }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2, }}
                        transition={{ duration: 0.9, ease: "easeOut", }}
                        whileHover={{ scale: 1.015, }}
                        className="group relative h-[720px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl lg:col-span-5">
                        <Image
                            src={testimonialSectionData.image}
                            alt="Testimonials Hero"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-gradient-to-t from-[#387478]/25 via-transparent to-transparent"
                        />
                    </motion.div>
                    <div className="flex flex-col justify-between lg:col-span-7">

                        <motion.div
                            variants={headerContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2, }} className="mb-8 flex flex-col items-center text-center">

                            {/* Badge */}

                            <motion.div
                                variants={fadeUpVariants}
                                whileHover={{ scale: 1.05, y: -3, }}
                                className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                    <FaPaw className="h-6 w-6 text-[#387478]" />
                                </motion.div>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                    {testimonialSectionData.badgeText}
                                </span>
                            </motion.div>

                            {/* Main Heading */}

                            <motion.h2
                                variants={fadeUpVariants}
                                className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}>
                                {testimonialSectionData.titleWhite}
                                <span className="text-[#387478]">
                                    {testimonialSectionData.titleColored}
                                </span>
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
                                    initial={{ opacity: 0, scale: 0, }}
                                    whileInView={{ opacity: 1, scale: 1, }}
                                    viewport={{ once: true, }}
                                    transition={{ type: "spring", stiffness: 250, damping: 15, rotate: { duration: 2, repeat: Infinity, repeatDelay: 3, }, }}
                                    animate={{ rotate: [0, 10, -10, 0], }}>
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
                                className="mt-4 max-w-xl text-base font-medium text-gray-600 sm:text-lg"
                            >
                                {testimonialSectionData.description}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={carouselVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15, }}>
                            <Carousel
                                setApi={setApi}
                                opts={{ align: "start", loop: true, }}
                                plugins={[
                                    Autoplay({
                                        delay: 3500,
                                        stopOnInteraction: true,
                                    }),
                                ]}
                                className="relative w-full">
                                <CarouselContent className="-ml-4">
                                    {testimonialSectionData.testimonials.map(
                                        (testimonial, index) => (
                                            <CarouselItem
                                                key={testimonial.id}
                                                className="pl-4 md:basis-1/3" >
                                                <motion.div
                                                    className="h-full"
                                                    initial={{ opacity: 0, y: 30, scale: 0.95, }}
                                                    whileInView={{ opacity: 1, y: 0, scale: 1, }}
                                                    viewport={{ once: true, amount: 0.15, }}
                                                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut", }}>
                                                    <TestimonialCard testimonial={testimonial} />
                                                </motion.div>
                                            </CarouselItem>
                                        )
                                    )}
                                </CarouselContent>
                            </Carousel>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true, }}
                            transition={{ duration: 0.6, delay: 0.3, }}
                            className="mt-12 flex justify-center gap-2">
                            {Array.from({ length: count }).map(
                                (_, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.5, }}
                                        whileInView={{ opacity: 1, scale: 1, }}
                                        viewport={{ once: true, }}
                                        transition={{ duration: 0.3, delay: index * 0.06, }}
                                        whileHover={{ scale: 1.25, }}
                                        whileTap={{ scale: 0.9, }}
                                        onClick={() => api?.scrollTo(index)}
                                        className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${current === index
                                            ? "w-8 bg-[#387478]"
                                            : "w-3 bg-[#387478]/30"
                                            }`}
                                        aria-label={`Go to slide ${index + 1
                                            }`}
                                    />
                                )
                            )}
                        </motion.div>
                    </div>
                </div>
                <StatisticsSection />
            </div>

        </section>
    );
}

