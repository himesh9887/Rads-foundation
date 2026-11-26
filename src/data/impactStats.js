import { Users, MapPin, HeartHandshake, UtensilsCrossed } from "lucide-react";

/**
 * Illustrative impact figures for the trust/impact strip.
 * Replace `value` with verified figures once available.
 */
export const impactStats = [
  {
    id: "families",
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Families Supported",
  },
  {
    id: "villages",
    icon: MapPin,
    value: 25,
    suffix: "+",
    label: "Villages Reached",
  },
  {
    id: "programs",
    icon: HeartHandshake,
    value: 15,
    suffix: "+",
    label: "Community Programs",
  },
  {
    id: "meals",
    icon: UtensilsCrossed,
    value: 5000,
    suffix: "+",
    label: "Meals Distributed",
  },
];
