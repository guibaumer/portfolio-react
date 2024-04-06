import React from 'react';

import './FourthSection.css';
import { Link } from 'react-router-dom';

function FourthSection({ projects, back }) {
  const showText = (el, proj) => {
    const { display } = document.querySelector(`.${el}`).style;
    if (display === 'flex') {
      document.querySelector(`.${el}`).style.display = 'none';
      document.querySelector(`.${proj}`).style.display = 'block';
    } else {
      document.querySelector(`.${el}`).style.display = 'flex';
      document.querySelector(`.${proj}`).style.display = 'none';
    }
  };

  return (
    <section className="section projetos" id="projetos-id">
      <h2>Projetos</h2>

      <div className="grid-projects">

        {projects.map((project) => (
          <div className="container" key={project.id}>
            <div className={`info info_${project.id}`}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="floating-div">
                {project.tags && (project.tags).map((tag) => (
                  <img
                    className={`tech-svg ${(tag === 'javascript.svg' || tag === 'react-logo.svg') && 'js-svg'}`}
                    key={project.name + (Math.round(Math.random() * 1000))}
                    src={`svgs/${tag}`}
                    alt="tecnologia"
                  />
                ))}
              </div>
            </div>
            <img alt="imagem do projeto" className={`project project_${project.id}`} src={project.src} />

            <button
              type="button"
              href="#"
              className="visitar-site info-button"
              onClick={() => showText(`info_${project.id}`, `project_${project.id}`)}
            >
              INFORMAÇÕES
            </button>
            <a
              rel="noopener noreferrer"
              className="visitar-site"
              target="_blank"
              href={project.link}
            >
              VISITAR
            </a>
          </div>
        ))}

      </div>

      {back ? (
        <Link className="other-projects go-back" to="/">VOLTAR</Link>
      ) : (
        <Link className="other-projects" to="/other-projects">VER MAIS PROJETOS</Link>
      )}

    </section>
  );
}

export default FourthSection;
