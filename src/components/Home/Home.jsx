import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section className="section home-section zoom-movimento background-degrade">
      <h1>
        Guilherme
        <br />
        Baumer
      </h1>
      <p className="line typing-animation">Estudante de desenvolvimento web.</p>
      <a href="#who-am-i"><img src="svgs/angles-down-solid.svg" alt="flecha para baixo" className="arrow-down" /></a>
    </section>
  );
}
