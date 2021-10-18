import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
 
    return (
        <div>
            <h2 className="text-green-500 my-4 text-center">Our Services</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
                    </div>
            </div>
        </div>
    );
};

export default Services;