import React, { useContext, useState } from 'react';
import loginPhoto from '../../assets/image/login.avif'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
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
        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                setSuccess("Successfully User Login !");
                form.reset();
            })
            .catch(error => {
                setSuccess(success);
                setError(error.message);
            })
    }
    return (
        <div>
            <div>
                <div className="hero bg-base-100 p-5">
                    <div className="hero-content flex-col lg:flex-row justify-between items-center gap-5">
                        <div className="w-1/2 mr-12 mx-auto">
                            <img src={loginPhoto} alt="" srcset="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-0">
                            <form onSubmit={handleLogin} className="card-body">
                                <p className='text-center font-serif text-base'>Please Login !</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Enter Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className='text-center'>Already have an account? <Link to='/register' className='text-blue-500'>Registration</Link></p>
                                <p className='text-center text-green-500'>{success}</p>
                                <p className='text-center text-red-600'>{error}</p>
                                 <SocialLogin></SocialLogin>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;