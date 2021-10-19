import React from 'react';
import img1 from './blog1.jpg'
import img2 from './blog2.jpg'
import img3 from './blog3.jpg'
import img4 from './blog4.jpg'
const Blogs = () => {
    return (
        <div className="container md:w-10/12 mx-auto mb-5">
            <h1 className="text-center text-green-400">Latest Blogs</h1>
            <div className="grid md:grid-cols-2 mt-3 gap-4 sm:grid-cols-1">
                <div className="md:flex-row sm:flex-col">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div className="md:ml-2 sm:mt-2">
                        <h3>Doctors Often Miss Signs of Type 1 Diabetes in Kids</h3>
                        <p>In type 1 diabetes, the pancreas fails to make enough insulin, the hormone that helps regulate blood</p>
                        <p className="text-gray-500">By Dr. Rana, 12 march 2021</p>
                    </div>
                </div>
                <div className="md:flex-row sm:flex-col">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className="md:ml-2 sm:mt-2">
                        <h3>Tips to Reduce OB/GYN Anxiety</h3>
                        <p>Many females feel nervous about going to the gynecologist. Here's how to lessen those fears</p>
                        <p className="text-gray-500">By Dr. Hasan, 19 march 2021</p>
                    </div>
                </div>
                <div className="md:flex-row sm:flex-col">
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div className="md:ml-2 sm:mt-2">
                        <h3>10 Covid-19 deaths in 24 hours</h3>
                        <p>Ten people have died from Covid-19 in 24 hours (till 8 am today), according to a press release issued</p>
                        <p className="text-gray-500">By MD kader, 10 april 2021</p>
                    </div>
                </div>
                <div className="md:flex-row sm:flex-col">
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <div className="md:ml-2 sm:mt-2">
                        <h3>Can Mask Prevent coronavirus? </h3>
                        <p>People, including children older than 2, should wear a mask in indoor public places if they are: Not fully vaccinated; </p>
                        <p className="text-gray-500">By Dr. Babul, 9 sep 2021</p>
                    </div>
                </div>
                
                
            </div>
            <button className="mx-auto block mt-4 border py-2 px-4 bg-green-400 rounded text-white">See All Blogs</button>
        </div>
    );
};

export default Blogs;