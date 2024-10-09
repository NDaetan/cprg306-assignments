"use client";
import {increment, decrement} from './new-item';
import { useState } from 'react';

const Page = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="text-center p-5 font-sans">
            <h1 className="text-2xl font-bold mb-4">Page</h1>
            <p className="text-lg mb-4">Quantity: {quantity}</p>
            <button 
                className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" 
                onClick={() => increment(setQuantity)}
            >
                Increment
            </button>
            <button 
                className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" 
                onClick={() => decrement(setQuantity)}
            >
                Decrement
            </button>
        </div>
    );
};

export default Page;
