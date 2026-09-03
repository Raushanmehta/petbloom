"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ServiceArea } from "@/types";

interface ServiceAreaCardProps {
    area: ServiceArea;
}

export default function ServiceAreaCard({
    area,
}: ServiceAreaCardProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            whileHover={{
                y: -10,
            }}
            className="group flex w-full flex-col items-center rounded-3xl border border-gray-100/80 bg-white p-6 shadow-xl shadow-gray-100 snap-center"
        >
            {/* Image Container */}
            <div className="relative w-full">
                <div className="relative h-[280px] w-full overflow-hidden rounded-b-[6rem] rounded-t-[5rem] shadow-md sm:h-[250px] sm:rounded-b-[8rem] sm:rounded-t-[6rem]">

                    {/* Animated Image */}
                    <motion.div
                        className="relative h-full w-full"
                        whileHover={{
                            scale: 1.08,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <Image
                            src={area.image}
                            alt={area.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Subtle Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Location Marker */}
                <motion.div
                    initial={{
                        scale: 0,
                        y: 20,
                    }}
                    whileInView={{
                        scale: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                        delay: 0.25,
                    }}
                    whileHover={{
                        scale: 1.12,
                        rotate: 5,
                    }}
                    className="absolute -bottom-6 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white/90 text-[#387478] backdrop-blur-sm"
                >
                    <MapPin className="h-8 w-8 fill-[#387478] text-white" />
                </motion.div>
            </div>

            {/* City Title */}
            <motion.h3
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                }}
                className="mt-6 text-2xl font-bold tracking-wide text-gray-900"
            >
                {area.title}
            </motion.h3>
        </motion.div>
    );
}
