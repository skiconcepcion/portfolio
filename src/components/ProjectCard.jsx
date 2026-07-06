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
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {project.type}
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
            {project.purpose}
          </span>
        </div>

        <p className="mt-4 mb-2 text-gray-600">
          {project.description}
        </p>



        {/* Links */}
        {(project.githubLink || project.projectLink) && (
          <div>
            <p className="mt-5 text-sm font-medium">
              Click here to:
            </p>

            <div className="mt-1 flex flex-wrap gap-4 text-sm font-medium">
            
              {/* GitHub Link */}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 underline decoration-gray-400 underline-offset-4 transition hover:text-black"
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
                  className="text-blue-600 underline decoration-blue-400 underline-offset-4 transition hover:text-blue-800"
                >
                  {project.linkLabel || "Access Project"}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}