import React from 'react';
import './nav.scss'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="main-nav">
            <div className="navItem">
                <Link to="/">HOME</Link>
            </div>
            <div className="navItem">
                <Link to="/about">ABOUT US</Link>
            </div>
            <div className="navItem">
                <Link to="/services">SERVICES</Link>
            </div>
            <div className="navItem">
                <Link to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Nav