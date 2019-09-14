import React from 'react';
import './footer.scss';
import dotsFooter from '../../assets/images/dots-footer.png';
import phone from '../../assets/images/phone.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="blueBar">
            <div className="center copyright">Copyright &copy; {year} Sweet Corner. All rights reserved.</div>
            <img src={dotsFooter} alt="dotsFooter" className="dotsFooter" />
            <div className="phone">
                <img src={phone} alt="phoneIcon" className="phoneIcon" />
                <div className="phoneNumber">800 264 2099</div>
            </div>
        </div>
    )
}

export default Footer;