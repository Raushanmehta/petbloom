"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PartnerItem {
    id?: string;
    name?: string;
    logoImage?: string;
    tagline?: string;
}

interface PartnerCardProps {
    partner: PartnerItem;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-center justify-between rounded-2xl bg-white p-5 sm:p-6 shadow-lg shadow-gray-100/80 border border-gray-100/90 hover:border-[#387478]/30 hover:shadow-xl hover:shadow-[#387478]/5 h-[160px] text-center cursor-pointer group transition-all duration-300">
            {/* Brand Logo */}
            <div className="relative flex items-center justify-center flex-grow w-full h-[60px] mb-2">
                {partner?.logoImage ? (
                    <Image
                        src={partner.logoImage}
                        alt={partner.name || "Partner brand"}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-sm font-bold text-gray-400">{partner?.name || "Partner"}</span>
                )}
            </div>

            {/* Tagline */}
            <div className="pt-2.5 border-t border-gray-100 w-full">
                <p className="text-[11px] sm:text-xs font-semibold text-gray-500 line-clamp-2 leading-tight">
                    {partner?.tagline || ""}
                </p>
            </div>
        </motion.div>
    );
}