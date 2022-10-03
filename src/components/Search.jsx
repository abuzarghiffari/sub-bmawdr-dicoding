/* eslint-disable react/prop-types */
import React from 'react';

function Seacrh({ keyword, keywordChange, placeholder }) {
  return (
    <div className="note-search">
      <input
        type="search"
        className="--s-14"
        value={keyword}
        placeholder={placeholder}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

export default Seacrh;
