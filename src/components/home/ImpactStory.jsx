import { motion } from "framer-motion";
import Container from "../ui/Container";
import ThemedVisual from "../ui/ThemedVisual";

export default function ImpactStory() {
  return (
    <section className="bg-navy-900 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              A Story of Change
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
              Every contribution creates a ripple of change.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-200 sm:text-lg">
              In a small village where the nearest school was hours away,
              a free tuition centre set up by RADS gave dozens of children a
              place to learn, read and dream beyond their circumstances.
              What began as a handful of volunteers teaching under a
              community roof has grown into a network of learning centres
              across 40+ villages — proof that consistent, community-rooted
              support compounds into lasting change.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:max-w-sm">
              <div>
                <p className="text-2xl font-extrabold text-orange-400">40+</p>
                <p className="text-xs font-semibold text-navy-300">Learning centres built</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-orange-400">2,000+</p>
                <p className="text-xs font-semibold text-navy-300">Children supported</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ThemedVisual
              theme="education"
              seed={3}
              alt="Illustration representing a rural education success story"
              className="aspect-[4/3] w-full"
              iconSize={80}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
