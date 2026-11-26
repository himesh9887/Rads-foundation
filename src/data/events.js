/**
 * Placeholder events data. `status` is derived at build time from `date`
 * where possible, but is also stored explicitly for clarity in the UI.
 */
export const events = [
  {
    id: "e1",
    slug: "annual-health-camp-2026",
    title: "Annual Rural Health Camp",
    date: "2026-10-18",
    location: "Shirwal Village, Maharashtra",
    status: "upcoming",
    image: { theme: "healthcare", seed: 5 },
    description:
      "A free, full-day health camp offering general check-ups, basic diagnostics and medicine for families across five neighbouring villages.",
    details:
      "Volunteer doctors and health workers will provide free consultations, basic diagnostic tests and medicine. Awareness sessions on hygiene and nutrition will also be conducted throughout the day.",
  },
  {
    id: "e2",
    slug: "winter-ration-drive-2026",
    title: "Winter Ration Distribution Drive",
    date: "2026-11-22",
    location: "Multiple Villages, Satara District",
    status: "upcoming",
    image: { theme: "food", seed: 4 },
    description:
      "Distribution of essential ration kits to underprivileged families ahead of the winter season.",
    details:
      "Ration kits including staple grains, pulses, oil and warm clothing will be distributed to identified vulnerable households across the district.",
  },
  {
    id: "e3",
    slug: "women-skill-workshop-2026",
    title: "Women's Livelihood Skill Workshop",
    date: "2026-12-05",
    location: "Community Centre, Panhala",
    status: "upcoming",
    image: { theme: "women", seed: 5 },
    description:
      "A hands-on workshop introducing tailoring and handicraft skills to women from surrounding villages.",
    details:
      "Participants will receive hands-on training from experienced instructors along with starter kits to begin practising their new skills at home.",
  },
  {
    id: "e4",
    slug: "foundation-day-2026",
    title: "RADS Foundation Day Celebration",
    date: "2026-03-14",
    location: "RADS Community Ground, Kolhapur",
    status: "past",
    image: { theme: "community", seed: 6 },
    description:
      "An annual celebration bringing together volunteers, donors and the communities we serve.",
    details:
      "The event featured cultural performances by local children, recognition of long-serving volunteers and a showcase of the year's key impact milestones.",
  },
  {
    id: "e5",
    slug: "spring-health-camp-2026",
    title: "Spring Community Health Camp",
    date: "2026-04-02",
    location: "Wai Taluka, Satara",
    status: "past",
    image: { theme: "healthcare", seed: 6 },
    description:
      "A free medical camp that served over 400 patients across three villages in a single day.",
    details:
      "The camp included general health check-ups, eye check-ups and free medicine distribution supported by a team of volunteer doctors and nurses.",
  },
  {
    id: "e6",
    slug: "school-kit-distribution-2026",
    title: "New Academic Year School Kit Distribution",
    date: "2026-06-10",
    location: "12 Partner Schools, Rural Maharashtra",
    status: "past",
    image: { theme: "education", seed: 5 },
    description:
      "Distribution of school bags, uniforms and stationery kits to over 500 children at the start of the academic year.",
    details:
      "Kits were distributed in partnership with local schools to ensure every enrolled child began the academic year fully equipped.",
  },
];

export const getEventBySlug = (slug) =>
  events.find((event) => event.slug === slug);
