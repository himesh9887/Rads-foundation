import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ThemedVisual from "../ui/ThemedVisual";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function EventCard({ event, index = 0 }) {
  const { slug, title, date, location, description, image, status } = event;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-shadow hover:shadow-card"
    >
      <div className="relative">
        <ThemedVisual
          theme={image.theme}
          seed={image.seed}
          alt={title}
          className="aspect-[16/10] w-full"
          rounded="rounded-none"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
            status === "upcoming"
              ? "bg-orange-500 text-white"
              : "bg-navy-800 text-white"
          }`}
        >
          {status === "upcoming" ? "Upcoming" : "Past Event"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-xs font-bold text-orange-600">
          <CalendarDays size={14} />
          {dateFormatter.format(new Date(date))}
        </p>
        <h3 className="mt-2 text-lg font-bold text-navy-900">{title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
          <MapPin size={14} />
          {location}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{description}</p>

        <Link
          to={`/events/${slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
        >
          View Details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
