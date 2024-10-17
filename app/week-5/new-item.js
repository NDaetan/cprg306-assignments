// app/week-4/new-item.js
"use client";
import { useState } from 'react';

//usestate cant be used outside of a component
// export const [name,setname] = useState(" ");
// export const [quantity, setQuantity]= useState(1);
// export const [category, setCategory] = useState("produce");

const NewItem = () =>{
    //state varibles and intial values
    const [quantity, setQuantity] = useState(1);  // need to set the default value
    const [name,setName] = useState(" ");
    const [category, setCategory] = useState("produce");

    const increment = () => {  //setQuantity not needed here anymore, no need to take in a parameter when everything in same function
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };
    const decrement = () => { //setQuantity not needed here anymore
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };
    const handleSubmit = (e) => {   // I initially had all the variables and thier setter functions within, but not needed when its all contained with the NewItem Function
        e.preventDefault();         //example (e,name,setname,quantity,setQuantity,category,setCategory)
    
        const item = {
            name,
            quantity,
            category    
        }
    
        console.log(item);
    
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    
        setName(" ");  // need the set function to reset to default value
        setQuantity(1);
        setCategory("produce");
    };

    //Other than main headin on page.js this should render the form.
    return (
        <form className= "space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-4">
                <label name="name" className = "block text-lg mb-2">Name:</label>
                <input type="text" 
                id="name" 
                value={name} 
                onChange ={(e) => setName(e.target.value)} //text input doesnt work without this. I think it sets the value to "" and doesnt allow it to be changed.
                required
                className = " px-4 py-2 border rounded" />
            </div>
            <div className ="flex items-center justify-center space-x-4">
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
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    +
                </button>
            </div>
            <div className = "flex items-center space-x-4">
                <label name="category" className = "block text-lg mb-2">Category:</label>
                <select id="category" value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 border rounded">
                    <option value = "produce">Produce</option>
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
            <div>
                <button type = "submit"
                className = "px-4 py-2 bg-blue-500 text-white-rounded">Add Item</button>
            </div>
        </form>
    );
};

export default NewItem;