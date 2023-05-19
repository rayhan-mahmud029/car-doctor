import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, loading, logOut, setUser } = useContext(AuthContext);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }
    let screenWidth = window.innerWidth;
    console.log(screenWidth); window.addEventListener('resize', () => {
        screenWidth = window.innerWidth;
        console.log(screenWidth);
    });

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('log out successful');
                setUser('')
                localStorage.removeItem('access-token')
            })
            .catch(err => console.error(err.message))
    }


    return (
        <div className='flex items-center lg:my-8 my-4 justify-between'>
            <div>
                <img src={logo} alt='logo' className='w-16' />
            </div>

            <div className={`
            flex-col md:flex-row absolute md:static  right-5 top-16 md:bg-white bg-opacity-25 md:bg-opacity-100 p-8 md:p-0 gap-2 md:gap-6  w-1/2  shadow bg-base-100 md:shadow-none rounded-box
            flex-1 md:flex justify-center text-lg font-medium text-[#444444] 
            ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                {user && <Link to='/bookings'>My Bookings</Link>}
                <Link to='/contact'>Contact</Link>
            </div>

            <div className='text-xs lg:text-lg  flex gap-4 items-center'>
                <FaShoppingBag className='hidden md:block' />
                <FaSearch className='hidden md:block' />
                {/* <button className='btn btn-sm lg:btn-md btn-outline btn-success border-2 font-semibold'>Appointment</button> */}
                {
                    loading ? <progress className="progress w-12"></progress> :
                        user ? <>
                            <button className='btn btn-sm lg:btn-md btn-outline btn-success border-2 font-semibold' onClick={handleSignOut}>Sign Out</button>
                            <img src={user.photoURL !== undefined ? user.photoURL : 'https://i.ibb.co/RvGsSr7/user.png'} alt="userProfile" title={user?.displayName} className='rounded-full w-10 lg:w-14 border-2' />
                        </>
                            :
                            <Link to='/login'><button className='btn btn-sm lg:btn-md btn-outline btn-success border-2 font-semibold'>Sign In</button></Link>
                }
            </div>

            <div className='block lg:hidden'>
                <button onClick={handleMobileMenuToggle} className='w-8 flex flex-col gap-1.5'>
                    <div className='border-2 border-neutral-700 w-full rounded-md'></div>
                    <div className='border-2 border-neutral-700 w-full rounded-md'></div>
                    <div className='border-2 border-neutral-700 w-1/2 rounded-md'></div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;