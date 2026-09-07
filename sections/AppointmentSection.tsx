"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Home as HomeIcon, Heart, Calendar, Clock, User, Phone, Mail, MapPin, ChevronDown, CalendarCheck, Lock, HelpCircle } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import { AppointmentSectionData } from "@/types/sections";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Leaf,
    HomeIcon,
    Heart,
    Calendar,
    Clock,
    User,
    Phone,
    Mail,
    MapPin,
    ChevronDown,
    CalendarCheck,
    Lock,
};

interface AppointmentSectionProps {
    data: AppointmentSectionData;
}

export default function AppointmentSection({ data }: AppointmentSectionProps) {
    const [formData, setFormData] = useState({
        petName: "",
        petType: "",
        breed: "",
        age: "",
        service: "",
        date: "",
        time: "",
        name: "",
        phone: "",
        email: "",
        location: "",
        notes: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Appointment booked successfully!");
    };

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#387478] text-white shadow-2xl relative"
                    >
                        {/* Top Image & Curved Teal Overlay Container */}
                        <div className="relative h-[560px] w-full overflow-hidden">
                            <Image
                                src={data.bannerImage}
                                alt="Cute pet waiting for grooming appointment"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Bottom Gradient Fade into Teal Background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#387478] via-transparent to-transparent" />
                        </div>

                        {/* Floating Paw Badge over Image Edge */}
                        <div className="absolute top-[520px] left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-[#387478] shadow-xl text-[#E67E22] z-10">
                            <FaPaw className="h-10   w-10" />
                        </div>

                        {/* Center Text Details */}
                        <div className="px-8 pt-8 pb-10 text-center space-y-4">
                            <h2 className={`${lilitaOne.className} text-3xl sm:text-5xl tracking-wide text-white leading-tight`}>
                                {data.bannerTitleWhite} <br />
                                <span className="text-[#E67E22]">{data.bannerTitleColored}</span>
                            </h2>

                            <div className="flex items-center justify-center gap-2 text-white/60">
                                <div className="h-[1px] w-8 bg-white/30" />
                                <FaPaw className="h-6 w-6 text-white" />
                                <div className="h-[1px] w-8 bg-white/30" />
                            </div>

                            <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed max-w-sm mx-auto">
                                {data.bannerDescription}
                            </p>
                        </div>

                        {/* Bottom 4 Feature Icons Row */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-[#2d5d61] px-6 py-6 grid grid-cols-4 gap-2 border-t border-white/10 text-center">
                            {data.features.map((feature, idx) => {
                                const IconComponent = iconMap[feature.icon] || HelpCircle;
                                return (
                                    <motion.div key={idx} variants={fadeUpVariants} className="flex flex-col items-center">
                                        <IconComponent className="h-8 w-8 text-white mb-1" />
                                        <span className="text-[10px] font-bold text-white leading-tight">{feature.title}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col justify-between rounded-[1.5rem] bg-white p-8 sm:p-10 shadow-xl shadow-gray-100 border border-gray-100/90">
                        <div>
                            {/* Form Header */}
                            <motion.div
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center mb-8">
                                <div className="flex items-center justify-center gap-2 mb-2 text-[#E67E22]">
                                    <div className="h-[1px] w-10 bg-[#E67E22]/30" />
                                    <FaPaw className="h-6 w-6 text-[#E67E22]" />
                                    <div className="h-[1px] w-10 bg-[#E67E22]/30" />
                                </div>
                                <h3 className={`${lilitaOne.className} text-3xl sm:text-5xl tracking-wide text-gray-900`}>
                                    {data.formTitleBlack} <span className="text-[#E67E22]">{data.formTitleColored}</span>
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm font-medium text-gray-500">
                                    {data.formDescription}
                                </p>
                            </motion.div>

                            {/* Form Inputs Grid */}
                            <motion.form
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                onSubmit={handleSubmit}
                                className="space-y-5">

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Pet Name */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Pet Name <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <FaPaw className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                name="petName"
                                                value={formData.petName}
                                                onChange={handleChange}
                                                placeholder="Enter your pet's name"
                                                required
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Pet Type */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Pet Type <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <FaPaw className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <select
                                                name="petType"
                                                value={formData.petType}
                                                onChange={handleChange}
                                                required
                                                className="w-full appearance-none rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled>Select Pet Type</option>
                                                <option value="dog">Dog</option>
                                                <option value="cat">Cat</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 h-4 w-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Breed */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Breed
                                        </label>
                                        <div className="relative flex items-center">
                                            <FaPaw className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                name="breed"
                                                value={formData.breed}
                                                onChange={handleChange}
                                                placeholder="Enter breed"
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Age */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Age
                                        </label>
                                        <div className="relative flex items-center">
                                            <CalendarCheck className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleChange}
                                                placeholder="Enter age"
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Grooming Service */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Grooming Service <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <ScissorsIcon className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full appearance-none rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled>Select Service</option>
                                                <option value="basic">Basic Grooming</option>
                                                <option value="premium">Premium Grooming</option>
                                                <option value="deluxe">Deluxe Grooming</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 h-4 w-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Preferred Date */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Preferred Date <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <Calendar className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Preferred Time */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Preferred Time <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <Clock className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <select
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                                className="w-full appearance-none rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled>Select Time</option>
                                                <option value="morning">Morning (9 AM - 12 PM)</option>
                                                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                                <option value="evening">Evening (4 PM - 8 PM)</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 h-4 w-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Your Name */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Your Name <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <User className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                required
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Phone Number */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Phone Number <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <Phone className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number"
                                                required
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                            Email Address <span className="text-[#E67E22]">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <Mail className="absolute left-4 h-4 w-4 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                                className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Service Location */}
                                <motion.div variants={fadeUpVariants} className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                        Service Location <span className="text-[#E67E22]">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <MapPin className="absolute left-4 h-4 w-4 text-gray-400" />
                                        <select
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className="w-full appearance-none rounded-lg border border-gray-200 bg-[#FEFDFB] py-3.5 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
                                        >
                                            <option value="" disabled>Select Location</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="delhi">Delhi NCR</option>
                                            <option value="bangalore">Bangalore</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </motion.div>

                                {/* Additional Notes */}
                                <motion.div variants={fadeUpVariants} className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                                        Additional Notes
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="notes"
                                            rows={3}
                                            value={formData.notes}
                                            onChange={handleChange}
                                            placeholder="Tell us anything we should know about your pet or special requests..."
                                            className="w-full rounded-lg border border-gray-200 bg-[#FEFDFB] p-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors resize-none"
                                        />
                                    </div>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    variants={fadeUpVariants}
                                    type="submit"
                                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#E67E22] py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#d5701b] hover:scale-[1.02] cursor-pointer"
                                >
                                    <CalendarCheck className="h-5 w-5" />
                                    Book Appointment
                                </motion.button>
                            </motion.form>
                        </div>

                        {/* Privacy Footer Notice */}
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
                            <Lock className="h-3.5 w-3.5 text-[#387478]" />
                            <span>We respect your privacy. Your information is safe with us.</span>
                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

// Helper icon component for scissors
function ScissorsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
    );
}