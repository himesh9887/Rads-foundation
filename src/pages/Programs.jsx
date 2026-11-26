import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ProgramCard from "../components/programs/ProgramCard";
import DonationCTA from "../components/home/DonationCTA";
import { programs } from "../data/programs";

export default function Programs() {
  return (
    <>
      <SEO
        title="Our Programs"
        description="Explore RADS Foundation's programs in food relief, education, healthcare, women empowerment, rural and community development."
        path="/programs"
      />
      <PageHero
        breadcrumb="Home / Programs"
        eyebrow="What We Do"
        title="Our Programs"
        description="Focused, on-the-ground programs designed to address the most urgent needs of rural families — from immediate relief to long-term empowerment."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.slug} program={program} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <DonationCTA />
    </>
  );
}
