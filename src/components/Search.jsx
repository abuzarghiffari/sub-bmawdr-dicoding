/* eslint-disable react/prop-types */
import React from 'react';

function Seacrh({ searchNotes, placeholder }) {
  return (
    <div className="note-search">
      <input
        type="search"
        className="--s-14"
        placeholder={placeholder}
        onChange={(event) => searchNotes(event.target.value)}
      />
    </div>
  );
}

export default Seacrh;
