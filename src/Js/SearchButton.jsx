import React, { useState } from "react";
import "../Css/SearchButton.css";
import searchIcon from "../searchBtn.png"; 

const About = () => {
  const [searchValue, setSearchValue] = useState(""); // useState חייב להיות בתוך רכיב פונקציונלי

  const handleInputChange = (event) => {
    setSearchValue(event.target.value); // מעדכן את ערך החיפוש
  };

  const handleSearch = () => {
    console.log("ערך החיפוש:", searchValue); // מדפיס את הערך לקונסול
  };

  return (
    <div className="filter-section">
      <div className="search-container">
        <input
          type="text"
          placeholder="שם הלומדה..."
          className="search-input"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default About;
