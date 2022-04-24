import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
    // console.log(services);
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    //     // console.log(services);
    // }, [])


    return (
        <div id="services" className='container'>
            <div>
                <h1 className='text-dark fst-italic text-center mt-3'>Services</h1>
                <div className="services-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Services;