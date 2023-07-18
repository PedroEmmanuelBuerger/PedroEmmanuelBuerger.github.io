import React, { Component } from 'react';
import '../styles/About.css';
import Header from '../components/Header';
import profileImage from '../image/1674169986273.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class About extends Component {
  render() {
    return (
  <div>
        <Header />
        <section className="BodyDiv">
          <img
            src={ profileImage }
            alt="foto de perfil"
            className="profileImage placeholder-glow"
          />
          <p className="quote">
            WEB DEVELOPER | DESIGNER | STUDENT
          </p>
          <section className="meSection">
            <p className="name text-center">Pedro Emmanuel</p>
            <p className="text text-center">
            Olá, eu sou o Pedro Emmanuel, um profissional apaixonado por tecnologia desde sempre. Minha busca constante por novos conhecimentos e evolução pessoal me levou a atuar como designer gráfico e de mídias sociais entre 2019 e 2021, onde aprendi a importância da comunicação e do trabalho em equipe.

Atualmente, estou fazendo uma transição de carreira para o Desenvolvimento Web, uma área que sempre me fascinou e que oferece um futuro incrível e vasto. Em 2017 e 2018, tive contato com programação na instituição CEDUP Hermann Hering, o que me motivou ainda mais a seguir esse caminho.

No que diz respeito às habilidades técnicas, tenho experiência em React, RTL, Hooks e Redux, além de habilidades em design gráfico e de mídias sociais. Essa combinação de habilidades me permite trazer uma perspectiva única e criativa para o desenvolvimento web.
              <br />
              <br />
              ⭐Caracteristicas pessoais:
              <br />
              Comprometido, Pontual, Resiliente
              e com Facilidade para adaptação.
            </p>
          </section>
        </section>
      </div>
    );
  }
}
