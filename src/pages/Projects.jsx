import React, { Component } from 'react';
import Header from '../components/Header';
import ProjectFilter from '../components/ProjectFilter';
import ProjectsImage from '../components/ProjectsImage';
import { projects } from '../resource/data';
import '../styles/project.css';

export default class Projects extends Component {
  state = {
    Allprojects: projects,
  };

  filterProjects = ({ target }) => {
    const { id } = target;
    if (id === 'all') {
      this.setState(() => ({
        Allprojects: projects,
      }));
    } else {
      this.setState(() => ({
        Allprojects: projects.filter((project) => project.type === id),
      }));
    }
  };

  render() {
    const { Allprojects } = this.state;
    return (
      <div className="projects-all">
        <Header />
        <section className="projects-contents">
          <div className="projects">
            {(Allprojects.length < 1) ? (
              <p className="message-error">
                Ainda não tenho nenhum projeto nessa categoria,
                que tal voltar mais tarde ?
              </p>)
              : Allprojects.map((project, index) => {
                const { name, image } = project;
                return (
                  <ProjectsImage
                    key={ index }
                    name={ name }
                    image={ image }
                  />
                );
              })}
          </div>
          <div className="list-projects">
            <p className="teste">Meus Projetos</p>
            <div className="project-filter">
              <ProjectFilter handleClick={ this.filterProjects } />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
