import { Link } from "react-router-dom";
import Links from "../data/links";

const Navbar = () => {
  return (
    <nav
      className="absolute top-0 left-0 w-full h-20 
    flex items-center z-50 bg-slate-50"
    >
      <div
        className="w-ninety max-w-7xl my-0 mx-auto 
      md:grid md:grid-cols-2 md:items-center"
      >
        <div className="">
          <h2>Logo</h2>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:justify-end md:space-x-4 py-2 px-0">
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
