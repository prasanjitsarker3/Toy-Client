import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const AllToyDetails = () => {
    const loadedDetails = useLoaderData();
    useTitle("allToyDetails")
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = loadedDetails;
    return (
        <div className='my-5'>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=' space-y-3'>
                        <h1 className="text-lg font-bold">Seller Name: {sellerName}</h1>
                        <p className="py-2 text-lg">Toy Name: {toyName}</p>
                        <p className='text-lg'>Email: {email}</p>
                        <p className="py-2 text-lg">Category: {Category}</p>
                        <div className='flex justify-between text-lg'>
                            <p >Price:$ <span className=' text-yellow-400'>{price}</span></p>
                            <p>Quantity: {quantity}</p>
                        </div>
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg bg-base-200 px-24 p-5'>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default AllToyDetails;