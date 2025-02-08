import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">HomeHarbor</h3>
          <p className="footer-link">
            Find your perfect home with our extensive listing of properties across the country.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/?lang=en-in" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <Link to="#" className="footer-link">Blog</Link>
          <Link to="#" className="footer-link">Market Updates</Link>
          <Link to="#" className="footer-link">Buying Guide</Link>
          <Link to="#" className="footer-link">Selling Guide</Link>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-link">1234 Real Estate Ave</p>
          <p className="footer-link">New York, NY 10001</p>
          <p className="footer-link">Phone: (555) 123-4567</p>
          <p className="footer-link">Email: info@homeharbor.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 HomeHarbor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
