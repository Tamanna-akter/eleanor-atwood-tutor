import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    // const navigate = useNavigate();

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
                <Link className="btn btn-primary fw-bold w-50 mx-auto" to={`/serviceDetails/${id}`}>Start Now</Link>

            </div>
        </div>
    );
};

export default Service;