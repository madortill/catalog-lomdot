import React, { useState, useRef, useEffect } from "react";
import anime from "animejs";
import "../Css/About.css";
import logo_madorTill from "../assets/madortill.png";
import cross from "../assets/cross.svg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const toggleVisibility = () => {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      animateClose(() => setIsVisible(false));
    }
  };

  const animateOpen = () => {
    if (aboutRef.current) {
      anime({
        targets: aboutRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 500,
        easing: "easeOutExpo",
      });
    }
  };

  const animateClose = (callback) => {
    if (aboutRef.current) {
      anime({
        targets: aboutRef.current,
        opacity: [1, 0],
        scale: [1, 0.8],
        duration: 500,
        easing: "easeInExpo",
        complete: callback ? () => callback() : null,
      });
    }
  };

  useEffect(() => {
    if (isVisible) {
      animateOpen();
    }
  }, [isVisible]);

  const about_array = [
    "מפתחת + UI&UX:", "רב\"ט אדוה אבא", "רמ\"ד טיל:", "רס\"מ שלומי אוגרן", "גרסה:", "דצמבר 2024"
  ];

  return (
    <div className="About-container">
      <button className="info-button" onClick={toggleVisibility}>
        i
      </button>
      {isVisible && (
        <>
          {/* ה-overlay לא סוגר את המסך אוטומטית */}
          <div className="overlay" onClick={toggleVisibility}></div>
          <div className="about-content" ref={aboutRef}>
            <button className="close-button" onClick={toggleVisibility}>
              <img src={cross} alt="Search" className="cross-icon" />
            </button>
            <h1 className="title-about">אודות</h1>
            {about_array.map((item, index) => (
              <div key={index}>
                {index % 2 === 0 ? (
                  <b className="bold-text">{item}</b>
                ) : (
                  <p className="p-text">{item}</p>
                )}
              </div>
            ))}
            <img src={logo_madorTill} className="logo-madorTill" alt="Logo" />
          </div>
        </>
      )}
    </div>
  );
};

export default About;
