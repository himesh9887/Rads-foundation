import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import MobileDrawer from "./MobileDrawer";
import Logo from "../common/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { mainNavLinks } from "../../data/navigation";
import { useDonationModal } from "../../context/DonationModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { openDonationModal } = useDonationModal();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setOpenDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-soft backdrop-blur-md"
            : "bg-navy-900/85 backdrop-blur-sm"
        }`}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between sm:h-20"
            aria-label="Main navigation"
          >
            <Logo light={isDark} />

            <ul className="hidden items-center gap-1 lg:flex">
              {mainNavLinks.map((link) =>
                link.children ? (
                  <li key={link.path} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown((prev) => !prev)}
                      aria-expanded={openDropdown}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                        isDark
                          ? "text-white/90 hover:text-orange-300"
                          : "text-navy-700 hover:text-orange-600"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown && (
                      <div className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-navy-100 bg-white py-2 shadow-lifted">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm font-medium transition-colors ${
                                isActive
                                  ? "bg-orange-50 text-orange-600"
                                  : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `block rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                          isActive
                            ? "text-orange-500"
                            : isDark
                            ? "text-white/90 hover:text-orange-300"
                            : "text-navy-700 hover:text-orange-600"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Button onClick={openDonationModal}>Donate Now</Button>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
                  isDark
                    ? "text-white hover:bg-white/10"
                    : "text-navy-800 hover:bg-navy-100"
                }`}
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </Container>
      </div>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
