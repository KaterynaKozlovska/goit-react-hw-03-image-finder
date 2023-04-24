import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  render() {
    const { imageName } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <span className={css.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={css.SearchForm__input}
            onChange={this.handleNameChange}
            name="imageName"
            value={imageName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
