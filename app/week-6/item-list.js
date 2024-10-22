import React from 'react';
import { useState } from 'react';  
import Item from './item.js';
import items from './items.json';

export default function ItemList(){
    const [sortby, setSortby] = useState('name');

    const sortedItems = [...items].sort((a,b) => {
        if (sortby === 'name'){
            return a.name.localeCompare(b.name);
        }else if (sortby ==='category'){
            return a.category.localeCompare(b.category);
        }
        return 0; // tells sort to leave the items in the same order.not changed
    });            // sort will mutate the array.
    return (
        <div>
            <button
                onClick={() => setSortby('name')}
                
            >
                Sort by Name
            </button>
            <button
                onClick={() => setSortby('category')}
            >
                Sort by Category
            </button>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
                <li>

                </li>
            </ul>
        </div>
    );
};