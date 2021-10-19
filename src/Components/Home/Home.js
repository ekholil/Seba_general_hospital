import React from 'react';
import Blogs from '../Blogs/Blogs';
import Review from '../Reveiw/Review';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Services />
            <Review />
            <Blogs />
        </div>
    );
};

export default Home;