/**
 * App.jsx
 * Main application component that sets up routing and navigation.
 * Uses React Router for page navigation between Product and Cart pages.
 * Includes a navigation bar with links to the Product and Cart pages.
 * Imports necessary components and styles.
 * Returns the main application structure with routes defined.
 * @returns {JSX.Element} The main application component.
 */

import { Link, Route, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import ProductPage from "./pages/ProductPage"; // Importing the ProductPage component
import CartPage from "./pages/CartPage"; // Importing the CartPage component

function App() {
  return (
    <>
      {/* Navigation bar for the application */}
      <nav className="bg-white shadow-md sticky top-0 z-50 px-8 py-3 flex justify-between items-center">
        {/* Link to the home page */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[#ff3f6c]  sm:inline"
        >
          Fake Store
        </Link>
        {/* Navigation links for the application */}
        <div className="flex gap-8 text-base font-semibold">
          <Link to="/" className="hover:text-[#ff3f6c] transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-[#ff3f6c] transition">
            Cart
          </Link>
        </div>
      </nav>
      {/* Define routes for the product and cart pages */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App; // Exporting the App component as the default export
