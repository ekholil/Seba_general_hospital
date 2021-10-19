import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex w-screen bg-gray-500 justify-center items-center">
            <div className="w-4/6 bg-white text-center my-5 p-8 sm:w-11/12">
            <h1 className="md:text-9xl mb-6 sm:text-6xl">Oops!</h1>
            <h2>404 - Page Not Found</h2>
            <p>Sorry! The page you are looking for doesn't exist.</p>
            <Link className="bg-green-400 text-white py-3 px-5 mt-3 inline-block" to="/home"><button>Go to Home</button></Link>
        </div>
        </div>
    );
};

export default NotFound;