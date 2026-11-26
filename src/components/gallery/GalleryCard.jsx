import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import ThemedVisual from "../ui/ThemedVisual";

export default function GalleryCard({ item, index = 0, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl text-left focus-visible:outline-orange-500"
      aria-label={`Open image: ${item.title}`}
    >
      <ThemedVisual
        theme={item.theme}
        seed={item.seed}
        alt={item.title}
        className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
        rounded="rounded-xl"
        iconSize={40}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
          <Expand size={15} />
        </span>
        <p className="text-xs font-semibold text-white line-clamp-2">{item.title}</p>
      </div>
    </motion.button>
  );
}
