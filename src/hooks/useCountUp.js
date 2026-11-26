import { useEffect, useRef, useState } from "react";

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(target, { start = false, duration = 1600 } = {}) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutQuart(progress) * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [start, target, duration]);

  return value;
}
