// src/components/Cart.js
import React from 'react';
import ProductCard from './ProductCard';

const Cart = ({ cart }) => {
  if (!cart || !Array.isArray(cart)) {
    console.error('Expected `cart` to be an array, but received:', cart);
    return <div>Error: Cart data is not valid.</div>;
  }

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      {cart.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
