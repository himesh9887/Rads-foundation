import { motion } from "framer-motion";
import { ArrowRight, Compass, Users, MapPin, HeartHandshake } from "lucide-react";
import HeroScene from "../ui/HeroScene";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useDonationModal } from "../../context/DonationModalContext";

const TRUST_INDICATORS = [
  { icon: Users, label: "10K+ Families Supported" },
  { icon: MapPin, label: "25+ Villages Reached" },
  { icon: HeartHandshake, label: "15+ Community Programs" },
];

export default function Hero() {
  const { openDonationModal } = useDonationModal();

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-navy-900 pt-24 pb-16 sm:min-h-[720px] sm:pt-28 lg:min-h-screen lg:pb-20">
      <div className="absolute inset-0">
        <HeroScene className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/75 to-navy-900/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/30 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-sm sm:text-sm">
            Welcome to Our Charity
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Empower <span className="text-orange-400">Rural Lives</span>,
            Through <span className="text-orange-400">Hope &amp; Support</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            We are dedicated to helping underprivileged families through
            education, healthcare, food distribution, women empowerment, and
            community development programs across rural areas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" icon={ArrowRight} onClick={openDonationModal}>
              Donate Now
            </Button>
            <Button size="lg" variant="outlineLight" to="/programs" icon={Compass}>
              Explore Our Work
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6"
          >
            {TRUST_INDICATORS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-semibold text-navy-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-orange-300">
                  <Icon size={16} />
                </span>
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
