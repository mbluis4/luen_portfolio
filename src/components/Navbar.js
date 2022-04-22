import { Link } from "react-router-dom";
import links from "../data/links";
import { RiMenuFill } from "react-icons/ri";

const Navbar = ({ openSidebar, toggleSidebar }) => {
  return (
    <nav
      className="absolute top-0 left-0 w-full h-20 
    flex items-center z-10 bg-slate-50 shadow-md"
    >
      <div
        className="w-ninety max-w-7xl my-0 mx-auto 
      md:grid md:grid-cols-2 md:items-center"
      >
        <Link to="/" className="flex justify-between">
          <h2 className="">
            <span className="text-3xl text-primary_1 tracking-wider font-bold">
              Dev
            </span>
            <span className="text-3xl text-slate-700 tracking-wider font-bold">
              Luen
            </span>
          </h2>
          <button className="md:hidden" onClick={toggleSidebar}>
            <RiMenuFill />
          </button>
        </Link>
        <div
          className="hidden md:flex md:flex-row 
        md:justify-end md:space-x-5 py-2 px-0 text-lg tracking-wide"
        >
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.id}
              className="hover:text-primary_1 hover:underline hover:underline-offset-4 transition-all"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
