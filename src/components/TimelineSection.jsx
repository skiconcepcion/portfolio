export default function TimelineSection({ timeline }) {
  return (
    <div className="h-full rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="flex items-center gap-3 text-sm font-semibold text-[var(--tertiary)]">
        <span>{timeline.year}</span>
        <span>{timeline.label}</span>
      </p>

      <h4 className="mt-2 text-lg md:text-xl font-bold">
        {timeline.title}
      </h4>

      <p className="mt-2 text-sm md:text-base leading-relaxed text-[var(--text-sub)]">
        {timeline.subtitle}
      </p>
    </div>
  );
}