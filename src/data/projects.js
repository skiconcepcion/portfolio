import artisan from "../assets/projects/artisan.png";
import boats from "../assets/projects/boats.png";
import brics from "../assets/projects/brics.png";
import krizkhen from "../assets/projects/krizkhen.png";
import mbmb from "../assets/projects/mbmb.png";
import ncnp from "../assets/projects/ncnp.png";
import noah from "../assets/projects/noah.png";
import sayoluna from "../assets/projects/sayoluna.png";
import doctorportal from "../assets/projects/doctorportal.png";
import roamba from "../assets/projects/roamba.png";


const projects = [
  {
    id: 1,
    title: "ARTISAN",
    type: "Mobile Application",
    purpose: "Academic Project",
    progress: "Completed",
    description: "A mobile app for simulating and visualizing computer networks, designed to improve accessibility to networking concepts through interactive learning tools.",
    image: artisan,
    featured: false,
    githubLink: "https://github.com/skiconcepcion/artisan",
    projectLink: "https://drive.google.com/drive/folders/1Q-5oSe8tmkWURqOQ3q2WT7Ej-2bUuNs7?usp=sharing",
    linkLabel: "Access APK & docs",
  },

  {
    id: 2,
    title: "BOATS (Boat in Ocean: Animation and Terrain Simulation)",
    type: "Website",
    purpose: "Academic Project",
    progress: "Completed",
    description: "An interactive WebGL-based website that demonstrates 3D animation and terrain rendering, focusing on real-time graphics and visual simulation techniques.",
    image: boats,
    featured: false,
    githubLink: "https://github.com/SeanConcepcion29/CMSC-161-BOATS",
    projectLink: "https://seanconcepcion29.github.io/CMSC-161-BOATS/",
    linkLabel: "Visit website",
  },

  {
    id: 3,
    title: "BRICS: Booking and Reservation System of Institute of Computer Science",
    type: "Website",
    purpose: "Academic Project",
    progress: "Completed",
    description: "A web-based booking and reservation system that streamlines the management of ICS rooms and facilities, replacing manual processes with a digital solution.",
    image: brics,
    featured: true,
    githubLink: "https://github.com/skiconcepcion/brics",
    projectLink: "https://brics-alpha.vercel.app/",
    linkLabel: "Visit website",
  },

  {
    id: 4,
    title: "Krizkhen Floral Design: Order & Inventory Management System",
    type: "Website",
    purpose: "Freelance Project",
    progress: "Completed",
    description: "A full-stack management system for a floral business, handling order tracking, inventory control, and automated report generation with visual analytics.",
    image: krizkhen,
    featured: false,
    githubLink: "https://github.com/skiconcepcion/krizkhen",
    projectLink: "https://krizkhen-floral-design.vercel.app/",
    linkLabel: "Visit website",
  },

  {
    id: 5,
    title: "Monster Beside My Bed",
    type: "2D Video Game",
    purpose: "Personal Project",
    progress: "Demo Released",
    description: "A 2D side-scrolling puzzle game built in Godot, featuring hand-drawn assets and a story-driven experience about nightly encounters and care.",
    image: mbmb,
    featured: false,
    githubLink: "https://github.com/skiconcepcion/mbmb",
    projectLink: "https://skiconcepcion.itch.io/monster-beside-my-bed",
    linkLabel: "Access itch.io page",
  },

  {
    id: 6,
    title: "Nor Crying, Nor Pain",
    type: "2D Video Game",
    purpose: "Personal Project",
    progress: "Completed",
    description: "A narrative-driven puzzle horror game where players explore a secluded village, solve environmental puzzles, and uncover a disturbing hidden truth.",
    image: ncnp,
    featured: false,
    githubLink: "https://github.com/skiconcepcion/ncnp",
    projectLink: "https://skiconcepcion.itch.io/nor-crying-nor-pain",
    linkLabel: "Access itch.io page",
  },

  {
    id: 7,
    title: "Nationwide Operational Assessment of Hazards (Project NOAH)",
    type: "Website",
    purpose: "Internship Project",
    progress: "Completed",
    description: "Worked as an intern to backend development for the typhoon tracking system, focusing on data extraction and processing for hazard assessment.",
    image: noah,
    featured: true,
    githubLink: null,
    projectLink: "https://noah.up.edu.ph/",
    linkLabel: "Visit website",
  },

  {
    id: 8,
    title: "Sa 'yo, Luna",
    type: "2D Video Game",
    purpose: "Personal Project",
     progress: "Completed",
    description: "A short emotional puzzle adventure game created in Godot, telling a heartfelt story of love and memory through interactive storytelling.",
    image: sayoluna,
    featured: false,
    githubLink: "https://github.com/skiconcepcion/sayoluna",
    projectLink: "https://skiconcepcion.itch.io/sayo-luna",
    linkLabel: "Access itch.io page",
  },

  {
    id: 9,
    title: "Doctor's Portal",
    type: "Website",
    purpose: "Professional Project",
    progress: "In Progress",
    description: "Doctor’s Portal is designed to digitize patient records and laboratory request management, providing doctors with fast, secure, and efficient access to healthcare information.",
    image: doctorportal,
    featured: false,
    githubLink: null,
    projectLink: null,
    linkLabel: null,
  },

  {
    id: 10,
    title: "Roamba: An Ultrasonic- and Gyro-Guided Robot for Efficient Debris Sweeping",
    type: "Other",
    purpose: "Academic Project",
    progress: "Completed",
    description: "A LEGO Mindstorms EV3- and Tetrix-based robot that uses ultrasonic and gyro sensors to efficiently sweep lightweight debris into the corner of a room.",
    image: roamba,
    featured: false,
    githubLink: null,
    projectLink: "https://drive.google.com/drive/u/1/folders/1fw7EJLTt0KR1WuRggWEE7lcXpq9f9FSP",
    linkLabel: "Access docs",
  },
];

export default projects;