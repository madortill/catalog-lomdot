import React from "react";
import "../Css/AllCards.css";
import Card from "./Card.jsx";
import cardsData from "../data/cardsData.json";

const AllCards = ({ link, name, image }) => {

  return (
    <div className="AllCards">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            name={card.name}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
