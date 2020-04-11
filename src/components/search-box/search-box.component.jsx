import React from 'react';

export const SearchBox = ({ placeHolder, onSearchChange }) => {
    return (
        <input
            className='search'
            type='search'
            onChange={onSearchChange}
            placeholder={placeHolder}
        />
    )
}
