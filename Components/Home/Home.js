import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Home.css";

const Home = ({ name, experience }) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <div className="background-photo"></div>
      <div className="text-content">
        <h1 className={`title ${isDarkMode ? "dark" : "light"}`}>PRABHADEVI A</h1>
        <div className="description">
          {experience.map((item, index) => {
            return (
              <div key={index} className="Contents">
                <p className="Content_para">Position: Java Fullstack Developer</p>
                <p className="Content_para">Degree:B.TECH IT</p>
                <p className="Content_para">College: Nandha College Of Technology</p>
                <p className="Content_para">Year:2020-2024</p>
                {/* <p className="Content_para">{item.details}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
