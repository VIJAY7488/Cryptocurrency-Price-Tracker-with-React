import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search({ search, onSearchChange }) {
  return (
    <div className='relative flex w-full justify-center items-center h-12 mt-4'>
      <input
        className='w-10/12 h-12 pl-12 bg-slate-700 text-xl px-5 rounded-full outline-none'
        type='text'
        placeholder='Search'
        value={search} // Should be a string
        onChange={(e) => onSearchChange(e.target.value)} // e.target.value is a string
      />
      <div className='absolute md:left-28 left-12 top-1/2 transform -translate-y-1/2 text-gray-400'>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Search;
