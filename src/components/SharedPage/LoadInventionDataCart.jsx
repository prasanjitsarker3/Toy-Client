import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LoadInventionDataCart = ({ invention }) => {
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = invention;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <div className='flex justify-center items-center'>
                    <img src={photo} width={'200px'} height={'200px'} className='p-3 rounded' />
                </div>
                <div className="card-body">
                    <h2 className="text-lg font-serif">Name:  {toyName}</h2>
                    <p className='text-lg font-serif'>Seller:  {sellerName}</p>
                    <p className='text-lg font-serif'>Category: {Category}</p>
                    <div className='flex justify-between gap-3 text-lg font-serif'>
                        <p>Price:  {price}</p>
                        <p>Quantity:  {quantity}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-sm">View <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadInventionDataCart;