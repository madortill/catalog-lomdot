import React from "react";
import "../Css/Card.css"; // קובץ CSS לעיצוב הקלף

const Card = ({ link, name, image }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <img src={image} alt={name} className="card-image" />
        <h3 className="card-title">{name}</h3>
      </a>
    </div>
  );
};

export default Card;
