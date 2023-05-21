import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthenticationPage/AuthProvider';

const CategoryCart = ({ data }) => {
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = data;
    const { user } = useContext(AuthContext);
    const navigation= useNavigate();
    const handleModal = () => {

        if (!user) {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            navigation("/login")
        }
    }
    return (
        <div className='mx-auto p-5'>
            <div className="card w-92 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[160px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title  text-center">{toyName}</h2>
                    <div className='flex justify-between gap-5'>
                        <p className='text-left'>Price: ${price}</p>
                        <p className='text-right'>Quantity: {quantity}</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <div className='cursor-pointer'>
                            <Link to={`/category/${_id}`}><FaArrowRight onClick={handleModal} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;