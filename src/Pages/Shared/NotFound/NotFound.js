import React from 'react';
import notFound from './../../../images/notFound.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-danger text-center fw-bold'>Oopss!!Page not Found...</h1>
            <img className='error-img' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;