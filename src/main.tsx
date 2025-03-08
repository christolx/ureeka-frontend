import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// @ts-expect-error false positive typescript error from importing .tsx
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);