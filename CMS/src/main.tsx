import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";
import "./styles/components.css";
import "./styles/product.css";
import "./styles/sections.css";
import "./styles/responsive.css";
import "./styles/mobile.css";
import "./styles/home-mobile.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
