import React from 'react';
import YourComponent from './YourComponent.jsx'; // Путь к вашему компоненту
import './YourComponent.sass'; // Путь к вашему стилю

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
