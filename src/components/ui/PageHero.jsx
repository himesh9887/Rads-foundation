import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import Container from "./Container";

export default function PageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0">
        <HeroScene className="h-full w-full object-cover opacity-60" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {breadcrumb && (
            <p className="mb-3 text-sm font-medium text-navy-300">{breadcrumb}</p>
          )}
          {eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-200 text-balance">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
