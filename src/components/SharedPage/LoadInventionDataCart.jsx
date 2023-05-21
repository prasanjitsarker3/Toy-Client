import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthenticationPage/AuthProvider';

const LoadInventionDataCart = ({ invention }) => {
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = invention;
    const navigation = useNavigate()
    const { user } = useContext(AuthContext);
    const handleModal = () => {
        if (!user) {
            Swal.fire({
                title: '!',
                text: 'Do you want to continue? Please ',
                icon: 'error',
                confirmButtonText: 'Login'

            })
            navigation("/login")
        }
    }
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
                    <button onClick={handleModal} className="btn btn-outline btn-success">View <FaArrowRight /></button>
                </Link>
            </th>
        </tr>

    );
};

export default LoadInventionDataCart;