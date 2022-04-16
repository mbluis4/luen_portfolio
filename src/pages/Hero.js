import { Link } from "react-router-dom";
import heroImg from "../img/hero.svg";
import socialLinks from "../data/socialLinks";

const Hero = () => {
  return (
    <div className="relative pt-20 h-screen bg-cyan-100">
      <div
        className="h-full grid items-center w-ninety 
      mt-2 mx-auto max-w-7xl"
      >
        <h2 className="text-5xl font-bold mb-2 p-0">I'm Luis Enrique</h2>
        <h2 className="text-2xl p-0 mb-2">Frontend developer</h2>

        <Link
          to="contact"
          className="mb-4 inline-block bg-indigo-500 py-2 px-3 uppercase 
          font-bold w-32 text-center shadow-md tracking-wide text-slate-50 border-2 
          border-transparent hover:cursor-pointer hover:text-slate-700 hover:bg-indigo-100 rounded-md"
        >
          Contact
        </Link>
        <div className="flex space-x-4 text-2xl mb-5">
          {socialLinks.map((social) => (
            <a href={social.url} target="_blank" key={social.id}>
              {social.icon}
            </a>
          ))}
        </div>

        <img src={heroImg} alt="hero svg" className="min-w-2/4"></img>
      </div>
    </div>
  );
};

export default Hero;
