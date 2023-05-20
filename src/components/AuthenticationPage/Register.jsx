import React, { useContext, useState } from 'react';
import register from '../../assets/image/registration.avif'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';
import SocialLogin from './SocialLogin';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { userCreated, userLogOut } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useTitle('register')
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            return setError("Ensure string has two digits !")
        }
        else if (password.length < 6) {
            return setError("Password Must be length 6")
        }
        setError('')
        setSuccess('')
        userCreated(email, password)
            .then(result => {
                const loggedUser = result.user;
                userInformation(loggedUser, name, photo)
                setError('')
                setSuccess("Successfully Login User !");
                form.reset();
                userLogOut();
                navigate('/login');

            })
            .catch(error => {
                setSuccess('')
                setError(error.message);
            })

    }

    const userInformation = (currentUser, name, photo) => {
        updateProfile(currentUser, {
            displayName: name, photoURL: photo
        })
    }
    return (
        <div>
            <div className="hero bg-base-100 p-5">
                <div className="hero-content flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="w-1/2 mr-12 mx-auto">
                        <img src={register} alt="" srcset="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <p className='text-center font-serif text-base'>Please Registration !</p>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Name</span>
                                </label> */}
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Photo</span>
                                </label> */}
                                <input type="photo" name='photo' placeholder="Photo Link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center'>Have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
                            <p className='text-center text-green-500'>{success}</p>
                            <p className='text-center text-red-600'>{error}</p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;