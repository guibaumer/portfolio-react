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
      <div className="svg-div">
        <img className="svg" src="../../../public/svgs/javascript-155-svgrepo-com.svg" alt="" />
        <img className="svg" src="../../../public/svgs/html-124-svgrepo-com.svg" alt="" />
        <img className="svg" src="../../../public/svgs/css3-02-svgrepo-com.svg" alt="" />
        <img className="svg" src="../../../public/svgs/react-logo-programming-2-svgrepo-com.svg" alt="" />
      </div>
      <a href="#who-am-i"><img src="svgs/angles-down-solid.svg" alt="flecha para baixo" className="arrow-down" /></a>
    </section>
  );
}
