import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';


const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className="container register-form">
            <h2 className='text-center text-success'>Please fillup this form for  booking your seat for service id:{serviceId}</h2>

            <form>
                <input type="text" name="name" id="" placeholder='Enter your Name' />

                <input type="email" name="email" id="" placeholder='Enter your email Address' required />
                <input type="text" name="address" id="" placeholder='Enter your address' required />
                <input type="number" name="phone-number" id="" placeholder='Enter your phone number' required />
                <div className='text-center'>
                    <Link to='/checkout'><button className='btn btn-success'>Book Now</button></Link>
                </div>
            </form>
        </div>
    );
};

export default ServiceDetails;