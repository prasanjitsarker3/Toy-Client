import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToyDetails = () => {
    const loadedDetails = useLoaderData();
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = loadedDetails;
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-lg font-bold">Seller Name:{sellerName}</h1>
                        <p className="py-2">Toy Name:{toyName}</p>
                        <p className="py-2">Category:{Category}</p>
                        <div className='flex justify-between'>
                            <p>Price:$ {price}</p>
                            <p>Quantity: {quantity}</p>
                        </div>
                        <div>
                            
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