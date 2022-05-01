import Link from "next/link";
import links from "../data/links";
import { RiMenu3Line } from "react-icons/ri";

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
        <Link href="/">
          <div className="flex justify-between">
            <h2 className="">
              <span className="text-3xl text-primary_1 tracking-wider font-bold">
                Dev
              </span>
              <span className="text-3xl text-slate-700 tracking-wider font-bold">
                Luen
              </span>
            </h2>
            <button className="md:hidden text-xl" onClick={toggleSidebar}>
              <RiMenu3Line />
            </button>
          </div>
        </Link>
        <div
          className="hidden md:flex md:flex-row 
        md:justify-end md:space-x-5 py-2 px-0 text-lg tracking-wide"
        >
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              <div className="hover:text-primary_1 hover:underline hover:cursor-pointer hover:underline-offset-4 transition-all">
                {link.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
