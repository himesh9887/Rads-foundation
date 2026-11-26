import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ThemedVisual from "../components/ui/ThemedVisual";
import GalleryCard from "../components/gallery/GalleryCard";
import { getProgramBySlug } from "../data/programs";
import { galleryItems } from "../data/gallery";
import { useDonationModal } from "../context/DonationModalContext";
import NotFound from "./NotFound";

export default function ProgramDetails({ forcedSlug }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const program = getProgramBySlug(slug);
  const { openDonationModal } = useDonationModal();

  if (!program) {
    return <NotFound />;
  }

  const relatedGallery = galleryItems.filter((item) => item.theme === program.theme).slice(0, 4);

  return (
    <>
      <SEO
        title={program.title}
        description={program.summary}
        path={`/programs/${program.slug}`}
      />
      <PageHero
        breadcrumb={`Home / Programs / ${program.shortTitle}`}
        eyebrow="Our Program"
        title={program.title}
        description={program.summary}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Program Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
                {program.overview}
              </p>

              <h3 className="mt-8 text-xl font-bold text-navy-900">Why This Matters</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                {program.whyItMatters}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <ThemedVisual
                theme={program.theme}
                seed={2}
                alt={`Illustration representing the ${program.title} program`}
                className="aspect-[4/3] w-full"
                iconSize={80}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/50 py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            What We Do
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {program.whatWeDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                <CheckCircle2 className="text-orange-500" size={24} />
                <p className="mt-4 font-bold text-navy-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            Program Impact
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {program.impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-soft"
              >
                <p className="text-3xl font-extrabold text-orange-500 sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-navy-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {relatedGallery.length > 0 && (
            <div className="mt-16">
              <h3 className="text-center text-xl font-bold text-navy-900">Program Gallery</h3>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {relatedGallery.map((item, index) => (
                  <GalleryCard key={item.id} item={item} index={index} onOpen={() => {}} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-navy-900 px-6 py-12 text-center sm:px-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Help us expand the {program.shortTitle} program
            </h3>
            <p className="max-w-xl text-navy-200">
              Your contribution helps us reach more families through this program.
            </p>
            <Button size="lg" icon={ArrowRight} onClick={openDonationModal}>
              Donate Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
