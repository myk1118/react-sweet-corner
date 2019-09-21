import React from 'react';
import './services.scss';
import dotsBox1 from '../../assets/images/dots-box1.png';
import box2 from '../../assets/images/box2.png';

const Services = () => {
    return (
        <div>
            <div className="servicesTop">
                <img src={dotsBox1} alt="dotsBox1" className="dotsBox1" />
                <div className="servicesTextContainer">
                    <h1 className="servicesTitle">We cherish the sweet moments...</h1>
                    <div className="servicesBody">
                        For couples looking beyond the traditional wedding Sweet Corner offers the
                        modern day alternative to a traditional wedding cake. Stack your wedding cupcakes
                        on towering tiers or treat each guest to a sweet token of your wedded bliss.
                    <br />
                        Wedding cupcake prices average about $3.00 per person, depending on how
                        elaborate your cake design is.
                    <br />
                        A non-refundable fee of $50.00 is required to reserve your date and will be
                        deducted from your final bill.
                    <br />
                        Higher prices may apply to custom cupcake flavors and highly detailed cupcakes.
                    </div>
                    <h1 className="servicesTitle">Party Cupcakes</h1>
                    <div className="servicesBody">
                        Dress it up with the Sprinkles Cupcake or keep it simple and let the cupcakes shine!
                    <br />
                        Simple birthday cupcakes, such as Barney, Batman, Three Princesses, Thomas the
                        Train, etc, range from $65 and up.
                    <br />
                        3D Custom Cakes, Helmets, Wine Bottles, Naughty Cakes, Logos are a minimum
                        $135.00+, will be based on time required and intricacy of the design.
                    </div>
                    <h1 className="servicesTitle">Gift Cupcakes</h1>
                    <div className="servicesBody">
                        Sending our cupcakes by post is the perfect way to say pretty much anything you
                        can think of - from Happy Birthday and Welcome to your new home, to Thanks for a
                        lovely weekend and Congratulations on your new baby.
                    <br />
                        A yummy alternative to flowers, we can deliver cupcakes to any doorstep you
                        choose in California.
                    <br />
                        Not only do we offer a gift that is a little different - but the way we do it is pretty
                        special too.
                    <br />
                        Our cupcakes are sold in boxes of 6 and 12 and delivered directly to the address
                        you choose.
                    </div>
                </div>
            </div>
            <img src={box2} alt="box2" className="box2" />
        </div>
    )
}

export default Services;