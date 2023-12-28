// StoryPage.jsx
import React from 'react';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';

const StoryPage = () => {
  return (
    <div className="story">
      <Header />
      <div style={{ background: '#d7c4b5', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ color: 'white', fontSize: '80px' }}>Извините, страница не закончена</h1>
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;

