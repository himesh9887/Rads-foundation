import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroScene from "../ui/HeroScene";
import { useDonationModal } from "../../context/DonationModalContext";

export default function DonationCTA() {
  const { openDonationModal } = useDonationModal();

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-16 sm:py-20">
      <div className="absolute inset-0 opacity-40">
        <HeroScene className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-navy-900/80" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Your support can change a family's story today.
          </h2>
          <p className="text-base leading-relaxed text-navy-200 sm:text-lg">
            Every donation — big or small — goes directly toward food, education,
            healthcare and rural development programs that reach real families.
          </p>
          <Button size="lg" icon={ArrowRight} onClick={openDonationModal}>
            Donate Now
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
