import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
 
  return (
    <input
      type="text"
      placeholder="Search transactions"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;