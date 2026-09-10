"use client";

import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import GalleryCard from "@/components/cards/GalleryCard";
import VideoCard from "@/components/cards/VideoCard";
import PageTopSection from "@/components/common/PageTopSection";
import { site } from "@/data";
import Link from "next/link";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const galleryData = site.gallery || {
    pageData: {
        badgeText: "Our Gallery",
        titleWhite: "Moments of",
        titleColored: "Joy & Care",
        description: "Explore joyful moments, pampering sessions, and adorable pet transformations at PetBloom.",
    },
    videoPageData: {
        badgeText: "Pet Videos",
        titleWhite: "Watch Our",
        titleColored: "Happy Pets",
        description: "Take a peek behind the scenes at our grooming salon and daycare in action.",
    },
    photos: [],
    videos: [],
};

export default function GalleryPage() {
    const pageData = galleryData?.pageData;
    const videoPageData = galleryData?.videoPageData;
    const photos = galleryData?.photos || [];
    const videos = galleryData?.videos || [];

    return (
        <main>
            <PageTopSection title="Gallery" subTitle="Our Gallery" />
            <section className="relative overflow-hidden bg-[#FEFDFB] py-16 sm:py-20">
                {/* Decorative Background Paws */}
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }}
                    className="pointer-events-none absolute left-6 top-12 hidden text-[#387478] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-20 w-20 xl:h-24 xl:w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: 15 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="pointer-events-none absolute right-6 top-12 hidden text-[#387478] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-20 w-20 xl:h-24 xl:w-24" />
                    </motion.div>
                </motion.div>

                <div className="relative z-10 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                            </motion.div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {pageData?.badgeText}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} mx-auto mt-4 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-[#387478] leading-tight`}>
                            {pageData?.titleWhite}{" "}
                            <span className="text-[#E67E22]">
                                {pageData?.titleColored}
                            </span>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 flex items-center justify-center gap-3 sm:gap-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="h-[2px] rounded-full bg-[#E67E22]/30 w-8 sm:w-12" />

                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#E67E22]" />
                            </motion.div>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="h-[2px] rounded-full bg-[#E67E22]/30 w-8 sm:w-12" />
                        </motion.div>

                        {/* Description */}
                        {pageData?.description && (
                            <motion.p
                                variants={fadeUpVariants}
                                className="mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed">
                                {pageData.description}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Photo Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
                        {photos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                variants={columnVariants}>
                                <GalleryCard photo={photo} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* See More Photos */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 sm:mt-12 flex justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/gallery/photos"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-[#387478] bg-white px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-[#387478] shadow-sm transition-all duration-300 hover:bg-[#387478] hover:text-white">
                                <FaPaw className="h-5 w-5 sm:h-6 sm:w-6" />
                                <span>See More Photos</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Video Section Container */}
                    <div className="mt-16 sm:mt-20 border-t border-gray-100 pt-12 sm:pt-16">
                        {/* Video Header */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center">

                            {/* Badge */}
                            <motion.div
                                variants={fadeUpVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                    <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />
                                </motion.div>

                                <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                    {videoPageData?.badgeText}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                variants={fadeUpVariants}
                                className={`${lilitaOne.className} mt-4 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-tight`}>
                                {videoPageData?.titleWhite}{" "}
                                <span className="text-[#E67E22]">
                                    {videoPageData?.titleColored}
                                </span>
                            </motion.h2>

                            {/* Divider */}
                            <motion.div
                                variants={fadeUpVariants}
                                className="mx-auto mt-4 flex items-center justify-center gap-3 sm:gap-4 text-[#387478]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="h-[2px] rounded-full bg-[#E67E22]/30 w-8 sm:w-12"
                                />

                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                    <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#E67E22]" />
                                </motion.div>

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="h-[2px] rounded-full bg-[#E67E22]/30 w-8 sm:w-12"
                                />
                            </motion.div>

                            {/* Description */}
                            {videoPageData?.description && (
                                <motion.p
                                    variants={fadeUpVariants}
                                    className="mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed">
                                    {videoPageData.description}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Video Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                            {videos.map((video) => (
                                <motion.div
                                    key={video.id}
                                    variants={columnVariants}>
                                    <VideoCard video={video} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* See More Videos */}
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="mt-10 sm:mt-12 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}>
                                <Link
                                    href="/gallery/videos"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#387478] bg-white px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-[#387478] shadow-sm transition-all duration-300 hover:bg-[#387478] hover:text-white">
                                    <FaPaw className="h-5 w-5 sm:h-6 sm:w-6" />
                                    <span>See More Videos</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
