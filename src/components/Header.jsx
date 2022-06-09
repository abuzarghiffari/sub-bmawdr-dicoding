/* eslint-disable react/prop-types */
import React from 'react';
import Search from './Search';
import Brand from '../assets/images/brand.svg';

function Heabar({ searchNotes }) {
  return (
    <header className="note-app__header">
      <div className="note-app__header-brand">
        <img src={Brand} className="note-app__brand" alt="Room with couches" />
        <h1 className="note-app__header-brand-title">noto</h1>
      </div>
      <Search searchNotes={searchNotes} placeholder="Search a notes..." />
    </header>
  );
}

export default Heabar;
