import React, { useEffect, useState } from 'react';
import LoadInventionDataCart from '../SharedPage/LoadInventionDataCart';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [loadInvention, setLoadInvention] = useState([]);
    useTitle('alltoys');
    useEffect(() => {
        fetch('https://toy-tech-server.vercel.app/allInvention')
            .then(res => res.json())
            .then(data => {
                setLoadInvention(data)
            })
    }, [])
    return (
        <div>
            <div className="mx-12 py-12">
                <table className="table w-full">
                    <thead>
                        {/* <tr>
                            <th className='font-serif'>
                                Invention
                            </th>
                        </tr> */}
                    </thead>
                    <tbody className='grid grid-cols-1 gap-5 py-3 p-3 bg bg-base-200 rounded'>
                        {
                            loadInvention.map(invention => <LoadInventionDataCart key={invention._id} invention={invention}>

                            </LoadInventionDataCart>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToys;