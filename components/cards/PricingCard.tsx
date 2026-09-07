import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { pricingCardVariants, pricingFeatureContainer, pricingFeatureVariants } from "@/utils/animations";
import { PricingPackage } from "@/types/sections";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

interface PricingCardProps {
    pkg: PricingPackage;
}

export default function PricingCard({ pkg }: PricingCardProps) {
    const isPopular = pkg.popular;

    return (
        <motion.div
            variants={pricingCardVariants}
            whileHover={{ y: -10, scale: 1.015, transition: { duration: 0.3, ease: "easeOut", }, }}
            className={`relative flex flex-col justify-between rounded-[1.5rem] border bg-white shadow-xl ${isPopular
                ? "border-[#E67E22] ring-4 ring-[#E67E22]/10 lg:-translate-y-4"
                : "border-gray-100/90 shadow-gray-100 overflow-hidden"
                }`}>

            {isPopular && (
                <div className="absolute left-1/2 -top-4 z-20 -translate-x-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, }}
                        transition={{ duration: 0.5, delay: 0.4, }}
                        className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#E67E22] to-[#d5701b] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-md border border-white/20">
                        MOST POPULAR
                    </motion.div>
                </div>
            )}

            <div>
                {/* Card Header */}
                <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    viewport={{ once: true, }}
                    transition={{ duration: 0.5, }}
                    className={`rounded-t-[1.5rem] p-4 text-center text-white sm:p-4 ${isPopular
                        ? "bg-[#E67E22] pt-10"
                        : "bg-[#387478]"
                        }`}>
                    <div className="mb-2 flex items-center justify-center gap-2">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15, }}>
                            <FaPaw className="h-6 w-6" />
                        </motion.div>

                        <h3
                            className={`${lilitaOne.className} text-2xl tracking-wide sm:text-3xl`}>
                            {pkg.name}
                        </h3>
                    </div>

                    <p className=" text-xs font-medium text-white/90 sm:text-sm">
                        {pkg.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, }}
                    whileInView={{ opacity: 1, scale: 1, }}
                    viewport={{ once: true, }}
                    transition={{ duration: 0.5, delay: 0.15, }}
                    className="border-b border-gray-100 p-4 sm:p-6">
                    <div className="flex  gap-1">
                        <span
                            className={`${lilitaOne.className} text-4xl text-gray-900 sm:text-5xl`}>
                            {pkg.price}
                        </span>
                    </div>

                    <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-gray-400">
                        / Session
                    </span>
                </motion.div>

                <motion.div
                    variants={pricingFeatureContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, }}
                    className="space-y-3.5 p-6 sm:p-8">
                    {pkg.features.map(
                        (feature, fIdx) => (
                            <motion.div
                                key={fIdx}
                                variants={pricingFeatureVariants}
                                className="flex items-center gap-3 text-xs font-semibold text-gray-700 sm:text-sm">
                                <motion.div
                                    whileHover={{ scale: 1.2, }}>
                                    <CheckCircle2
                                        className={`h-6 w-6 shrink-0 ${isPopular
                                            ? "text-[#E67E22]"
                                            : "text-[#387478]"
                                            }`}
                                    />
                                </motion.div>
                                <span>
                                    {feature}
                                </span>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true, }}
                transition={{ duration: 0.5, delay: 0.3, }}
                className="p-6 pt-0 sm:p-8 sm:pt-0">
                <Link
                    href={`/appointment?package=${pkg.id}`}
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold shadow-lg transition-colors duration-300 ${isPopular
                        ? "bg-[#E67E22] text-white hover:bg-[#d5701b]"
                        : "border-2 border-[#387478] bg-white text-[#387478] hover:bg-[#387478] hover:text-white"
                        }`}>
                    <motion.span
                        whileHover={{ rotate: 15, scale: 1.1, }}>
                        <FaPaw className="h-6 w-6" />
                    </motion.span>
                    <span>
                        Choose Package
                    </span>
                </Link>
            </motion.div>
        </motion.div>
    );
}
