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
        <h3 className="text-2xl font-bold">{project.title}</h3>

        {/* Badges */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-md bg-[var(--secondary)] px-4 py-1 text-sm font-medium text-white">
            {project.type}
          </span>

          <span className="rounded-md bg-[var(--tertiary)] px-4 py-1 text-sm font-medium text-white">
            {project.purpose}
          </span>
        </div>

        <p className="mt-4 mb-2 text-md">
          {project.description}
        </p>



        {/* Links */}
        {(project.githubLink || project.projectLink) && (
          <div className="mt-7 mb-2 flex flex-wrap gap-3 text-sm">
            <p className=""> Click here to: </p>
          
            {/* GitHub Link */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
              >
                Visit Github Repository
              </a>
            )}

            {/* Project / Live Link */}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
              >
                {project.linkLabel || "Access Project"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}