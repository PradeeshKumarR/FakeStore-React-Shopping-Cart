/**
 * Main entry point of the React application.
 * Sets up the application with routing and cart context.
 * Wraps the App component with BrowserRouter for routing capabilities.
 * Wraps the App component with CartProvider to provide cart state management.
 * Uses StrictMode for highlighting potential problems in the application.
 * @returns {JSX.Element} The root component of the application.
 */
import { StrictMode } from "react"; // Importing StrictMode from react
import { createRoot } from "react-dom/client"; // Importing createRoot from react-dom/client
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing
import { CartProvider } from "./hooks/useCart.jsx"; // Importing CartProvider for cart context

import "./index.css"; // Importing global styles
import App from "./App.jsx"; // Importing the main App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provide cart context to all children in the App component */}
    <CartProvider>
      {/* Wrap the App component with BrowserRouter for routing */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
