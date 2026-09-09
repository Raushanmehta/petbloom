"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaChevronRight,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaPaw,
    FaDog,
    FaCat,
    FaHeart,
    FaPhoneAlt,
} from "react-icons/fa";

import { NavLink } from "@/types";
import data from "@/data/data.json";

const {
    quickLinks,
    serviceLinks,
    resourceLinks,
    supportLinks
} = data.footerData as {
    quickLinks: NavLink[];
    serviceLinks: NavLink[];
    resourceLinks: NavLink[];
    supportLinks: NavLink[];
};

import {
    containerVariants,
    columnVariants,
    linkContainerVariants,
    linkItemVariants
} from "@/utils/animations";

export default function Footer() {
    return (
        <footer className="relative box-border overflow-hidden bg-[#051d1b] pt-[60px] text-[#d1d8d8]">
            {/* Background Cat Mascot on Right Side */}
            <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8 z-0">
                <motion.div
                    className="absolute -right-4 sm:-right-16 md:-right-20 lg:-right-12 xl:-right-16 bottom-[95px] sm:bottom-[125px] md:bottom-[130px] lg:bottom-[80px] opacity-25 sm:opacity-30 lg:opacity-35"
                >
                    <div className="relative h-[140px] sm:h-[200px] md:h-[210px] lg:h-[220px] w-[320px] sm:w-[470px] md:w-[490px] lg:w-[520px]">
                        <Image
                            src="/images/cat.png"
                            alt="Cat Mascot Background"
                            fill
                            sizes="(max-width: 640px) 320px, (max-width: 768px) 470px, 520px"
                            className="object-contain object-right-bottom"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Main Container */}
            <motion.div
                className="relative z-10 mx-auto grid max-w-[1355px] grid-cols-1 gap-8 sm:gap-10 px-4 sm:px-4 md:px-6 lg:px-8 pb-[50px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                {/* Column 1: Brand & Contact Info */}
                <motion.div
                    variants={columnVariants}
                    className="flex flex-col sm:col-span-2 lg:col-span-1"
                >
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block w-fit"
                    >
                        <Link href="/" aria-label="PetBloom Home">
                            <Image
                                src="/logo/logo.png"
                                alt="PetBloom Logo"
                                width={150}
                                height={150}
                                className="w-[140px] sm:w-[150px] h-auto"
                            />
                        </Link>
                    </motion.div>

                    <p className="mt-3 mb-[25px] text-sm sm:text-base leading-[1.6] text-[#b4c2c1] max-w-[380px]">
                        At PetBloom, we provide professional grooming, boarding, and wellness care
                        services with love and dedication for your furry family members.
                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Phone */}
                        <motion.a
                            href="tel:+919876543210"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            className="group flex items-start gap-3.5"
                            aria-label="Call PetBloom customer care"
                        >
                            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38] text-white transition-colors group-hover:bg-[#2ec4b6] group-hover:text-[#051d1b]">
                                <FaPhoneAlt size={16} />
                            </div>

                            <div>
                                <strong className="block text-sm sm:text-base text-white transition-colors group-hover:text-[#2ec4b6]">
                                    +91 98765 43210
                                </strong>
                                <span className="text-xs sm:text-sm text-[#8da4a2]">
                                    Mon - Sat: 9:00 AM - 7:00 PM
                                </span>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:hello@petbloom.com"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            className="group flex items-start gap-3.5"
                            aria-label="Send email to PetBloom"
                        >
                            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38] text-white transition-colors group-hover:bg-[#2ec4b6] group-hover:text-[#051d1b]">
                                <FaEnvelope size={16} />
                            </div>

                            <div>
                                <strong className="block text-sm sm:text-base text-white transition-colors group-hover:text-[#2ec4b6]">
                                    hello@petbloom.com
                                </strong>
                                <span className="text-xs sm:text-sm text-[#8da4a2]">
                                    We reply within 24 hours
                                </span>
                            </div>
                        </motion.a>

                        {/* Location */}
                        <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="/locations"
                                className="group flex items-start gap-3.5"
                                aria-label="View PetBloom locations"
                            >
                                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38] text-white transition-colors group-hover:bg-[#2ec4b6] group-hover:text-[#051d1b]">
                                    <FaMapMarkerAlt size={16} />
                                </div>

                                <div>
                                    <strong className="block text-sm sm:text-base text-white transition-colors group-hover:text-[#2ec4b6]">
                                        Delhi NCR, India
                                    </strong>
                                    <span className="text-xs sm:text-sm text-[#8da4a2]">
                                        Proudly serving pets with love
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Column 2: Quick Links */}
                <motion.div variants={columnVariants}>
                    <h3 className="mb-5 sm:mb-[25px] flex items-center gap-2 text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                        <span className="text-[18px] sm:text-[20px] text-[#2ec4b6]">
                            <FaPaw />
                        </span>
                        Quick Links
                    </h3>

                    <motion.ul
                        className="flex flex-col gap-2.5 sm:gap-3"
                        variants={linkContainerVariants}
                    >
                        {quickLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                variants={linkItemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 py-0.5 text-sm sm:text-[15px] transition-colors duration-200 hover:text-white"
                                >
                                    <FaChevronRight
                                        size={11}
                                        className="text-[#2ec4b6] shrink-0"
                                    />
                                    <span>{link.label}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Column 3: Our Services */}
                <motion.div variants={columnVariants}>
                    <h3 className="mb-5 sm:mb-[25px] flex items-center gap-2 text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                        <span className="text-[18px] sm:text-[20px] text-[#2ec4b6]">
                            <FaPaw />
                        </span>
                        Our Services
                    </h3>

                    <motion.ul
                        className="flex flex-col gap-2.5 sm:gap-3"
                        variants={linkContainerVariants}
                    >
                        {serviceLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                variants={linkItemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 py-0.5 text-sm sm:text-[15px] transition-colors duration-200 hover:text-white"
                                >
                                    <FaChevronRight
                                        size={11}
                                        className="text-[#2ec4b6] shrink-0"
                                    />
                                    <span>{link.label}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Column 4: Resources */}
                <motion.div variants={columnVariants}>
                    <h3 className="mb-5 sm:mb-[25px] flex items-center gap-2 text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                        <span className="text-[18px] sm:text-[20px] text-[#2ec4b6]">
                            <FaPaw />
                        </span>
                        Resources
                    </h3>

                    <motion.ul
                        className="flex flex-col gap-2.5 sm:gap-3"
                        variants={linkContainerVariants}
                    >
                        {resourceLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                variants={linkItemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 py-0.5 text-sm sm:text-[15px] transition-colors duration-200 hover:text-white"
                                >
                                    <FaChevronRight
                                        size={11}
                                        className="text-[#2ec4b6] shrink-0"
                                    />
                                    <span>{link.label}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Column 5: Support */}
                <motion.div
                    variants={columnVariants}
                    className="relative flex flex-col justify-between"
                >
                    <div>
                        <h3 className="mb-5 sm:mb-[25px] flex items-center gap-2 text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                            <span className="text-[18px] sm:text-[20px] text-[#2ec4b6]">
                                <FaPaw />
                            </span>
                            Support
                        </h3>

                        <motion.ul
                            className="flex flex-col gap-2.5 sm:gap-3"
                            variants={linkContainerVariants}
                        >
                            {supportLinks.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={linkItemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 py-0.5 text-sm sm:text-[15px] transition-colors duration-200 hover:text-white"
                                    >
                                        <FaChevronRight
                                            size={11}
                                            className="text-[#2ec4b6] shrink-0"
                                        />
                                        <span>{link.label}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
            </motion.div>

            {/* Footer Bottom Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 border-t border-white/10 bg-[#041715] py-5"
            >
                <div className="mx-auto flex max-w-[1355px] flex-col items-center justify-between gap-4 px-4 sm:px-4 md:px-6 lg:px-8 text-center text-xs sm:text-sm text-[#8da4a2] sm:flex-row sm:text-left">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <strong className="text-white font-medium">PetBloom</strong>. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                        <span className="text-xs uppercase tracking-wider text-[#8da4a2]">Follow Us:</span>

                        <div className="flex gap-2.5">
                            <SocialIcon href="https://facebook.com" label="Facebook">
                                <FaFacebookF size={16} />
                            </SocialIcon>

                            <SocialIcon href="https://instagram.com" label="Instagram">
                                <FaInstagram size={16} />
                            </SocialIcon>

                            <SocialIcon href="https://youtube.com" label="YouTube">
                                <FaYoutube size={16} />
                            </SocialIcon>

                            <SocialIcon href="https://whatsapp.com" label="WhatsApp">
                                <FaWhatsapp size={16} />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}

function SocialIcon({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit PetBloom on ${label}`}
            whileHover={{
                scale: 1.15,
                y: -3,
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350 }}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]"
        >
            {children}
        </motion.a>
    );
}
