import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.module.sass';

const App = () => {
  const [navWidth, setNavWidth] = useState('none');

  const openNav = () => {
    setNavWidth('block');
    console.log('start')
  }

  const closeNav = () => {
    setNavWidth('none');
  }

  return (
    <>
    <header>
      <div id="myNav" className="overlay" style={{ display: `${navWidth}` }}>
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
          <li><Link to="/">Главная</Link></li>
        </div>
      </div>
      <span className="MenuButton" onClick={openNav}>&#9776;</span>
      <li><Link to="/">Main</Link></li>
      <li><Link to="/">Characters</Link></li>
      <li><Link to="/">Story</Link></li>
      <li><Link to="/">Profile</Link></li> 
      <img src="../src/assets/Other/Logo.png" alt="image 1"></img>
    </header>
    </>
  );
}

export default App;

