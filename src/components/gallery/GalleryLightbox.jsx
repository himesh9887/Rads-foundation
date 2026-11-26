import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ThemedVisual from "../ui/ThemedVisual";

export default function GalleryLightbox({ items, activeIndex, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);
  const isOpen = activeIndex !== null;
  const activeItem = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-navy-900/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem?.title}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={() => onNavigate((activeIndex - 1 + items.length) % items.length)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <motion.div
            key={activeItem?.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex w-full max-w-2xl flex-col items-center"
          >
            <ThemedVisual
              theme={activeItem?.theme}
              seed={activeItem?.seed}
              alt={activeItem?.title}
              className="aspect-square w-full max-w-md"
              iconSize={90}
            />
            <p className="mt-4 text-center text-sm font-semibold text-white sm:text-base">
              {activeItem?.title}
            </p>
            <p className="mt-1 text-xs text-navy-300">
              {activeIndex + 1} / {items.length}
            </p>
          </motion.div>

          <button
            type="button"
            onClick={() => onNavigate((activeIndex + 1) % items.length)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
