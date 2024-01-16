import React from 'react';

import './FifthSection.css';

function FifthSection() {
  return (
    <section className="section contato" id="contato-id">

      <div className="container-shadow">
        <h2>Contato</h2>
        <p>
          <span className="negrito">Email para contato:</span>
          guilherme.a.baumer@gmail.com
        </p>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/notifications/?filter=all"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/guibaumer"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>

      <img src="imgs/signboard.png" alt="placa com a escrita 'thank you'" />
    </section>
  );
}

export default FifthSection;
