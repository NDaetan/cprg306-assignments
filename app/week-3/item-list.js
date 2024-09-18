import React from 'react';  
import Item from './item.js';

export default function ItemList(){
        const item1 = {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
        };
        
        const item2 = {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
        };
        
        const item3 = {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
        };
        
        const item4 = {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
        };
        
        const item5 = {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
        };
        
        const item6 = {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
        };
        
        const item7 = {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
        };
        
        const item8 = {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
        };
        
        const item9 = {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
        };
        
        const item10 = {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
        };
        
        const item11 = {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
        };
        
        const item12 = {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
        };

    return (     // found a easier way to write out the items. {...} is a spread operator that allows you to pass in the object as a prop
        <ul>
            <Item {...item1} />  
            <Item {...item2} />
            <Item {...item3} />
            <Item {...item4} />
            <Item {...item5} />
            <Item {...item6} />
            <Item {...item7} />
            <Item {...item8} />
            <Item {...item9} />
            <Item {...item10} />
            <Item {...item11} />
            <Item {...item12} />

        </ul>
    );   // this is equivalent to <Item name={item1.name} quantity={item1.quantity} category={item1.category} />

}