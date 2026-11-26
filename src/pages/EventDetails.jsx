import { useParams } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ThemedVisual from "../components/ui/ThemedVisual";
import { getEventBySlug } from "../data/events";
import { useDonationModal } from "../context/DonationModalContext";
import NotFound from "./NotFound";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function EventDetails() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);
  const { openDonationModal } = useDonationModal();

  if (!event) {
    return <NotFound />;
  }

  return (
    <>
      <SEO title={event.title} description={event.description} path={`/events/${event.slug}`} />
      <PageHero
        breadcrumb="Home / Events"
        eyebrow={event.status === "upcoming" ? "Upcoming Event" : "Past Event"}
        title={event.title}
        description={event.description}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container width="narrow">
          <ThemedVisual
            theme={event.image.theme}
            seed={event.image.seed}
            alt={event.title}
            className="aspect-[16/9] w-full"
            iconSize={72}
          />

          <div className="mt-6 flex flex-wrap gap-6 border-b border-navy-100 pb-6">
            <p className="flex items-center gap-2 text-sm font-bold text-navy-700">
              <CalendarDays size={18} className="text-orange-500" />
              {dateFormatter.format(new Date(event.date))}
            </p>
            <p className="flex items-center gap-2 text-sm font-bold text-navy-700">
              <MapPin size={18} className="text-orange-500" />
              {event.location}
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-navy-600 sm:text-lg">
            {event.details}
          </p>

          {event.status === "upcoming" && (
            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-navy-900 px-6 py-10 text-center">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Support this initiative
              </h3>
              <p className="max-w-md text-sm text-navy-200">
                Help us make this event possible for the families who need it most.
              </p>
              <Button icon={ArrowRight} onClick={openDonationModal}>
                Donate Now
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
