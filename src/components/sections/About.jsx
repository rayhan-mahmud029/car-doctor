import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row  gap-4">
                <div className='flex-1 relative m-2 lg:m-4'>
                    <img src="https://i.ibb.co/mtvtmqr/person.jpg" className="max-w-sm object-cover w-72 h-72 z-10 rounded-lg" />
                    <img src="https://i.ibb.co/Jnn6xbN/parts.jpg" className="w-56 h-52  absolute top-1/2 right-5 border-4 border-white" />
                </div>

                <div className='flex-1 space-y-5'>
                    <h1 className="text-md font-medium text-red-600">About Us</h1>
                    <h1 className='text-5xl font-semibold'>We are qualified <br /> & of experience <br /> in this field</h1>

                    <p className="text-neutral-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="text-neutral-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn bg-red-600 rounded-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;