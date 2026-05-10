import { useEffect, useState, useRef } from "react";
import { SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiFlutter } from 'react-icons/si';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faItchIo, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import leftHeroImage from './assets/images/left-hero.png';
import midHeroImage from './assets/images/mid-hero.png';
import rightHeroImage from './assets/images/right-hero.png';

import nameText from './assets/images/name.png';
import logoImage from './assets/images/logo-nav.png';
import heroTitleText from './assets/images/hero-title.png';
import heroTitleTextMobile from './assets/images/hero-title-mobile.png';

import aboutText from './assets/images/about-me.png';
import contactsText from './assets/images/contacts.png';
import proficiencyText from './assets/images/proficiency.png';

import projectsText from './assets/images/projects.png';

import boatsImage from './assets/images/boats.png';
import ncnpImage from './assets/images/ncnp.png';
import artisanImage from './assets/images/artisan.png';
import healthmonImage from './assets/images/healthmon.png';
import slImage from './assets/images/sl.png';
import roambaImage from './assets/images/roamba.png';
import firstraiderImage from './assets/images/firstraider.png';
import mbmbImage from './assets/images/mbmb.png';

// Card props interface
interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  category?: string;
}

// Artwork image interface
interface Artwork {
  src: string;
  title?: string;
  colSpan?: number;
  rowSpan?: number;
}



function Card({ image, title, subtitle }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-70 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 flex-1">{subtitle}</p>
      </div>
    </div>
  );
}


