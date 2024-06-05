import React from 'react';
import '../styles/CheckoutPage.css';

const CheckoutPage = ({ cartItems }) => {
  const handleConfirmOrder = () => {
    // Here you can place the order and perform any necessary actions
    alert('Your order is placed! Payment mode: Cash on Delivery');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleConfirmOrder} className="confirm-order-button">
        Confirm Order
      </button>
    </div>
  );
};

export default CheckoutPage;
