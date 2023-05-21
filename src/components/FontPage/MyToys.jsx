import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import MyToyCart from '../SharedPage/MyToyCart';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [loadData, setLoadData] = useState([]);
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);

    useTitle('myToys')
    console.log(search);
    useEffect(() => {
        fetch(`https://toy-tech-server.vercel.app/myInvention/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadData(data);
            })
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-tech-server.vercel.app/myInvention/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your toy has been deleted',
                                    'success'
                                )
                            }
                            const remaining = loadData.filter(invention => invention._id !== id)
                            setLoadData(remaining)
                        })
                }
            })

    }
    const handleSearch = () => {
        fetch(`https://toy-tech-server.vercel.app/inventionSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setLoadData(data)
            })
    }

    const handleUpdateInfo = (id) => {
        console.log(id);
        <label htmlFor="my-modal-5" className="btn">open modal</label>

    }
    const handleAscending = () => {
        const sort = [...loadData].sort((a, b) => a.price - b.price)
        setLoadData(sort);
    }
    const handleDescending = () => {
        const sort = [...loadData].sort((a, b) => b.price - a.price)
        setLoadData(sort);
    }
    return (
        <div>
            <div className=''>
                <div className='flex justify-center items-center'>
                    <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search..." className="input input-bordered input-info w-full max-w-xs" />
                    <button type='submit' onClick={handleSearch} className="btn btn-outline btn-info">Search</button>
                </div>

                <div className='flex justify-center py-5'>
                    <button type='submit' onClick={handleAscending} className="btn btn-outline btn-info">Ascending</button>
                    <button type='submit' onClick={handleDescending} className="btn btn-outline btn-info">Descending</button>
                </div>

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