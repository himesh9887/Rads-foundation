import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";

export default function ImpactCard({ icon: Icon, value, suffix = "", label, start, index = 0 }) {
  const count = useCountUp(value, { start });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-8 text-center shadow-soft"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
        <Icon size={24} />
      </span>
      <p className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="text-sm font-semibold text-navy-500">{label}</p>
    </motion.div>
  );
}
