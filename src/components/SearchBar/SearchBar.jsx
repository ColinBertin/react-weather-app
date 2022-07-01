import React from 'react';
import './SearchBar.css';

export const SearchBar = ({handleChange, handleSearch, city}) => {

  return (
    <form action="">
      <input
        placeholder={city ? city : ''}
        type="text"
        onChange={handleChange}
        onKeyPress={handleSearch}
      />
      {/* <button onSubmit={(e) => handleChange(e, query)}>Submit</button> */}
    </form>
  )
}
