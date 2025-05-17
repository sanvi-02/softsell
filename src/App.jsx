
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./components.jsx/Home.jsx";
import Contact from "./components.jsx/Contact.jsx";
import About from "./components.jsx/About.jsx";
import "./App.css";

function App() {
  return (
    <Router>
        <div className="app-container"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About/>} />
      </Routes>
      <Contact />
      </div>
    </Router>
  );
}

export default App;
