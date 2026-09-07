"use client";

import { columnVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import { PrivacyPolicyDataWrapper } from "@/types/sections";

interface PrivacyPolicySectionProps {
    data: PrivacyPolicyDataWrapper;
}

export default function PrivacyPolicySection({ data }: PrivacyPolicySectionProps) {
    return (
        <div>
            <div className="space-y-8 divide-y divide-gray-100 mx-auto max-w-[1300px]">
                {data.policies.map((policy) => (
                    <motion.div
                        key={policy.id}
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="pt-8 first:pt-0 space-y-2"
                    >
                        <h2 className="text-base sm:text-xl font-bold text-[#387478]">
                            {policy.number} {policy.title}
                        </h2>
                        <p className="text-sm sm:text-md font-medium text-gray-600 leading-relaxed">
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
                className="mt-14 rounded-3xl mx-auto max-w-[1300px] bg-[#EAF2F2]/60 border border-[#387478]/20 p-6 text-center space-y-2"
            >
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                    If you have any questions about this Privacy Policy, feel free to contact us at
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#387478]">
                    <Link href={`mailto:${data.contactEmail}`} className="hover:underline">
                        {data.contactEmail}
                    </Link>
                    <span>or</span>
                    <Link href={`tel:${data.contactPhoneValue}`} className="hover:underline flex items-center gap-1">
                        {data.contactPhoneDisplay} <FaPaw className="h-3 w-3 text-[#E67E22]" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
