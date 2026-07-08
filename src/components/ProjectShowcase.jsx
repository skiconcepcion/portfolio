export default function ProjectShowcase({ projects }) {
  const items = [...projects, ...projects];

  return (
    <div className="overflow-hidden">
      <div className="marquee gap-6">
        {items.map((project, index) => (
          <div
            key={index}
            className="w-[500px] shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}