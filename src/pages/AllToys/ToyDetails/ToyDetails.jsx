import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToyDetails = useLoaderData();
    console.log(singleToyDetails);
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;