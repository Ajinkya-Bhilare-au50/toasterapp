// Navbar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Header">Header</div>
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
