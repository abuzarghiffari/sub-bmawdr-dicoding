/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import autoBind from 'auto-bind';
import Icon from '../assets/images/icon-make.svg';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      counter: 50,
    };
    autoBind(this);
  }

  onTitleChangeEventHandler(event) {
    const currentTex = event.target.value.slice(0, 50);
    const currentTexLength = currentTex.length;
    this.setState((prevState) => ({
      ...prevState,
      title: currentTex,
      counter: 50 - currentTexLength,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState((prevState) => ({
      ...prevState,
      title: '',
      body: '',
      counter: 50,
    }));
  }

  render() {
    return (
      <article className="note-input">
        <div className="note-input__header">
          <img src={Icon} alt="icon" />
          <h2>create your note</h2>
        </div>
        <form className="note-input__form" onSubmit={this.onSubmitEventHandler}>
          <div className="note-input__title-area">
            <input type="text" className="note-input__title --s-14" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Title " required />
            <span className="note-input__title__char-limit">
              Remaining characters:
              {' '}
              {this.state.counter}
            </span>
          </div>
          <textarea type="text" className="note-input__body --s-14" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Write your note..." required />
          <button type="submit">Create</button>
        </form>
      </article>
    );
  }
}

export default Input;
