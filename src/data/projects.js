import artisan from "../assets/images/artisan.png";
import boats from "../assets/images/boats.png";
import brics from "../assets/images/brics.png";
import krizkhen from "../assets/images/krizkhen.png";
import mbmb from "../assets/images/mbmb.png";
import ncnp from "../assets/images/ncnp.png";
import noah from "../assets/images/noah.png";
import sayoluna from "../assets/images/sayoluna.png";

const projects = [
  {
    id: 1,
    title: "ARTISAN",
    type: "Mobile Application",
    purpose: "Networking Education",
    description: "A mobile app for simulating and visualizing computer networks, designed to improve accessibility to networking concepts through interactive learning tools.",
    image: artisan,
    featured: false,
    githubLink: "https://github.com",
    projectLink: "https://github.com",
    linkLabel: "View Project",
  },

  {
    id: 2,
    title: "BOATS (Boat in Ocean: Animation and Terrain Simulation)",
    type: "Website",
    purpose: "WebGL Simulation",
    description: "An interactive WebGL-based website that demonstrates 3D animation and terrain rendering, focusing on real-time graphics and visual simulation techniques.",
    image: boats,
    featured: false,
    githubLink: "",
    projectLink: "",
    linkLabel: "View Project",
  },

  {
    id: 3,
    title: "BRICS: Booking and Reservation System of Institute of Computer Science",
    type: "Website",
    purpose: "Reservation System",
    description: "A web-based booking and reservation system that streamlines the management of ICS rooms and facilities, replacing manual processes with a digital solution.",
    image: brics,
    featured: true,
    githubLink: "",
    projectLink: "",
    linkLabel: "View System",
  },

  {
    id: 4,
    title: "Krizkhen Floral Design: Order & Inventory Management System",
    type: "Website",
    purpose: "Business Management",
    description: "A full-stack management system for a floral business, handling order tracking, inventory control, and automated report generation with visual analytics.",
    image: krizkhen,
    featured: false,
    githubLink: "",
    projectLink: "",
    linkLabel: "View System",
  },

  {
    id: 5,
    title: "Monster Beside My Bed",
    type: "2D Video Game",
    purpose: "Puzzle Adventure",
    description: "A 2D side-scrolling puzzle adventure game built in Godot, featuring hand-drawn assets and a story-driven experience about nightly encounters and care.",
    image: mbmb,
    featured: false,
    githubLink: "",
    projectLink: "",
    linkLabel: "Play Game",
  },

  {
    id: 6,
    title: "Nor Crying, Nor Pain",
    type: "2D Video Game",
    purpose: "Puzzle Horror",
    description: "A narrative-driven puzzle horror game where players explore a secluded village, solve environmental puzzles, and uncover a disturbing hidden truth.",
    image: ncnp,
    featured: false,
    githubLink: "",
    projectLink: "",
    linkLabel: "Play Game",
  },

  {
    id: 7,
    title: "Nationwide Operational Assessment of Hazards (Project NOAH)",
    type: "Website",
    purpose: "Disaster Risk Management",
    description: "Contributed as an intern to backend development for the typhoon tracking system, focusing on data extraction and processing for hazard assessment tools.",
    image: noah,
    featured: true,
    githubLink: "",
    projectLink: "",
    linkLabel: "View Project",
  },

  {
    id: 8,
    title: "Sa 'yo, Luna",
    type: "2D Video Game",
    purpose: "Narrative Adventure",
    description: "A short emotional puzzle adventure game created in Godot, telling a heartfelt story of love and memory through interactive storytelling.",
    image: sayoluna,
    featured: false,
    githubLink: "",
    projectLink: "",
    linkLabel: "Play Game",
  },
];

export default projects;