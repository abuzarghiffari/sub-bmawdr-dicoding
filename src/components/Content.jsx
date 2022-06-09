/* eslint-disable react/prop-types */
import React from 'react';

function Content({ title, body }) {
  return (
    <section className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__body --s-14">{body}</p>
    </section>
  );
}

export default Content;
