import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCart = ({ gallery }) => {
    return (
        <div className='flex text-center justify-center mx-auto py-3  h-[250px] w-[300px] shadow-lg cursor-pointer '>
            {/* <Link to='/allToys'> */}
                <img src={gallery.photo} className='flex justify-center w-full ' alt="" srcset="" />
            {/* </Link> */}
        </div>
    );
};

export default GalleryCart;     