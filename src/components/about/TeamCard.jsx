import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const SOCIAL_ICONS = { linkedin: Linkedin, twitter: Twitter, instagram: Instagram };

export default function TeamCard({ member, index = 0 }) {
  const { name, designation, bio, initials, social = {} } = member;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft transition-shadow hover:shadow-card"
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-2xl font-extrabold text-white">
        {initials}
      </span>
      <h3 className="mt-4 font-bold text-navy-900">{name}</h3>
      <p className="text-sm font-semibold text-orange-600">{designation}</p>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">{bio}</p>

      {Object.keys(social).length > 0 && (
        <div className="mt-4 flex gap-2">
          {Object.entries(social).map(([key, href]) => {
            const Icon = SOCIAL_ICONS[key];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on ${key}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-50 text-navy-500 transition-colors hover:bg-orange-500 hover:text-white"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
