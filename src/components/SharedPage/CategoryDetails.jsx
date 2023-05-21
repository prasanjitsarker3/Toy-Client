import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const categoryData = useLoaderData();
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = categoryData;
    return (
        <div className=' my-5 bg-base-200'>
            <div className="hero">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl flex justify-center items-center mt-12 mx-auto" />
                    <div className='text-lg space-y-5 mx-auto'>
                        <h1 className="text-2xl font-bold">{toyName}</h1>
                        <p>Name: {sellerName}</p>
                        <p>Email: {email}</p>
                        <p>Category: {Category}</p>
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <p>Price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>

                </div>

            </div>
            <div className=' p-5 rounded mx-auto '>
                <p className='px-24 border py-3'>{details}</p>
            </div>
        </div>
    );
};

export default CategoryDetails;