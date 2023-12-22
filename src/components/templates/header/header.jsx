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
      <li className='Menu'><Link to="/">Main</Link></li>
      <li className='Menu'><Link to="/">Characters</Link></li>
      <li className='Menu'><Link to="/Story">Story</Link></li>
      <li className='Menu'><Link to="/">Profile</Link></li> 
      <img className="Logo" src="../src/assets/Other/Logo.png" alt="image 1"></img>
    </header>
    </>
  );
}

export default App;

