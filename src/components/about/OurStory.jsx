import { motion } from "framer-motion";
import Container from "../ui/Container";
import ThemedVisual from "../ui/ThemedVisual";
import { FOUNDATION } from "../../utils/constants";

export default function OurStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              From one village to a growing movement
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-600 sm:text-lg">
              <p>
                {FOUNDATION.name} ({FOUNDATION.shortName}) began with a simple
                observation: families just a few hours from major cities were
                going without food, education and basic healthcare — not for
                lack of will, but for lack of access.
              </p>
              <p>
                Since {FOUNDATION.foundedYear}, what started as small
                community food drives has grown into a foundation running
                education, healthcare, women empowerment and rural
                development programs across dozens of villages — always
                led by the needs of the communities we serve.
              </p>
              <p>
                We remain committed to transparency, local partnership and
                measuring real outcomes, not just activity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ThemedVisual
              theme="rural"
              seed={1}
              alt="Illustration representing the foundation's rural development journey"
              className="aspect-[4/3] w-full"
              iconSize={80}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
