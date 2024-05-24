// Navbar.js
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Header">Header</div>
      <div className="Navbaricon">
        <a
          rel="noreferrer"
          href="https://github.com/Ajinkya-Bhilare-au50/toasterapp/tree/master"
          target="_blank"
        >
          <VscGithub size={34} color="white" />
        </a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/ajinkya-bhilare/">
          <FaLinkedin size={34} color="white" />
        </a>
      </div>
      <div className="MainContent">
        <Link to="/component1" className="Component1">
          Component1
        </Link>
        <Link to="/component2" className="Component2">
          Component2
        </Link>
        <Link to="/component3" className="Component3">
          Component3
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
