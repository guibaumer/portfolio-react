import React from 'react';

import './FourthSection.css';

function FourthSection() {
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

  const projects = [
    {
      name: 'Gerador de CPF',
      description: 'Projeto desenvolvido com Javascript, HTML e CSS. Gera um CPF válido novo a cada clique.',
      link: 'https://guibaumer.github.io/cursoUdemy/0-exercicios/exercicio13-criacpf/index.html',
      src: 'miniatura/gera-cpfs.png',
      id: '1',
      tags: ['javascript.svg', 'html-5-svgrepo-com.svg', 'css-3-svgrepo-com.svg'],
    },
    {
      name: 'Doceria',
      description: 'Projeto desenvolvido com HTML, CSS e um pouco de Javascript. Criado para exercitar a capacidade de replicar designs e torná-los responsivos. Projeto do curso de CSS Avançado do HoraDeCodar.',
      link: 'https://guibaumer.github.io/css-avancado/0-projeto-doceria/',
      src: 'miniatura/doceria.png',
      id: '2',
      tags: ['html-5-svgrepo-com.svg', 'css-3-svgrepo-com.svg', 'javascript.svg'],
    },
    {
      name: 'WhatsApp Clone',
      description: 'Site desenvolvido com apenas HTML e CSS (responsivo, assim como os outros). Projeto de clone do WhatsApp do curso de CSS Avançado do HoraDeCodar.',
      link: 'https://guibaumer.github.io/css-avancado/2-projeto-clone/meu-projeto/',
      src: 'miniatura/whatsapp.png',
      id: '3',
      tags: ['html-5-svgrepo-com.svg', 'css-3-svgrepo-com.svg'],

    },
    {
      name: 'Página do Google',
      description: 'Site desenvolvido com apenas HTML e CSS. Projeto de clone da página de pesquisa do Google, do curso de CSS Avançado do HoraDeCodar.',
      link: 'https://guibaumer.github.io/css-avancado/3-projeto-google/meu-projeto/',
      src: 'miniatura/google-clone.png',
      id: '4',
      tags: ['html-5-svgrepo-com.svg', 'css-3-svgrepo-com.svg'],

    },
    {
      name: 'Gerador de Senha',
      description: 'Site desenvolvido com HTML, CSS e Javascript. Gera uma senha conforme selecionadas as opções.',
      link: 'https://guibaumer.github.io/cursoUdemy/0-exercicios/exercicio14-senha/index.html',
      src: 'miniatura/gerador-de-senhas.png',
      id: '5',
      tags: ['javascript.svg', 'html-5-svgrepo-com.svg', 'css-3-svgrepo-com.svg'],

    },
    {
      name: 'Lista de Tarefas - React',
      description: 'Site desenvolvido com o framework React. Ele armazena as tarefas no local storage.',
      link: 'https://guibaumer.github.io/lista-local_storage',
      src: 'miniatura/lista-tarefas.png',
      id: '6',
      tags: ['react-logo.svg', 'html-5-svgrepo-com.svg', 'css-3-svgrepo-com.svg'],

    },
  ];
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

    </section>
  );
}

export default FourthSection;
