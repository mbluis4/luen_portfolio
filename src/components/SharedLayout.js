import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SharedLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <div className="flex flex-col m-0 min-h-screen">
      <Navbar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
