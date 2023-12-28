// CharacterList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import YourComponent from './YourComponent.jsx';
import './YourComponent.sass';

const CharacterList = ({ characters }) => {
  return (
    <ul className="characters">
      {characters.map((character, index) => (
        <li className="cookie" key={index}>
          <Link to={`/characters/${character.id}`}>
            <YourComponent character={character} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
