export default function GalleryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter gallery by category">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-navy-100 bg-white text-navy-600 hover:border-orange-300 hover:text-orange-600"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
