// CharacterList.jsx
import React from 'react';
import YourComponent from './YourComponent.jsx';
import styles from './YourComponent.module.sass';

const CharacterList = ({ characters, toggleFavorite }) => {
  return (
    <ul className={styles['characters']}>
      {characters.map((character, index) => (
        <li className={styles['cookie']} key={index}>
          <YourComponent character={character} toggleFavorite={toggleFavorite} />  
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
