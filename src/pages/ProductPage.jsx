/**
 * ProductPage.jsx
 * Page component that fetches and displays a list of products from the Fake Store API.
 * Utilizes the ProductCard component to render individual product details.
 * Manages loading and error states during data fetching.
 * @returns {JSX.Element} The product listing page component.
 */
import React, { useEffect, useState } from "react"; // Importing React, useEffect, and useState

import ProductCard from "../components/ProductCard"; // Importing the ProductCard component

/**
 * ProductPage component that fetches product data and displays a grid of ProductCard components.
 */
const ProductPage = () => {
    // State variables for products, loading status, and error message
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from the Fake Store API on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true); // Set loading state to true before fetching
                setError(null); // Reset error state before fetching
                const response = await fetch("https://fakestoreapi.com/products"); // Fetching product data
                if (!response.ok) {
                    throw new Error("Failed to fetch products"); // Throw error if response is not ok
                }
                const data = await response.json(); // Parse the JSON data from the response
                setProducts(data); // Update products state with fetched data
            } catch (err) {
                setError(err.message); // Set error state if fetching fails
            } finally {
                setLoading(false); // Set loading state to false after fetching is complete
            }
        };
        fetchProducts(); // Call the fetchProducts function
    }, []);

    return (
        <main className="container mx-auto px-4 py-8">
            {/* Product listing page header */}
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold text-[#282c3f] text-center tracking-tight">Product List</h1>
            </header>
            {/* Show loading or error messages */}
            {loading && <p className="text-center">Loading products...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {/* Product listing grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </main>
    );
};

export default ProductPage; // Exporting the ProductPage component as the default export
