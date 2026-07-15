import React, { useState } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <FaLeaf className="logo-icon" />
          <span>KrishiMitra AI</span>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#market">Marketplace</a>
          <a href="/contact">Contact</a>

         <Link to="/login"> <button className="login-btn">
            Login
          </button></Link>
        </nav>

        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
};

export default Navbar;