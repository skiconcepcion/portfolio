import { useEffect, useState, useRef } from "react";

/* IMAGE IMPORTS */
import logo from "./assets/images/logo.png";

/* DATA IMPORTS */
import projects from "./data/projects";
import artworks from "./data/artworks";
import certificates from "./data/certificates";

/* COMPONENT IMPORTS */
import ProjectCard from "./components/ProjectCard";
import ArtworkCard from "./components/ArtworkCard";
import CertificateCard from "./components/CertificateCard";

export default function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [selectedProjectType, setSelectedProjectType] = useState("All Projects");
  const [selectedArtworkType, setSelectedArtworkType] = useState("All Artworks");

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      (window.scrollY > lastScrollY.current && window.scrollY > 80) ? setShowNavbar(false) : setShowNavbar(true); 
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "home", href: "#home" },
    { label: "projects", href: "#projects" },
    { label: "artworks", href: "#artworks" },
    { label: "certificates", href: "#certificates" },
    { label: "about", href: "#about" },
  ];


  const featuredProjectsData = projects.filter((project) => project.featured);
  const filteredProjectsData = selectedProjectType === "All Projects" ? projects : projects.filter((project) => project.type === selectedProjectType);
  const projectTypes = ["All Projects", "Website", "Mobile Application", "2D Video Game", "Other"];

  const filteredArtworksData = selectedArtworkType === "All Artworks" ? artworks : artworks.filter((artwork) => artwork.type === selectedArtworkType);
  const artworkTypes = ["All Artworks", "Traditional Art", "Digital Art"];

  const certificatesData = certificates;


  return (
    <div className="bg-[var(--background)] pt-16">


      {/* ========= NAVIGATION BAR ========= */}
      <nav className={`fixed top-0 left-0 z-50 w-full bg-[var(--background)] transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-0">
          <div className="flex h-16 items-center justify-between">

            <img src={logo} alt="Logo" className="h-12 w-auto"/>

            <div className="flex gap-4 md:gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="relative text-[var(--text)] transition-colors duration-300 hover:text-[var(--primary)]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>

          </div>
        </div>
      </nav>



      {/* ========= HOME SECTION ========= */}
      <section id="home" className="px-4 py-18">
        <div className="mx-auto max-w-7xl">

          {/* HERO */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold md:text-7xl">
              skiconcepcion portfolio
            </h2>

            <p className="mt-4 max-w-3xl text-xl text-[var(--text-sub)]">
              a collection of{" "}
              <span className="font-semibold text-[var(--primary)]">projects</span>,{" "}
              <span className="font-semibold text-[var(--secondary)]">ideas</span>, and{" "}
              <span className="font-semibold text-[var(--tertiary)]">experiences</span>{" "}
              built through curiosity and creativity.
            </p>
          </div>

          {/* FEATURED WORKS */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">
              featured works
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjectsData.map((project) => (
                <ProjectCard key={project.id} project={project}/>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* ========= PROJECTS SECTION ========= */}
      <section id="projects" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          {/* PROJECTS HEADER */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold"> Projects </h2>
              <p className="mt-1 text-lg text-[var(--text-sub)]"> Browse my complete collection of projects. </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedProjectType(type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedProjectType === type
                      ? "bg-[var(--primary)] text-white"
                      : "border border-[var(--primary)] hover:bg-[var(--primary-light)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT CARDS GRID */}
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjectsData.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>

        </div>
      </section>



      {/* ========= ARTWORKS SECTION ========= */}
      <section id="artworks" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          {/* ARTWORKS HEADER */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold"> Artworks </h2>
              <p className="mt-1 text-xl text-[var(--text-sub)]"> Browse my complete collection of artworks. </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {artworkTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedArtworkType(type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedArtworkType === type
                      ? "bg-[var(--secondary)] text-white"
                      : "border border-[var(--secondary)] hover:bg-[var(--secondary-light)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* ARTWORK CARDS GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtworksData.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork}/>
            ))}
          </div>

        </div>
      </section>



      {/* ========= CERTIFICATES SECTION ========= */}
      <section id="certificates" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          {/* CERTIFICATES HEADER */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold"> Certificates </h2>
              <p className="mt-1 text-lg text-[var(--text-sub)]"> Browse my complete collection of certificates. </p>
            </div>
          </div>

          {/* CERTIFICATES CARDS GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificatesData.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate}/>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}