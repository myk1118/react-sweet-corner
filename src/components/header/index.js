import React from 'react';
import './header.scss';
import Nav from '../nav';
import header from '../../assets/images/header.png';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <img src={header} alt="header" className="header" />
            <Nav />
            <img src={logo} alt="logo" className="logo" />
            <h1 className="center headerTitle">We deliver cupcakes for the important events in your life!</h1>
            <div className="brownBar"></div>
        </div>
    )
}

export default Header;