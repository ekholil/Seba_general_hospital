import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    //const [singleItem, setSingleItem] = useState()
    const [services, setServices] = useState([])

    const {id} = useParams();
    useEffect(() => {
        fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    const itemid = Number(id)
    const singleItem = services.find(service => service.id === itemid)
    console.log(singleItem)
    
    return (
        <div className="container">
            <div className="flex h-screen items-center row">
                <div className="col-md-6">
                    <h2 className="my-4">{singleItem?.name}</h2>
                    <p>{singleItem?.desc}</p>
                </div>
                <div className="col-md-6">
                    <img src={singleItem?.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;