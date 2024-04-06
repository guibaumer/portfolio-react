import React from 'react';

import './FirstSection.css';

function App() {
  return (
    <section className="section whoAmI" id="who-am-i">
      <div className="foto">
        <img src="imgs/minha-foto.jpg" alt="Minha foto" className="minha-foto" />
      </div>
      <div className="dados">
        <h2>Quem sou eu?</h2>
        <p>
          Me chamo Guilherme, estudo programação há cerca de 1 ano e estou focado no
          <strong> desenvolvimento web </strong>
          . Tenho grande interesse por tecnologia,
          assim como por leitura, video-game e música.
        </p>
        <p>
          Comecei meus estudos com cursos gratuitos de
          <strong> Javascript</strong>
          ,
          <strong> HTML </strong>
          e
          <strong> CSS </strong>
          e quando percebi que realmente gostei do assunto, adquiri um curso da Udemy de
          desenvolvimento full-stack, que ainda
          estou finalizando.
        </p>
        <p>
          Quando falamos em linguagens de programação, desde que comecei meus estudos
          mantive o foco no Javascript, mas também estou estudando
          <strong> Typescript</strong>
          ,
          um superset de Javascript. Desenvolvo com
          <strong> React </strong>
          e Node.js, tenho conhecimento
          básicos de back-end e SEO e muita vontade de aprender.
        </p>
      </div>
    </section>
  );
}

export default App;
