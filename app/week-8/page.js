"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';


const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name by removing size and emoji
        const cleanedItemName = item.name
            .split(',')[0] // Remove size
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '') // Remove emojis
            .trim(); // Trim any extra spaces

        setSelectedItemName(cleanedItemName);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-full md:w-1/2 px-2">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </div>
    );
};

export default Page;
