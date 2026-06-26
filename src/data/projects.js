import brics from "../assets/images/brics.png";

const projects = [
  {
    id: 1,
    title: "Project One",
    label: "Web Development",
    description: "A modern web application built with React, Vite, and Tailwind CSS.",
    image: brics,
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    label: "UI Design",
    description:  "A clean and responsive interface focused on user experience.",
    image: "https://picsum.photos/600/400?random=2",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    label: "Artwork",
    description: "A collection of digital illustrations and creative experiments.",
    image: "https://picsum.photos/600/400?random=3",
    featured: false,
  },
  {
    id: 4,
    title: "Project Four",
    label: "Mobile Development",
    description: "A cross-platform mobile application built with React Native.",
    image: "https://picsum.photos/600/400?random=4",
    featured: false,
  },
];

export default projects;