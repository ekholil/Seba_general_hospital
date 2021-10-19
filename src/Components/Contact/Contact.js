import React from 'react';
import {AiFillMail} from 'react-icons/ai'
const Contact = () => {
    return (
        <div>
            <div className="  flex justify-center items-center">
            <div className="md:w-1/2 sm:w-10/12 bg-green-100 p-3 rounded my-3">
                <AiFillMail className="mb-2 block text-7xl border-green-200 border-2 text-green-500 rounded-full p-7 box-content mx-auto" />
                <h2 className="text-green-500 text-center">Contact With Us</h2>

                <div>
                <label className="text-lg" htmlFor="">Your Name : </label>
                <input className="border block p-2 mb-2  w-full" type="email" placeholder="Enter Your Name" required/>
                </div>

                <div>
                <label className="text-lg" htmlFor="">Your Email : </label>
                <input className="border block p-2 mb-2  w-full" type="email" placeholder="Enter Your Email" required/>
                </div>

                <div>
                <label className="text-lg" htmlFor="">Your Message : </label>
                <textarea className="border block mb-2 p-2 w-full" type="password" placeholder="Write Something" required/>
                </div>
               

                <input className="bg-green-400 text-white block p-2 w-full" type="button" value="Send Message" required/>


                
            
            </div>
        </div>
        </div>
    );
};

export default Contact;