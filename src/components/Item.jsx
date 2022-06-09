/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Content from './Content';
import Action from './Action';

function Item({
  id, archived, title, body, createdAt, onDelete, onArchived,
}) {
  return (
    <article className="note-item">
      <Content title={title} body={body} />
      <Action id={id} archived={archived} createdAt={createdAt} onDelete={onDelete} onArchived={onArchived} />
    </article>
  );
}

export default Item;
