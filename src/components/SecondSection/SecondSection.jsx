import React from 'react';

import './SecondSection.css';

function SecondSection() {
  return (
    <section className="experience-section" id="experience">
      <h2>EXPERIÊNCIA PROFISSIONAL</h2>
      <div className="experience">
        <p>
          Minha experiência com a área é baixa: se resume apenas ao meu trabalho como freelancer.
          Sou cadastrado na plataforma Workana
          e lá consegui alguns trabalhos com a intenção de ganhar experiência. Cheque meu perfil!
        </p>
      </div>
      <p className="p-workana">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <a
          href="https://www.workana.com/freelancer/08f2df32c124141841f70baf2c123efd"
          target="_blank"
          rel="noreferrer"
        >
          <img src="svgs/workana.svg" alt="" className="workana-logo" />
        </a>
      </p>
    </section>
  );
}

export default SecondSection;
