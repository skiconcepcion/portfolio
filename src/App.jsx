import { useEffect, useState, useRef } from "react";

import logo from "./assets/images/logo.png";
import brics from "./assets/images/brics.png";


import projects from "./data/projects";
import ProjectCard from "./components/ProjectCard";


export default function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > lastScrollY.current &&
        window.scrollY > 80
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const featuredProjects = projects.filter(
    (project) => project.featured
  );



  

  return (
    <div className="bg-white pt-16">

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 z-50 w-full bg-white transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-0">
          <div className="flex h-16 items-center justify-between">

            <img src={logo} alt="Logo" className="h-8 w-auto"/>

            <div className="gap-4 md:gap-6 flex">
              <a href="#" className="text-gray-600 hover:text-black">
                home
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                projects
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                artworks
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                about
              </a>
            </div>

          </div>
        </div>
      </nav>


      <section className="px-4 py-18">
        <div className="mx-auto max-w-7xl">

          {/* Hero */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold md:text-7xl">
              Welcome to My Portfolio
            </h2>

            <p className="mt-4 max-w-3xl text-gray-600 text-lg">
              a simple responsive React + Tailwind portfolio showcasing projects, artwork, and experiments.
            </p>
          </div>

          {/* Featured Works Preview */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">
              featured works
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