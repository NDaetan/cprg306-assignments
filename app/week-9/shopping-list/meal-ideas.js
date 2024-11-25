"use client";
import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    // Function to load meal ideas
    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    // Use useEffect to call loadMealIdeas whenever the ingredient prop changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h1>
            <ul className="space-y-2">
                {meals && meals.map((meal) => (
                    <li key={meal.idMeal} className="p-4 bg-white rounded shadow">
                        <h2 className="text-lg font-semibold">{meal.strMeal}</h2> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;