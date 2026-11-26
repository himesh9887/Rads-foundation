import {
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  Users,
  Sprout,
  Building2,
} from "lucide-react";

/**
 * Central source of truth for all program content.
 * Feeds ProgramCard, Programs page, ProgramDetails page and the
 * dedicated /education, /healthcare, /women-empowerment,
 * /food-relief, /rural-development routes.
 */
export const programs = [
  {
    slug: "food-relief",
    title: "Food & Relief Programs",
    shortTitle: "Food & Relief",
    icon: UtensilsCrossed,
    theme: "food",
    summary:
      "Regular food distribution drives and emergency relief support for families facing hunger and hardship in rural areas.",
    impactLabel: "5,000+ meals distributed",
    overview:
      "Our Food & Relief program ensures that no family in the communities we serve has to sleep hungry. Through scheduled ration distribution, community kitchens and emergency relief camps, we reach households that are most vulnerable during droughts, floods and economic hardship.",
    whyItMatters:
      "Chronic food insecurity affects a child's growth, a family's stability and a community's ability to focus on long-term development. Addressing hunger first creates the foundation for education, health and livelihood programs to succeed.",
    whatWeDo: [
      {
        title: "Monthly Ration Kits",
        description:
          "Essential grocery kits delivered to identified vulnerable families every month.",
      },
      {
        title: "Emergency Relief Camps",
        description:
          "Rapid-response food and essential supplies during floods, droughts and other crises.",
      },
      {
        title: "Community Kitchens",
        description:
          "Shared kitchens that provide warm, nutritious meals to elderly and homeless individuals.",
      },
    ],
    impactStats: [
      { value: "5,000+", label: "Meals distributed" },
      { value: "800+", label: "Families supported" },
      { value: "20+", label: "Villages covered" },
    ],
  },
  {
    slug: "education",
    title: "Free Education Support",
    shortTitle: "Education",
    icon: GraduationCap,
    theme: "education",
    summary:
      "Free tuition, school essentials and learning resources that keep underprivileged children in classrooms and moving forward.",
    impactLabel: "2,000+ children supported",
    overview:
      "We believe education is the most powerful tool to break the cycle of poverty. Our education support program provides free tuition centres, school supplies, uniforms and scholarships so that children from underprivileged families can continue their education without interruption.",
    whyItMatters:
      "In many rural households, children drop out of school to support family income or due to the cost of basic supplies. A single year of uninterrupted schooling can change the trajectory of a child's entire life.",
    whatWeDo: [
      {
        title: "Free Tuition Centres",
        description:
          "After-school learning support run by trained volunteers and local educators.",
      },
      {
        title: "School Essentials",
        description:
          "Uniforms, stationery, bags and books provided at the start of every academic year.",
      },
      {
        title: "Scholarship Support",
        description:
          "Financial assistance for meritorious students to continue higher education.",
      },
    ],
    impactStats: [
      { value: "2,000+", label: "Children enrolled" },
      { value: "40+", label: "Learning centres" },
      { value: "120+", label: "Volunteer educators" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Support",
    shortTitle: "Healthcare",
    icon: HeartPulse,
    theme: "healthcare",
    summary:
      "Free health camps, basic medicines and awareness drives bringing essential healthcare to communities with little access.",
    impactLabel: "3,000+ patients treated",
    overview:
      "Access to basic healthcare remains a challenge in many rural pockets. Our healthcare program organises free medical camps, connects families with basic diagnostics and medicine, and runs awareness drives on hygiene, nutrition and preventive care.",
    whyItMatters:
      "Preventable illnesses can push entire families into debt when left untreated. Early diagnosis, basic medicine and health awareness reduce this burden and protect livelihoods.",
    whatWeDo: [
      {
        title: "Free Health Camps",
        description:
          "Periodic camps offering general check-ups, basic diagnostics and medicine.",
      },
      {
        title: "Maternal & Child Health",
        description:
          "Support and awareness for expecting mothers and infant care in remote areas.",
      },
      {
        title: "Hygiene Awareness",
        description:
          "Community sessions on sanitation, clean water and preventive healthcare practices.",
      },
    ],
    impactStats: [
      { value: "3,000+", label: "Patients treated" },
      { value: "60+", label: "Health camps held" },
      { value: "15+", label: "Partner health workers" },
    ],
  },
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    shortTitle: "Women Empowerment",
    icon: Users,
    theme: "women",
    summary:
      "Skill training, self-help groups and livelihood support helping rural women build independence and confidence.",
    impactLabel: "600+ women trained",
    overview:
      "We work with rural women to build sustainable livelihoods through vocational training, self-help groups and micro-enterprise support. Our aim is to help women become financially independent while strengthening their voice within their families and communities.",
    whyItMatters:
      "When women earn and lead, entire households benefit — from better nutrition and education outcomes for children to stronger community decision-making.",
    whatWeDo: [
      {
        title: "Vocational Training",
        description:
          "Tailoring, handicrafts and small-business skills taught through hands-on workshops.",
      },
      {
        title: "Self-Help Groups",
        description:
          "Peer savings groups that build financial literacy and collective bargaining power.",
      },
      {
        title: "Micro-Enterprise Support",
        description:
          "Guidance and seed support to help women start small, sustainable businesses.",
      },
    ],
    impactStats: [
      { value: "600+", label: "Women trained" },
      { value: "45+", label: "Self-help groups" },
      { value: "18+", label: "Villages engaged" },
    ],
  },
  {
    slug: "rural-development",
    title: "Rural Development",
    shortTitle: "Rural Development",
    icon: Sprout,
    theme: "rural",
    summary:
      "Infrastructure, sanitation and sustainable livelihood initiatives that strengthen entire villages for the long term.",
    impactLabel: "25+ villages reached",
    overview:
      "Rural development is at the heart of everything we do. From improving access to clean water and sanitation to supporting sustainable farming practices, we work alongside village communities to build long-term resilience.",
    whyItMatters:
      "Lasting change requires more than short-term aid — it requires infrastructure and systems that communities can sustain and build upon themselves.",
    whatWeDo: [
      {
        title: "Clean Water & Sanitation",
        description:
          "Support for safe drinking water access points and sanitation infrastructure.",
      },
      {
        title: "Sustainable Agriculture",
        description:
          "Training on climate-resilient farming techniques and resource-efficient practices.",
      },
      {
        title: "Village Infrastructure",
        description:
          "Support for community spaces, roads and basic infrastructure improvements.",
      },
    ],
    impactStats: [
      { value: "25+", label: "Villages reached" },
      { value: "10+", label: "Infrastructure projects" },
      { value: "5,000+", label: "Lives impacted" },
    ],
  },
  {
    slug: "community-development",
    title: "Community Development",
    shortTitle: "Community Development",
    icon: Building2,
    theme: "community",
    summary:
      "Community centres, local leadership programs and collective initiatives that bring people together to drive change.",
    impactLabel: "15+ community programs",
    overview:
      "We support the social fabric of rural communities by building local leadership, encouraging civic participation and creating shared spaces where community members can organise, learn and collaborate.",
    whyItMatters:
      "Sustainable development is community-led. Strong local leadership and shared spaces help villages continue driving progress long after a program cycle ends.",
    whatWeDo: [
      {
        title: "Community Centres",
        description:
          "Shared spaces for meetings, learning sessions and local events.",
      },
      {
        title: "Local Leadership Programs",
        description:
          "Training for community representatives to advocate for their village's needs.",
      },
      {
        title: "Awareness Campaigns",
        description:
          "Drives on civic rights, government schemes and social entitlements.",
      },
    ],
    impactStats: [
      { value: "15+", label: "Community programs" },
      { value: "25+", label: "Villages engaged" },
      { value: "50+", label: "Community leaders trained" },
    ],
  },
];

export const getProgramBySlug = (slug) =>
  programs.find((program) => program.slug === slug);
