import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import Property from "../Property";
import PropertyDetails from "../PropertyDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Agents from "../Agents";
import About from "../About";
import Contact from "../Contact";
import "../../App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const Parent = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Property />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/agents" element={<Agents/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Parent;
