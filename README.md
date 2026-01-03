# Fake Store React Shopping Cart

This is a React application that fetches product data from the Fake Store API and implements an "Add to Cart" feature. The application is designed to be responsive and user-friendly, providing a seamless shopping experience.

## Features
- Fetches product data from the Fake Store API
- Displays products in a grid layout with individual product cards
- Allows users to add products to their cart
- View and manage cart items
- Responsive design for optimal viewing on various devices

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd FakeStore-React-Shopping-Cart-main
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser and navigate to the localhost URL shown in the terminal to view the application.**

## Directory Structure

```
FakeStore-React-Shopping-Cart-main/
  src/
    components/
      ProductCard.jsx
    hooks/
      useCart.jsx
    pages/
      CartPage.jsx
      ProductPage.jsx
    App.jsx
    main.jsx
    index.css
  .gitignore
  README.md
  eslint.config.js
  index.html
  package.json
  vite.config.js
```

- `src/components/` — React components for UI
- `src/hooks/` — Custom React hooks
- `src/pages/` — Page components for routing
- `src/styles/` — CSS files for styling (if any)
- `App.jsx` — Main application logic
- `main.jsx` — Entry point for React
- `index.css` — Global styles

## Usage
- Browse through the available products.
- Click on the "Add to Cart" button to add items to your cart.
- Click on the cart icon or navigate to the cart page to view your cart items.
- Remove items from the cart if needed.

## Technologies Used
- React
- React Hooks
- CSS for styling
- Fake Store API for product data
- Vite (for fast development and build)

## License
This project is for educational and demonstration purposes only.
