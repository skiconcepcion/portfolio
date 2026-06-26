export default function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {project.label}
        </span>

        <p className="mt-4 text-gray-600">
          {project.description}
        </p>
      </div>
    </div>
  );
}