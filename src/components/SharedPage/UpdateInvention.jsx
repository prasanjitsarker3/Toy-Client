import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../AuthenticationPage/AuthProvider';

const UpdateInvention = () => {
    const inventionUpdateLoader = useLoaderData();
    const { user } = useContext(AuthContext)

    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = inventionUpdateLoader;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://toy-tech-server.vercel.app/invention/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    };
    return (
        <div>
            <div>

            </div>
            <div className='bg bg-base-200'>
                <div className='p-8'>
                    <h1 className='text-center'>Update Invention Science Information</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                            <input placeholder='Seller Name' defaultValue={user?.displayName} {...register("sellerName")} className='h-[50px] px-5 rounded' />
                            <input placeholder="Details ..." required {...register("details", { required: true })} className='h-[50px] px-5 rounded' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                            <input placeholder="Price ..." {...register("price", { required: true })} className='h-[50px] px-5 rounded' />
                            <input placeholder="Quantity ..." {...register("quantity", { required: true })} className='h-[50px] px-5 rounded' />
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='py-3 flex justify-center'>
                            <button className="btn btn-wide " type='submit'>Update Invention</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateInvention;