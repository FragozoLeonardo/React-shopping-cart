// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';

const Home = ({ cartCount }) => {
    return (
        <div>
            <Navbar cartCount={cartCount} />
            <h1>Welcome to the Home Page</h1>
            <p>Add some images or information here.</p>
        </div>
    );
};

export default Home;
