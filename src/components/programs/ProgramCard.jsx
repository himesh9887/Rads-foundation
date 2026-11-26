import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramCard({ program, index = 0 }) {
  const { slug, title, icon: Icon, summary, impactLabel } = program;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lifted focus-within:-translate-y-1.5 focus-within:shadow-lifted"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
        <Icon size={28} strokeWidth={1.8} />
      </span>

      <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{summary}</p>

      <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-600">
        {impactLabel}
      </p>

      <Link
        to={`/programs/${slug}`}
        className="mt-5 inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
      >
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
