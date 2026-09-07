import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoItem } from "@/types/sections";

interface GalleryCardProps {
    photo: PhotoItem;
}

export default function GalleryCard({ photo }: GalleryCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative h-[240px] w-full overflow-hidden rounded-[1rem] shadow-lg group"
        >
            <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </motion.div>
    );
}