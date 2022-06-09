/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';
import Empty from '../assets/images/blank.svg';
import Blank from './Blank';

function List({
  img, label, notes, archived, onDelete, onArchived,
}) {
  return (
    <>
      <div className="notes-list__header">
        <img src={img} alt={label} />
        <h2 className="notes-list__title">{label}</h2>
      </div>
      {notes.length === 0 ? (
        <Blank img={Empty} />
      ) : (
        <article className="notes-list">
          {notes.map((note) => (
            <Item
              key={note.id}
              id={note.id}
              archived={archived}
              onDelete={onDelete}
              onArchived={onArchived}
              {...note}
            />
          ))}
        </article>
      )}
    </>
  );
}

export default List;
