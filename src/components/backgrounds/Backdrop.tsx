/**
 * Static page atmosphere: furrow lines, a soft accent glow and film grain.
 * Pure CSS, so it costs nothing at scroll time.
 */
const Backdrop = () => (
  <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
    <div className="furrows absolute inset-0" />
    <div className="absolute -top-1/3 right-[-10%] h-[70vh] w-[70vh] rounded-full bg-brand/[0.05] blur-[120px]" />
    <div className="absolute bottom-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-[#5b7a3a]/[0.08] blur-[140px]" />
    <div className="grain absolute inset-0" />
  </div>
);

export default Backdrop;
