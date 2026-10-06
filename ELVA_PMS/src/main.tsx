import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/product.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")!).render(<App />);
