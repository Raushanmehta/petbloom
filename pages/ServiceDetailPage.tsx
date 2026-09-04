"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ShieldCheck, Heart, Scissors, Bath, } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import data from "@/data/data.json";
import { ServiceItem } from "@/types";
import { breadcrumbVariants, heroContainerVariants, heroItemVariants, featureContainerVariants, featureItemVariants, sectionVariants, includedContainerVariants, includedItemVariants, sidebarVariants, sidebarItemVariants } from "@/utils/animations";

const lilitaOne = Lilita_One({
    subsets: ["latin"],
    weight: "400",
});

const { servicesData } = data as {
    servicesData: ServiceItem[];
};

export const includedFeatures = [
    {
        id: "1",
        title: "Bath & Shampoo",
        description: "Gentle, skin-friendly shampoo for a deep clean.",
    },
    {
        id: "2",
        title: "Brushing Detangling",
        description:
            "Removes loose hair, prevents tangles & keeps coat smooth.",
    },
    {
        id: "3",
        title: "Nail Trimming",
        description:
            "Safe trimming to keep nails at the perfect length.",
    },
    {
        id: "4",
        title: "Ear Cleaning",
        description:
            "Removes dirt & wax to prevent infections & discomfort.",
    },
    {
        id: "5",
        title: "Hair Styling",
        description:
            "Breed-specific cuts & styling for a neat and charming look.",
    },
    {
        id: "6",
        title: "Deodorizing Spray",
        description:
            "Finishing touch with a refreshing, long-lasting fragrance.",
    },
];

// Animations moved to utils/animations.ts

