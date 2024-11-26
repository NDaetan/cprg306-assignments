import { collection, getDocs, query, addDoc } from "firebase/firestore";
import { db } from "../_utils/firebase"; // Adjust the path to point to the correct location

export const getUserItems = async (userId) => {
    const items = [];
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const q = query(itemsCollectionRef);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });
    } catch (error) {
        console.error("Error fetching user items: ", error);
    }
    return items;
};

export const addItemToUserList = async (userId, item) => {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollectionRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item to user list: ", error);
        throw error;
    }
};