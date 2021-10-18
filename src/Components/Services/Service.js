import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
   
    const {id, name, desc, img} = props.service;
    return (
        <div className="col">
    <div className="card text-left">
      <img src={img} className="card-img-top" alt="item" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <Link to={`/service/${id}`}><button className="border px-6 py-2 bg-green-500 rounded text-white">See Details</button></Link>
      </div>
    </div>
  </div>





        // <div classNameName="text-left col-md-4 card p-2 gap-2">
        //     <img src={img} alt="" />
        //     <h2>{name}</h2>
        //     <p>{desc}</p>
        // </div>
    );
};

export default Service;