import React from 'react';
import "../Css/InfoPage.css";
import backButton from "../assets/back-button2.png";
export default function InformationPage({ image, name, year, link, content, onBack, sign }) {
    return (
        <div className="infp-page">
          <div className="info-card">
            <img src={image} alt={name} className="info-image" />
            <div className="info-details">
              <h1 className="info-name">{name}</h1>
              <img className='sign-bahd' src={sign} alt={sign}/>
              <p className="info-year">שנה: {year}</p>
              <p className="info-content">{content}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="info-link">
                לעבור ללומדה
              </a>
              <button onClick={onBack} className="back-button">
                <img src={backButton} alt="return" className="back-button" />
              </button>
            </div>
          </div>
        </div>
      );
    }
