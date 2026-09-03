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
            {/* Main Container */}
            <motion.div
                className="mx-auto grid max-w-[1355px] grid-cols-1 gap-[30px] px-5 pb-[50px] md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Column 1 */}
                <motion.div
                    variants={columnVariants}
                    className="flex flex-col md:col-span-2 lg:col-span-1"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/logo/logo.png"
                            alt="Logo"
                            width={200}
                            height={200}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </motion.div>

                    <p className="mb-[25px] text-md leading-[1.6]">
                        At PetBloom, we provide professional grooming and care services
                        with love and dedication for your pets.
                    </p>

                    <div className="flex flex-col gap-[15px]">
                        {/* Phone */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                        >
                            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38]">
                                <FaPhoneAlt size={18} />
                            </div>

                            <div>
                                <strong className="block text-md text-white">
                                    +91 98765 43210
                                </strong>
                                <span className="text-sm text-gray-500">
                                    Mon - Sat: 9:00 AM - 7:00 PM
                                </span>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                        >
                            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38]">
                                <FaEnvelope size={18} />
                            </div>

                            <div>
                                <strong className="block text-md text-white">
                                    hello@petbloom.com
                                </strong>
                                <span className="text-sm text-gray-500">
                                    We reply within 24 hours
                                </span>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                        >
                            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38]">
                                <FaMapMarkerAlt size={18} />
                            </div>

                            <div>
                                <strong className="block text-md text-white">
                                    Delhi NCR, India
                                </strong>
                                <span className="text-sm text-gray-500">
                                    Proudly serving pets with love
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div variants={columnVariants}>
                    <h3 className="mb-[25px] flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                        <span className="text-[20px] text-[#2ec4b6]">
                            <FaPaw />
                        </span>
                        Quick Links
                    </h3>

                    <motion.ul
                        className="flex flex-col gap-3"
                        variants={linkContainerVariants}
                    >
                        {quickLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                variants={linkItemVariants}
                                whileHover={{ x: 6 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 text-md transition-colors duration-200 hover:text-white"
                                >
                                    <FaChevronRight
                                        size={12}
                                        className="text-[#2ec4b6]"
                                    />
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Our Services */}
                <motion.div variants={columnVariants}>
                    <h3 className="mb-[25px] flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                        <span className="text-[20px] text-[#2ec4b6]">
                            <FaPaw />
                        </span>
                        Our Services
                    </h3>

                    <motion.ul
                        className="flex flex-col gap-3"
                        variants={linkContainerVariants}
                    >
                        {serviceLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                variants={linkItemVariants}
                                whileHover={{ x: 6 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 text-md hover:text-white"
                                >
                                    <FaChevronRight
                                        size={12}
                                        className="text-[#2ec4b6]"
                                    />
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Resources */}
                <motion.div variants={columnVariants}>
                    <h3 className="mb-[25px] flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                        <span className="text-[20px] text-[#2ec4b6]">
                            <FaPaw />
                        </span>
                        Resources
                    </h3>

                    <motion.ul
                        className="flex flex-col gap-3"
                        variants={linkContainerVariants}
                    >
                        {resourceLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                variants={linkItemVariants}
                                whileHover={{ x: 6 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 text-md hover:text-white"
                                >
                                    <FaChevronRight
                                        size={12}
                                        className="text-[#2ec4b6]"
                                    />
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Support */}
                <motion.div
                    variants={columnVariants}
                    className="relative flex flex-col justify-between"
                >
                    <div>
                        <h3 className="mb-[25px] flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
                            <span className="text-[20px] text-[#2ec4b6]">
                                <FaPaw />
                            </span>
                            Support
                        </h3>

                        <motion.ul
                            className="flex flex-col gap-3"
                            variants={linkContainerVariants}
                        >
                            {supportLinks.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={linkItemVariants}
                                    whileHover={{ x: 6 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-md hover:text-white"
                                    >
                                        <FaChevronRight
                                            size={12}
                                            className="text-[#2ec4b6]"
                                        />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Existing floating animation - NOT REMOVED */}
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="mt-8 hidden items-end gap-3 text-[#2ec4b6]/40 lg:flex"
                    >
                        <FaDog size={36} />
                        <FaCat size={28} />
                        <FaHeart size={16} className="mb-4" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Footer Bottom - Existing animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-t-2 border-white/10 bg-[#051d1b] py-5"
            >
                <div className="mx-auto flex max-w-[1355px] flex-col items-center justify-between gap-[15px] px-5 text-center text-[14px] text-[#8da4a2] sm:flex-row sm:text-left">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <strong className="text-white">PetBloom</strong>. All Rights
                        Reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <span>Follow Us:</span>

                        <div className="flex gap-[10px]">
                            <SocialIcon href="https://facebook.com">
                                <FaFacebookF size={18} />
                            </SocialIcon>

                            <SocialIcon href="https://instagram.com">
                                <FaInstagram size={18} />
                            </SocialIcon>

                            <SocialIcon href="https://youtube.com">
                                <FaYoutube size={18} />
                            </SocialIcon>

                            <SocialIcon href="https://whatsapp.com">
                                <FaWhatsapp size={18} />
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
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
                scale: 1.15,
                y: -4,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/20 text-white hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]"
        >
            {children}
        </motion.a>
    );
}

