import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    const loadData = async () => {
        const resp = await fetch('http://localhost:5000/services');
        const data = await resp.json();
        setServices(data)
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div className='text-center space-y-4'>
            <h6 className='text-[#FF3811] font-medium'>Services</h6>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="text-neutral-400 capitalize">the majority have suffered alteration in some form, by injected humour, or Randomized <br /> words which don't look even slightly believable. </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service} />)
                }
            </div>
        </div>
    );
};

const ServiceCard = ({ service }) => {
    const { title, price, img , _id} = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='px-4 py-2 '>
                <img src={img} alt="service" className='rounded-lg'/>
            </figure>

            <div className="px-4 py-2 space-y-2">
                <h2 className="card-title">{title}</h2>

                <div className="w-full flex justify-between items-center">
                    <p className='text-lg text-[#FF3811] font-medium'>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}><FontAwesomeIcon icon={faArrowRight} className='cursor-pointer'/></Link>
                </div>
            </div>
        </div>
    )
}


export default Services;