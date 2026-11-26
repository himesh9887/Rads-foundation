import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "../ui/Container";
import ImpactCard from "../ui/ImpactCard";
import { impactStats } from "../../data/impactStats";

export default function ImpactStatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16">
      <Container>
        <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {impactStats.map((stat, index) => (
            <ImpactCard key={stat.id} {...stat} start={inView} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
