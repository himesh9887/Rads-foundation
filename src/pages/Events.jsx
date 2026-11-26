import { useState } from "react";
import { CalendarX2 } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import EventCard from "../components/events/EventCard";
import { events } from "../data/events";

const TABS = [
  { key: "upcoming", label: "Upcoming Events" },
  { key: "past", label: "Past Events" },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const filtered = events.filter((event) => event.status === activeTab);

  return (
    <>
      <SEO
        title="Events"
        description="See upcoming and past events, health camps, relief drives and workshops organised by RADS Foundation."
        path="/events"
      />
      <PageHero
        breadcrumb="Home / Events"
        eyebrow="Get Involved"
        title="Events & Community Drives"
        description="Join our upcoming camps, drives and community initiatives, or look back at what we've accomplished together."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex justify-center gap-2 rounded-full border border-navy-100 bg-white p-1.5 mx-auto w-fit shadow-soft">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                aria-pressed={activeTab === tab.key}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  activeTab === tab.key
                    ? "bg-orange-500 text-white"
                    : "text-navy-600 hover:text-orange-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="mt-14 flex flex-col items-center gap-3 text-center">
              <CalendarX2 size={40} className="text-navy-300" />
              <p className="font-semibold text-navy-600">No events to show right now.</p>
              <p className="text-sm text-navy-400">Please check back soon.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
