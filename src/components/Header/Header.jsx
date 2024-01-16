import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="nav-menu">

        <div className="svg-icons">
          <a href="https://github.com/guibaumer" target="_blank" rel="noopener noreferrer">
            <img src="../../../public/svgs/github-142-svgrepo-com.svg" alt="logo do github" />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="https://www.linkedin.com/in/guilherme-baumer-125865275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../../public/svgs/linkedin-round-svgrepo-com.svg" alt="logo do linkedin" />
          </a>
        </div>

        <ul className="not-hidden-ul">
          <li><a href="#who-am-i">Quem sou?</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#skills-id">Habilidades</a></li>
          <li><a href="#projetos-id">Projetos</a></li>
          <li><a href="#contato-id">Contato</a></li>
        </ul>

        {/* eslint-disable-next-line */}
        <span className="material-symbols-outlined material-symbols-outlined-menu" onClick={() => document.querySelector('.hidden').style.display = 'flex'}>menu</span>

      </nav>

      <div className="hidden">
        <ul>
          {/* eslint-disable-next-line */}
          <span onClick={() => document.querySelector('.hidden').style.display = 'none'} className="material-symbols-outlined material-symbols-outlined-close">
            close
          </span>
          <li><a href="#who-am-i" className="link-desaparecer">Quem sou?</a></li>
          <li><a href="#skills-id" className="link-desaparecer">Habilidades</a></li>
          <li><a href="#projetos-id" className="link-desaparecer">Projetos</a></li>
          <li><a href="#contato-id" className="link-desaparecer">Contato</a></li>
        </ul>
      </div>
    </header>
  );
}
