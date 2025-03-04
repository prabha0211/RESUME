import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { gsap } from "gsap";
import "./index.scss";

const ServiceList = ({ services }) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    const letters = document.querySelectorAll(".service-item-title span");

    letters.forEach((letter, index) => {
      timeline.to(
        letter,
        {
          y: -10,
          duration: 0.5,
          ease: "bounce.out",
          repeat: 1,
          yoyo: true,
          stagger: {
            amount: 0.5,
            from: "start",
          },
        },
        index * 0.1
      );
    });
  }, []);

  return (
    <div className={`service-list ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="service-list-title">Our Services</h2>
      <ul className="service-list-items">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <h3 className="service-item-title">
              {service.title.split("").map((letter, index) => (
                <span key={index} className="service-item-letter">
                  {letter}
                </span>
              ))}
            </h3>
            <p className="service-item-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
