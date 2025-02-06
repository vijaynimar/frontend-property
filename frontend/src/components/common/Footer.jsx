// src/components/Footer.jsx
import React, { useState, useEffect } from "react";

const Footer = () => {
  const footerStyles = {
    footer: {
      backgroundColor: "#2d3748",
      color: "white",
      padding: "4rem 2rem",
      marginTop: "4rem",
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    link: {
      color: "#a0aec0",
      textDecoration: "none",
      fontSize: "0.875rem",
      transition: "color 0.2s",
    },
    socialLinks: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
    },
    bottom: {
      borderTop: "1px solid #4a5568",
      marginTop: "2rem",
      paddingTop: "2rem",
      textAlign: "center",
      color: "#a0aec0",
      fontSize: "0.875rem",
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

  const currentStyles = {
    ...footerStyles,
    content: {
      ...footerStyles.content,
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(250px, 1fr))",
    },
    socialLinks: {
      ...footerStyles.socialLinks,
      justifyContent: isMobile ? "center" : "flex-start",
    },
  };

  return (
    <footer style={currentStyles.footer}>
      <div style={currentStyles.content}>
        <div style={currentStyles.section}>
          <h3 style={currentStyles.title}>HomeHarbor</h3>
          <p style={{ color: "#a0aec0", fontSize: "0.875rem" }}>
            Find your perfect home with our extensive listing of properties
            across the country.
          </p>
          <div style={currentStyles.socialLinks}>
            <a href="#" style={currentStyles.link}>
              Facebook
            </a>
            <a href="#" style={currentStyles.link}>
              Twitter
            </a>
            <a href="#" style={currentStyles.link}>
              Instagram
            </a>
          </div>
        </div>

        <div style={currentStyles.section}>
          <h3 style={currentStyles.title}>Quick Links</h3>
          <a href="/properties" style={currentStyles.link}>
            Properties
          </a>
          <a href="/agents" style={currentStyles.link}>
            Agents
          </a>
          <a href="/about" style={currentStyles.link}>
            About Us
          </a>
          <a href="/contact" style={currentStyles.link}>
            Contact
          </a>
        </div>

        <div style={currentStyles.section}>
          <h3 style={currentStyles.title}>Resources</h3>
          <a href="#" style={currentStyles.link}>
            Blog
          </a>
          <a href="#" style={currentStyles.link}>
            Market Updates
          </a>
          <a href="#" style={currentStyles.link}>
            Buying Guide
          </a>
          <a href="#" style={currentStyles.link}>
            Selling Guide
          </a>
        </div>

        <div style={currentStyles.section}>
          <h3 style={currentStyles.title}>Contact Us</h3>
          <p style={currentStyles.link}>1234 Real Estate Ave</p>
          <p style={currentStyles.link}>New York, NY 10001</p>
          <p style={currentStyles.link}>Phone: (555) 123-4567</p>
          <p style={currentStyles.link}>Email: info@homeharbor.com</p>
        </div>
      </div>

      <div style={currentStyles.bottom}>
        <p>© 2024 HomeHarbor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
