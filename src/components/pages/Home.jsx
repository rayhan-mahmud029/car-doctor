import React from 'react';
import About from '../sections/About';
import Services from '../sections/Services';

const Home = () => {
    return (
        <div>
            <div className='relative'>
                <div className="carousel w-full rounded-lg relative " >
                    <div id="slide1" className="carousel-item relative w-full">
                        <img style={{ height: '450px' }} src="https://i.ibb.co/N1j4RXN/6.jpg" className="w-full custom-gradient object-cover" />
                        <div className="z-10 absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img style={{ height: '450px' }} src="https://i.ibb.co/TmxHsQm/2.jpg" className="w-full custom-gradient object-cover" />
                        <div className="z-10 absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img style={{ height: '450px' }} src="https://i.ibb.co/Lxx3LVj/3.jpg" className="w-full custom-gradient object-cover" />
                        <div className="z-10 absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img style={{ height: '450px' }} src="https://i.ibb.co/fqj1Mzz/4.jpg" className="w-full custom-gradient object-cover" />
                        <div className="z-10 absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className='absolute top-0 w-full custom-gradient h-full rounded-lg'></div>

                <div className='absolute top-10 w-1/2 left-10 space-y-8 space-x-4'>
                    <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For <br /> Car Servicing</h1>
                    <p className='text-neutral-300'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn rounded-none bg-[#FF3811] w-1/3">Discover More</button>
                    <button className="btn rounded-none  btn-outline btn-warning w-1/3">Contact Us</button>
                </div>

            </div>
 
            {/* ABOUT US SECTION */}
            <section className="my-6">
                <About/>
            </section>

            {/* Our Service Area SECTION */}
            <section className="my-6">
                <Services/>
            </section>
        </div>
    );
};

export default Home;