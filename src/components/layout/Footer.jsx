import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import {
  footerProgramLinks,
  footerQuickLinks,
  footerLegalLinks,
} from "../../data/navigation";
import { CONTACT, FOUNDATION, SOCIAL_LINKS } from "../../utils/constants";
import { useDonationModal } from "../../context/DonationModalContext";

const SOCIAL_ICONS = [
  { key: "facebook", icon: Facebook },
  { key: "instagram", icon: Instagram },
  { key: "twitter", icon: Twitter },
  { key: "youtube", icon: Youtube },
  { key: "linkedin", icon: Linkedin },
];

export default function Footer() {
  const { openDonationModal } = useDonationModal();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-200">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="RADS home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white text-lg font-extrabold">
                R
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-white">RADS</span>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-300">
                  Rural Area Dev. Society
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {FOUNDATION.description}
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIAL_ICONS.map(({ key, icon: Icon }) => (
                <a
                  key={key}
                  href={SOCIAL_LINKS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`RADS on ${key}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-navy-200 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Programs</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerProgramLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-300">
              <li className="flex gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={18} className="shrink-0 text-orange-400" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-orange-400">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={18} className="shrink-0 text-orange-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-orange-400">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <Button
              onClick={openDonationModal}
              icon={ArrowRight}
              size="sm"
              className="mt-5"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {FOUNDATION.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-orange-400">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
