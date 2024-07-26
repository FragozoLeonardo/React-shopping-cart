import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, removeFromCart, inCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      {inCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
