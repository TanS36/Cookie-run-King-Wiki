import React from 'react';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import Character from '../templates/characters/characters.jsx';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Character />
      <Footer />
    </div>
  );
};


export default MainPage;