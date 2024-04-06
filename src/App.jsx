import React from 'react';

import './App.css';
import './MediaQueries.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import Footer from './components/Footer/Footer';

function App() {
  const projects = [
    {
      name: 'Gerador de CPF',
      description: 'Projeto desenvolvido com Javascript, HTML e CSS. Gera um CPF válido novo a cada clique.',
      link: 'https://guibaumer.github.io/cursoUdemy/0-exercicios/exercicio13-criacpf/index.html',
      src: 'miniatura/gera-cpfs.png',
      id: '1',
      tags: ['javascript.svg', 'html.svg', 'css.svg'],
    },
    {
      name: 'Login App',
      description: 'Site desenvolvido com Next.js, consumindo uma API criada com Express, que está ligada a um banco PostgreSQL. Se trata de um sistema de login que usa sessions.',
      link: 'https://login-next.netlify.app/',
      src: 'miniatura/login.png',
      id: '2',
      tags: ['Next.js.svg'],
    },
    {
      name: 'IMDb',
      description: 'Consumo da API da Internet Movie Database. Criado com React.js.',
      link: 'https://guibaumer-imdb.netlify.app/',
      src: 'miniatura/imdb.png',
      id: '3',
      tags: ['react-logo.svg'],
    },
    {
      name: 'Restaurante',
      description: 'Projeto de um portfolio um restaurante. Possui um CSS bem trabalhado e ícones de redes sociais que funcionam.',
      link: 'https://guibaumer.github.io/Sites/restaurante/',
      src: 'miniatura/restaurante.png',
      id: '4',
      tags: ['html.svg', 'css.svg', 'javascript.svg'],
    },
    {
      name: 'Gerador de Senha',
      description: 'Site desenvolvido com HTML, CSS e Javascript. Gera uma senha conforme selecionadas as opções.',
      link: 'https://guibaumer.github.io/cursoUdemy/0-exercicios/exercicio14-senha/index.html',
      src: 'miniatura/gerador-de-senhas.png',
      id: '5',
      tags: ['javascript.svg', 'html.svg', 'css.svg'],
    },
    {
      name: 'Lista de Tarefas - React',
      description: 'Site desenvolvido com o framework React. Ele armazena as tarefas no local storage.',
      link: 'https://guibaumer.github.io/lista-local_storage',
      src: 'miniatura/lista-tarefas.png',
      id: '6',
      tags: ['react-logo.svg', 'html.svg', 'css.svg'],
    },
  ];

  return (
    <>
      <Header />
      <Home />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection projects={projects} />
      <FifthSection />
      <Footer />
    </>

  );
}

export default App;
