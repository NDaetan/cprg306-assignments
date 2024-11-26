// app/week-4/new-item.js
"use client";
import { useState } from 'react';


//usestate cant be used outside of a component
// export const [name,setname] = useState(" ");
// export const [quantity, setQuantity]= useState(1);
// export const [category, setCategory] = useState("produce");

// Function to generate a random string of a given length
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const NewItem = ({ onAddItem }) => {
    // State variables and initial values
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            id: generateRandomString(10), // Generate a random ID of length 10
            name,
            quantity,
            category
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-4">
                <label htmlFor="name" className="block text-lg mb-2">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="px-4 py-2 border rounded"
                />
            </div>

            <div className="flex items-center space-x-4">
                <button 
                    type="button" 
                    onClick={decrement}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    -
                </button>
                <span>{quantity}</span>
                <button 
                    type="button" 
                    onClick={increment} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    +
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <label htmlFor="category" className="block text-lg mb-2">Category:</label>
                <select 
                    id="category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} 
                    className="px-4 py-2 border rounded"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
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