import React from 'react';
import './home.scss';
import dotsBox2 from '../../assets/images/dots-box2.png';
import cupcakes from '../../assets/images/cupcakes.png'

const Home = () => {
    return (
        <div>
            <div className="homeTopPart">
                <img src={dotsBox2} alt="dotsBox2" className="dotsBox2" />
                <div className="homeTextContainer">
                    <h1 className="homeTitle">We cherish the sweet moments...</h1>
                    <div className="homeParagraph">Sweet Corner's story began first from our passion for sweets,
                        which is inspired by our everyday job and also by the acknowledged weakness for sweets.</div>
                    <div className="homeParagraph">For us, the Sweet corner means: the right amount of sweet, flawless appearance,
                        the combination of shape, color and proportion and a right and balanced decor for the event.</div>
                    <div className="homeParagraph">We have been baking gourmet cupcakes, 100% from Scratch,
                        since day one. We always use the finest and most natural ingredients we can find.</div>
                    <h1 className="homeTitle">We can make happiness with so little!</h1>
                    <div className="homeParagraph">We can provide services for Weddings, Bar & Bat Mitzvahs,
                        Birthdays, Showers, Corporate Events, and any other special occasion!</div>
                    <div className="homeParagraph">Our expert bakers are waiting to create a memorable, unique cupcake
                        bursting with freshness and flavor just for you.</div>
                    <div className="homeParagraph">Their delicious taste, great variety and their sweet universe, colorful and
                        flavorful cupcakes make the best choice for a chic desert. How could you resist these delicious cupcakes?</div>
                </div>
            </div>
            <h1 className="center sweetContent">Please note: you will be overwhelmed by the sweet content</h1>
            <img src={cupcakes} alt="cupcakes" className="cupcakes" />
        </div>
    )
}

export default Home;