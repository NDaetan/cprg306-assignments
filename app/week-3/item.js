import React from 'react';

export default function item({name, quantity, category}) {
    return (
        <li>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{category}</div>
        </li>
    )
}