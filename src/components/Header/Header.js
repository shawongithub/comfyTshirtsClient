import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">

            <div className="header__logo">
                <p>ComfyTshirts</p>
            </div>
            <div className="header__menu">
                <div className="item-"> <Link to="/shop">Home</Link></div>
                <div className="item-"> <Link to="/review">Cart</Link></div>
                <div className="item-"><Link to="/admin">Admin</Link></div>
                <div className="item-"><Link to="/login">Login</Link></div>
            </div>
        </div>
    );
};

export default Header;