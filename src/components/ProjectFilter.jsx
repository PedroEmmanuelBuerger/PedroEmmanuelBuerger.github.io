import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsFillJournalBookmarkFill, BsFillStarFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';

export default class ProjectFilter extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="project-filter">
        <label htmlFor="all" className="filter-label">
          <BsFillStarFill />
          {' '}
          Todos
          <input type="radio" name="all" id="all" onClick={ handleClick } />
        </label>
        <label htmlFor="fundamentos" className="filter-label">
          <BsFillJournalBookmarkFill />
          {' '}
          Fundamentos
          <input type="radio" name="projects" id="fundamentos" onClick={ handleClick } />
        </label>
        <label htmlFor="front-end" className="filter-label">
          <FaReact />
          {' '}
          Front End
          <input type="radio" name="projects" id="front-end" onClick={ handleClick } />
        </label>
        <label htmlFor="back-end" className="filter-label">
          <AiFillDatabase />
          {' '}
          Back End
          <input type="radio" name="projects" id="back-end" onClick={ handleClick } />
        </label>
      </div>
    );
  }
}

ProjectFilter.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
