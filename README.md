# 🛍️ ShoppyGlobe

ShoppyGlobe is a modern e-commerce web application built with **React**, **Redux**, **React Router**, and **Tailwind CSS**, allowing users to browse products, view product details, manage a shopping cart, and proceed to checkout. It fetches product data dynamically from an external API (`https://fakestoreapi.com/products`).

---
## Github Link--

https://fakestoreapi.com/products

---

## Folder Structure

```bash
shoppyglobe/
├── public/
├── src/
│   ├── assets/                # Images, icons, logos
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── CartItem.jsx
│   │   ├── Cart.jsx
│   │   ├── Hero.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   └── useProducts.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   ├── productSlice.js
│   │   └── searchSlice.js
│   ├── pages/                 # Page components for routing
│   │   ├── Home.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   └── CheckoutPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── package.json
└── README.md
```


---

## 🚀 Features

- 📦 **Product Listing** with search functionality
- 🛒 **Add to Cart / Remove from Cart**
- 🔍 **Product Detail Page** with dynamic routing
- 💳 **Checkout Page** (UI only placeholder)
- 📁 Modular and reusable component architecture
- 🌐 **React Router** for page navigation
- 🧠 **Redux Toolkit** for global state management
- ⚡ **Lazy Loading** using `React.lazy` & `Suspense`
- 🎨 **Tailwind CSS** for responsive dark mode UI
- ❌ 404 Not Found page for unknown routes
- 🧪 Error handling for API calls

---
## 🧩 Components Overview

ShoppyGlobe is built with a modular, reusable component architecture. Below is an overview of the core components used in the project:

### 📦 Product-Related Components

- **`ProductList.jsx`**
  - Fetches and displays a list of products from the API.
  - Implements a search filter using Redux state.
  - Uses a responsive grid layout.

- **`ProductItem.jsx`**
  - Displays individual product details including image, title, and price.
  - Includes an “Add to Cart” button.
  - Links to the Product Detail page using React Router.

- **`ProductDetail.jsx`**
  - Fetches and shows detailed information of a selected product using route parameters.
  - Implements API error handling and dynamic UI rendering.

### 🛒 Cart Components

- **`Cart.jsx`**
  - Displays all items added to the shopping cart.
  - Calculates subtotal and provides a button to proceed to checkout.

- **`CartItem.jsx`**
  - Represents a single item in the cart.
  - Allows item removal using Redux dispatch.
  - Optionally includes quantity adjustment.

### 🧭 Navigation & Layout

- **`Header.jsx`**
  - Persistent navigation bar visible across all pages.
  - Contains logo, search input (Redux-controlled), and cart icon with item count.

- **`NotFound.jsx`**
  - 404 error component displayed when users navigate to an unknown route.

### 🧱 Page-Level Components (in `src/pages/`)

- **`Home.jsx`**
  - Acts as the landing page.
  - Composes the `ProductList` component.

- **`ProductDetailPage.jsx`**
  - Route wrapper for `ProductDetail` component using dynamic URL parameters.

- **`CartPage.jsx`**
  - Displays the `Cart` component.

- **`CheckoutPage.jsx`**
  - Placeholder for checkout process UI (designed in dark mode).

---

### 🧰 Supporting Structure

- **Redux Slices**
  - `cartSlice.js`: Manages cart state (add/remove items).
  - `productSlice.js`: Optional (if you decide to manage product state globally).
  - `searchSlice.js`: Manages the search query string.

- **Custom Hooks**
  - `useProducts.js`: Custom React hook to fetch the product list using `useEffect` and `axios`.

- **Routing**
  - Implemented with `react-router-dom`, including routes for:
    - `/` – Home
    - `/products/:id` – Product Detail
    - `/cart` – Cart
    - `/checkout` – Checkout
    - `*` – 404 Not Found

---

This structure ensures separation of concerns, reusability, and a scalable foundation for adding more features like user authentication, payment integration, or order history in the future.

---



## 🛠️ Technologies Used

- **React** with functional components and hooks
- **Redux Toolkit** for state management
- **React Router DOM** for routing
- **Axios** for API calls
- **Tailwind CSS** for styling
- **Vite** for fast development and build
- **DummyJSON API**: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

---

## 📦 Installation & Setup


#### Clone the repository

```bash
git clone https://github.com/Sattwik13/ShoppyGlobe.git
cd ShoppyGlobe
```
### Install dependencies
```bash
npm install
```
### Run the development server
```bash
npm run dev
```
## Production Build

```bash
npm run build
```

## Author

Sattwik Manna