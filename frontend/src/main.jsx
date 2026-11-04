import { StrictMode } from "react";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/storeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <StrictMode>
      <App />
    </StrictMode>
    </StoreContextProvider>
  </BrowserRouter>,
);
