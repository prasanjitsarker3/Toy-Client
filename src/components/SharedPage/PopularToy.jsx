import React, { useEffect, useState } from 'react';
import PopularCart from './PopularCart';

const PopularToy = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/popular")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className='py-20'>
            <div className='text-center '>
                <h1 className='text-2xl font-serif font-extralight py-3'>Popular Toy Products</h1>
                <p className='font-serif text-base '>Toy science kits play a vital role in introducing children to STEM (Science, Technology, Engineering, and Mathematics) education</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    data.map(popular => <PopularCart key={popular._id} popular={popular}></PopularCart>)
                }
            </div>
        </div>
    );
};

export default PopularToy;