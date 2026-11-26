export default function Loader({ label = "Loading", fullScreen = false }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 ${
        fullScreen ? "min-h-[60vh]" : "py-16"
      }`}
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-navy-100 border-t-orange-500" />
      <span className="text-sm font-medium text-navy-500">{label}...</span>
    </div>
  );
}
