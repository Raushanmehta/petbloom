"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { site, PetBloomNavbarData, SectionProps } from "@/data";
import { PiPhoneCallLight } from "react-icons/pi";

interface NavbarProps extends SectionProps<PetBloomNavbarData> {
    servicesData?: typeof site.services;
}

export default function Navbar({ data, className, servicesData: injectedServices }: NavbarProps = {}) {
    const navLinks = data || site.navbar;
    const servicesData = injectedServices || site.services;
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Lock background scroll when mobile drawer is active
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setIsMobileServicesOpen(false);
    }, [pathname]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isLinkActive = (href: string) => {
        if (!pathname) return href === "/";
        if (href === "/") {
            return pathname === "/";
        }
        return pathname === href || pathname.startsWith(href + "/");
    };

    const isServicesActive = Boolean(pathname?.startsWith("/services"));

    return (
        <header
            className={`fixed left-0 z-50 w-full transition-all duration-300 ${isOpen || scrolled
                ? "top-0 bg-[#051d1b]/95 shadow-xl backdrop-blur-md border-b border-white/10"
                : "top-0 md:top-6 bg-transparent border-b border-transparent"
                }`}
        >
            <div className="mx-auto flex h-[82px] sm:h-[90px] md:h-[90px] max-w-[1355px] items-center justify-between px-4 sm:px-4 md:px-6 lg:px-8 pt-2 sm:pt-4 md:pt-0">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0"
                >
                    <Link href="/" aria-label="PetBloom Home">
                        <Image
                            src="/logo/logo.png"
                            alt="PetBloom Logo"
                            width={180}
                            height={180}
                            className="w-[180px] sm:w-[170px] md:w-[160px] h-auto"
                            priority
                            loading="eager"
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navLinks.slice(0, 2).map((link, index) => {
                        const active = isLinkActive(link.href);
                        return (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <Link
                                    href={link.href}
                                    className={`relative py-1 text-[15px] font-medium transition-colors duration-300 hover:text-[#2ec4b6] ${active ? "text-white font-semibold" : "text-[#d1d8d8]"
                                        }`}
                                >
                                    {link.label}
                                </Link>

                                {active && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute -bottom-[4px] left-0 h-[3px] w-full rounded-full bg-[#e5a942]"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}

                    {/* Services Dropdown */}
                    <div className="group relative">
                        <Link href="">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ y: -2 }}
                                className={`flex cursor-pointer items-center gap-1.5 text-[15px] font-medium py-2 transition-colors hover:text-[#2ec4b6] ${isServicesActive ? "text-white font-semibold" : "text-[#d1d8d8]"
                                    }`}
                            >
                                <span>Services</span>
                                <motion.span
                                    className="flex transition-transform duration-300 group-hover:rotate-180"
                                >
                                    <FaChevronDown size={11} />
                                </motion.span>
                            </motion.div>
                        </Link>

                        {isServicesActive && (
                            <motion.span
                                layoutId="activeNav"
                                className="absolute -bottom-[4px] left-0 h-[3px] w-full rounded-full bg-[#e5a942]"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                        )}

                        <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                            <div className="flex w-[250px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#051d1b]/98 p-2 shadow-2xl backdrop-blur-md">
                                {servicesData.services.map((service) => {
                                    const isServiceActive = pathname === `/services/${service.slug}`;
                                    return (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className={`rounded-lg px-4 py-2.5 text-[14px] font-medium transition-colors hover:bg-white/10 hover:text-[#2ec4b6] ${isServiceActive
                                                ? "bg-white/15 text-[#2ec4b6] font-semibold"
                                                : "text-[#d1d8d8]"
                                                }`}
                                        >
                                            {service.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {navLinks.slice(2).map((link, index) => {
                        const active = isLinkActive(link.href);
                        return (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index + 3) * 0.1,
                                }}
                                whileHover={{ y: -2 }}
                                className="relative"
                            >
                                <Link
                                    href={link.href}
                                    className={`relative py-1 text-[15px] font-medium transition-colors duration-300 hover:text-[#2ec4b6] ${active ? "text-white font-semibold" : "text-[#d1d8d8]"
                                        }`}
                                >
                                    {link.label}
                                </Link>

                                {active && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute -bottom-[4px] left-0 h-[3px] w-full rounded-full bg-[#e5a942]"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Right Action Section: Visible on lg and xl */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hidden items-center gap-5 lg:flex"
                >
                    {/* Phone Block (visible on xl) */}
                    <div className="hidden items-center gap-3 xl:flex">
                        <motion.a
                            href="tel:+001203456789"
                            whileHover={{ scale: 1.1, rotate: 8 }}
                            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#2ec4b6]/30 bg-[#0b3c38] text-white transition-colors hover:border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#051d1b]"
                            aria-label="Call PetBloom"
                        >
                            <PiPhoneCallLight size={28} />
                        </motion.a>

                        <div className="flex flex-col">
                            <span className="text-[18px] font-medium tracking-wide text-white">
                                Call us:
                            </span>
                            <a
                                href="tel:+001203456789"
                                className="text-[18px] font-bold tracking-tight text-white hover:text-[#2ec4b6] transition-colors"
                            >
                                +00-(120) 3456 789
                            </a>
                        </div>
                    </div>

                    {/* CTA Button (visible on lg and xl) */}
                    <motion.div
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <Link
                            href="/appointment"
                            className="block rounded-full border-2 border-[#2ec4b6] bg-[#0b3c38] px-5 py-2.5 text-[14px] sm:text-[15px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#2ec4b6] hover:text-[#051d1b]"
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
                    className="flex items-center justify-end p-0 bg-transparent text-white focus:outline-none lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
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
                                <FaTimes size={30} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaBars size={30} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="max-h-[calc(100dvh-82px)] md:max-h-[calc(100dvh-90px)] overflow-y-auto overscroll-contain border-b border-white/10 bg-[#051d1b]/98 shadow-2xl backdrop-blur-xl lg:hidden"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.06,
                                    },
                                },
                            }}
                            className="flex flex-col gap-3 px-6 py-6"
                        >
                            {/* Mobile Links */}
                            {navLinks.slice(0, 2).map((link) => {
                                const active = isLinkActive(link.href);
                                return (
                                    <motion.div
                                        key={link.href}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={`block py-2 text-lg font-medium transition-colors ${active ? "font-bold text-[#e5a942]" : "text-white hover:text-[#2ec4b6]"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile Services Accordion */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
                                }}
                            >
                                <div
                                    className={`flex cursor-pointer items-center justify-between py-2 text-lg font-medium transition-colors hover:text-[#2ec4b6] ${isServicesActive ? "font-bold text-[#e5a942]" : "text-white"
                                        }`}
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                >
                                    <span>Services</span>
                                    <motion.span
                                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="p-2 text-gray-400"
                                    >
                                        <FaChevronDown size={14} />
                                    </motion.span>
                                </div>

                                <AnimatePresence>
                                    {isMobileServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-2 flex flex-col gap-2.5 overflow-hidden border-l-2 border-[#2ec4b6]/40 pl-4 py-1"
                                        >
                                            <Link
                                                href="/services"
                                                onClick={closeMenu}
                                                className="block text-[15px] font-semibold text-[#2ec4b6] hover:underline"
                                            >
                                                &rarr; View All Services Overview
                                            </Link>
                                            {servicesData.services.map((service) => {
                                                const isSvcActive = pathname === `/services/${service.slug}`;
                                                return (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/services/${service.slug}`}
                                                        onClick={closeMenu}
                                                        className={`block text-[15px] font-medium transition-colors hover:text-[#2ec4b6] ${isSvcActive ? "text-[#2ec4b6] font-bold" : "text-[#d1d8d8]"
                                                            }`}
                                                    >
                                                        {service.title}
                                                    </Link>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {navLinks.slice(2).map((link) => {
                                const active = isLinkActive(link.href);
                                return (
                                    <motion.div
                                        key={link.href}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={`block py-2 text-lg font-medium transition-colors ${active ? "font-bold text-[#e5a942]" : "text-white hover:text-[#2ec4b6]"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile Contact & CTA Section */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
                                }}
                                className="mt-2 flex flex-col gap-4 border-t border-white/10 pt-4"
                            >
                                <a
                                    href="tel:+001203456789"
                                    className="flex items-center gap-3 rounded-xl bg-white/5 p-2.5 transition-colors hover:bg-white/10"
                                >
                                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#0b3c38] text-[#2ec4b6]">
                                        <FaPhoneAlt size={14} />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-[#8da4a2]">
                                            Call us directly:
                                        </span>
                                        <span className="text-sm font-bold text-white">
                                            +00-(120) 3456 789
                                        </span>
                                    </div>
                                </a>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        href="/appointment"
                                        onClick={closeMenu}
                                        className="block rounded-full bg-[#2ec4b6] py-3.5 text-center font-bold text-[#051d1b] shadow-lg transition-transform hover:opacity-95"
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
