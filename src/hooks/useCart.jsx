/**
 * Cart Context and Provider using useReducer for state management.
 * Manages cart state with actions to add, remove, increase, decrease quantity, and clear the cart.
 * Provides cart state and action functions to consuming components via context.
 * @returns {JSX.Element} The CartProvider component that wraps children with CartContext.
 */
import { createContext, useReducer } from "react"; // Importing createContext and useReducer from react

export const CartContext = createContext(); // Creating CartContext for cart state management

const initialState = []; // Initial state of the cart as an empty array

/**
 * Reducer function to manage cart state.
 * Handle different action types to update the cart accordingly.
 * Handle adding, removing, increasing, decreasing quantity, and clearing the cart.
 * @param {*} state - Current cart state.
 * @param {*} action - Action object containing type and payload.
 * @returns {Array} Updated cart state.
 */
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            // Check if product already exists in cart
            const exists = state.find(item => item.id === action.product.id);
            if (exists) return state; // If it exists, do not add again
            return [...state, { ...action.product, quantity: 1 }]; // Add new product with quantity 1
        }
        case 'REMOVE': {
            // Remove product from cart by filtering it out
            return state.filter(item => item.id !== action.id);
        }
        case 'INCREASE': {
            // Increase quantity of the specified product
            return state.map(item => item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item);
        }
        case 'DECREASE': {
            // Decrease quantity of the specified product, ensuring it doesn't go below 1
            return state.map(item => item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
        }
        case 'CLEAR': {
            // Clear the entire cart
            return [];
        }
        default: {
            // Return current state for unknown action types
            return state;
        }
    }
}

/**
 * CartProvider component to wrap children with CartContext.
 * Provides cart state and action functions to consuming components.
 * @param {Object} props - Props object containing children.
 * @returns {JSX.Element} The CartProvider component.
 */
export const CartProvider = ({ children }) => {
    // Use useReducer to manage cart state with cartReducer and initialState
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    /**
     * Add a product to the cart.
     * @param {Object} product - The product to add.
     */
    const addToCart = (product) => {
        try {
            dispatch({ type: 'ADD', product });
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    }

    /**
     * Remove a product from the cart.
     * @param {number} id - The ID of the product to remove.
     */
    const removeFromCart = (id) => {
        try {
            dispatch({ type: 'REMOVE', id });
        } catch (error) {
            console.error("Failed to remove from cart:", error);
        }
    }

    /**
     * Increase the quantity of a product in the cart.
     * @param {number} id - The ID of the product to increase quantity.
     */
    const increaseQuantity = (id) => {
        try {
            dispatch({ type: 'INCREASE', id });
        } catch (error) {
            console.error("Failed to increase quantity:", error);
        }
    }

    /**
     * Decrease the quantity of a product in the cart.
     * @param {number} id - The ID of the product to decrease quantity.
     */
    const decreaseQuantity = (id) => {
        try {
            dispatch({ type: 'DECREASE', id });
        } catch (error) {
            console.error("Failed to decrease quantity:", error);
        }
    }

    /**
     * Clear all items from the cart.
     */
    const clearCart = () => {
        try {
            dispatch({ type: 'CLEAR' });
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    }

    // Provide cart state and action functions to children via CartContext
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}