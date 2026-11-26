import { motion } from "framer-motion";
import { Users2, ShieldCheck, Sprout, MapPinned, Handshake, HeartHandshake } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const REASONS = [
  { icon: Users2, title: "Community First", description: "Every program is designed with, and for, the communities we serve." },
  { icon: ShieldCheck, title: "Transparent Approach", description: "Clear reporting and accountability guide how contributions are used." },
  { icon: Sprout, title: "Sustainable Impact", description: "We focus on solutions that communities can carry forward themselves." },
  { icon: MapPinned, title: "Local Action", description: "On-ground teams working directly within the villages we support." },
  { icon: Handshake, title: "Inclusive Development", description: "Programs that reach families across age, gender and background." },
  { icon: HeartHandshake, title: "Dedicated Volunteers", description: "A growing network of volunteers powering every initiative." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Support Us"
          title="Why Choose RADS Foundation"
          description="A foundation built on trust, transparency and consistent, measurable action within the communities we serve."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
              className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-orange-400">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-bold text-navy-900">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
