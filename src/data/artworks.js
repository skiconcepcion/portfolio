import art1314 from "../assets/artworks/art_1314.jpg";
import artCasanaan from "../assets/artworks/art_casanaan.png";
import artEntropy from "../assets/artworks/art_entropy.jpg";
import artMirasol from "../assets/artworks/art_mirasol.jpg";
import artSelfPortrait from "../assets/artworks/art_self_portrait.png";


const artworks = [
  {
    id: 1,
    title: "Entropy",
    description: "gradual decline into disorder",
    type: "Traditional Art",
    image: artEntropy,
    credit: null,
  },

  {
    id: 2,
    title: "Self Portrait",
    description: "literally me",
    type: "Digital Art",
    image: artSelfPortrait,
    credit: null,
  },

  {
    id: 3,
    title: "13, 14",
    description: "just somebody that i used to know",
    type: "Digital Art",
    image: art1314,
    credit: null,
  },

  {
    id: 4,
    title: "Mirasol",
    description: "padayon, iska",
    type: "Digital Art",
    image: artMirasol,
    credit: "background image by todd kent on Unsplash",
  },

  {
    id: 5,
    title: "Casanaan",
    description: "realm of the unseen",
    type: "Digital Art",
    image: artCasanaan,
    credit: null,
  },
];

export default artworks;