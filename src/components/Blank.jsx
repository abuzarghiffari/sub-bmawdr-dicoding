/* eslint-disable react/prop-types */
import React from 'react';

function Blank({ img }) {
  return (
    <div className="notes-list__empty">
      <img src={img} alt="blank page" />
    </div>
  );
}

export default Blank;
