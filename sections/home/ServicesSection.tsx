"use client";

import data from "@/data/data.json";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { ServicesDataWrapper } from "@/types";
import ServiceCard from "@/components/cards/ServiceCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, } from "react-icons/io";
import { headerContainer, fadeUp, cardsContainer, cardVariant, } from "@/utils/animations";
import { FaPaw } from "react-icons/fa";


const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});


const { servicesData } = data as { servicesData: ServicesDataWrapper };

export default function ServicesSection() {
    return (
        <section className="relative overflow-hidden bg-[#FCF7F3] px-4 py-20 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-[1300px]">
                <motion.div
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    {/* Left Content */}
                    <div className="max-w-2xl">

                        {/* Top Badge */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -2, }}
                            className="mb-4 inline-flex items-center rounded-full border border-[#E67E22]/40 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <span className="text-xs flex gap-2 items-center font-bold uppercase tracking-wider text-[#E67E22]">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                    <FaPaw className="h-6 w-6 text-[#E67E22]" />
                                </motion.div>
                                {servicesData.sectionData.badgeText}
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h2
                            variants={fadeUp}
                            className={`${lilitaOne.className} text-4xl leading-[1.15] tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}
                        >
                            {servicesData.sectionData.titleBlack}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-4 text-base font-medium text-gray-600 sm:text-lg"
                        >
                            {servicesData.sectionData.description}
                        </motion.p>
                    </div>
                </motion.div>


                <motion.div
                    variants={cardsContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Carousel
                        opts={{ align: "start", loop: true, }}
                        className="relative w-full"
                    >
                        {/* Navigation Buttons */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, }}
                            className="relative mb-6 flex justify-end gap-3 md:absolute md:-top-24 md:right-0 md:z-10">
                            {/* Previous */}
                            <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-full border-2 border-gray-300 bg-transparent text-gray-900 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                                <IoIosArrowRoundBack className="h-7 w-7" />
                            </CarouselPrevious>

                            {/* Next */}
                            <CarouselNext className="static h-12 w-12 translate-y-0 rounded-full border-2 border-gray-300 bg-transparent text-gray-900 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                                <IoIosArrowRoundForward className="h-7 w-7" />
                            </CarouselNext>
                        </motion.div>

                        {/* Cards */}
                        <CarouselContent className="-ml-4">
                            {servicesData.services.map((service, index) => (
                                <CarouselItem
                                    key={`${service.id}-${index}`}
                                    className="pl-4 md:basis-1/2 lg:basis-1/4"
                                >
                                    <motion.div variants={cardVariant}>
                                        <ServiceCard service={service} />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}
