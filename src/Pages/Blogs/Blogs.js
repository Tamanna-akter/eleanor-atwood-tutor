import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='first mx-5 mt-2'>
                <h3> 1. Difference between Authorization and Authentication</h3>
                <p className='fst-italic fs-5 text-dark'>Authorization determines what users can and can not access whereas authentication determines whether users are who they claim to be. Authorization usually done after authentication but authentication done before authorization. Authentication is the process by which an individuals identity is confirmed. Authorization, on the other hand, is the association of that identity with rights and permissions. Authorization permits access to resources whereas authentication verifies user identity. Authentication visible by the user but authorization not visible by the user.</p>
            </div>
            <div className='first mx-5'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='fst-italic fs-5 text-dark'>We choose Firebase because it allows us to sync real-time data across all devices, including Android, iOS, and the web, without having to refresh the page. It creates an application that does not require a backend server. All data in the database is managed by Firebase in real time. As a result, data is easily and quickly transferred to and from the database. Authenticating persons and validating their identities can be done in a variety of ways. For confirmation, various systems require various credentials. This credential could be a password, biometrics, a digital token, a digital certificate, or something else entirely, depending on the use case. </p>
            </div>
            <div className='first mx-5'>
                <h3>3. What other services does firebase provide other than authentication</h3>
                <p className='fst-italic fs-5 text-dark'>Google, Facebook, Twitter, Apple, Github, Microsoft, and Yahoo, among others, use Firebase to provide authentication services. Firebase offers free authentication via email, password, and OTP for phone numbers.</p>
                <p className='fst-italic fs-5 text-dark'>Alternatives services are:
                    <li>Kinvey-Mobile Backend as a Service (mBaaS) for the Enterprise; </li>
                    <li>Backendless-Mobile Backend and API Services Platform;</li>
                    <li>Kumulos-App Performance Management;</li>
                    <li>Appwrite-Open-Source backend for Flutter developers</li>

                </p>
            </div>
        </div>
    );
};

export default Blogs;