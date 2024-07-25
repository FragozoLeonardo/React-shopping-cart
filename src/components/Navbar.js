// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;