"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoItem } from "@/data";
import { FaTimes } from "react-icons/fa";

interface GalleryCardProps {
    photo: PhotoItem;
}

export default function GalleryCard({ photo }: GalleryCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setIsOpen(true)}
                className="relative h-[220px] sm:h-[240px] lg:h-[250px] w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
                <Image
                    src={photo?.image || ""}
                    alt={photo?.alt || "Pet gallery photo"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm pt-24"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex items-center justify-center w-[85vw] h-[85vw] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] overflow-hidden rounded-2xl shadow-2xl bg-black"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors shadow-lg"
                            >
                                <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                            <img
                                src={photo?.image || ""}
                                alt={photo?.alt || "Pet gallery photo"}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}