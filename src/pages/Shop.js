import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = ({ cartCount, addToCart, removeFromCart }) => { // Adicione removeFromCart aqui
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // Fetch cart from local storage or server if needed
    // For now, we can use the `cart` from props
  }, [cartCount]);

  return (
    <div>
      <h1>Shop</h1>
      <div className="shop">
        {products.map(product => {
          const isInCart = cart.some(item => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart} // Passe removeFromCart aqui
              inCart={isInCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
