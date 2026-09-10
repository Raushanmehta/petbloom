import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoItem } from "@/data";

interface GalleryCardProps {
    photo: PhotoItem;
}

export default function GalleryCard({ photo }: GalleryCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative h-[220px] sm:h-[240px] lg:h-[250px] w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
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
    );
}