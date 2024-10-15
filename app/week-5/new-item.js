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
    const [name,setname] = useState(" ");
    const [category, setCategory] = useState("produce");

    const increment = (setQuantity) => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };
    const decrement = (setQuantity) => {
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
    
        alert(`Item: ${name}, QuantityL ${quantity}, Category: ${category}`);
    
        setName(" ");  // need the set function to reset to default value
        setQuantity(1);
        setCategory("produce");
    };

    //Other than main headin on page.js this should render the form.
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label name="name">Name:</label>
                <input type="text" value ={name} required></input>
            </div>
            <div> 
                <button type="button" onClick={decrement}></button>
                <span>{quantity}</span>
                <button type="button" onClick={increment}></button>
            </div>
            <div>
                <label name="category">Category:</label>
                <select id="category" value={category}>
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
                <button type = "submit">Add Item</button>
            </div>
        </form>
    );
};

export default NewItem;