import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product.id} className="cart-item">
              <h4>{item.product.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.product.price}</p>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Price: ₹{totalPrice}</h3>
            <Link to="/checkout">
              <button className="proceed-to-checkout">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
