/**
 * ============================================================================
 * CENTRALIZED IMAGE REGISTRY
 * ============================================================================
 * Every "photo" in this project (hero, program cards, gallery, events, team)
 * is rendered by <ThemedVisual /> (src/components/ui/ThemedVisual.jsx), which
 * currently draws a branded illustration in place of real photography.
 *
 * TO REPLACE WITH REAL PHOTOS LATER:
 *   1. Drop the image file into src/assets/images/
 *   2. Import it at the top of this file, e.g.
 *        import heroHome from "../assets/images/hero-home.jpg";
 *   3. Assign it to the matching key below, e.g. `heroHome`.
 *   4. No component changes are needed — ThemedVisual automatically renders
 *      the real image instead of the illustration once a key is non-null.
 * ============================================================================
 */
export const IMAGE_SOURCES = {
  heroHome: null,
  aboutMission: null,
  donateHero: null,
};

export function getImageSource(key) {
  return key ? IMAGE_SOURCES[key] || null : null;
}
