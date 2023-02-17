import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/home.css';
import image from '../image/3094293.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="header-background">
        <Header />
        <div className="all-welcome">
          <h1 className="welcome">Bem vindo(a)</h1>
          <p className="welcome-message">
            Aqui você sera capaz de conhecer um pouco mais sobre mim,
            dar uma olhada nos meus projetos já concluídos
            e ver todas as ferramentas que utilizo como Web Developer!
          </p>
          <img src={ image } alt="introduction" className="animationImage" />
        </div>
      </div>
    );
  }
}
