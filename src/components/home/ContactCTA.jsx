import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { CONTACT } from "../../utils/constants";

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-navy-100 bg-white p-8 shadow-soft sm:p-10 lg:flex-row"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Have questions or want to get involved?
            </h2>
            <p className="mt-2 text-navy-500">
              Reach out to our team — we'd love to hear from you.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 text-sm font-semibold text-navy-600 sm:flex-row lg:justify-start">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-orange-600">
                <Phone size={16} /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-orange-600">
                <Mail size={16} /> {CONTACT.email}
              </a>
            </div>
          </div>
          <Button to="/contact" size="lg" icon={ArrowRight}>
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
