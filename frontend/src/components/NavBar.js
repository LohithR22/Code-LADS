import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Pictures/logo1.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-img" />
                <h2>V-Help</h2>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {/* <li><Link to="/profile">Profile</Link></li> */}
            </ul>
            <div className="location">
                <span role="img" aria-label="location">📍</span> Bengaluru, India
            </div>
        </nav>
    );
};

export default Navbar;
