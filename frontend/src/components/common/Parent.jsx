// src/Parent.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Property from "../Property";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Parent = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Navbar/>
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/properties" element={<Property />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
};

export default Parent;
