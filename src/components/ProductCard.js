// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  if (!product) {
    return <div>Error: Product data is not valid.</div>;
  }

  const { id, title, image, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>${price}</p>
      {addToCart && (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
