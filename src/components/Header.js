import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to ="/">DEV@Deakin</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-links">
                <Link to="/post">Post</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>
    );
 }

 export default Header;
