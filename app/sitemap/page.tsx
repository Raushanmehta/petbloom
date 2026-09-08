"use client";

import { motion } from "framer-motion";
import PageTopSection from "@/components/common/PageTopSection";
import SitemapCard from "@/components/cards/SitemapCard";
import data from "@/data/data.json";
import { SitemapData } from "@/types/sections";

export default function SitemapPage() {
    const sitemapData = data.sitemapData as unknown as SitemapData;

    return (
        <main>
            <PageTopSection
                title="Site Map"
                subTitle="Explore all our pages"
            />
            <section className="relative overflow-hidden bg-[#FEFDFB] px-4 py-20 sm:px-6 lg:px-12">
                <div className="mx-auto max-w-[1300px]">
                    {/* Grid of Sitemap Cards (4 columns on desktop) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {}
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                        {sitemapData.categories.map((category) => (
                            <motion.div
                                key={category.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}>
                                <SitemapCard category={category} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}