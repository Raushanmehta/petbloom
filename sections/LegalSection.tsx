"use client";

import { columnVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import { LegalDataWrapper } from "@/types/sections";

interface LegalSectionProps {
    data: LegalDataWrapper;
}

export default function LegalSection({ data }: LegalSectionProps) {
    const policies = data?.policies || [];

    return (
        <div className="w-full">
            <div className="space-y-6 sm:space-y-8 mx-auto max-w-[1355px]">
                {policies.map((policy) => (
                    <motion.div
                        key={policy.id}
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" first:pt-0 space-y-2 sm:space-y-2.5"
                    >
                        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-[#387478] leading-snug">
                            {policy.number} {policy.title}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-relaxed">
                            {policy.content}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                variants={columnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl mx-auto max-w-[1355px] bg-[#EAF2F2]/70 border border-[#387478]/20 p-5 sm:p-7 text-center space-y-2.5 shadow-sm"
            >
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                    If you have any questions about this policy, feel free to contact us at
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-bold text-[#387478]">
                    {data?.contactEmail && (
                        <Link href={`mailto:${data.contactEmail}`} className="hover:underline break-all sm:break-normal">
                            {data.contactEmail}
                        </Link>
                    )}
                    {data?.contactEmail && data?.contactPhoneValue && <span>or</span>}
                    {data?.contactPhoneValue && (
                        <Link href={`tel:${data.contactPhoneValue}`} className="hover:underline inline-flex items-center gap-1.5">
                            {data.contactPhoneDisplay} <FaPaw className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#E67E22]" />
                        </Link>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
