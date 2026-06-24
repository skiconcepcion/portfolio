export default function App() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      label: "Web Development",
      description:
        "A modern web application built with React, Vite, and Tailwind CSS.",
      image: "https://picsum.photos/600/400?random=1",
      featured: true,
    },
    {
      id: 2,
      title: "Project Two",
      label: "UI Design",
      description:
        "A clean and responsive interface focused on user experience.",
      image: "https://picsum.photos/600/400?random=2",
      featured: true,
    },
    {
      id: 3,
      title: "Project Three",
      label: "Artwork",
      description:
        "A collection of digital illustrations and creative experiments.",
      image: "https://picsum.photos/600/400?random=3",
      featured: false,
    },
    {
      id: 4,
      title: "Project Four",
      label: "Mobile Development",
      description:
        "A cross-platform mobile application built with React Native.",
      image: "https://picsum.photos/600/400?random=4",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 md:px-0">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold">My App</h1>

            <div className="hidden gap-6 md:flex">
              <a href="#" className="text-gray-600 hover:text-black">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Projects
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Artworks
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                About
              </a>
            </div>

            <button className="text-2xl md:hidden">
              ☰
            </button>
          </div>
        </div>
      </nav>

<section className="px-4 py-20">
  <div className="mx-auto max-w-7xl">

    {/* Hero */}
    <div className="mb-16">
      <h2 className="text-5xl font-bold md:text-7xl">
        mavens
      </h2>

      <p className="mt-4 max-w-3xl text-gray-600 text-lg">
        A simple responsive React + Tailwind portfolio showcasing projects, artwork, and experiments.
      </p>
    </div>

    {/* Featured Works Preview */}
    <div>
      <h3 className="mb-6 text-2xl font-bold">
        Featured Works
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured
          />
        ))}
      </div>
    </div>

  </div>
</section>

      {/* All Works */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-4xl font-bold">
              All Works
            </h2>

            <p className="mt-2 text-gray-600">
              Browse my complete collection of projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={project.image}
        alt={project.title}
        className={`w-full object-cover ${
          featured ? "h-72" : "h-48"
        }`}
      />

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