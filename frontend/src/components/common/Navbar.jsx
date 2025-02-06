// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import logo from "../../../public/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyles = {
    navbar: {
      backgroundColor: "white",
      padding: "1rem 2rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    navContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#4299e1",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
      alignItems: "center",
    },
    link: {
      color: "#4a5568",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "color 0.2s",
      cursor: "pointer",
    },
    button: {
      backgroundColor: "#4299e1",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      border: "none",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "background-color 0.2s",
    },
    menuButton: {
      display: "none",
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      padding: "0.5rem",
      color: "#4a5568",
    },
  };

  const mobileStyles = {
    menuButton: {
      ...navStyles.menuButton,
      display: "block",
    },
    navLinks: {
      display: "none",
    },
    navLinksMobile: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: "white",
      padding: "1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      gap: "1rem",
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentStyles = isMobile ? mobileStyles : navStyles;

  return (
    <nav style={navStyles.navbar}>
      <div style={navStyles.navContent}>
        <a href="/" style={navStyles.logo}>
          <img src={logo} alt="Logo" style={{ width: "50px" }} />
          HomeHarbor
        </a>
        <button
          style={currentStyles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div
          style={
            isMobile && isMenuOpen
              ? currentStyles.navLinksMobile
              : currentStyles.navLinks
          }
        >
          <a href="/" style={navStyles.link}>
            Home
          </a>
          <a href="/properties" style={navStyles.link}>
            Properties
          </a>
          <a href="/agents" style={navStyles.link}>
            Agents
          </a>
          <a href="/about" style={navStyles.link}>
            About
          </a>
          <a href="/contact" style={navStyles.link}>
            Contact
          </a>
          <button
            style={navStyles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3182ce")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4299e1")}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
