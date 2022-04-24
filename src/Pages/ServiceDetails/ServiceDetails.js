import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [services] = useServices()

    const [detail, setDetail] = useState([])

    // useEffect(() => {
    // },[serviceId])

    useEffect(() => {
        const findDetails = services.find(service => service.id === serviceId)
        setDetail(findDetails)
    }, [services, serviceId])

    console.log(detail?.img)

    return (
        <div className="container">
            <h2>serviceId:{serviceId}</h2>

        </div>
    );
};

export default ServiceDetails;