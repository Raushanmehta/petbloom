import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoItem } from "@/types/sections";

interface VideoCardProps {
    video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col group cursor-pointer"
        >
            {/* Video Thumbnail with Play Button & Duration */}
            <div className="relative h-[180px] w-full overflow-hidden rounded-[1rem] shadow-inner">
                <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#387478] shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-5 w-5 fill-[#387478] ml-0.5" />
                    </div>
                </div>
                <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-bold text-white tracking-widest">
                    {video.duration}
                </div>
            </div>

            {/* Video Title & Description */}
            <div className="mt-4 px-1 pb-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#387478] transition-colors leading-snug">
                    {video.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500 leading-relaxed">
                    {video.description}
                </p>
            </div>
        </motion.div>
    );
}