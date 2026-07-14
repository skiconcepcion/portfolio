import { useEffect, useState, useRef } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaItchIo } from "react-icons/fa";


/* IMAGE IMPORTS */
import logo from "./assets/images/logo.png";

/* DATA IMPORTS */
import projects from "./data/projects";
import artworks from "./data/artworks";
import timelines from "./data/timelines";

/* COMPONENT IMPORTS */
import ProjectCard from "./components/ProjectCard";
import ArtworkCard from "./components/ArtworkCard";
import ProjectShowcase from "./components/ProjectShowcase";
import TimelineSection from "./components/TimelineSection";


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
    { label: "home", href: "#" },
    { label: "projects", href: "#projects" },
    { label: "artworks", href: "#artworks" },
    { label: "about", href: "#about" },
  ];


  const featuredProjectsData = projects.filter((project) => project.featured);
  const filteredProjectsData = selectedProjectType === "All Projects" ? projects : projects.filter((project) => project.type === selectedProjectType);
  const projectTypes = ["All Projects", "Website", "Mobile Application", "2D Video Game", "Other"];

  const filteredArtworksData = selectedArtworkType === "All Artworks" ? artworks : artworks.filter((artwork) => artwork.type === selectedArtworkType);
  const artworkTypes = ["All Artworks", "Traditional Art", "Digital Art"];

  const timelineData = timelines;


  return (
    <div className="bg-[var(--background)]">


      {/* ========= NAVIGATION BAR ========= */}
      <nav className={`fixed top-0 left-0 z-50 w-full bg-[var(--background)] transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-0">
          <div className="flex h-14 md:h-16 items-center justify-between">

            <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto"/>

            <div className="flex gap-4 md:gap-6 text-base">
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
      <section id="home" className="mt-16 px-4 py-18">
        <div className="mx-auto max-w-7xl">

          {/* HERO */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold md:text-7xl">
              welcome to my portfolio
            </h2>

            <p className="mt-4 max-w-5xl text-lg md:text-xl text-[var(--text-sub)]">
              a collection of{" "}
              <span className="font-semibold text-[var(--primary)]">projects</span>,{" "}
              <span className="font-semibold text-[var(--secondary)]">ideas</span>, and{" "}
              <span className="font-semibold text-[var(--tertiary)]">experiences</span>{" "}
              built through curiosity, creativity, and commitment.
            </p>
          </div>

          {/* FEATURED WORKS */}
          <a href="#projects" className="relative left-1/2 block w-full -translate-x-1/2 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-36 md:block bg-gradient-to-r from-[var(--background)] via-[var(--background)]/20 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-36 md:block bg-gradient-to-l from-[var(--background)] via-[var(--background)]/20 to-transparent" />
            <ProjectShowcase projects={projects} />
          </a>
        </div>
      </section>



      {/* ========= PROJECTS SECTION ========= */}
      <section id="projects" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          {/* PROJECTS HEADER */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold"> Projects </h2>
              <p className="mt-1 text-lg text-[var(--text-sub)]"> Craftsmanship. Functionality. Quality. </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedProjectType(type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition lowercase ${
                    selectedProjectType === type
                      ? "bg-[var(--primary)] text-white"
                      : "border-2 border-[var(--primary)] hover:bg-[var(--primary-light)]"
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
              <p className="mt-1 text-xl text-[var(--text-sub)]"> Imagination. Expression. Aesthetics. </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {artworkTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedArtworkType(type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition lowercase ${
                    selectedArtworkType === type
                      ? "bg-[var(--secondary)] text-white"
                      : "border-2 border-[var(--secondary)] hover:bg-[var(--secondary-light)]"
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


      {/* ========= ABOUT SECTION ========= */}
      <section id="about" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          {/* ABOUT HEADER */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-1 text-lg text-[var(--text-sub)]">
              Curiosity. Creativity. Commitment.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* ABOUT */}
            <div className="py-2">
              <h3 className="mb-4 text-2xl font-semibold text-[var(--primary)]">
                profile
              </h3>

              <p className="text-md leading-7">
                Sean Concepcion is a BS Computer Science graduate of UP Los Baños with experience in mobile and full-stack web development, highlighted by his work as a Mobile App Developer at BAJ Pharmaceuticals, contributions to a nationwide project (NOAH), and hands-on experience delivering freelance projects.
              </p>
            </div>


            {/* CONTACTS */}
            <div className="py-2">
              <h3 className="mb-4 text-2xl font-semibold text-[var(--secondary)]">
                contacts
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 transition hover:text-[var(--secondary)]">
                  <FaEnvelope className="text-xl shrink-0" />
                  <p className="text-md font-bold">Email</p>
                  <a href="mailto:skiconcepcion@gmail.com" className="text-md"> skiconcepcion@gmail.com </a>
                </div>

                <div className="flex items-center gap-3 transition hover:text-[var(--secondary)]">
                  <FaPhone className="text-xl shrink-0" />
                  <p className="text-md font-bold">Phone</p>
                  <a href="tel:+639682677916" className="text-md"> +639682677916 </a>
                </div>

                <div className="flex items-center gap-3 transition hover:text-[var(--secondary)]">
                  <FaGithub className="text-xl shrink-0" />
                  <p className="text-md font-bold">GitHub</p>
                  <a href="https://github.com/skiconcepcion" target="_blank" rel="noopener noreferrer" className="text-md"> github.com/skiconcepcion </a>
                </div>

                <div className="flex items-center gap-3 transition hover:text-[var(--secondary)]">
                  <FaItchIo className="text-xl shrink-0" />
                  <p className="text-md font-bold">itch.io</p>
                  <a href="https://skiconcepcion.itch.io" target="_blank" rel="noopener noreferrer" className="text-md"> skiconcepcion.itch.io </a>
                </div>
              </div>
            </div>


            {/* TIMELINE */}
            {/* <div className="py-2 md:col-span-2">
              <h3 className="mb-4 text-2xl font-semibold text-[var(--tertiary)]">
                timeline
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {timelineData.map((timeline, index) => (
                  <TimelineSection
                    key={timeline.id}
                    timeline={timeline}
                    isLast={index === timelineData.length - 1}
                  />
                ))}
              </div>
            </div> */}
            
          </div>
          
        </div>
      </section>


    </div>
  );
}