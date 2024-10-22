import React from 'react';

export default function Item({name, quantity, category}) {
    return (
        <li>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{category}</div>
        </li>
    )
}