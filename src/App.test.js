import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders home page', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByText(/welcome to the home page/i);
    expect(linkElement).toBeInTheDocument();
});
