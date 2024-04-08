// StoryPage.jsx
import React from 'react';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import '../organisms/StoryPage.sass'

const StoryPage = () => {
  return (
    <div className="story">
      <Header />
      <div className="content">
      <h1 style={{ color: 'white', fontSize: '60px' }}>Извините, страница не закончена</h1>
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;