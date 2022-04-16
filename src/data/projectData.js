import glycerin from "../img/glycerin3.png";
import dices from "../img/tenzies.png";
import triviados from "../img/trivia2.png";

const projectData = [
  {
    id: 1,
    name: "Glycerin",
    description: "site for glycerin soaps",
    url: "https://glicerina.netlify.app/",
    github: "",
    tags: ["React", "Tailwind", "Firebase"],
    img: glycerin,
  },
  {
    id: 2,
    name: "Trivia app",
    description: "application for trivia",
    url: "https://triviados.netlify.app/",
    github: "https://github.com/mbluis4/trivia_app",
    tags: ["React", "Opentdb"],
    img: triviados,
  },
  {
    id: 3,
    name: "Tenzies game",
    description: "game of tenzies",
    url: "https://reactdados.netlify.app/",
    github: "https://github.com/mbluis4/tenzies_game",
    tags: ["React"],
    img: dices,
  },
];

export default projectData;
