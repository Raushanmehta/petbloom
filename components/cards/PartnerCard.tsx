"use client";
import { motion } from "framer-motion";


import Image from "next/image";

interface PartnerCardProps {
    partner: any;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-between rounded-[1rem] bg-white p-6 shadow-xl shadow-gray-100 border border-gray-100/90 h-[160px] text-center cursor-pointer group"
        >
            {/* Brand Logo Title Placeholder / Representation */}
            <div className="relative flex items-center justify-center flex-grow w-full h-[60px] mb-2">
                <Image
                    src={partner.logoImage}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
            </div>

            {/* Tagline */}
            <div className="pt-3 border-t border-gray-100 w-full">
                <p className="text-[11px] font-semibold text-gray-500 whitespace-pre-line leading-tight">
                    {partner.tagline}
                </p>
            </div>
        </motion.div>
    );
}