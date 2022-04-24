import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, description, price } = props.service;
    const navigate = useNavigate();

    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}`);
    // }

    return (

        <div className="col service-card mb-5">
            <div className="card">
                <img src={img} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>${price}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <button onClick={() => navigate(`/service/${id}`)} type="button" className="btn btn-primary fw-bold w-50 mx-auto">Start Now</button>
            </div>
        </div>

    );
};


export default Service;