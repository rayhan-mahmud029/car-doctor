import React, { useContext } from 'react';
import loginSVG from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, logOut, setUser, setLoading } = useContext(AuthContext);
    const location = useLocation()
    const prevLocation = location?.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                setUser(user)

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // store token in local storage
                        localStorage.setItem('access-token', data.token);
                        navigate(prevLocation)
                    })
                    .catch(err => console.error(err.message))

            })
            .catch(err => console.error(err.message))
    }

    return (
        <div className="hero min-h-screen my-6">
            <div className="hero-content flex-col lg:flex-row gap-12 justify-between w-full">

                <div className=" lg:text-left">
                    <img src={loginSVG} alt="" className='w-10/12 self-center' />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='my-6 text-center text-2xl lg:text-4xl font-semibold'>Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className='mt-2'>Don't have an account yet? <Link to='/register' className='text-orange-500 font-medium'>SignUp</Link></p>
                        </div>

                        <p className='my-4 text-center'>Or Sign In With</p>

                        <div className='flex justify-center gap-3'>
                            <button className='' onClick={handleGoogleLogIn}><FaGoogle className='w-12 h-12 rounded-full bg-[#F5F5F8] p-3 ' /></button>
                            <button className=''><FaFacebook className='w-12 h-12 rounded-full bg-[#F5F5F8] p-3 ' /></button>
                            <button className=''><FaLinkedin className='w-12 h-12 rounded-full bg-[#F5F5F8] p-3 ' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;