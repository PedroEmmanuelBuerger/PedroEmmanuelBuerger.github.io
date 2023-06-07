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
              Ola, sejam bem vindos(a)!!
              Me chamo Pedro Emmanuel. Sou apaixonado por tecnologia desde que me conheço
              por gente,
              Sempre estou indo em busca de novos conhecimentos e de muita evolução
              pessoal.
              em 2019 até 2021 atuei como design gráfico e design de midias sociais,
              passando pelo curso de marketing digital e design gráfico do SENAI.
              Como designer apliquei muita comunicação e trabalho em equipe alem de
              adiquirir minha primeira experiencia profissional.
              Em 2022 faço minha transição da área do design gráfico para a carreira de
              programação,
              começando como estudante da instituição Trybe.
              Faço a transição de carreira para o Desenvolvimento Web pois sempre tive
              muito contato
              com esta área e vejo que o futuro que ela traz é incrivel e muito vasto,
              tendo tambem
              certo histórico com a area de programação nos anos de 2017-2018 na
              instituição CEDUP Hermann Hering.
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
