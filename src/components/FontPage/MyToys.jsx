import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import MyToyCart from '../SharedPage/MyToyCart';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [loadData, setLoadData] = useState([]);
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);

    useTitle('myToys')
    console.log(search);
    useEffect(() => {
        fetch(`http://localhost:5000/myInvention/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadData(data);
            })
    }, [user])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myInvention/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const remaining = loadData.filter(invention => invention._id !== id)
                setLoadData(remaining)
            })
    }
    const handleSearch=()=>{
        fetch(`http://localhost:5000/inventionSearch/${search}`)
        .then(res => res.json())
        .then(data => {
            setLoadData(data)
        })
    }

    const handleUpdateInfo = (id) => {
        console.log(id);
        <label htmlFor="my-modal-5" className="btn">open modal</label>

    }
    return (
        <div>
            <div className=''>
                <h1>{searchData.length}</h1>
                {/* <h1>MY Invention Information :{loadData.length}</h1> */}
                <div className='flex justify-center items-center'>
                    <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search..." className="input input-bordered input-info w-full max-w-xs" />
                    <button type='submit' onClick={handleSearch} className="btn btn-outline btn-info">Search</button>
                </div>

                {/* <div className='flex justify-center py-5'>
                    <select className="select select-primary  flex justify-center">
                        <option >Price-Ascending</option>
                        <option>Price-Descending</option>

                    </select>
                </div> */}

            </div>
            <div className="mx-12 py-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='font-serif'>
                                Invention
                            </th>
                            <th>Photo</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadData.map(data => <MyToyCart data={data} key={data._id} handleUpdateInfo={handleUpdateInfo} handleDelete={handleDelete}></MyToyCart>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;