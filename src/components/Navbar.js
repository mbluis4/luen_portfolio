import { Link, useSearchParams } from "react-router-dom";
import Links from "../data/links";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const showLinks = () => {
    setShow((prev) => !prev);
  };
  return (
    <nav
      className="absolute top-0 left-0 w-full h-20 
    flex items-center z-50 bg-slate-50"
    >
      <div
        className="w-ninety max-w-7xl my-0 mx-auto 
      md:grid md:grid-cols-2 md:items-center"
      >
        <div className="flex justify-between">
          <h2 className="">DevLuen</h2>
          <button className="md:hidden" onClick={showLinks}>
            <RiMenuFill />
          </button>
        </div>
        <div
          className={`${show ? "flex" : "hidden"} md:flex md:flex-row 
        md:justify-end md:space-x-4 py-2 px-0`}
        >
          {Links.map((link) => (
            <Link to={link.url} key={link.id}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
