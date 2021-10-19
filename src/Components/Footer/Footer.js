import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-gray-800 py-3">
            <div className="container md:w-10/12 mx-auto">
                <div className="row flex items-center">
                <div className="col-md-6">
                    <h2 className="text-green-400">Seba General Hospital</h2>
                    <p className="text-white">Location: Jashimuddin Road, Uttara, Dhaka.</p>
                    <div className="cursor-pointer flex text-4xl text-green-500 sm:mb-3">
                    <AiFillFacebook /> <AiFillInstagram /> <AiFillLinkedin /> <AiFillYoutube />
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="text-white mb-3 sm:mt-3">For Patients</h3>
                    <a className="no-underline my-2 block text-white" href="#">Book An Appointment</a>
                    <a className="no-underline my-2 block text-white" href="#">Video Consultation</a>
                    <a className="no-underline my-2 block text-white" href="#">Treatments</a>
                    <a className="no-underline my-2 block text-white" href="#">Emergency 24/7</a>
                    <a className="no-underline my-2 block text-white" href="#">Find A Doctor</a>
                </div>
                <div className="col-md-3">
                    <a className="no-underline my-2 block text-white" href="#">About Us</a>
                    <a className="no-underline my-2 block text-white" href="#">Terms and Condition</a>
                    <a className="no-underline my-2 block text-white" href="#">Privacy Policy</a>
                    <a className="no-underline my-2 block text-white" href="#">Contact Us</a>
                    
                </div>
                </div>
            </div>
            <p className="text-center text-white mt-4">Seba General Hospital 2021 ©. All Rights Reserved</p>
        </div>
    );
};

export default Footer;