import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setSelected(path);
  };

  return (
    <div className="Navbar">
      <div className="Header">Header</div>
      <div className="Navbaricon">
        <a
          rel="noreferrer"
          href="https://github.com/Ajinkya-Bhilare-au50/toasterapp/tree/master"
          target="_blank"
        >
          <VscGithub className="icon" size={34} color="white" />
        </a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/ajinkya-bhilare/">
          <FaLinkedin className="icon" size={34} color="white" />
        </a>
      </div>
      <div className="MainContent">
        <Link
          to="/component1"
          className={selected === "/component1" ? "selected" : ""}
          onClick={() => handleLinkClick("/component1")}
        >
          Component1
        </Link>
        <Link
          to="/component2"
          className={selected === "/component2" ? "selected" : ""}
          onClick={() => handleLinkClick("/component2")}
        >
          Component2
        </Link>
        <Link
          to="/component3"
          className={selected === "/component3" ? "selected" : ""}
          onClick={() => handleLinkClick("/component3")}
        >
          Component3
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
