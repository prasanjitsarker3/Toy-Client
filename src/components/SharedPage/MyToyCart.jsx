import React from 'react';
import update from '../../assets/image/Update.png';
import { Link } from 'react-router-dom';

const MyToyCart = ({ data,handleDelete,handleUpdateInfo}) => {
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = data;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24  h-24">
                            {photo && <img src={photo} className='h-24 w-24' />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold font-serif'>
                {Category}
            </td>
            <td className='font-semibold font-serif'>$: {price}</td>
            <td className='font-semibold font-serif'>$: {quantity}</td>
            <th className=' cursor-pointer'>
              {/* <label htmlFor="my-modal-5" className="btn">open modal</label> */}
                <Link to={`/updateInvention/${_id}`}><img  src={update} alt="" srcset="" width={'30px'} height={'30px'} /></Link>
            </th>
            {/* <th>
          Delete  
        </th> */}
        </tr>
    );
};

export default MyToyCart;