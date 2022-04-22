import React from 'react';
import myPic from './../../images/my_pic.png';
import './About.css';

const About = () => {
    return (
        <div>
            <h2 className='text-center text-primary fw-bold mt-4'>About me</h2>
            <div className='d-flex flex-row mx-5 my-4 '>

                <div>
                    <img className='myPic' src={myPic} alt="" />
                </div>
                <div className='my-info' >
                    <h5 className='text-primary fw-bold'> I'am Tamanna Akter</h5>
                    <p className='fst-italic fs-5 text-alignment-justify'>I am a front-end web developer.My next plan is to become a full stack web developer and want to gain experties on rectjs,nodejs.To become a Web Developer, i should have an understanding of HTML, CSS, and JavaScript. Its also recommended to learn about CSS and CSS frameworks.I have to work hard to make this goal successful. </p>
                </div>
            </div>
        </div>
    );
};

export default About;