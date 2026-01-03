/**
 * CartPage.jsx
 * Page component that displays the contents of the shopping cart.
 * Utilizes the CartContext to manage cart state and actions.
 * Calculates total amount, discount, and final amount for the cart.
 * Renders a table of cart items with options to modify quantities or remove items.
 */
import { useContext } from "react"; // Importing useContext from react
import { CartContext } from "../hooks/useCart"; // Importing CartContext for cart state management

/**
 * CartPage component to render the cart table, quantity controls, and total calculations.
 * @returns {JSX.Element} The cart page component.
 */
const CartPage = () => {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    } = useContext(CartContext);
    // Calculate total amount and discount
    let totalAmount = 0;
    try {
        // Sum up the total amount from cart items
        totalAmount = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    } catch (error) {
        console.error("Error calculating total amount:", error);
    }
    // Calculate discount as 10% of total amount
    const discount = totalAmount * 0.1;
    // Calculate final amount after discount
    const finalAmount = totalAmount - discount;

    return (
        <main className="container mx-auto px-2 py-8 flex flex-col items-center">
            {/* Cart page header */}
            <header className="mb-8 w-full">
                <h1 className="text-3xl font-extrabold text-[#282c3f] text-center tracking-tight">
                    Your Cart
                </h1>
            </header>
            {/* Show message if cart is empty */}
            {cart.length === 0 ? (
                <p className="text-center text-lg text-gray-500">Your cart is empty</p>
            ) : (
                // Render cart table and totals
                <section className="w-full flex flex-col items-center">
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full bg-white rounded-xl shadow-xl border border-gray-200 text-center">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-3 font-semibold text-[#ff3f6c] text-center">
                                        Product
                                    </th>
                                    <th className="p-3 font-semibold text-[#ff3f6c] text-center">
                                        Price
                                    </th>
                                    <th className="p-3 font-semibold text-[#ff3f6c] text-center">
                                        Quantity
                                    </th>
                                    <th className="p-3 font-semibold text-[#ff3f6c] text-center">
                                        Total
                                    </th>
                                    <th className="p-3 font-semibold text-[#ff3f6c] text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Render each cart item as a table row */}
                                {cart.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b border-gray-300  hover:bg-gray-50"
                                    >
                                        <td className="p-3 flex flex-col sm:flex-row items-center gap-3  ">
                                            {/* Product image and title */}
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-12 w-12 object-contain bg-gray-50 rounded"
                                            />
                                            <span className="font-medium sm:text-justify">
                                                {item.title}
                                            </span>
                                        </td>
                                        <td className="p-3 font-semibold text-[#ff3f6c] text-center">
                                            ${item.price}
                                        </td>
                                        <td className="p-3 text-center align-middle">
                                            <div className="flex items-center justify-center gap-2">
                                                {/* Decrease quantity buttons */}
                                                <button
                                                    className="px-3 py-1 bg-gray-200 text-[#ff3f6c] rounded-full shadow hover:bg-gray-300 hover:scale-110 transition-all duration-200"
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    -
                                                </button>
                                                {/* Show current quantity */}
                                                <span className="font-semibold font-lg mx-2 text-blue-600">
                                                    {item.quantity}
                                                </span>
                                                {/* Increase quantity button */}
                                                <button
                                                    className="px-3 py-1 bg-gray-200 text-[#ff3f6c] rounded-full shadow hover:bg-gray-300 hover:scale-110 transition-all duration-200"
                                                    onClick={() => increaseQuantity(item.id)}
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        {/* Total price for the item */}
                                        <td className="p-3 font-semibold text-emerald-600">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                        {/* Remove item from cart button */}
                                        <td className="p-3">
                                            <button
                                                className="bg-gray-200 text-[#ff3f6c] px-4 py-1 rounded-full font-bold shadow hover:bg-gray-300 transition-all duration-200"
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label="Remove from cart"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Cart summary section */}
                    <div className="mt-8 flex flex-col items-end gap-2 w-full">
                        {/* Subtotal calculation */}
                        <p className="text-lg">
                            Subtotal:{" "}
                            <span className="font-semibold text-gray-800">
                                ${totalAmount.toFixed(2)}
                            </span>
                        </p>
                        {/* Discount calculation */}
                        <p className="text-lg">
                            Discount (10%):{" "}
                            <span className="font-semibold text-green-600">
                                ${discount.toFixed(2)}
                            </span>
                        </p>
                        {/* Final amount calculation */}
                        <p className="text-xl font-bold">
                            Total:{" "}
                            <span className="text-[#ff3f6c]">${finalAmount.toFixed(2)}</span>
                        </p>
                    </div>
                </section>
            )}
        </main>
    );
};

export default CartPage; // Exporting the CartPage component as the default export
