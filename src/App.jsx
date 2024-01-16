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
  return (
    <>
      <Header />
      <Home />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>

  );
}

export default App;
