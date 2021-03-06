import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slider1 from './../../../images/slider/slider1.jpg';
import slider2 from './../../../images/slider/slider2.jpg';
import slider3 from './../../../images/slider/slider3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel className="carouselCustom">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-1"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h2 className="fs-1 fst-italic fw-bold text-dark text-center">Learn with expert anytime anywhere!!</h2>
                        <h4 className="text-dark fst-italic text-center ">Education needs complete solution!</h4>
                        <button className='btn btn-primary p-2 mb-5'>Explore Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="fs-1 fst-italic fw-bold text-dark text-center">Learn with expert anytime anywhere!!</h2>
                        <h4 className="text-dark fst-italic text-center">Education needs complete solution!</h4>
                        <button className='btn btn-primary p-2 mb-2'>Explore Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className="fs-1 fst-italic fw-bold text-dark text-center">Learn with expert anytime anywhere!!</h2>
                        <h4 className="text-dark fst-italic text-center">Education needs complete solution!</h4>
                        <button className='btn btn-primary p-2 mb-2'>Explore Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;