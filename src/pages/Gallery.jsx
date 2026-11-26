import { useMemo, useState } from "react";
import { ImageOff } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryCard from "../components/gallery/GalleryCard";
import GalleryLightbox from "../components/gallery/GalleryLightbox";
import { galleryCategories, galleryItems } from "../data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse photos from RADS Foundation's education, healthcare, food relief, women empowerment and community programs."
        path="/gallery"
      />
      <PageHero
        breadcrumb="Home / Gallery"
        eyebrow="Moments of Impact"
        title="Our Gallery"
        description="A visual glimpse into the programs, camps and communities we work with every day."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <GalleryFilter
            categories={galleryCategories}
            active={activeCategory}
            onChange={(category) => {
              setActiveCategory(category);
              setActiveIndex(null);
            }}
          />

          {filtered.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {filtered.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} onOpen={setActiveIndex} />
              ))}
            </div>
          ) : (
            <div className="mt-14 flex flex-col items-center gap-3 text-center">
              <ImageOff size={40} className="text-navy-300" />
              <p className="font-semibold text-navy-600">No images in this category yet.</p>
              <p className="text-sm text-navy-400">Please check back soon or explore another category.</p>
            </div>
          )}
        </Container>
      </section>

      <GalleryLightbox
        items={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
