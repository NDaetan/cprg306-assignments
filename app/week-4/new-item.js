// app/week-4/new-item.js
"use client";
import { useState } from 'react';

export const increment = (setQuantity) => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
};

export const decrement = (setQuantity) => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
};

const NewItem = () =>{
    const [quantity, setQuantity] = useState(1);

    return (
        <form className="space-y-4">
            <div className="flex items-center space-x-4">
                <button 
                    type="button" 
                    onClick={decrement} 
                    disabled={quantity === 1} 
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    -
                </button>
                <span>{quantity}</span>
                <button 
                    type="button" 
                    onClick={increment} 
                    disabled={quantity === 20} 
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    +
                </button>
            </div>
            <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Add Item
            </button>
        </form>
    );
};

export default NewItem;