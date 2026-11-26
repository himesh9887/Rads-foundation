import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import TeamCard from "../components/about/TeamCard";
import DonationCTA from "../components/home/DonationCTA";
import { team } from "../data/team";

export default function OurTeam() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the people leading RADS Foundation's programs across education, healthcare, women empowerment and rural development."
        path="/team"
      />
      <PageHero
        breadcrumb="Home / Our Team"
        eyebrow="The People Behind RADS"
        title="Meet Our Team"
        description="A dedicated team of program leaders, coordinators and volunteers driving our mission forward, every single day."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <DonationCTA />
    </>
  );
}
