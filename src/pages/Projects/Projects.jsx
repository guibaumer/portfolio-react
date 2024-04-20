import React from 'react';
import FourthSection from '../../components/FourthSection/FourthSection';

export default function Projects() {
  const projects = [
    {
      name: 'WhatsApp Clone',
      description: 'Site desenvolvido com apenas HTML e CSS (responsivo, assim como os outros). Projeto de clone do WhatsApp do curso de CSS Avançado do HoraDeCodar.',
      link: 'https://guibaumer.github.io/css-avancado/2-projeto-clone/meu-projeto/',
      src: 'miniatura/whatsapp.png',
      id: '1',
      tags: ['html.svg', 'css.svg'],
    },
    {
      name: 'Doceria',
      description: 'Projeto desenvolvido com HTML, CSS e um pouco de Javascript. Criado para exercitar a capacidade de replicar designs e torná-los responsivos. Projeto do curso de CSS Avançado do HoraDeCodar.',
      link: 'https://guibaumer.github.io/css-avancado/0-projeto-doceria/',
      src: 'miniatura/doceria.png',
      id: '2',
      tags: ['html.svg', 'css.svg', 'javascript.svg'],
    },
    {
      name: 'Página do Google',
      description: 'Site desenvolvido com apenas HTML e CSS. Projeto de clone da página de pesquisa do Google, do curso de CSS Avançado do HoraDeCodar.',
      link: 'https://guibaumer.github.io/css-avancado/3-projeto-google/meu-projeto/',
      src: 'miniatura/google-clone.png',
      id: '3',
      tags: ['html.svg', 'css.svg'],
    },
    {
      name: 'Gerador de Senha',
      description: 'Site desenvolvido com HTML, CSS e Javascript. Gera uma senha conforme selecionadas as opções.',
      link: 'https://guibaumer.github.io/cursoUdemy/0-exercicios/exercicio14-senha/index.html',
      src: 'miniatura/gerador-de-senhas.png',
      id: '5',
      tags: ['javascript.svg', 'html.svg', 'css.svg'],
    },
  ];

  return (
    <FourthSection projects={projects} back />
  );
}
