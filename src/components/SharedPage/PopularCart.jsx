import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from 'react-icons/fa';

const PopularCart = ({ popular }) => {
    const { name, price, photo, rating } = popular;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl cursor-pointer">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className='text-base font-normal'>Price:$ {price}</p>
                    <div className="flex justify-between">
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <div>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCart;