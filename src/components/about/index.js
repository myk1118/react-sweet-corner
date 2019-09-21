import React from 'react';
import './about.scss';
import dotsBox1 from '../../assets/images/dots-box1.png';
import box1 from '../../assets/images/box1.png';

const About = () => {
    return (
        <div>
            <div className="aboutTop">
                <img src={dotsBox1} alt="dotsBox1" className="dotsBox1" />
                <div className="aboutTextContainer">
                    <h1 className="aboutTitle">Delicious cupcakes, magical moments!</h1>
                    <div className="aboutBody">
                        Sweet Corner is growing fast. Our delicious cupcakes of all sizes,
                        shapes and colors and tastes are creating a real wow factor.
                    <br />
                        Our delicious cupcakes are different from other bakeries. Why? Well,
                        not only are our cupcakes and baked goods prepared fresh every day,
                        we also create personalized cupcakes in any size and shape just for you!
                        Simply delicious and unique.
                    <br />
                        Our expert bakers create stunning cupcakes in any flavor, color,
                        size or shape you choose.
                    <br />
                        Have you seen a stunning cupcake in a magazine,
                        a TV show or on the internet? Want something unique to reflect
                        a character or personality? Sweet Corner's cupcakes are baked with
                        love and that's why we can create perfect and unique cupcake for you.
                    <br />
                        No idea is too creative for our bakers at Sweet Corner cupcakes.
                        Contact us today to discuss you special cupcake.
                </div>
                </div>
            </div>
            <img src={box1} alt="box1" className="box1" />
        </div>
    )
}

export default About;