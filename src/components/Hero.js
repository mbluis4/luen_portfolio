import Link from "next/link";
import Image from "next/image";
import heroImg from "../img/hero.svg";
import socialLinks from "../data/socialLinks";
import AboutMe from "./AboutMe";

const Hero = () => {
  return (
    <div className="pt-40 bg-navy mb-4">
      <div
        className="h-full grid items-center w-ninety 
      mt-2 mx-auto max-w-7xl"
      >
        <h2 className="text-xl text-primary_1 mb-2 p-0">
          Hello there!, My name is
        </h2>
        <h2 className="font-bold text-7xl text-lightest_slate mb-2">
          Luis E. Millan
        </h2>
        <h2 className="font-bold text-5xl text-slate mb-4">
          Front end developer
        </h2>
        <h2 className="text-lg text-slate mb-4 max-w-md">
          I'm a front end developer who takes great pride working in this
          wonderful field of web developement. I specialize in libraries like
          React and Next JS
        </h2>

        <Link href="/contact">
          <h2
            className="mb-6 inline-block bg-primary_1 py-2 px-3 uppercase 
          font-bold w-32 text-center shadow-md tracking-wide text-slate-50 border-2 
          border-transparent hover:cursor-pointer scale-100 hover:scale-110 transition-all rounded-md"
          >
            Contact
          </h2>
        </Link>
        <div className="flex space-x-4 text-2xl mb-5 text-slate">
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
        {/*    <span className="min-w-2/4">
          <Image src={heroImg} alt="hero svg" />
        </span> */}

        <AboutMe />
      </div>
    </div>
  );
};

export default Hero;
