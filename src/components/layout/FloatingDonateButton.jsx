import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { useDonationModal } from "../../context/DonationModalContext";

export default function FloatingDonateButton() {
  const [visible, setVisible] = useState(false);
  const { openDonationModal } = useDonationModal();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/donate") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={openDonationModal}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lifted transition-colors hover:bg-orange-600 sm:bottom-8 sm:right-8"
          aria-label="Donate now"
        >
          <HeartHandshake size={20} />
          <span className="hidden sm:inline">Donate Now</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
