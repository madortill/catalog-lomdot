import React, { useState } from "react";
import "../Css/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const about_array = [
    "מפתחת:", "רב\"ט אדוה אבא", "רמ\"ד טיל:", "רס\"מ שלומי אוגרן", "גרסה:", "דצמבר 2024"
  ];

  return (
    <div className="About-container">
      <button className="info-button" onClick={toggleVisibility}>
        i
      </button>
      {isVisible && (
        <>
          <div className="overlay" onClick={toggleVisibility}></div>
          <div className="about-content">
            <h1 className = "title-about">אודות</h1>
            {about_array.map((item, index) => (
              <div key={index}>
                {index % 2 === 0 ? (
                  <b className = "bold-text">{item}</b>
                ) : (
                  <p className = "p-text">{item}</p>
                )}
              </div>
            ))}
            <button className="close-button" onClick={toggleVisibility}>
              סגור
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
