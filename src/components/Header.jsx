import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="links">
          <Link to="/" className="header-options">
            {' '}
            <h3>Inicio</h3>
            {' '}
          </Link>
          <Link to="/about" className="header-options">
            {' '}
            <h3>Sobre mim</h3>
            {' '}
          </Link>
          <Link to="/projects" className="header-options">
            {' '}
            <h3>Projetos</h3>
            {' '}
          </Link>
          <Link to="/habilidades" className="header-options">
            {' '}
            <h3>habilidades</h3>
            {' '}
          </Link>
        </div>
        <div className="info-content">
          <a href="https://www.facebook.com/pedro.emmanuel4/" target="_blank" rel="noopener noreferrer" className='ps'>
            <BsFacebook className="link-icon" />
          </a>
          <a href="https://www.linkedin.com/in/pedrobuerger/" target="_blank" rel="noopener noreferrer" className='ps'>
            <BsLinkedin className="link-icon" />
          </a>
          <a href="https://github.com/PedroEmmanuelBuerger" target="_blank" rel="noopener noreferrer" className='ps'>
            <BsGithub className="link-icon" />
          </a>
        </div>
      </header>
    );
  }
}
