"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Location } from "@/data";
import { FaLocationDot } from "react-icons/fa6";

interface LocationCardProps {
    location?: Location;
    area?: Location;

}

export default function LocationCard({
    location,
    area,

}: LocationCardProps) {
    const loc = location || area;
    if (!loc) return null;

    const displayTitle = loc.name || "Location";
    const slug = loc.slug || (loc.name || loc.title || "").toLowerCase().replace(/\s+/g, "-");
    const href = `/locations/${slug}`;

    return (
        <Link href={href} className="block w-full cursor-pointer focus:outline-none">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group flex w-full flex-col items-center rounded-3xl border border-gray-100/80 bg-white p-3 shadow-xl shadow-gray-100 snap-center transition-all duration-300 hover:shadow-2xl hover:border-[#387478]/30"
            >
                <div className="relative w-full">
                    <div className="relative h-[280px] w-full overflow-hidden rounded-b-[5rem] rounded-t-[5rem] shadow-md sm:h-[280px] sm:rounded-b-[6rem] sm:rounded-t-[6rem]">
                        <motion.div
                            className="relative h-full w-full"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image
                                src={loc.image}
                                alt={displayTitle}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                    <motion.div
                        initial={{ scale: 0, y: 20 }}
                        whileInView={{ scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.25 }}
                        whileHover={{ scale: 1.12, rotate: 5 }}
                        className="absolute -bottom-6 left-1/2 z-10 flex h-18 w-18 -translate-x-1/2 items-center justify-center rounded-full bg-white/90 text-[#387478] backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#387478] group-hover:text-white "
                    >
                        <FaLocationDot className="h-10 w-10 fill-[#387478] text-white transition-colors duration-300 group-hover:fill-white group-hover:text-[#387478]" />
                    </motion.div>
                </div>
                <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 text-2xl pt-2 font-bold tracking-wide text-gray-900 transition-colors duration-300 group-hover:text-[#387478]"
                >
                    {displayTitle}
                </motion.h3>
            </motion.div>
        </Link>
    );
}
