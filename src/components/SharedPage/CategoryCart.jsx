import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from 'react-icons/fa';

const CategoryCart = ({ data }) => {
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = data;
    return (
        <div className='mx-auto p-5'>
            <div className="card w-92 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
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
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;