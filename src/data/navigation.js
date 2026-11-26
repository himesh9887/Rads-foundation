export const mainNavLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Programs",
    path: "/programs",
    children: [
      { label: "All Programs", path: "/programs" },
      { label: "Food & Relief", path: "/food-relief" },
      { label: "Education Support", path: "/education" },
      { label: "Healthcare Support", path: "/healthcare" },
      { label: "Women Empowerment", path: "/women-empowerment" },
      { label: "Rural Development", path: "/rural-development" },
    ],
  },
  { label: "Impact", path: "/transparency" },
  { label: "Gallery", path: "/gallery" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

export const footerProgramLinks = [
  { label: "Food & Relief", path: "/food-relief" },
  { label: "Education Support", path: "/education" },
  { label: "Healthcare Support", path: "/healthcare" },
  { label: "Women Empowerment", path: "/women-empowerment" },
  { label: "Rural Development", path: "/rural-development" },
];

export const footerQuickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/team" },
  { label: "Gallery", path: "/gallery" },
  { label: "Events", path: "/events" },
  { label: "Transparency", path: "/transparency" },
  { label: "Contact Us", path: "/contact" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms" },
  { label: "Transparency", path: "/transparency" },
];
