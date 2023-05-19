import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToyDetails = () => {
    const loadedDetails= useLoaderData();
    const { sellerName, toyName, email, Category, details, price, rating, quantity, photo, _id } = loadedDetails;
    return (
        <div>
            <h1>{sellerName}</h1>
        </div>
    );
};

export default AllToyDetails;