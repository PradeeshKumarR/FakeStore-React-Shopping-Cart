/**
 * ProductCard.jsx
 * Component to display individual product details.
 * Utilizes CartContext to manage adding and removing products from the cart.
 * Displays product image, title, description, price, and action buttons.
 * @returns {JSX.Element} The product card component.
 */
import React, { useContext } from "react"; // Importing React and useContext
import { CartContext } from "../hooks/useCart"; // Importing CartContext for cart state management

/**
 * ProductCard component to display individual product details.
 * @param {Object} param0 - Props object containing the product.
 * @param {{product: Object}} param0 - The product object to display.
 * @returns {JSX.Element} The product card component.
 */
const ProductCard = ({ product }) => {
    // Access cart context to manage cart actions
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    // Check if the product is already in the cart
    const isInCart = cart.find((item) => item.id === product.id);

    return (
        <article className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            {/* Product image */}
            <div className="flex justify-center items-center h-48 mb-4 bg-gray-50 rounded">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-36 object-contain"
                />
            </div>
            {/* Product title */}
            <h2 className="text-base font-semibold mb-1 line-clamp-2 min-h-[3rem]">
                {product.title}
            </h2>
            {/* Product description */}
            <p className="text-gray-500 text-sm mb-2 line-clamp-2 text-justify">
                {product.description.substring(0, 100)}...
            </p>
            <div className="mt-auto flex flex-col gap-2">
                {/* Product price */}
                <p className="text-lg font-bold text-[#ff3f6c] mb-1">
                    ${product.price}
                </p>
                {/* Show remove button if product is in cart and add button if not */}
                {isInCart ? (
                    <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-full bg-gray-200 text-[#ff3f6c] font-bold py-2 rounded hover:bg-gray-300 transition"
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-[#ff3f6c] text-white font-bold py-2 rounded hover:bg-[#e11b4c] transition"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </article>
    );
};

export default ProductCard; // Exporting the ProductCard component as the default export
