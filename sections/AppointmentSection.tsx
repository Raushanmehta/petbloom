"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Home as HomeIcon, Heart, Calendar, Clock, User, Phone, Mail, MapPin, ChevronDown, CalendarCheck, Lock, HelpCircle } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import { columnVariants, containerVariants, fadeUpVariants } from "@/utils/animations";
import { site, PetBloomAppointmentData, SectionProps } from "@/data";

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

export type AppointmentInnerData = PetBloomAppointmentData["appointment"];

export interface AppointmentSectionProps extends SectionProps<AppointmentInnerData | PetBloomAppointmentData> { }

export default function AppointmentSection({ data, className }: AppointmentSectionProps = {}) {
    const rawData = data || site.appointment;
    const appointmentData = "appointment" in rawData ? rawData.appointment : rawData;
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

    const bannerImage = appointmentData?.bannerImage || "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800";
    const bannerTitleWhite = appointmentData?.bannerTitleWhite || "Book Your Pet's";
    const bannerTitleColored = appointmentData?.bannerTitleColored || "Special Day";
    const bannerDescription = appointmentData?.bannerDescription || "Schedule a grooming, boarding, or veterinary session with our trusted and loving specialists.";
    const features = appointmentData?.features || [
        { icon: "ShieldCheck", title: "Certified" },
        { icon: "Leaf", title: "Organic" },
        { icon: "HomeIcon", title: "Safe Care" },
        { icon: "Heart", title: "Loved" },
    ];
    const formTitleBlack = appointmentData?.formTitleBlack || "Book An";
    const formTitleColored = appointmentData?.formTitleColored || "Appointment";
    const formDescription = appointmentData?.formDescription || "Fill out the form below to schedule a session for your furry family member.";

    return (
        <section className={`relative overflow-hidden bg-[#FEFDFB]  py-10 sm:py-14 md:py-16 lg:py-16 ${className || ""}`}>
            <div className="mx-auto max-w-[1355px] px-4 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Banner Column */}
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-[#387478] text-white shadow-2xl relative"
                    >
                        <div>
                            {/* Top Image & Gradient Overlay */}
                            <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] xl:h-[440px] w-full overflow-hidden">
                                <Image
                                    src={bannerImage}
                                    alt="Cute pet waiting for grooming appointment"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* Bottom Gradient Fade into Teal Background */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#387478] via-transparent to-transparent" />
                            </div>

                            {/* Floating Paw Badge centered on bottom edge of image */}
                            <div className="relative -mt-7 sm:-mt-8 mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white border-4 border-[#387478] shadow-xl text-[#E67E22] z-10">
                                <FaPaw className="h-7 w-7 sm:h-9 sm:w-9" />
                            </div>

                            {/* Center Text Details */}
                            <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-8 text-center space-y-3 sm:space-y-4">
                                <h2 className={`${lilitaOne.className} text-2xl sm:text-4xl lg:text-4xl tracking-wide text-white leading-tight`}>
                                    {bannerTitleWhite} <br />
                                    <span className="text-[#E67E22]">{bannerTitleColored}</span>
                                </h2>

                                <div className="flex items-center justify-center gap-2 text-white/60">
                                    <div className="h-[1px] w-8 bg-white/30" />
                                    <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                    <div className="h-[1px] w-8 bg-white/30" />
                                </div>

                                <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed max-w-sm mx-auto">
                                    {bannerDescription}
                                </p>
                            </div>
                        </div>

                        {/* Bottom 4 Feature Icons Row */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-[#2d5d61] px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-4 gap-2 border-t border-white/10 text-center">
                            {features.map((feature, idx) => {
                                const IconComponent = iconMap[feature.icon] || HelpCircle;
                                return (
                                    <motion.div key={idx} variants={fadeUpVariants} className="flex flex-col items-center">
                                        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white mb-1" />
                                        <span className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">{feature.title}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right Form Column */}
                    <motion.div
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] bg-white p-5 sm:p-8 lg:p-10 shadow-xl shadow-gray-100 border border-gray-100/90">
                        <div>
                            {/* Form Header */}
                            <motion.div
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center mb-6 sm:mb-8">
                                <div className="flex items-center justify-center gap-2 mb-2 text-[#E67E22]">
                                    <div className="h-[1px] w-10 bg-[#E67E22]/30" />
                                    <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#E67E22]" />
                                    <div className="h-[1px] w-10 bg-[#E67E22]/30" />
                                </div>
                                <h3 className={`${lilitaOne.className} text-2xl sm:text-4xl lg:text-5xl tracking-wide text-gray-900 leading-tight`}>
                                    {formTitleBlack} <span className="text-[#E67E22]">{formTitleColored}</span>
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm font-medium text-gray-500">
                                    {formDescription}
                                </p>
                            </motion.div>

                            {/* Form Inputs Grid */}
                            <motion.form
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                onSubmit={handleSubmit}
                                className="space-y-4 sm:space-y-5">

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
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
                                                className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
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

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                                                className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                                                className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
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
                                                className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors"
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
                                            className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FEFDFB] py-3 pl-11 pr-10 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors cursor-pointer"
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
                                            className="w-full rounded-xl border border-gray-200 bg-[#FEFDFB] p-3.5 sm:p-4 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#387478] focus:outline-none transition-colors resize-none"
                                        />
                                    </div>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    variants={fadeUpVariants}
                                    type="submit"
                                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#E67E22] py-3.5 sm:py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#d5701b] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
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
                            className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-500">
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