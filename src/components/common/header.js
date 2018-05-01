import './header.css';
import React from 'react';
import logo from '../../logo.svg';
import Link from "react-router-dom/es/Link";

const Header = () => {
    return (
        <header className="App-header">
            <nav className="navigation">
                <Link to="/" className="navigation-link">Home</Link>
                {' | '}
                <Link to="/about" className="navigation-link">About</Link>
            </nav>

            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
        </header>
    );
};

export default Header;