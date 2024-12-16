import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./Js/App.jsx";
import "./Css/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
