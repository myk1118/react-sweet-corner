import React from 'react';
import './contact.scss';
import ContactForm from './contact_form';
import Schedule from '../general/schedule';
import upDots from '../../assets/images/up-dots.png';
import downDots from '../../assets/images/down-dots.png';

const Contact = () => {
    return (
        <div>
            <div className="contactTop">
                <div className="contactTextContainer col-7">
                    <h1 className="contactTitle">Contact us today!</h1>
                    <div className="contactBody">
                        Talk cupcakes to us! At Sweet Corner's we love hearing from our
                        customers. Send your questions, comments and flavor
                        suggestions to:
                        <br />
                        office@sweetcorner.com
                        <br />
                        Our expert bakers are waiting to create an unique cupcake
                        bursting with freshness and flavor just for you. Our management
                        team are also waiting for their next event to organize.
                    </div>
                </div>
                <ContactForm />
            </div>
            <img src={upDots} alt="upDots" className="upDots" />
            <Schedule />
            <img src={downDots} alt="downDots" className="downDots" />
        </div>
    )
}

export default Contact;