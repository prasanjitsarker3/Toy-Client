import React from 'react';

const GalleryCart = ({gallery}) => {
    return (
        <div className='flex text-center justify-center mx-auto py-3  h-[250px] w-[300px] shadow-lg'>
            <img src={gallery.photo} className='flex justify-center w-full' alt="" srcset=""  />
        </div>
    );
};

export default GalleryCart;     