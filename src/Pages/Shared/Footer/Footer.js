import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className="text-center text-lg-start text-white mx-auto">
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3 pt-5">

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-5">

                            <h6 className="text-uppercase fw-bold">Service</h6>
                            <hr />
                            <p>
                                <Link to="/services" className="text-white">General Math</Link>
                            </p>
                            <p>
                                <Link to="/services" className="text-white">Algebra</Link>
                            </p>
                            <p>
                                <Link to="/services" className="text-white">Geometry</Link>
                            </p>
                            <p>
                                <Link to="/services" className="text-white">Online Courses</Link>
                            </p>
                            <p>
                                <Link to="/services" className="text-white">Consulting</Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Menu</h6>
                            <hr />
                            <p>
                                <Link to="/services" className="text-white">Services</Link>
                            </p>
                            <p>
                                <Link to="/books" className="text-white">Books</Link>
                            </p>
                            <p>
                                <Link to="/blogs" className="text-white">Blogs</Link>
                            </p>
                            <p>
                                <Link to="/about" className="text-white">About</Link>
                            </p>
                            <p>
                                <Link to="/login" className="text-white">Login</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr />

                            <p> Manchester, North West, England, UK</p>
                            <p>+ 44 4234 567 89</p>
                            <p> + 44 7434 577 60</p>

                        </div>

                    </div>
                </div>
            </section>

            <div className="text-center p-2 copyright"> &copy; {year} Copyright: All Rights Reserved

            </div>
        </footer>

    );
};

export default Footer;