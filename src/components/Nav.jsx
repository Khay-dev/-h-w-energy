import { useState, useEffect } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      style={{
        backgroundColor: scrollPosition > 50 ? "#fff" : "transparent",
        transition: "background-color 300ms ease-in-out",
      }}
    >
      <div className="nav-holder-1">
        <Link to="/">
          <div className="logo"></div>
        </Link>
      </div>
      <div className={`nav-holder-2 ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-close" onClick={toggleNavbar}>
          <HiX />
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/service">
            <li>Services</li>
          </Link>
          <Link to="/assets">
            <li>Assets&Equipments</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
      <div
        className={`nav-holder-3 ${isOpen ? "is-active" : ""}`}
        onClick={toggleNavbar}
      >
        {isOpen ? <HiX /> : <HiMenuAlt1 />}
      </div>
    </nav>
  );
};

export default Nav;
