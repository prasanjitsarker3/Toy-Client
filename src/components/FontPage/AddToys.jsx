import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../AuthenticationPage/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext)
    const [selectedInvention, setSelectedInvention] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.invention = selectedInvention;
        fetch('http://localhost:5000/postInvention', {
            method: "POST",
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
        <div className='bg bg-base-200'>
            <div className='p-8'>
                <h1 className='text-center'>Add Your Invention Science Toy</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                        <input placeholder='Seller Name' defaultValue={user?.displayName} {...register("sellerName")} className='h-[50px] px-5 rounded' />
                        <input placeholder="Toy Name" required {...register("toyName", { required: true })} className='h-[50px] px-5 rounded' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <input placeholder='Enter Name' defaultValue={user?.email} {...register("email")} className='h-[50px] px-5 rounded' />
                        <select {...register("Category")} className='h-[50px] px-5 rounded'>
                            <option value="scienceKits">Science Kits</option>
                            <option value="engineeringKits">Engineering Kits</option>
                            <option value="mathToys">Math learning Toys</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                        <input placeholder='Photo URL...' required {...register("photo")} className='h-[50px] px-5 rounded' />
                        <input placeholder="Details ..." required {...register("details", { required: true })} className='h-[50px] px-5 rounded' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-3'>
                        <input placeholder='Rating...' {...register("rating")} className='h-[50px] px-5 rounded' />
                        <input placeholder="Price ..." {...register("price", { required: true })} className='h-[50px] px-5 rounded' />
                        <input placeholder="Quantity ..." {...register("quantity", { required: true })} className='h-[50px] px-5 rounded' />
                    </div>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='py-3 flex justify-center'>
                        <button className="btn btn-wide " type='submit'>Wide</button>
                    </div>
                    {/* <input type="submit" /> */}
                </form>
            </div>
        </div>
    );
};

export default AddToys;