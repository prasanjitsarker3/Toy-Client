import React, { useEffect, useState } from 'react';
import LoadInventionDataCart from '../SharedPage/LoadInventionDataCart';

const AllToys = () => {
    const [loadInvention, setLoadInvention] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allInvention')
            .then(res => res.json())
            .then(data => {
                setLoadInvention(data)
            })
    }, [])
    return (
        <div>
            <h1>All Toys</h1>
            <p>Length: {loadInvention.length}</p>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-8 p-3'>
                {
                    loadInvention.map(invention => <LoadInventionDataCart key={invention._id} invention={invention}>
                            
                    </LoadInventionDataCart>)
                }
            </div>
        </div>
    );
};

export default AllToys;