import React from 'react';
import './Book.css';

const Book = ({ book }) => {
    const { name, img, price } = book;
    return (
        <div className="col book-card mb-5">
            <div className="card">
                <img src={img} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>${price}</h6>
                </div>
                <button className='btn btn-info fw-bold w-50 mx-auto'> Add to Cart</button>

            </div>
        </div>
    );
};

export default Book;