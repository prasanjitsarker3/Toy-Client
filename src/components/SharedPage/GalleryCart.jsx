import React from 'react';

const GalleryCart = ({gallery}) => {
    return (
        <div className='flex text-center justify-center mx-auto  h-[250px] w-[300px]'>
            <img src={gallery.photo} className='flex justify-center w-full' alt="" srcset=""  />
        </div>
    );
};

export default GalleryCart;     