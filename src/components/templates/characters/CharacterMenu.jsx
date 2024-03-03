import React from 'react';
import CharacterIcons from './CharacherIcons.jsx';
import './YourComponent.sass';

const CharacterMenu = ({ characters }) => {
  return (
    <ul className="characters">
      {characters.map((character) => (
        <li className="character" key={character.id}>
          <CharacterIcons character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterMenu;
