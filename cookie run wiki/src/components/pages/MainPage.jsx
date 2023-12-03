import React from 'react';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';

const MainPage = () => {
  return (
    <div>
      {/* Используйте Header компонент внутри MainPage */}
      <Header />
      
      {/* Здесь можете разместить остальное содержимое вашей главной страницы */}
      <h2>Добро пожаловать на главную страницу</h2>
      <p>Это пример содержимого главной страницы.</p>
      <Footer />
    </div>
  );
};


export default MainPage;