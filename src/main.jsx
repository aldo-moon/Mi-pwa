import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // ← Solo este import
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Registrar Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("✅ Service Worker registrado:", reg.scope))
      .catch((err) =>
        console.log("❌ Error al registrar Service Worker:", err)
      );
  });
}