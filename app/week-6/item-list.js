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
        <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
            <button
                onClick={() => setSortby('name')}
                className={`px-4 py-2 m-2 ${sortby === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
                Sort by Name
            </button>
            <button
                onClick={() => setSortby('category')}
                className={`px-4 py-2 m-2 ${sortby === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
                Sort by Category
            </button>
        </div>
        <ul className="space-y-2">
            {sortedItems.map((item) => (
                <li key={item.id} className="p-4 bg-white rounded shadow">
                    <Item {...item} />
                </li>
            ))}
        </ul>
    </div>
);
}