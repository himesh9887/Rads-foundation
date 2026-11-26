import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import GalleryCard from "../gallery/GalleryCard";
import GalleryLightbox from "../gallery/GalleryLightbox";
import { galleryItems } from "../../data/gallery";

export default function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(null);
  const preview = galleryItems.slice(0, 8);

  return (
    <section className="bg-navy-50/50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Moments of Impact"
          title="From the Field"
          description="A glimpse into the programs, camps and communities we work with every day."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {preview.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} onOpen={setActiveIndex} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Container>

      <GalleryLightbox
        items={preview}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
