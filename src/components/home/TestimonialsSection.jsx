import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goTo = (nextIndex) => {
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-navy-50/50 py-16 sm:py-20 lg:py-28">
      <Container width="narrow">
        <SectionHeading
          eyebrow="Voices From the Community"
          title="Stories of Hope"
          description="Illustrative, placeholder testimonials — replace with real, consented stories once available."
        />

        <div className="relative mt-12">
          <div
            className="relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 shadow-soft sm:p-10"
            role="region"
            aria-label="Testimonial carousel"
            aria-live="polite"
          >
            <Quote className="absolute right-6 top-6 text-orange-100" size={64} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                {current.isDemo && (
                  <span className="mb-3 inline-block rounded-full bg-navy-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-navy-500">
                    Demo Content
                  </span>
                )}
                <p className="text-lg leading-relaxed text-navy-700 sm:text-xl">
                  “{current.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {current.initials}
                  </span>
                  <div>
                    <p className="font-bold text-navy-900">{current.name}</p>
                    <p className="text-sm text-navy-500">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:bg-navy-800 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-orange-500" : "w-2.5 bg-navy-200"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:bg-navy-800 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
