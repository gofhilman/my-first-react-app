import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./components/Greeting.jsx";
import Food from "./components/Food.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Food />
  </StrictMode>
);
