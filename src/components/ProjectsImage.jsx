import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProjectsImage extends Component {
  state = {
    texto: [],
  };

  componentDidMount() {
    this.designedText();
  }

  designedText = () => {
    const { name } = this.props;
    let texto = [];
    switch (name) {
    case 'Trybewards':
      texto = ['CSS', 'JavaScript', 'HTML'];
      break;
    case 'Solar System':
      texto = ['React', 'JavaScript', 'CSS'];
      break;
    case "trybetunes":
      texto = ['a', 'CSS', 'JavaScript'];
    }

    this.setState(() => ({
      texto,
    }));
  };

  render() {
    const { name, image } = this.props;
    const { texto } = this.state;
    return (
      <div className="project-info">
        <a href={`https://github.com/PedroEmmanuelBuerger/${"algorithms"}`} className='project-info' target="_blank">
          <p>{ name }</p>
          <img src={ image } alt={ `${name} project` } />
          <ul className="centered">
            {' '}
            Linguagens utilizadas :
            {texto.map((text) => <li key={ text }>{ text }</li>)}
          </ul>
        </a>
      </div>
    );
  }
}

ProjectsImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
