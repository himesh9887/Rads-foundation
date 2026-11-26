import SEO from "../components/common/SEO";
import Hero from "../components/home/Hero";
import ImpactStatsStrip from "../components/home/ImpactStatsStrip";
import AboutPreview from "../components/home/AboutPreview";
import ProgramsSection from "../components/home/ProgramsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ImpactStory from "../components/home/ImpactStory";
import DonationImpact from "../components/home/DonationImpact";
import TestimonialsSection from "../components/home/TestimonialsSection";
import EventsPreview from "../components/home/EventsPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import DonationCTA from "../components/home/DonationCTA";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="Empowering Rural Communities"
        description="RADS (Rural Area Development Society) helps underprivileged rural families through education, healthcare, food relief, women empowerment and community development."
        path="/"
      />
      <Hero />
      <ImpactStatsStrip />
      <AboutPreview />
      <ProgramsSection />
      <WhyChooseUs />
      <ImpactStory />
      <DonationImpact />
      <TestimonialsSection />
      <EventsPreview />
      <GalleryPreview />
      <DonationCTA />
      <ContactCTA />
    </>
  );
}
