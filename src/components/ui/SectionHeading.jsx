import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] ${
            light ? "text-orange-300" : "text-orange-600"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed text-balance ${
            light ? "text-navy-100" : "text-navy-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
