// CharacterList.jsx
import React from 'react';
import YourComponent from './YourComponent.jsx';
import './YourComponent.sass';

const CharacterList = ({ characters }) => {
  return (
    <ul className="characters">
      {characters.map((character, index) => (
        <li className="cookie" key={index}>
          <YourComponent character={character} />  
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
