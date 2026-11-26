import { motion } from "framer-motion";
import { UtensilsCrossed, BookOpen, HeartPulse, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { DONATION_IMPACT_EXAMPLES } from "../../utils/constants";
import { formatCurrency } from "../../utils/payment";
import { useDonationModal } from "../../context/DonationModalContext";

const ICONS = [UtensilsCrossed, BookOpen, HeartPulse];

export default function DonationImpact() {
  const { openDonationModal } = useDonationModal();

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Your Impact"
          title="How Your Donation Helps"
          description="Illustrative examples of what a contribution can support. These are indicative figures, not guaranteed allocations."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {DONATION_IMPACT_EXAMPLES.map(({ amount, description }, index) => {
            const Icon = ICONS[index] || UtensilsCrossed;
            return (
              <motion.div
                key={amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-7 text-center shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white">
                  <Icon size={26} />
                </span>
                <p className="mt-5 text-3xl font-extrabold text-navy-900">
                  {formatCurrency(amount)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{description}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-navy-400">
          * Illustrative examples only, intended to help visualize impact.
          They do not represent a guarantee of exact fund allocation.
        </p>

        <div className="mt-8 flex justify-center">
          <Button size="lg" icon={ArrowRight} onClick={openDonationModal}>
            Donate Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
