"use client";


import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import GalleryCard from "@/components/cards/GalleryCard";
import VideoCard from "@/components/cards/VideoCard";
import PageTopSection from "@/components/common/PageTopSection";
import { GalleryDataWrapper } from "@/types/sections";
import data from "@/data/data.json";
import Link from "next/link";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});


const { galleryData } = data as { galleryData: GalleryDataWrapper };

export default function GalleryPage() {
    return (
        <main>
            <PageTopSection title="Gallery" subTitle="Our Gallery" />
            <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }}
                    className="absolute left-10 top-12 hidden text-[#387478] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-24 w-24" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: 15 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="absolute right-10 top-12 hidden text-[#387478] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-24 w-24" />
                    </motion.div>
                </motion.div>

                <div className="relative z-10 mx-auto max-w-[1300px]">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center">

                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                <FaPaw className="h-6 w-6 text-[#387478]" />
                            </motion.div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                {galleryData.pageData.badgeText}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            variants={fadeUpVariants}
                            className={`${lilitaOne.className} mx-auto mt-4 max-w-xl text-center text-4xl tracking-wide text-[#387478] sm:text-5xl lg:text-6xl`}>
                            {galleryData.pageData.titleWhite}{" "}
                            <span className="text-[#E67E22]">
                                {galleryData.pageData.titleColored}
                            </span>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 flex items-center justify-center gap-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut", }}
                                className="h-[2px] rounded-full bg-[#E67E22]/30" />

                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                <FaPaw className="h-6 w-6 text-[#E67E22]" />
                            </motion.div>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut", }}
                                className="h-[2px] rounded-full bg-[#E67E22]/30" />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            className="mx-auto mt-4 max-w-xl text-base font-medium text-gray-600 sm:text-lg">
                            {galleryData.pageData.description}
                        </motion.p>
                    </motion.div>

                    {/* Photo Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1, }}
                        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {galleryData.photos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                variants={columnVariants}
                                whileHover={{ y: -8, scale: 1.02, }}
                                transition={{ duration: 0.3, ease: "easeOut", }}>
                                <GalleryCard photo={photo} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* See More Photos */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2, }}
                        className="mt-12 flex justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -3, }}
                            whileTap={{ scale: 0.97, }}>
                            <Link
                                href="/gallery/photos"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-[#387478] bg-white px-8 py-3.5 text-sm font-bold text-[#387478] shadow-md transition-colors duration-300 hover:bg-[#387478] hover:text-white">
                                <FaPaw className="h-6 w-6" />
                                See More Photos
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div className="mt-20 border-t border-gray-100 pt-16">

                        {/* Video Header */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2, }}
                            className="mx-auto mb-16 max-w-2xl text-center">

                            {/* Badge */}
                            <motion.div
                                variants={fadeUpVariants}
                                whileHover={{ scale: 1.05, y: -3, }}
                                className="inline-flex items-center gap-2 rounded-full border border-[#387478]/30 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                    <FaPaw className="h-6 w-6 text-[#387478]" />
                                </motion.div>

                                <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                    {galleryData.videoPageData?.badgeText}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                variants={fadeUpVariants}
                                className={`${lilitaOne.className} mt-4 text-4xl tracking-wide text-gray-900 sm:text-5xl lg:text-6xl`}>
                                {galleryData.videoPageData?.titleWhite}{" "}
                                <span className="text-[#E67E22]">
                                    {galleryData.videoPageData?.titleColored}
                                </span>
                            </motion.h2>

                            {/* Divider */}
                            <motion.div
                                variants={fadeUpVariants}
                                className="mx-auto mt-4 flex items-center justify-center gap-4 text-[#387478]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, }}
                                    className="h-[2px] rounded-full bg-[#E67E22]/30"
                                />

                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, }}>
                                    <FaPaw className="h-6 w-6 text-[#E67E22]" />
                                </motion.div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true, }}
                                    transition={{ duration: 0.7, }}
                                    className="h-[2px] rounded-full bg-[#E67E22]/30"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                variants={fadeUpVariants}
                                className="mx-auto mt-4 text-base font-medium text-gray-600 sm:text-lg">
                                {galleryData.videoPageData?.description}
                            </motion.p>
                        </motion.div>

                        {/* Video Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1, }}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {galleryData.videos.map((video) => (
                                <motion.div
                                    key={video.id}
                                    variants={columnVariants}
                                    whileHover={{ y: -8, scale: 1.02, }}
                                    transition={{ duration: 0.3, ease: "easeOut", }}>
                                    <VideoCard video={video} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* See More Videos */}
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2, }}
                            className="mt-12 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -3, }}
                                whileTap={{ scale: 0.97, }}>
                                <Link
                                    href="/gallery/videos"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#387478] bg-white px-8 py-3.5 text-sm font-bold text-[#387478] shadow-md transition-colors duration-300 hover:bg-[#387478] hover:text-white">
                                    <FaPaw className="h-6 w-6" />
                                    See More Videos
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

