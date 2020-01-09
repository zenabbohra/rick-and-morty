import React from 'react';

const SearchBox = ({ onInputChange }) => {
  return(
    <div>
      <input
        className=' pa2 mb2 bg-washed-green ba br2 bw2 b--washed-green'
        type='text'
        placeholder='search robots'
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchBox;