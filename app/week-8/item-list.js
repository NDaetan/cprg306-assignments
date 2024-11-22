import React, { useState } from 'react';
import Item from './item.js';

const ItemList = ({ items, onItemSelect }) => {
    const [sortby, setSortby] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortby === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortby === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

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
                    <Item 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;