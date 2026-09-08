"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTopSection from "@/components/common/PageTopSection";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Calendar,
    ChevronDown,
    Lock,
    User,
    MessageSquare,
} from "lucide-react";
import { FaFacebook, FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import {
    fadeUpVariants,
    contactContainerVariants,
    contactLeftColumnVariants,
    contactRightColumnVariants,
    contactCardContainerVariants,
    contactCardVariants,
    contactFormContainerVariants,
    contactFormFieldVariants,
    contactSocialContainerVariants,
    contactSocialIconVariants,
} from "@/utils/animations";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import data from "@/data/data.json";
import { ContactDataWrapper } from "@/types/sections";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const infoIconMap: Record<string, React.ElementType> = {
    MapPin,
    Phone,
    Mail,
    Clock,
};

const socialIconMap: Record<string, React.ElementType> = {
    facebook: FaFacebook,
    instagram: BsInstagram,
    twitter: BsTwitter,
    linkedin: LiaLinkedin,
    youtube: BsYoutube,
};

export default function ContactPage() {
    const contactData: ContactDataWrapper = (data as unknown as { contactData?: ContactDataWrapper }).contactData || {
        pageData: {
            badgeText: "Contact Us",
            brandStart: "Pet",
            brandEnd: "Bloom",
            titleStart: "Get in Touch",
            titleMiddle: "With",
            titleColored: "PetBloom",
            description: "",
        },
        sectionData: {
            badgeText: "Contact Us",
        },
        infoCards: [],
        social: {
            titleWhite: "Follow Us On ",
            titleColored: "Social Media",
            description: "",
            links: [],
        },
        illustrationImage: {
            src: "",
            alt: "Cute pets together",
        },
        form: {
            titleWhite: "Book An ",
            titleColored: "Appointment",
            namePlaceholder: "Your Name*",
            emailPlaceholder: "Your Email*",
            phonePlaceholder: "Phone Number*",
            datePlaceholder: "Select Date*",
            messagePlaceholder: "Write Message*",
            subjects: [],
            timeSlots: [],
            submitButtonText: "REQUEST A QUOTE",
            privacyNotice: "We respect your privacy. Your information is safe with us.",
            successMessage: "Quote request submitted successfully!",
        },
    };

    const { pageData, infoCards, social, illustrationImage, form: formConfig } = contactData;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        date: "",
        time: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(formConfig?.successMessage || "Quote request submitted successfully!");
    };

    return (
        <main>
            <PageTopSection
                title={pageData?.badgeText || "Contact Us"}
                subTitle={pageData?.badgeText || "Contact us"}
            />
            <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: -15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="pointer-events-none absolute left-10 top-12 hidden text-[#E67E22] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [-15, -8, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-24 w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 25 }}
                    whileInView={{ opacity: 0.1, x: 0, rotate: 15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="pointer-events-none absolute right-10 top-12 hidden text-[#E67E22] lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [15, 8, 15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-24 w-24" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -40, rotate: 25 }}
                    whileInView={{ opacity: 0.08, x: 0, rotate: 25 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="pointer-events-none absolute left-16 bottom-24 text-[#387478] hidden lg:block">
                    <motion.div
                        animate={{ y: [0, 10, 0], rotate: [25, 32, 25] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <FaPaw className="h-28 w-28" />
                    </motion.div>
                </motion.div>

                <div className="mx-auto max-w-[1300px]">
                    <motion.div
                        variants={contactContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <motion.div
                            variants={contactLeftColumnVariants}
                            className="lg:col-span-6 space-y-8">
                            <motion.div
                                variants={fadeUpVariants}
                                className="space-y-4">
                                <div className="flex items-center gap-2.5">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1, 1.08, 1] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}>
                                        <FaPaw className="h-8 w-8 text-[#E67E22]" />
                                    </motion.div>
                                    <span className={`${lilitaOne.className} text-3xl tracking-wide text-gray-900`}>
                                        {pageData?.brandStart || "Pet"}{" "}
                                        <span className="text-[#E67E22]">{pageData?.brandEnd || "Bloom"}</span>
                                    </span>
                                </div>

                                <h1 className={`${lilitaOne.className} text-4xl sm:text-5xl lg:text-6xl tracking-wide text-gray-900 leading-tight`}>
                                    {pageData?.titleStart || "Get in Touch"} <br />
                                    {pageData?.titleMiddle || "With"}{" "}
                                    <span className="text-[#E67E22]">{pageData?.titleColored || "PetBloom"}</span>
                                </h1>

                                {/* Divider */}
                                <div className="mx-auto mt-4 flex items-center justify-start gap-4">
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 48, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="h-[2px] rounded-full bg-[#E67E22]/30"
                                    />

                                    <motion.div
                                        initial={{ scale: 0, rotate: -90 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{
                                            scale: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 250 },
                                            rotate: { duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
                                        }}>
                                        <FaPaw className="h-6 w-6 text-[#E67E22]" />
                                    </motion.div>

                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 48, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="h-[2px] rounded-full bg-[#E67E22]/30"
                                    />
                                </div>

                                {pageData?.description && (
                                    <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed max-w-lg">
                                        {pageData.description}
                                    </p>
                                )}
                            </motion.div>

                            <motion.div
                                variants={contactCardContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {infoCards.map((card) => {
                                    const IconComponent = infoIconMap[card.icon] || MapPin;
                                    return (
                                        <motion.div
                                            key={card.id}
                                            variants={contactCardVariants}
                                            whileHover={{ y: -4, scale: 1.015 }}
                                            transition={{ duration: 0.25 }}
                                            className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-lg shadow-gray-100 border border-gray-100/90 cursor-default">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF2F2] text-[#387478]">
                                                <IconComponent className="h-6 w-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-bold text-gray-900">{card.title}</h3>
                                                <p className="text-xs font-medium text-gray-600 leading-relaxed">
                                                    {card.lines.map((line, idx) => (
                                                        <React.Fragment key={idx}>
                                                            {line}
                                                            {idx < card.lines.length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            <motion.div
                                variants={fadeUpVariants}
                                className="space-y-4 pt-2">
                                <h3 className={`${lilitaOne.className} text-2xl tracking-wide text-gray-900`}>
                                    {social?.titleWhite || "Follow Us On "}
                                    <span className="text-[#E67E22]">{social?.titleColored || "Social Media"}</span>
                                </h3>

                                {/* Divider */}
                                <div className="mx-auto mt-4 flex items-center justify-start gap-4">
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 48, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="h-[2px] rounded-full bg-[#E67E22]/30"
                                    />

                                    <motion.div
                                        initial={{ scale: 0, rotate: -90 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{
                                            scale: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 250 },
                                            rotate: { duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
                                        }}>
                                        <FaPaw className="h-6 w-6 text-[#E67E22]" />
                                    </motion.div>

                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 48, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="h-[2px] rounded-full bg-[#E67E22]/30"
                                    />
                                </div>

                                {social?.description && (
                                    <p className="text-sm font-medium text-gray-600">
                                        {social.description}
                                    </p>
                                )}

                                <motion.div
                                    variants={contactSocialContainerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 pt-1">
                                    {social?.links?.map((item, index) => {
                                        const IconComp = socialIconMap[item.platform.toLowerCase()] || FaFacebook;
                                        const rotateAngle = index % 2 === 0 ? 5 : -5;
                                        return (
                                            <motion.div
                                                key={item.id || index}
                                                variants={contactSocialIconVariants}
                                                whileHover={{ scale: 1.15, rotate: rotateAngle }}
                                                whileTap={{ scale: 0.9 }}>
                                                <Link
                                                    href={item.href || "#"}
                                                    aria-label={item.platform}
                                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#387478] hover:text-white transition-all shadow-sm">
                                                    <IconComp className="h-6 w-6" />
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>

                            {illustrationImage?.src && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative h-[180px] w-full max-w-md mx-auto hidden sm:block pt-4">
                                    <Image
                                        src={illustrationImage.src}
                                        alt={illustrationImage.alt || "Cute pets together"}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            variants={contactRightColumnVariants}
                            className="lg:col-span-6 rounded-[1.5rem] bg-white p-8 sm:p-12 shadow-2xl shadow-gray-200 border border-gray-100">
                            <div className="text-center mb-8 space-y-3">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 15 }}
                                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2F2] text-[#387478] shadow-sm">
                                    <Calendar className="h-7 w-7" />
                                </motion.div>

                                <h3 className={`${lilitaOne.className} text-3xl sm:text-4xl tracking-wide text-gray-900`}>
                                    {formConfig?.titleWhite || "Book An "}
                                    <span className="text-[#387478]">{formConfig?.titleColored || "Appointment"}</span>
                                </h3>

                                {/* Divider */}
                                <div className="mx-auto mt-4 flex items-center justify-center gap-4">
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 48, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="h-[2px] rounded-full bg-[#E67E22]/30"
                                    />

                                    <motion.div
                                        initial={{ scale: 0, rotate: -90 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{
                                            scale: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 250 },
                                            rotate: { duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
                                        }}>
                                        <FaPaw className="h-6 w-6 text-[#E67E22]" />
                                    </motion.div>

                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 48, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="h-[2px] rounded-full bg-[#E67E22]/30"
                                    />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <motion.div
                                    variants={contactFormContainerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <motion.div variants={contactFormFieldVariants} className="space-y-1.5">
                                            <div className="relative flex items-center">
                                                <User className="absolute left-4 h-4 w-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder={formConfig?.namePlaceholder || "Your Name*"}
                                                    required
                                                    className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={contactFormFieldVariants} className="space-y-1.5">
                                            <div className="relative flex items-center">
                                                <Mail className="absolute left-4 h-4 w-4 text-gray-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder={formConfig?.emailPlaceholder || "Your Email*"}
                                                    required
                                                    className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    <motion.div variants={contactFormFieldVariants} className="relative flex items-center">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FEFDFB] py-3.5 px-4 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer">
                                            <option value="" disabled>Select Subject*</option>
                                            {formConfig?.subjects?.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </motion.div>

                                    <motion.div variants={contactFormFieldVariants} className="relative flex items-center">
                                        <Phone className="absolute left-4 h-4 w-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={formConfig?.phonePlaceholder || "Phone Number*"}
                                            required
                                            className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                        />
                                    </motion.div>

                                    <motion.div variants={contactFormFieldVariants} className="relative flex items-center">
                                        <Calendar className="absolute left-4 h-4 w-4 text-gray-400" />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                        />
                                    </motion.div>

                                    <motion.div variants={contactFormFieldVariants} className="relative flex items-center">
                                        <Clock className="absolute left-4 h-4 w-4 text-gray-400" />
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                            className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer">
                                            <option value="" disabled>Preferred Time*</option>
                                            {formConfig?.timeSlots?.map((t) => (
                                                <option key={t.value} value={t.value}>
                                                    {t.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </motion.div>

                                    {/* Write Message */}
                                    <motion.div variants={contactFormFieldVariants} className="relative">
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={formConfig?.messagePlaceholder || "Write Message*"}
                                            required
                                            className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] p-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors resize-none"
                                        />
                                        <MessageSquare className="absolute right-4 top-4 h-4 w-4 text-gray-300 pointer-events-none" />
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.div variants={contactFormFieldVariants}>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#E67E22] py-4 text-sm font-bold text-white shadow-lg shadow-[#E67E22]/20 transition-colors duration-300 hover:bg-[#d5701b] cursor-pointer">
                                            <FaPaw className="h-6 w-6" />
                                            {formConfig?.submitButtonText || "REQUEST A QUOTE"}
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </form>

                            {/* Privacy Footer Notice */}
                            {formConfig?.privacyNotice && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
                                    <Lock className="h-3.5 w-3.5 text-[#387478]" />
                                    <span>{formConfig.privacyNotice}</span>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}