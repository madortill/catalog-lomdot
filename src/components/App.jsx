import { useState } from "react";
import "../Css/App.css";
import About from "./About.jsx";
import DropDown from "./DropDown.jsx";
import SearchButton from "./SearchButton.jsx";
import AllCards from "./AllCards.jsx";
import InfoPage from "./InfoPage.jsx"


export default function App() {
  const [searchValue, setSearchValue] = useState(""); 
  const [selectedCard, setSelectedCard] = useState(null);

  // פונקציה לחיפוש קלף ולשלוח את המידע על הקלף שנלחץ
  const handleCardClick = (card) => {
    setSelectedCard(card); // שומר את המידע של הקלף הנבחר
  };

// פונקציה לחזרה למסך כל הקלפים
  const handleBackToAllCards = () => {
    setSelectedCard(null); // מחזיר למסך הראשי של כל הקלפים
  };

  return (
    <div>
      <header className="app-header">
        <h1>קטלוג לומדות</h1>
        <About />
      </header>
      <div className="search-section">
          <SearchButton searchValue={searchValue} setSearchValue={setSearchValue} />
          <DropDown />
        </div>
      {selectedCard ? (
        // אם נבחר קלף, מציגים את עמוד המידע
        <InfoPage
          image={selectedCard.image}
          name={selectedCard.name}
          year={selectedCard.year}
          link={selectedCard.link}
          content={selectedCard.content}
          onBack={handleBackToAllCards} // כפתור חזרה למסך כל הקלפים
        />
      ) : (
        // אם לא נבחר קלף, מציגים את אזור החיפוש ואת רשימת הקלפים
          <AllCards searchValue={searchValue} onCardClick={handleCardClick} />
      )}
    </div>
  );
}