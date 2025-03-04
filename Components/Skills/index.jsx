import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { gsap } from "gsap";
import "./index.css";

const SkillsComponent = ({ skills }) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`skills-container ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="title-skill">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ skill }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      gsap.set(progressRef.current, { width: "0%" });

      gsap.to(progressRef.current, {
        width: `${skill.level}%`,
        duration: 3,
        ease: "power1.out",
      });
    }
  }, [skill.level]);

  return (
    <div className={`skill-item`}>
      <div className="skill-name">{skill.name}</div>
      <br />
      <div className="progress-bar">
        <div ref={progressRef} className="progress">
          {skill.level}%
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