export default function ServiceDetailPage() {
    const pathname = usePathname();

    return (
        <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-12 sm:px-6 lg:px-12">

            <div className="mx-auto max-w-[1300px]">

                {/* =====================================================
                    BREADCRUMB
                ===================================================== */}

                <motion.div
                    variants={breadcrumbVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="mb-8 flex items-center gap-2 text-xs font-semibold text-gray-500 sm:text-sm"
                >
                    <motion.div whileHover={{ x: 3 }}>
                        <Link
                            href="/"
                            className="transition-colors hover:text-[#387478]"
                        >
                            Home
                        </Link>
                    </motion.div>

                    <ChevronRight className="h-3.5 w-3.5 text-[#E67E22]" />

                    <motion.div whileHover={{ x: 3 }}>
                        <Link
                            href="/services"
                            className="transition-colors hover:text-[#387478]"
                        >
                            Services
                        </Link>
                    </motion.div>

                    <ChevronRight className="h-3.5 w-3.5 text-[#E67E22]" />

                    <span className="font-bold text-[#E67E22]">
                        Grooming Services
                    </span>
                </motion.div>

                {/* =====================================================
                    MAIN GRID
                ===================================================== */}

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

                    {/* =================================================
                        LEFT COLUMN
                    ================================================= */}

                    <div className="space-y-10 lg:col-span-8">

                        {/* =================================================
                            HERO
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.97,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="group relative flex min-h-[380px] items-center overflow-hidden rounded-[1.5rem] border border-gray-100 p-8 shadow-xl sm:p-10"
                        >

                            {/* Background Image */}

                            <motion.div
                                initial={{
                                    scale: 1.08,
                                }}
                                whileInView={{
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut",
                                }}
                                className="absolute inset-0 z-0"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200"
                                    alt="Dog getting groomed"
                                    fill
                                    className="object-cover object-right"
                                />
                            </motion.div>

                            {/* Gradient */}

                            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/80" />

                            {/* Hero Content */}

                            <motion.div
                                variants={heroContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                }}
                                className="relative z-20 max-w-lg space-y-4"
                            >

                                {/* Badge */}

                                <motion.div
                                    variants={heroItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}
                                    className="inline-flex cursor-default items-center gap-2 rounded-full border border-[#387478]/20 bg-white px-4 py-1.5 shadow-sm"
                                >
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                        }}
                                    >
                                        <FaPaw className="h-6 w-6 text-[#387478]" />
                                    </motion.div>

                                    <span className="text-xs font-bold uppercase tracking-wider text-[#387478]">
                                        Grooming Services
                                    </span>
                                </motion.div>

                                {/* Heading */}

                                <motion.h1
                                    variants={heroItemVariants}
                                    className={`${lilitaOne.className} text-3xl leading-tight tracking-wide text-gray-900 sm:text-4xl lg:text-5xl`}
                                >
                                    Professional Grooming
                                    <br />
                                    for a{" "}
                                    <span className="text-[#E67E22]">
                                        Healthy & Happy Pet
                                    </span>
                                </motion.h1>

                                {/* Description */}

                                <motion.p
                                    variants={heroItemVariants}
                                    className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base"
                                >
                                    Our grooming services are designed to keep
                                    your pet looking their best while ensuring
                                    their comfort, hygiene, and overall
                                    well-being.
                                </motion.p>

                                {/* Small Features */}

                                <motion.div
                                    variants={featureContainerVariants}
                                    className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4"
                                >
                                    {[
                                        {
                                            icon: Scissors,
                                            title: "Expert Groomers",
                                        },
                                        {
                                            icon: Heart,
                                            title: "Premium Products",
                                        },
                                        {
                                            icon: ShieldCheck,
                                            title: "Safe & Gentle",
                                        },
                                        {
                                            icon: Sparkles,
                                            title: "Stress-Free Care",
                                        },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={featureItemVariants}
                                                whileHover={{
                                                    y: -5,
                                                    scale: 1.03,
                                                }}
                                                className="flex cursor-default flex-col items-center rounded-2xl bg-white/90 p-2 text-center shadow-sm backdrop-blur-sm"
                                            >
                                                <motion.div
                                                    whileHover={{
                                                        scale: 1.15,
                                                        rotate: 5,
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                    }}
                                                >
                                                    <Icon className="mb-1 h-8 w-8 text-[#387478]" />
                                                </motion.div>

                                                <span className="text-xs font-bold text-gray-800">
                                                    {item.title}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* =================================================
                            OVERVIEW
                        ================================================= */}

                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="mb-4 flex items-center gap-3"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 4,
                                    }}
                                >
                                    <FaPaw className="h-6 w-6 text-[#387478]" />
                                </motion.div>

                                <h2
                                    className={`${lilitaOne.className} text-2xl tracking-wide text-gray-900 sm:text-3xl`}
                                >
                                    Overview
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                    className="space-y-4 text-sm font-medium leading-relaxed text-gray-600 sm:text-base md:col-span-7"
                                >
                                    <p>
                                        Regular grooming is essential for your
                                        pet&apos;s health and happiness. Our
                                        professional grooming services include
                                        bathing, brushing, nail trimming, hair
                                        styling, ear cleaning, and more — all
                                        tailored to your pet&apos;s breed and
                                        needs.
                                    </p>

                                    <p>
                                        We use high-quality, pet-safe products
                                        and gentle techniques to ensure your
                                        furry friend feels relaxed, comfortable,
                                        and pampered.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                        scale: 0.95,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                    className="group relative h-[220px] w-full overflow-hidden rounded-xl shadow-md md:col-span-5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600"
                                        alt="Dog bath overview"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* =================================================
                            WHAT'S INCLUDED
                        ================================================= */}

                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="mb-6 flex items-center gap-3"
                            >
                                <FaPaw className="h-6 w-6 text-[#387478]" />

                                <h2
                                    className={`${lilitaOne.className} text-2xl tracking-wide text-gray-900 sm:text-3xl`}
                                >
                                    What&apos;s Included
                                </h2>
                            </motion.div>

                            <motion.div
                                variants={includedContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                {includedFeatures.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={includedItemVariants}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.02,
                                        }}
                                        className="group flex cursor-default items-start gap-4 rounded-xl border border-gray-100 bg-[#F2F4F3] p-5 shadow-sm transition-colors hover:border-[#387478]/30 hover:shadow-md"
                                    >
                                        <motion.div
                                            whileHover={{
                                                rotate: 8,
                                                scale: 1.1,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 250,
                                            }}
                                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-[#387478]"
                                        >
                                            <Bath className="h-8 w-8" />
                                        </motion.div>

                                        <div className="flex flex-col pt-1">
                                            <h3 className="text-base font-bold text-gray-900">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium leading-relaxed text-gray-600 sm:text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* =====================================================
                        RIGHT SIDEBAR
                    ===================================================== */}

                    <motion.div
                        variants={sidebarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        className="sticky top-6 lg:col-span-4"
                    >
                        <motion.div
                            whileHover={{
                                y: -3,
                            }}
                            className="rounded-[1.5rem] bg-white p-6 text-black shadow-xl"
                        >
                            {/* Sidebar Header */}

                            <div className="mb-6 flex items-center gap-3 px-2">
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 4,
                                    }}
                                >
                                    <FaPaw className="h-6 w-6 text-[#387478]" />
                                </motion.div>

                                <h3
                                    className={`${lilitaOne.className} text-2xl tracking-wide text-black sm:text-3xl`}
                                >
                                    Our Services
                                </h3>
                            </div>

                            {/* Service Navigation */}

                            <motion.div
                                variants={sidebarItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                }}
                                className="space-y-3"
                            >
                                {servicesData.map((nav, index) => {
                                    const linkHref = `/services/${nav.title
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`;

                                    const isActive =
                                        pathname === linkHref;

                                    return (
                                        <motion.div
                                            key={nav.id}
                                            initial={{
                                                opacity: 0,
                                                x: 20,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.08,
                                            }}
                                        >
                                            <Link
                                                href={linkHref}
                                                className={`group flex items-center justify-between rounded-2xl border border-transparent p-2 pr-5 text-sm font-bold transition-all duration-300 ${isActive
                                                    ? "translate-x-1 border-gray-100 bg-white text-gray-900 shadow-lg"
                                                    : "bg-white text-gray-900 shadow-sm hover:border-[#387478]/30 hover:shadow-md"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.08,
                                                        }}
                                                        className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full"
                                                    >
                                                        <Image
                                                            src={nav.image}
                                                            alt={nav.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </motion.div>

                                                    <span>
                                                        {nav.title}
                                                    </span>
                                                </div>

                                                <motion.div
                                                    animate={{
                                                        x: isActive ? 3 : 0,
                                                    }}
                                                    whileHover={{
                                                        x: 5,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                    <ChevronRight className="h-6 w-6 text-[#E67E22]" />
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

