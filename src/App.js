import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems([...cartItems, { product, quantity }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">E-Commerce</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart
            {cartItems.length > 0 && <span className="cart-counter">{getTotalItemsInCart()}</span>}
          </Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </nav>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<ProductListingPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
