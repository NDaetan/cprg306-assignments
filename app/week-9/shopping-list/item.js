import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={onSelect} className="cursor-pointer">
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{category}</div>
        </li>
    );
}