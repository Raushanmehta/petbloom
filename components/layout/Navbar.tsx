"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "@/types";
import data from "@/data/data.json";


const { navLinks, contactPhone } = data as { navLinks: NavLink[], contactPhone: string };

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed left-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "top-0 bg-[#051d1b]/95 shadow-lg backdrop-blur-md border-b border-white/10"
                : "top-6 bg-transparent border-b border-transparent"
                }`}>
            <div className="mx-auto flex h-[90px] max-w-[1355px] items-center justify-between px-6">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Link href="/">
                        <Image
                            src="/logo/logo.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            style={{ width: "auto", height: "auto" }}
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.slice(0, 2).map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, }}
                            className="relative">
                            <Link
                                href={link.href}
                                className={`relative py-1 text-[15px] font-medium transition-colors duration-300 hover:text-[#2ec4b6] ${link.label === "Home"
                                    ? "text-white"
                                    : "text-[#d1d8d8]"
                                    }`}
                            >
                                {link.label}
                            </Link>

                            {link.label === "Home" && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute -bottom-[4px] left-0 h-[3px] w-full rounded-full bg-[#e5a942]"
                                />
                            )}
                        </motion.div>
                    ))}

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -2 }}
                        className="group flex cursor-pointer items-center gap-1 text-[15px] font-medium text-[#d1d8d8] transition-colors hover:text-[#2ec4b6]"
                    >
                        <span>Services</span>

                        <motion.span
                            className="flex"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown size={11} />
                        </motion.span>
                    </motion.div>

                    {navLinks.slice(2).map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: (index + 3) * 0.1,
                            }}
                            whileHover={{ y: -2 }}
                        >
                            <Link
                                href={link.href}
                                className="text-[15px] font-medium text-[#d1d8d8] transition-colors duration-300 hover:text-[#2ec4b6]"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Right Action Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hidden items-center gap-6 xl:flex"
                >
                    {/* Phone */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                rotate: 8,
                            }}
                            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#2ec4b6]/30 bg-[#0b3c38] text-white"
                        >
                            <FaPhoneAlt size={18} />
                        </motion.div>

                        <div className="flex flex-col">
                            <span className="text-sm font-medium tracking-wide text-[#8da4a2]">
                                Call us:
                            </span>

                            <span className="text-[17px] font-bold tracking-tight text-white">
                                {contactPhone}
                            </span>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                        }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <Link
                            href="/book-appointment"
                            className="block rounded-full border-2 border-[#2ec4b6] bg-[#0b3c38] px-7 py-3 text-[15px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#2ec4b6] hover:text-[#051d1b]"
                        >
                            Book Appointment
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-2xl text-white focus:outline-none lg:hidden"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.span
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaTimes />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaBars />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                        }}
                        className="overflow-hidden border-b border-white/10 bg-[#051d1b] lg:hidden"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                    },
                                },
                            }}
                            className="flex flex-col gap-4 px-6 py-6"
                        >
                            {/* Mobile Links */}
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            x: -20,
                                        },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.35,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`block text-lg font-medium transition-colors ${link.label === "Home"
                                            ? "font-semibold text-[#e5a942]"
                                            : "text-white hover:text-[#2ec4b6]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Contact Section */}
                            <motion.div
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                className="flex flex-col gap-4 border-t border-white/10 pt-4"
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0b3c38] text-[#2ec4b6]"
                                    >
                                        <FaPhoneAlt size={14} />
                                    </motion.div>

                                    <div>
                                        <span className="block text-xs text-[#8da4a2]">
                                            Call us:
                                        </span>

                                        <span className="text-sm font-bold text-white">
                                            {contactPhone}
                                        </span>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        href="/book-appointment"
                                        onClick={closeMenu}
                                        className="block rounded-full bg-[#2ec4b6] py-3 text-center font-bold text-[#051d1b] shadow-md"
                                    >
                                        Book Appointment
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
