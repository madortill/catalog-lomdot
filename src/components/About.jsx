import React, { useState } from "react";
import "../Css/About.css";
import logo_madorTill from "../assets/madortill.png"; 
import cross from "../assets/cross.svg"; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
          <div className="overlay"></div> 
          <div className="about-content">
            <button className="close-button"  onClick={toggleVisibility}>
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
          <img src = {logo_madorTill} className = "logo-madorTill"></img>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
