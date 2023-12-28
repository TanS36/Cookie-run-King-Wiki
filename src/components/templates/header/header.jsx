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
      <li className='Menu'><Link to="/">Main</Link></li>
      <li className='Menu'><Link to="/">Characters</Link></li>
      <li className='Menu'><Link to="/Story">Story</Link></li>
      <li className='Menu'><Link to="/">Profile</Link></li> 
      <img src="https://i.postimg.cc/85VcgYwN/Logo.png" alt="image 1"></img>
    </header>
    </>
  );
}

export default App;

