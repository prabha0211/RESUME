import React from "react";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import "./Navbar.css";

const Navbar = ({ name, toggleTheme, isDarkMode }) => {
  const [isOpen, toggleMenu] = useToggle(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>PRABHADEVI A
          
        </Link>
      </div>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/Projects">Projects</Link>
        
        <button class="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
