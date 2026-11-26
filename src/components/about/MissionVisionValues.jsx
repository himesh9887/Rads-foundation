import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To uplift underprivileged rural families through sustained access to food, education, healthcare and livelihood opportunities, delivered with dignity and consistency.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where every rural community is self-reliant, healthy, educated and empowered to shape its own progress — without dependence on external aid.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    description:
      "Transparency, dignity, community-first action and accountability guide every program we run and every rupee we spend.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-navy-50/50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="What Drives Us"
          title="Mission, Vision & Values"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-navy-100 bg-white p-7 shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
