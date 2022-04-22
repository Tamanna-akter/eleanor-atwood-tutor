import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='first mx-5 mt-2'>
                <h3> 1. Difference between Authorization and Authentication</h3>
                <p className='fst-italic fs-5 text-dark'>Authorization determines what users can and can not access wheres authentication determines whether users are who they claim to be. Authorization usually done after authentication but authentication done before authorization. Authentication is the process by which an individuals identity is confirmed. Authorization, on the other hand, is the association of that identity with rights and permissions. Authorization permits access to resources wheres authentication verifies user identity. Authentication visible by the user but authorization not visible by the user.</p>
            </div>
            <div className='first mx-5'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='fst-italic fs-5 text-dark'>We are using firebase because it allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen. It create Application without backend server. Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. There are a lot of different methods to authenticate people and validate their identities. Different systems need different credentials for confirmation. Depending on each use case, this credential can either be a password, biometrics, a digital token, digital certificate, etc. </p>
            </div>
            <div className='first mx-5'>
                <h3>3. What other services does firebase provide other than authentication</h3>
                <p className='fst-italic fs-5 text-dark'>Firebase provides authentication services for almost every major platform, which includes Google, Facebook, Twitter, Apple, Github, Microsoft, and Yahoo. Firebase provides authentication using email, password, and phone number using OTP, and it is also free!</p>
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