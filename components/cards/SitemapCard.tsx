"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Users, FileText, MapPin, User, Tag, Calendar, Image as ImageIcon, MessageSquare, HelpCircle, BookOpen, File, Phone, Briefcase, Shield, FileCheck, AlertTriangle, GitCommit, ChevronRight } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { SitemapCategory } from "@/data";

interface SitemapCardProps {
    category: SitemapCategory;
}

export default function SitemapCard({ category }: SitemapCardProps) {
    const getIcon = (type: string) => {
        switch (type) {
            case "home": return <Home className="h-5 w-5 text-[#387478]" />;
            case "users": return <Users className="h-5 w-5 text-[#387478]" />;
            case "paw": return <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />;
            case "file-text": return <FileText className="h-5 w-5 text-[#387478]" />;
            case "map-pin": return <MapPin className="h-5 w-5 text-[#387478]" />;
            case "team": return <Users className="h-5 w-5 text-[#387478]" />;
            case "user": return <User className="h-5 w-5 text-[#387478]" />;
            case "tag": return <Tag className="h-5 w-5 text-[#387478]" />;
            case "calendar": return <Calendar className="h-5 w-5 text-[#387478]" />;
            case "image": return <ImageIcon className="h-5 w-5 text-[#387478]" />;
            case "message-square": return <MessageSquare className="h-5 w-5 text-[#387478]" />;
            case "help-circle": return <HelpCircle className="h-5 w-5 text-[#387478]" />;
            case "book-open": return <BookOpen className="h-5 w-5 text-[#387478]" />;
            case "file": return <File className="h-5 w-5 text-[#387478]" />;
            case "phone": return <Phone className="h-5 w-5 text-[#387478]" />;
            case "briefcase": return <Briefcase className="h-5 w-5 text-[#387478]" />;
            case "shield": return <Shield className="h-5 w-5 text-[#387478]" />;
            case "file-check": return <FileCheck className="h-5 w-5 text-[#387478]" />;
            case "alert-triangle": return <AlertTriangle className="h-5 w-5 text-[#387478]" />;
            case "git-commit": return <GitCommit className="h-5 w-5 text-[#387478]" />;
            default: return <FaPaw className="h-5 w-5 sm:h-6 sm:w-6 text-[#387478]" />;
        }
    };

    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col rounded-2xl bg-white p-5 sm:p-6 shadow-lg shadow-gray-100/80 border border-gray-100/90 hover:border-[#387478]/40 hover:shadow-xl hover:shadow-[#387478]/5 transition-all duration-300">
            {/* Top Header with Icon and Number Badge */}
            <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-3.5 sm:mb-4 border-b border-gray-100 gap-2">
                <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#EAF2F2] shadow-sm">
                    {getIcon(category?.iconType || "paw")}
                </div>
                <span className="shrink-0 rounded-full bg-[#387478] px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold text-white tracking-wider shadow-sm">
                    {category?.number}
                </span>
            </div>

            {/* Sub-links List */}
            <ul className="space-y-1.5 sm:space-y-2">
                {(category?.links || []).map((link, index) => {
                    return (
                        <li key={index}>
                            <Link
                                href={link?.href || "#"}
                                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#E67E22] transition-colors group py-1"
                            >
                                <ChevronRight className="h-3.5 w-3.5 text-[#387478] shrink-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#E67E22]" />
                                <span className="line-clamp-1 group-hover:translate-x-0.5 transition-transform duration-200">{link?.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </motion.div>
    );
}