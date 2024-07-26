import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa o CSS

const Navbar = ({ cartCount }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart <span className="cart-count">({cartCount})</span></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
