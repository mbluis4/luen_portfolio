import { Link } from "react-router-dom";
import heroImg from "../img/hero.svg";
import socialLinks from "../data/socialLinks";

const Hero = () => {
  return (
    <div className="relative pt-20 h-screen bg-slate-100">
      <div
        className="h-full grid items-center w-ninety 
      mt-2 mx-auto max-w-7xl"
      >
        <h2 className="text-5xl text-slate-700 mb-2 p-0">
          <span className="font-light">Hi, I'm</span>{" "}
          <span className="font-bold">Luis Enrique</span>
        </h2>
        <h2 className="text-2xl text-slate-700 p-0 mb-2">Frontend developer</h2>

        <Link
          to="contact"
          className="mb-4 inline-block bg-primary_1 py-2 px-3 uppercase 
          font-bold w-32 text-center shadow-md tracking-wide text-slate-50 border-2 
          border-transparent hover:cursor-pointer hover:text-slate-700 hover:bg-indigo-100 rounded-md"
        >
          Contact
        </Link>
        <div className="flex space-x-4 text-2xl mb-5">
          {socialLinks.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              key={social.id}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <img src={heroImg} alt="hero svg" className="min-w-2/4"></img>

        <section className="my-services">
          <h2
            className="text-3xl text-center my-8
          pb-4 text-primary_1 after:"
          >
            What I do
          </h2>
          <div className="text-center">
            <div className="text-slate-300">
              <h3>Design + Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="text-slate-300">
              <h3>E-Commerce</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="text-slate-300">
              <h3>WordPress</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <a href="#work" className="btn">
            My Work
          </a>
        </section>
        <p></p>
      </div>
    </div>
  );
};

export default Hero;
