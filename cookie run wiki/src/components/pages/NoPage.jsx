import React from 'react';

const NoPage = () => {
  return (
    <div style={{ backgroundColor: 'blue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ color: 'white' }}>Извините, страница не найдена</h1>
      <img src="https://i.postimg.cc/4xqnBy9K/No-page-image.png" alt="Not Found" style={{ width: '300px', marginTop: '20px' }} />
    </div>
  );
};

export default NoPage;