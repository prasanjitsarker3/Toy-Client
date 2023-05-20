import React, { useEffect, useState } from 'react';
import GalleryCart from './GalleryCart';

const Gallery = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])
    return (
        <div>

            <div className='text-center pb-8'>
                <h1 className='text-2xl font-serif font-extralight'>Gallery </h1>
                <p className='text-lg'>Science Kits, Math learning toys, Engineering Kits</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-0 px-20 pb-8'>
                {
                    data.map(gallery => <GalleryCart gallery={gallery} key={gallery._id}></GalleryCart>)
                }
            </div>
        </div>
    );
};

export default Gallery;