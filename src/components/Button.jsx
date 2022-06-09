/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  label, className, eventHandler,
}) {
  return (
    <button className={className} type="button" onClick={eventHandler}>
      <img src={label} alt={label} />
    </button>
  );
}

export default Button;
