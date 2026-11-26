import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ProgramCard from "../programs/ProgramCard";
import { programs } from "../../data/programs";

export default function ProgramsSection() {
  return (
    <section className="bg-navy-50/50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Programs"
          description="Focused, on-the-ground programs designed to address the most urgent needs of rural families — from immediate relief to long-term empowerment."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.slug} program={program} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/programs" variant="outline">
            View All Programs
          </Button>
        </div>
      </Container>
    </section>
  );
}
