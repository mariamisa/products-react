import React from 'react';

export default function SearchBar({ onSearch, onCheck }) {
  return (
    <div>
      <input type='text' placeholder='search' onChange={onSearch} />
      <br />
      <label htmlFor='check'>only show product on stock</label> 
      <input id='check' type='checkbox' onChange={onCheck} />
    </div>
  );
}
