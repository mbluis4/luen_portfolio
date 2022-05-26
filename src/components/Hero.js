import Link from "next/link";
import Image from "next/image";
import heroImg from "../img/hero.svg";
import socialLinks from "../data/socialLinks";
import AboutMe from "./AboutMe";

const Hero = () => {
  return (
    <div className="relative pt-20 bg-slate-100 mb-4">
      <div
        className="h-full grid items-center w-ninety 
      mt-2 mx-auto max-w-7xl"
      >
        <h2 className="text-5xl text-slate-700 mb-2 p-0">
          <span className="font-light">Hi, I'm</span>{" "}
          <span className="font-bold">Luis Enrique</span>
        </h2>
        <h2 className="text-2xl text-slate-700 p-0 mb-2">
          Front end developer
        </h2>

        <Link href="/contact">
          <h2
            className="mb-4 inline-block bg-primary_1 py-2 px-3 uppercase 
          font-bold w-32 text-center shadow-md tracking-wide text-slate-50 border-2 
          border-transparent hover:cursor-pointer scale-100 hover:scale-110 transition-all rounded-md"
          >
            Contact
          </h2>
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
        <span className="min-w-2/4">
          <Image src={heroImg} alt="hero svg" />
        </span>

        <AboutMe />
      </div>
    </div>
  );
};

export default Hero;
