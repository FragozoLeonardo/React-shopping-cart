import React from 'react';
import ProductCard from './ProductCard';

const Cart = ({ cart = [], removeFromCart }) => {
  if (!Array.isArray(cart)) {
    console.error('Expected `cart` to be an array, but received:', cart);
    return <div>Error: Cart data is not valid.</div>;
  }

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      {cart.map(product => (
        <div key={product.id} className="cart-item">
          <ProductCard
            product={product}
            removeFromCart={removeFromCart}
            inCart={true} // `inCart` is true when rendering in Cart
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
