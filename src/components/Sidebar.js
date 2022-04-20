import Links from "../data/links";
import socialLinks from "../data/socialLinks";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = ({ openSidebar, toggleSidebar }) => {
  return (
    <div
      className={`${
        openSidebar ? "translate-x-0" : "translate-x-full"
      } fixed top-0 left-0 z-20 bg-slate-400 h-full 
      w-full py-5 flex flex-col items-center justify-start transition-all overflow-hidden `}
    >
      <GrClose className="self-end text-2xl mr-4" onClick={toggleSidebar} />
      <div className="flex flex-col items-center my-4">
        {Links.map((link) => (
          <Link
            to={link.url}
            key={link.id}
            onClick={toggleSidebar}
            className="text-2xl mb-2"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex space-x-4 text-2xl">
        {socialLinks.map((social) => (
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer"
            key={social.id}
            onClick={toggleSidebar}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
