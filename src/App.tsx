import { useEffect, useState, useRef } from "react";
import { SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiFlutter } from 'react-icons/si';

// Card props interface
interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  category?: string; // optional for artwork images
}

// Artwork image interface
interface Artwork {
  src: string;
  title?: string;
  colSpan?: number; // default 1
  rowSpan?: number; // default 1
}


// Reusable Card component
function Card({ image, title, subtitle }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 flex-1">{subtitle}</p>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState("All"); // Project filter tab
  const [activeSection, setActiveSection] = useState("Home"); // Navbar highlight

  // Refs for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => setShowNav(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, name: string) => {
    setActiveSection(name);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Sample projects with categories
  const projects: CardProps[] = [
    { image: "https://via.placeholder.com/400x200", title: "Mobile App One", subtitle: "A mobile app project.", category: "Mobile App" },
    { image: "https://via.placeholder.com/400x200", title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: "https://via.placeholder.com/400x200", title: "Game One", subtitle: "A video game project.", category: "Video Game" },
  ];

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  // Sample artwork images
  const artworkImages: Artwork[] = [
    { src: "https://via.placeholder.com/600x400", colSpan: 2, rowSpan: 3 },
    { src: "https://via.placeholder.com/400x400", colSpan: 1, rowSpan: 1 },
    { src: "https://via.placeholder.com/800x400", colSpan: 2, rowSpan: 1 },
    { src: "https://via.placeholder.com/400x600", colSpan: 1, rowSpan: 2 },
    { src: "https://via.placeholder.com/600x600", colSpan: 2, rowSpan: 2 },
    { src: "https://via.placeholder.com/500x400", colSpan: 1, rowSpan: 1 },
  ];
  
  const tabs = ["All", "Mobile App", "Website", "Video Game"];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* NAVBAR */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showNav ? "bg-white shadow opacity-100" : "bg-transparent opacity-0"}`}>
        <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
          <h1 className="font-bold text-lg" style={{ fontFamily: 'Nunito' }}>seanconcepcion</h1>
          <div className="flex gap-6 text-gray-600">
            {["Home", "About", "Projects", "Artwork"].map(section => (
              <p
                key={section}
                onClick={() => {
                  if (section === "Home") scrollToSection(heroRef, section);
                  if (section === "About") scrollToSection(aboutRef, section);
                  if (section === "Projects") scrollToSection(projectsRef, section);
                  if (section === "Artwork") scrollToSection(artworkRef, section);
                }}
                className={`cursor-pointer hover:text-blue-500 transition ${activeSection === section ? "text-blue-600 font-semibold" : ""}`}
              >
                {section}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <div ref={heroRef} className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Sean 👋</h1>
          <p className="text-lg text-gray-600">I build modern apps & beautiful user experiences.</p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div ref={aboutRef} className="flex flex-col px-10 py-20 bg-gray-100 gap-10">

        {/* PROFILE + CONTACT */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-4/6 flex flex-col justify-center bg-white p-8 rounded-lg shadow">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-4">Hi, I'm Sean Concepcion, a passionate developer who loves building beautiful and functional applications.</p>
            <p className="text-gray-700">I enjoy creating interactive user experiences and optimizing applications for performance and accessibility.</p>
          </div>
          <div className="md:w-2/6 flex flex-col justify-start bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="text-gray-700 mb-2">📧 sean@example.com</p>
            <p className="text-gray-700 mb-2">📱 +63 912 345 6789</p>
            <p className="text-gray-700 mb-2">💼 LinkedIn</p>
            <p className="text-gray-700">🐙 GitHub</p>
          </div>
        </div>

        {/* Programming Icons */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-wrap gap-6">
          <SiJavascript className="text-yellow-400 w-10 h-10 hover:scale-110 transition-transform" title="JavaScript" />
          <SiTypescript className="text-blue-600 w-10 h-10 hover:scale-110 transition-transform" title="TypeScript" />
          <SiReact className="text-cyan-400 w-10 h-10 hover:scale-110 transition-transform" title="React" />
          <SiTailwindcss className="text-teal-400 w-10 h-10 hover:scale-110 transition-transform" title="Tailwind CSS" />
          <SiNodedotjs className="text-green-600 w-10 h-10 hover:scale-110 transition-transform" title="Node.js" />
          <SiFlutter className="text-blue-500 w-10 h-10 hover:scale-110 transition-transform" title="Flutter" />
        </div>
      </div>

      {/* PROJECTS / CARDS SECTION */}
      <div ref={projectsRef} className="px-10 py-20 flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-center">My Work</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition
                ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProjects.map((p, idx) => (
            <Card key={idx} image={p.image} title={p.title} subtitle={p.subtitle} />
          ))}
        </div>
      </div>

      {/* ARTWORK SECTION */}
      <div ref={artworkRef} className="px-10 py-20 flex flex-col gap-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">Artwork</h2>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto mt-6">
          {artworkImages.map((art, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-lg
                ${art.colSpan ? `md:col-span-${art.colSpan}` : "md:col-span-1"}
                ${art.rowSpan ? `md:row-span-${art.rowSpan}` : "md:row-span-1"}`}
            >
              <img
                src={art.src}
                alt={art.title ?? `Artwork ${idx}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* EXTRA CONTENT */}
      <div className="h-[50vh] bg-white"></div>

    </div>
  );
}