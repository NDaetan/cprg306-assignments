"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getUserItems, addItemToUserList } from '../_services/shopping-list-service';
import { useUserAuth } from "../_utils/auth-context"; // Adjust the path to point to the correct location

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const loadItems = async () => {
        if (user) {
            const userItems = await getUserItems(user.uid);
            setItems(userItems);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (item) => {
        if (user) {
            const itemId = await addItemToUserList(user.uid, item);
            setItems([...items, { id: itemId, ...item }]);
        }
    };

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
            .split(',')[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '')
            .trim();

        setSelectedItemName(cleanedItemName);
    };

    return (
        <div className="container mx-auto p-4">
            {!user ? (
                <div className="flex justify-center items-center h-screen">
                    <button
                        onClick={gitHubSignIn}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Login with GitHub
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold mb-4">
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button
                        onClick={firebaseSignOut}
                        className="px-4 py-2 bg-red-500 text-white rounded mb-4"
                    >
                        Logout
                    </button>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            )}
        </div>
    );
};

export default Page;
