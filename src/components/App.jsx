/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import autoBind from 'auto-bind';
import Header from './Header';
import Input from './Input';
import NoteList from './NoteList';
import Footer from './Footer';
import Active from '../assets/images/icon-active.svg';
import Archived from '../assets/images/icon-archive.svg';
import { getInitialData } from '../utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: props.defaultKeyword || '',
    };
    autoBind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toLocaleString(),
        },
      ],
    }));
  }

  onSearchHandler(keyword) {
    this.setState(() => ({
      keyword,
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchivedHandler(id) {
    const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    this.setState({ notes });
  }

  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase()
      .includes(this.state.keyword.toLowerCase()));

    return (
      <>
        <Header label="Notes" keyword={this.state.keyword} keywordChange={this.onSearchHandler} />
        <main className="note-app__body">
          <Input addNote={this.onAddNoteHandler} />
          <NoteList
            img={Active}
            label="active notes"
            notes={notes}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
          <NoteList
            type="archived"
            img={Archived}
            label="archived notes"
            notes={notes}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
