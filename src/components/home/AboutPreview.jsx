import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, HeartHandshake } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemedVisual from "../ui/ThemedVisual";

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To uplift underprivileged rural families through sustained access to food, education, healthcare and livelihood opportunities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A future where every rural community is self-reliant, healthy, educated and empowered to shape its own progress.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    description: "Transparency, dignity and community-first action guide every program we run and every rupee we spend.",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <ThemedVisual
              theme="community"
              seed={2}
              alt="Illustration representing community upliftment work by RADS"
              className="aspect-[4/3] w-full"
              iconSize={72}
            />
            <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-2xl bg-white p-4 shadow-lifted sm:block">
              <p className="text-3xl font-extrabold text-orange-500">12+</p>
              <p className="text-xs font-semibold text-navy-500">Years serving rural communities</p>
            </div>
          </motion.div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              About RADS
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Building hope, one rural community at a time
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
              Rural Area Development Society was founded to bridge the gap
              between underprivileged rural families and the essential
              resources they deserve — from a meal on the table to a chance
              at education and dignified healthcare. Every program we run is
              rooted in the belief that lasting change comes from within
              communities, not from outside them.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-1">
              {PILLARS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-bold text-navy-900">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button to="/about" variant="outline" icon={ArrowRight} className="mt-8">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
