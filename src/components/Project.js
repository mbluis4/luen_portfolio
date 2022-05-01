import Image from "next/Image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const { name, description, img, tags, url, github } = project;
  return (
    <div
      className="bg-slate-50 rounded-md shadow-lg 
    mb-3 flex flex-col items-center max-w-xl mx-auto"
    >
      <div className="max-w-sm mt-2 px-4 pt-2">
        <span className="w-full object-cover rounded-md">
          <Image src={img} alt="site" />
        </span>
      </div>
      <a href={url} target="_blank">
        <FaExternalLinkAlt className="-mt-3 text-md scale-100 hover:scale-125 transition-all" />
      </a>
      <h2 className="text-xl tracking-wide my-2">{name}</h2>
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-slate-400 px-3 py-1 uppercase rounded-md text-cyan-800"
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        className="bg-teal-500 w-full rounded-sm text-right 
      mt-2 p-1 text-slate-50 flex items-center space-x-2 justify-end"
      >
        <FaGithub />
        <a
          href={github}
          target="_blank"
          className="scale-100 hover:scale-105 transition-all"
        >
          Source code
        </a>
      </div>
    </div>
  );
};

export default Project;
