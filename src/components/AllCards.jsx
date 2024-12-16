import React from "react";
import "../Css/AllCards.css";
import Card from "./Card.jsx";
import cardsData from "../data/cardsData.json";

const AllCards = ({ searchValue, onCardClick  }) => {

  const filteredCards = cardsData.filter((card) =>
    card.name.includes(searchValue)
  );

  return (
    <div className="AllCards">
      <div className="cards-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <Card
              key={index}
              link={card.link}
              name={card.name}
              image={card.image}
              onClick={() => onCardClick(card)} // שולח את המידע של הקלף שנלחץ
            />
          ))
        ) : (
          <p className="none-card">לא נמצאו קלפים תואמים.</p>
        )}
      </div>
    </div>
  );
};

export default AllCards;
