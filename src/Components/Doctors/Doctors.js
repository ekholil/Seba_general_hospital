import React from 'react';
import doctor1 from './doctor1.jpg'
import doctor2 from './doctor2.jpg'
import doctor3 from './doctor3.jpg'
import doctor4 from './doctor4.jpg'
const Doctors = () => {
    return (
        <div>
            <h2 className="text-center text-green-400">Our Doctors</h2>
            <div className="md:w-10/12 grid md:grid-cols-2 sm:grid-cols-1 mx-auto gap-3 my-4">
                <div className="bg-green-100 p-4 text-center rounded">
                    <img className="mx-auto" src={doctor1} alt="" />
                    <h2>Dr. Muhammad Ullah</h2>
                    <p>MBBS</p>
                    <p>Cardiologist</p>
                    <button className="mx-auto block mt-4 border py-2 px-4 bg-green-400 rounded text-white">Book An Appointment</button>
                </div>
                <div className="bg-green-100 p-4 text-center rounded">
                    <img className="mx-auto" src={doctor2} alt="" />
                    <h2>Dr. Faisal Khan</h2>
                    <p>FCPS</p>
                    <p>Dermatologist</p>
                    <button className="mx-auto block mt-4 border py-2 px-4 bg-green-400 rounded text-white">Book An Appointment</button>
                </div>
                <div className="bg-green-100 p-4 text-center rounded">
                    <img className="mx-auto" src={doctor3} alt="" />
                    <h2>Dr. Rezaul Karim</h2>
                    <p>MBBS</p>
                    <p>Gastroenterologist</p>
                    <button className="mx-auto block mt-4 border py-2 px-4 bg-green-400 rounded text-white">Book An Appointment</button>
                </div>
                <div className="bg-green-100 p-4 text-center rounded">
                    <img className="mx-auto" src={doctor4} alt="" />
                    <h2>Dr. Imran Khan</h2>
                    <p>FCPS</p>
                    <p>Neurologist</p>
                    <button className="mx-auto block mt-4 border py-2 px-4 bg-green-400 rounded text-white">Book An Appointment</button>
                </div>
            </div>

            
        </div>
    );
};

export default Doctors;