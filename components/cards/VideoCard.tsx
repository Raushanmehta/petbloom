import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoItem } from "@/data";

interface VideoCardProps {
    video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col group cursor-pointer"
        >
            {/* Video Thumbnail with Play Button & Duration */}
            <div className="relative h-[180px] sm:h-[195px] w-full overflow-hidden rounded-2xl shadow-md">
                <Image
                    src={video?.image || ""}
                    alt={video?.title || "Video thumbnail"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors group-hover:bg-black/35">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-[#387478] shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-5 w-5 fill-[#387478] ml-0.5" />
                    </div>
                </div>
                {video?.duration && (
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-bold text-white tracking-widest">
                        {video.duration}
                    </div>
                )}
            </div>

            {/* Video Title & Description */}
            <div className="mt-3.5 px-1 pb-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#387478] transition-colors leading-snug line-clamp-2">
                    {video?.title}
                </h3>
                {video?.description && (
                    <p className="mt-1 text-xs font-medium text-gray-500 leading-relaxed line-clamp-2">
                        {video.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}