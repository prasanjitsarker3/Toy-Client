import React from 'react';
import error from '../../assets/image/error.avif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={error} className='p-12 w-1/2' alt="" srcset="" />

            </div>
            <div className='text-center'>
                <Link to='/' className='bg bg-green-600 p-3 text-white rounded'>Back Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;