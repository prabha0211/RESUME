import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import jsonData from "../Data/resumeData.json";
import Header from "./Header/Header";
import Footer from "./Footer";
import Skills from "./Skills/index";
import Service from "./Service/index";
import Projects from "./Projects";
import { ThemeContext } from "../Context/ThemeContext";
import Home from "./Home/Home";

const App = () => {
  const [data, setData] = useState(jsonData);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      <Header
        name={data.name}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <Routes>
        <Route
          path="/"
          element={<Home name={data.name} experience={data.experience} />}
        />
        <Route path="/about" element={<Skills skills={data.skills} />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/Projects" element={<Projects Projects={data.Projects} />} />
        <Route path="/services" element={<Service services={data.services} />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
