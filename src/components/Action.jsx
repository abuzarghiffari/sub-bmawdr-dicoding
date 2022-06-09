/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';
import { showFormattedDate } from '../utils';
import Delete from '../assets/images/trash.svg';
import Archive from '../assets/images/archive.svg';
import Unarchived from '../assets/images/active.svg';

function Action({
  id, createdAt, onDelete, onArchived, archived,
}) {
  return (
    <section className="note-item__action">
      <span className="note-item__date">{showFormattedDate(createdAt)}</span>
      <div className="note-item__button">
        <Button className="note-item__archive-button" id={id} eventHandler={() => onArchived(id)} label={archived ? Unarchived : Archive} />
        <Button className="note-item__delete-button" id={id} eventHandler={() => onDelete(id)} label={Delete} />
      </div>
    </section>
  );
}

export default Action;
