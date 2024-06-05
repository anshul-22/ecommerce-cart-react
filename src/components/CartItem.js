// src/components/CartItem.js

import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h2>{item.product.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.product.price}</p>
    </div>
  );
};

export default CartItem;
