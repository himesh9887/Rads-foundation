import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import { mainNavLinks } from "../../data/navigation";
import Logo from "../common/Logo";
import Button from "../ui/Button";
import { useDonationModal } from "../../context/DonationModalContext";

export default function MobileDrawer({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const { openDonationModal } = useDonationModal();

  useEffect(() => {
    if (!isOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <motion.div
            className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-lifted"
          >
            <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
              <Logo compact />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-navy-500 hover:bg-navy-100"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {mainNavLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-orange-50 text-orange-600"
                            : "text-navy-700 hover:bg-navy-50"
                        }`
                      }
                    >
                      {link.label}
                      <ChevronRight size={18} className="opacity-40" />
                    </NavLink>
                    {link.children && (
                      <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-navy-100 pl-3">
                        {link.children.slice(1).map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              onClick={onClose}
                              className={({ isActive }) =>
                                `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                  isActive
                                    ? "text-orange-600"
                                    : "text-navy-500 hover:text-navy-800"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-navy-100 p-4">
              <Button
                fullWidth
                size="lg"
                onClick={() => {
                  onClose();
                  openDonationModal();
                }}
              >
                Donate Now
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
