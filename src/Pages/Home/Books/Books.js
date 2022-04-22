import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div id="books" className='container'>
            <div>
                <h1 className='text-primary fst-italic text-center mt-3'>My Books</h1>
                <div className="services-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        books.map(book => <Book
                            key={book.id}
                            book={book}
                        >
                        </Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;