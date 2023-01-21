import { FaLinkedin, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

const socialLinks = [
  {
    id: 1,
    url: "https://github.com/mbluis4",
    icon: <RiGithubLine></RiGithubLine>,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/luis-enrique-mill%C3%A1n-brito-88a14442/",
    icon: <FaLinkedin></FaLinkedin>,
  },
  {
    id: 3,
    url: "https://twitter.com/mbluis",
    icon: <FaTwitterSquare></FaTwitterSquare>,
  },
  {
    id: 4,
    url: "https://www.instagram.com/mbluis/?hl=en",
    icon: <FaInstagram></FaInstagram>,
  },
];

export default socialLinks;
