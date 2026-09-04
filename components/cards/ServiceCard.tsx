"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceCardProps {
    service: ServiceItem;
}

export default function ServiceCard({
    service,
}: ServiceCardProps) {
    return (
        <Link href={`/services/`} className="block w-full h-full">
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
                className="group relative h-[480px] w-full cursor-pointer overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-lg"
            >
                <motion.div
                    className="absolute inset-0"
                    whileHover={{
                        scale: 1.08,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-90"
                    />
                </motion.div>


                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />


                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-6"
                >
                    {/* Text */}
                    <div>
                        <motion.h3
                            whileHover={{
                                x: 3,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="text-xl font-bold tracking-wide text-white"
                        >
                            {service.title}
                        </motion.h3>

                        <p className="mt-1 text-sm font-medium text-gray-300">
                            {service.subtitle}
                        </p>
                    </div>

                    {/* Arrow Button */}
                    <motion.div
                        initial={{
                            scale: 0,
                            rotate: -45,
                        }}
                        whileInView={{
                            scale: 1,
                            rotate: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 16,
                            delay: 0.35,
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 45,
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black"
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                </motion.div>

                {/* Subtle shine effect on hover */}
                <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
            </motion.div>
        </Link>
    );
}