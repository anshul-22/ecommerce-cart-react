import React from 'react';
import '../styles/ProductListingPage.css';

const ProductListingPage = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Casual Backpack 28L', price: 592, image: 'images/product-image-1.jpg' },
    { id: 2, name: ' T-Shirt with All Over Print', price: 329, image: 'images/product-image-2.jpg' },
    { id: 3, name: 'Sports Running Shoes for', price: 899, image: 'images/product-image-3.jpg' },
    { id: 4, name: "House Slipper for Women's ", price: 560, image: 'images/product-image-4.jpg' },
    { id: 5, name: "' Men's Watch New Wheels Rolling'", price: 1399, image: 'images/product-image-5.jpg' },
    { id: 6, name: 'Boys Regular Fit Joggers', price: 426, image: 'images/product-image-6.jpg' },
  ];

  const handleAddToCart = (product) => {
    const quantity = 1; // For simplicity, we add one item at a time
    addToCart(product, quantity);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
