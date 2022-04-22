import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SharedLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <div className="layout">
      <Navbar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
