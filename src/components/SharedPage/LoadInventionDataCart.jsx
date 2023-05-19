import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoadInventionDataCart = ({ invention }) => {
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = invention;
    return (
       
        <tr className='flex justify-between '>
            <td className='bg bg-base-200'>
                <div className="flex items-center  ">
                    <img src={photo} width={'200px'} height={'200px'} className='p-3 rounded' />
                    <div>
                        <h2 className="text-lg font-serif">Name:  {toyName}</h2>
                        <p className='text-lg font-serif'>Seller:  {sellerName}</p>
                    </div>
                </div>
            </td>
            <td className="flex items-center  bg bg-base-200 text-lg font-normal font-serif">
                <p>Price:  {price}</p>
            </td>
            <td className="flex items-center  bg bg-base-200 text-lg font-normal font-serif"> <p>Quantity:  {quantity}</p></td>
            <th className="flex items-center bg bg-base-200 ">
                <Link to={`/allToyDetails/${_id}`}>
                    <button className="btn btn-outline btn-success">View <FaArrowRight /></button>
                </Link>
            </th>
        </tr>

    );
};

export default LoadInventionDataCart;