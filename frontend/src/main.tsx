import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/authContext.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </StrictMode>
);