// Main App
export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [activeSection, setActiveSection] = useState("home");
  const [isClickScrolling, setIsClickScrolling] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);

  const navColors: Record<string, string> = {
    home: "text-[#6BDEEC]",
    about: "text-[#C5DFAB]",
    projects:"text-[#FECE54]",
    artwork: "text-[#F477A0]",
  };


  // 🔥 Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling) return; // 🚫 ignore scroll during click

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isClickScrolling]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, name: string) => {
    setActiveSection(name);
    setIsClickScrolling(true);

    ref.current?.scrollIntoView({ behavior: "smooth" });

    // 👇 Detect when scrolling actually stops
    let timeout: ReturnType<typeof setTimeout>;

    const handleScrollEnd = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsClickScrolling(false); // ✅ only when scrolling REALLY stops
        window.removeEventListener("scroll", handleScrollEnd);
      }, 120); // small delay after last scroll event
    };

    window.addEventListener("scroll", handleScrollEnd);
  };

  const projects: CardProps[] = [
    { image: ncnpImage, title: "Mobile App One", subtitle: "A mobile app project.", category: "Mobile App" },
    { image: boatsImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: artisanImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: healthmonImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: slImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: mbmbImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: roambaImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: firstraiderImage, title: "Website One", subtitle: "A website project.", category: "Website" },
    { image: "https://via.placeholder.com/400x200", title: "Game One", subtitle: "A video game project.", category: "Video Game" },
  ];

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

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
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex justify-between items-center px-8 py-4 md:py-5  bg-white shadow">

          <img src={nameText} className="h-4 xl:h-6 w-auto object-contain hidden md:block"/>
          <img src={logoImage} className="h-6 w-auto object-contain md:hidden py-0"/>
          
          <div className="flex gap-6 text-[#3d3d3d] md:text-base lg:text-lg tracking-wide font-cal">
            {["home", "about", "projects", "artwork"].map(section => (
              <p
                key={section}
                onClick={() => {
                  if (section === "home") scrollToSection(heroRef, section);
                  if (section === "about") scrollToSection(aboutRef, section);
                  if (section === "projects") scrollToSection(projectsRef, section);
                  if (section === "artwork") scrollToSection(artworkRef, section);
                }}
                className={`cursor-pointer transition relative
                  hover:navColors[section]
                  ${activeSection === section ? "after:scale-x-100" : "after:scale-x-0"}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-0.75 after:w-full after:bg-current ${activeSection === section ? navColors[section] : ""}
                  after:origin-left after:transition-transform after:duration-300
                `}
              >
                {section}
              </p>
            ))}
          </div>
        </div>
      </div>



      {/* HERO */}
      <div ref={heroRef} className="flex flex-col items-center justify-center mb-8">

        <div className="text-center h-70 flex items-center justify-end flex-col animate-fadeUp">
          {/* Desktop Image */}
          <img src={heroTitleText} className="w-10/12 object-cover hidden md:block"/>

          {/* Mobile Image */}
          <img src={heroTitleTextMobile} className="w-9/12 object-cover md:hidden"/>
        </div>


        <div className="flex gap-1">
          <div className="hidden md:block overflow-hidden opacity-0 translate-y-10 animate-fadeUp flex-3" style={{ animationDelay: "0.3s" }}>
            <img src={leftHeroImage} loading="lazy" className="w-full object-cover" />
          </div>

          <div className="overflow-hidden opacity-0 translate-y-10 animate-fadeUp flex-1 md:flex-2" style={{ animationDelay: "0.1s" }}>
            <img src={midHeroImage} loading="lazy" className="w-full object-cover" />
          </div>

          <div className="hidden md:block overflow-hidden opacity-0 translate-y-10 animate-fadeUp flex-3" style={{ animationDelay: "0.6s" }}>
            <img src={rightHeroImage} loading="lazy" className="w-full object-cover" />
          </div>
        </div>

      </div>



      {/* ABOUT */}
      <div ref={aboutRef} className="flex flex-col px-4 sm:px-8 md:px-16 py-16 md:py-20 gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* ABOUT TEXT */}
          <div className="md:w-5/8 flex flex-col justify-start p-4 md:p-8">
            <img src={aboutText}  className="h-12 w-auto object-contain block self-start mb-8"/>

            <p className="text-[#3d3d3d] font-nunito text-[clamp(1.1rem,2vw,1.25rem)] mb-4" style={{lineHeight: '2.2rem'}}>
              Sean Kierby Concepcion is a BS Computer Science graduate of UP Los Baños with experience 
              in mobile and full-stack web development, highlighted by his work as a Mobile App Developer 
              at BAJ Pharmaceuticals, contributions to a nationwide project (NOAH), and hands-on experience 
              delivering freelance projects. 
            </p>

            <p className="text-[#3d3d3d] font-nunito text-[clamp(1.1rem,2vw,1.25rem)]" style={{lineHeight: '2.2rem'}}>
              Most of his work revolves around mobile applications, full-stack websites, basic robotics programming & building, and 2D video game development.
            </p>
          </div>


          {/* CONTACTS */}
          <div className="md:w-3/8 flex flex-col justify-start p-4 md:p-8">
            <img src={contactsText} className="h-12 w-auto object-contain block self-start mb-8"/>

            {/* EMAIL */}
            <a
              href="mailto:sean@example.com"
              className="flex items-center gap-3 text-[#3d3d3d] mb-3 font-nunito hover:scale-102 transition-transform text-[clamp(1.1rem,2vw,1.25rem)]"
            >
              <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '1.8rem'}} />
              <span className="font-bold w-24 ms-2">Email</span>
              <span className="">skiconcepcion@gmail.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+639123456789"
              className="flex items-center gap-3 text-[#3d3d3d] mb-3 font-nunito hover:scale-102 transition-transform  text-[clamp(1.1rem,2vw,1.25rem)]"
            >
              <FontAwesomeIcon icon={faPhone} style={{fontSize: '1.8rem'}} />
              <span className="font-bold w-24 ms-2">Phone</span>
              <span className="">09682677916</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#3d3d3d] mb-3 font-nunito hover:scale-102 transition-transform  text-[clamp(1.1rem,2vw,1.25rem)]"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '1.8rem'}} />
              <span className="font-bold w-24 ms-2">LinkedIn</span>
              <span className="">Sean Concepcion</span>
            </a>

            {/* GITHUB */}
            <a
              href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#3d3d3d] mb-3 font-nunito hover:scale-102 transition-transform  text-[clamp(1.1rem,2vw,1.25rem)]"
            >
              <FontAwesomeIcon icon={faGithub} style={{fontSize: '1.8rem'}}/>
              <span className="font-bold w-24 ms-2">Github</span>
              <span className="">skiconcepcion</span>
            </a>

            {/* ITCH IO */}
            <a
              href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#3d3d3d] font-nunito hover:scale-102 transition-transform  text-[clamp(1.1rem,2vw,1.25rem)]"
            >
              <FontAwesomeIcon icon={faItchIo} style={{fontSize: '1.8rem'}}/>
              <span className="font-bold w-24 ms-2">Itch.io</span>
              <span className="">skiconcepcion.itch.io</span>
            </a>

          </div>
        </div>


        {/* PROFICIENCY */}
        <div className="flex flex-col justify-start p-4 md:p-8">
          <img src={proficiencyText} className="h-15 w-auto object-contain block self-start mb-8"/>

          <div className="flex flex-wrap gap-6">
            <SiJavascript className="text-yellow-400 w-12 h-12 hover:scale-110 transition-transform" />
            <SiTypescript className="text-blue-600 w-12 h-12 hover:scale-110 transition-transform" />
            <SiReact className="text-cyan-400 w-12 h-12 hover:scale-110 transition-transform" />
            <SiTailwindcss className="text-teal-400 w-12 h-12 hover:scale-110 transition-transform" />
            <SiNodedotjs className="text-green-600 w-12 h-12 hover:scale-110 transition-transform" />
            <SiFlutter className="text-blue-500 w-12 h-12 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>




      {/* PROJECTS */}
      <div ref={projectsRef} className="px-10 py-20 flex flex-col gap-10 bg-gray-50">
        <img src={projectsText} className="h-24 w-auto object-contain block self-center mb-8"/>

        <div className="flex justify-center gap-6 mt-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition text-[#3d3d3d] ${
                activeTab === tab
                  ? tab === "All"
                    ? "bg-[#6BDEEC]"
                    : tab === "Mobile App"
                    ? "bg-[#C5DFAB]"
                    : tab === "Website"
                    ? "bg-[#FECE54]"
                    : tab === "Video Game"
                    ? "bg-[#F477A0]"
                    : ""
                  : "bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProjects.map((p, idx) => (
            <Card key={idx} image={p.image} title={p.title} subtitle={p.subtitle} />
          ))}
        </div>
      </div>





      {/* ARTWORK */}
      <div ref={artworkRef} className="px-10 py-20 flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-center">Artwork</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {artworkImages.map((art, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-lg
                ${art.colSpan ? `md:col-span-${art.colSpan}` : ""}
                ${art.rowSpan ? `md:row-span-${art.rowSpan}` : ""}`}
            >
              <img src={art.src} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[50vh] bg-white"></div>
    </div>
  );
}