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
import { TestimonialDataWrapper } from "@/types/sections";
import StatisticsSection from "@/components/common/StatisticsSection";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

interface TestimonialSectionProps {
    isPage?: boolean;
}

export default function TestimonialsSection({ isPage = false }: TestimonialSectionProps) {
    const rawTestimonial = (data as unknown as { testimonialData: TestimonialDataWrapper })?.testimonialData;
    const headerData = (isPage ? rawTestimonial?.pageData : rawTestimonial?.sectionData) || {
        badgeText: "Testimonials",
        titleWhite: "Happy Pets, ",
        titleColored: "Happy Parents",
        description: ""
    };
    const image = rawTestimonial?.image || "";
    const testimonials = rawTestimonial?.testimonials || [];
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
        <section className="relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20">
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -30 }}
                whileInView={{ opacity: 0.05, x: 0, rotate: -15 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                animate={{ y: [0, -10, 0] }}
                className="pointer-events-none absolute left-4 top-16 hidden text-[#387478] lg:block"
            >
                <FaPaw className="h-28 w-28" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 30 }}
                whileInView={{ opacity: 0.05, x: 0, rotate: 15 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                animate={{ y: [0, -10, 0] }}
                className="pointer-events-none absolute bottom-16 right-4 hidden text-[#387478] lg:block"
            >
                <FaPaw className="h-28 w-28" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">

                    {/* Left Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -80, scale: 0.92 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        whileHover={{ scale: 1.015 }}
                        className="group relative h-[300px] sm:h-[420px] lg:h-[580px] xl:h-[650px] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl lg:col-span-5"
                    >
                        <Image
                            src={image}
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

                    {/* Right Carousel Column */}
                    <div className="flex flex-col justify-between lg:col-span-7">
                        <motion.div
                            variants={headerContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="mb-6 sm:mb-8 flex flex-col items-center text-center"
                        >
                            {/* Badge */}
                            <motion.div
                                variants={fadeUpVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                                >
                                    <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                                </motion.div>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                    {headerData.badgeText}
                                </span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2
                                variants={fadeUpVariants}
                                className={`${lilitaOne.className} mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-[1.15]`}
                            >
                                {headerData.titleWhite}
                                <span className="text-[#387478]">
                                    {headerData.titleColored}
                                </span>
                            </motion.h2>

                            {/* Divider */}
                            <motion.div
                                variants={fadeUpVariants}
                                className="mx-auto mt-4 flex items-center justify-center gap-4"
                            >
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: 48, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="h-[2px] rounded-full bg-[#387478]/30"
                                />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                                    >
                                        <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: 48, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="h-[2px] rounded-full bg-[#387478]/30"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                variants={fadeUpVariants}
                                className="mt-4 max-w-xl text-sm sm:text-base font-medium text-gray-600 md:text-lg"
                            >
                                {headerData.description}
                            </motion.p>
                        </motion.div>

                        {/* Testimonial Cards Carousel: 1 on mobile, 2 on tablet/desktop */}
                        <motion.div
                            variants={carouselVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            <Carousel
                                setApi={setApi}
                                opts={{ align: "start", loop: true }}
                                plugins={[
                                    Autoplay({
                                        delay: 3500,
                                        stopOnInteraction: true,
                                    }),
                                ]}
                                className="relative w-full"
                            >
                                <CarouselContent className="-ml-4">
                                    {testimonials.map((testimonial, index) => (
                                        <CarouselItem
                                            key={testimonial.id}
                                            className="pl-4 basis-full sm:basis-1/3"
                                        >
                                            <motion.div
                                                className="h-full"
                                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                viewport={{ once: true, amount: 0.15 }}
                                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                            >
                                                <TestimonialCard testimonial={testimonial} />
                                            </motion.div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </motion.div>

                        {/* Navigation Dots */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 sm:mt-12 flex justify-center gap-2"
                        >
                            {Array.from({ length: count }).map((_, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`h-2.5 sm:h-3 cursor-pointer rounded-full transition-all duration-300 ${current === index
                                            ? "w-7 sm:w-8 bg-[#387478]"
                                            : "w-2.5 sm:w-3 bg-[#387478]/30"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>

                <StatisticsSection />
            </div>
        </section>
    );
}
