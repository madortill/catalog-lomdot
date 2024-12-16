import { useState } from "react";
import "../Css/App.css";
import About from "./About.jsx";
import DropDown from "./DropDown.jsx";
import SearchButton from "./SearchButton.jsx";
import AllCards from "./AllCards.jsx";
// import CustomCarousel from "../Js/CustomCarousel.js";

export default function App() {
  const [searchValue, setSearchValue] = useState(""); 
  return (
    <div>
      <header className="app-header">
        <h1>קטלוג לומדות</h1>
        <About />
      </header>
      <SearchButton searchValue={searchValue} setSearchValue={setSearchValue} />
      <DropDown />
      <AllCards  searchValue={searchValue}/>
    </div>
  );
}
