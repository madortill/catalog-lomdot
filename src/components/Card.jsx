import React from "react";
import "../Css/Card.css"; // קובץ CSS לעיצוב הקלף

const Card = ({ name, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
    </div>
  );
};

export default Card;
