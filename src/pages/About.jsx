import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import OurStory from "../components/about/OurStory";
import MissionVisionValues from "../components/about/MissionVisionValues";
import TeamCard from "../components/about/TeamCard";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DonationCTA from "../components/home/DonationCTA";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { team } from "../data/team";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about RADS Foundation's mission, vision, values and the story behind our rural development work across India."
        path="/about"
      />
      <PageHero
        breadcrumb="Home / About"
        eyebrow="About RADS"
        title="Working Alongside Rural Communities Since Day One"
        description="We exist to close the gap between underprivileged rural families and the essential resources they deserve."
      />
      <OurStory />
      <MissionVisionValues />
      <WhyChooseUs />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="The People Behind RADS"
            title="Meet Our Core Team"
            description="A dedicated team of program leaders, coordinators and volunteers driving our mission forward."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button to="/team" variant="outline">
              Meet the Full Team
            </Button>
          </div>
        </Container>
      </section>

      <DonationCTA />
    </>
  );
}
