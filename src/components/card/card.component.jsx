import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
    return (
        <div className="card-container">
            <h2>{monster.name}</h2>
            <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h3>{monster.email}</h3>
        </div>
    )
}