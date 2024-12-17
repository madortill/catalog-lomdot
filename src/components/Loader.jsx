import React from "react";
import "../Css/Loader.css";

export default function Loader() {
  return (
    <div className="Loader-container">
      <img
        src={require("../assets/blackonwhite-ezgif.com-gif-maker.gif")}
        alt="Loading..."
        className="gif-load"
      />
      <p className = "getting-started">מיד מתחילים...</p>
    </div>
  );
}
