import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import EventCard from "../events/EventCard";
import { events } from "../../data/events";

export default function EventsPreview() {
  const upcoming = events.filter((event) => event.status === "upcoming").slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get Involved"
          title="Upcoming Events"
          description="Join our upcoming camps, drives and community initiatives happening across our program villages."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/events" variant="outline">
            View All Events
          </Button>
        </div>
      </Container>
    </section>
  );
}
