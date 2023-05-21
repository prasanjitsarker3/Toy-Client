import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCart = ({ gallery }) => {
    return (
        <div className='flex justify-center  mx-auto py-3  md:h-[250px] md:w-[300px] shadow-lg cursor-pointer'>
            {/* <Link to='/allToys'> */}
                <img src={gallery.photo} className='flex justify-center w-full mx-auto' alt="" srcset="" />
            {/* </Link> */}
        </div>
    );
};

export default GalleryCart;     