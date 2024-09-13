import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { ScrollToTopButton } from "./ScrollToTopButton.jsx";

// Importing the Bootstrap CSS (customized)
import "./scss/custom.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
    <ScrollToTopButton />
  </StrictMode>
);
