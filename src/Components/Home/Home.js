import React from 'react';
import Review from '../Reveiw/Review';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Services />
            <Review />
        </div>
    );
};

export default Home;