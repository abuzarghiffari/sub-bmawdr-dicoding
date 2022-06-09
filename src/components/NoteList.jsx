/* eslint-disable react/prop-types */
import React from 'react';
import List from './List';

function NoteList({
  img, label, notes, type, onDelete, onArchived,
}) {
  const archivedNotes = notes.filter((note) => note.archived);
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    type === 'archived'
      ? (
        <List
          img={img}
          label={label}
          notes={archivedNotes}
          onDelete={onDelete}
          onArchived={onArchived}
        />
      ) : (
        <List
          img={img}
          label={label}
          notes={activeNotes}
          onDelete={onDelete}
          onArchived={onArchived}
        />
      )
  );
}

export default NoteList;
