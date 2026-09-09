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
    const isPopular = pkg?.popular;

    return (
        <motion.div
            variants={pricingCardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative flex flex-col justify-between rounded-[1.75rem] border bg-white shadow-xl ${isPopular
                ? "border-[#E67E22] ring-4 ring-[#E67E22]/15 lg:-translate-y-3"
                : "border-gray-100/90 shadow-gray-100/80 overflow-hidden"
                }`}>

            {isPopular && (
                <div className="absolute left-1/2 -top-3.5 z-20 -translate-x-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#E67E22] to-[#d5701b] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-md border border-white/20">
                        MOST POPULAR
                    </motion.div>
                </div>
            )}

            <div>
                {/* Card Header */}
                <div
                    className={`rounded-t-[1.75rem] p-5 sm:p-6 text-center text-white ${isPopular
                        ? "bg-[#E67E22] pt-8 sm:pt-10"
                        : "bg-[#387478]"
                        }`}>
                    <div className="mb-2 flex items-center justify-center gap-2">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.2 }}>
                            <FaPaw className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.div>

                        <h3 className={`${lilitaOne.className} text-2xl tracking-wide sm:text-3xl`}>
                            {pkg?.name}
                        </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed max-w-xs mx-auto">
                        {pkg?.description}
                    </p>
                </div>

                {/* Price Block */}
                <div className="border-b border-gray-100 p-5 sm:p-6 text-center sm:text-left">
                    <div className="flex items-baseline justify-center sm:justify-start gap-1">
                        <span className={`${lilitaOne.className} text-4xl text-gray-900 sm:text-5xl`}>
                            {pkg?.price}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            / Session
                        </span>
                    </div>
                </div>

                {/* Features List */}
                <motion.div
                    variants={pricingFeatureContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-3 sm:space-y-3.5 p-5 sm:p-6 lg:p-7">
                    {(pkg?.features || []).map((feature, fIdx) => (
                        <motion.div
                            key={fIdx}
                            variants={pricingFeatureVariants}
                            className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-gray-700">
                            <CheckCircle2
                                className={`h-5 w-5 shrink-0 mt-0.5 ${isPopular ? "text-[#E67E22]" : "text-[#387478]"
                                    }`}
                            />
                            <span className="leading-snug">{feature}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* CTA Button */}
            <div className="p-5 pt-0 sm:p-6 sm:pt-0 lg:p-7 lg:pt-0">
                <Link
                    href={`/appointment?package=${pkg?.id}`}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 sm:py-4 text-sm font-bold shadow-md transition-all duration-300 hover:shadow-lg ${isPopular
                        ? "bg-[#E67E22] text-white hover:bg-[#d5701b]"
                        : "border-2 border-[#387478] bg-white text-[#387478] hover:bg-[#387478] hover:text-white"
                        }`}>
                    <FaPaw className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Choose Package</span>
                </Link>
            </div>
        </motion.div>
    );
}
