import React from 'react';

import './SecondSection.css';

function App() {
  return (
    <section className="section skills background-degrade" id="skills-id">
      <h2>Habilidades</h2>
      <section className="grid">

        <div className="curso">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.cursoemvideo.com/curso/javascript/"
              target="_blank"
            >
              Javascript (40 horas)
            </a>

          </h4>
          <p className="fornecedor">- Curso Em Vídeo</p>
          <p className="estado">Completo</p>
        </div>
        <div className="curso pt-0">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-3-de-5-40-horas/"
              target="_blank"
            >
              HTML e CSS - módulo 3 (40 horas)
            </a>

          </h4>
          <p className="fornecedor">- Curso Em Vídeo</p>
          <p className="estado">Completo</p>
        </div>
        <div className="curso pt-0">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-4-de-5-40-horas/"
              target="_blank"
            >
              HTML e CSS - módulo 4 (40 horas)
            </a>

          </h4>
          <p className="fornecedor">- Curso Em Vídeo</p>
          <p className="estado">Completo</p>
        </div>
        <div className="curso">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.cursoemvideo.com/curso/curso-pratico-de-seo-modulo-01/"
              target="_blank"
            >
              SEO - módulo 1 (40 horas)
            </a>

          </h4>
          <p className="fornecedor">- Curso Em Vídeo</p>
          <p className="estado">Completo</p>
        </div>
        <div className="curso pt-0 incompleto">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
              target="_blank"
            >
              Javascript e Typescript (140 horas)
            </a>

          </h4>
          <p className="fornecedor">- Udemy</p>
          <p className="estado cursando">Cursando (50%)</p>
        </div>
        <div className="curso pt-0">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.udemy.com/course/html5-e-css3-tecnicas-avancadas-com-flexbox-e-3-projetos/"
              target="_blank"
            >
              HTML e CSS avançados (10 horas)
            </a>

          </h4>
          <p className="fornecedor">- Udemy</p>
          <p className="estado">Completo</p>
        </div>
        <div className="curso pt-0 completo">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/"
              target="_blank"
            >
              React do Zero a Maestria (30 horas)
            </a>

          </h4>
          <p className="fornecedor">- Udemy</p>
          <p className="estado">Completo</p>
        </div>
        <div className="curso completo">
          <p className="tipo">Curso</p>
          <h4 className="nome">
            <a
              rel="noopener noreferrer"
              href="https://www.cursoemvideo.com/curso/excell/"
              target="_blank"
            >
              Excel Básico (40 horas)
            </a>

          </h4>
          <p className="fornecedor">- Curso Em Vídeo</p>
          <p className="estado">Completo</p>
        </div>
      </section>
    </section>
  );
}

export default App;
