import React from 'react';
import styles from '../../organisms/CharacterPage.module.sass'

const CharacterDetails = ({ character }) => {
  const renderElements = () => {
    if (!character || !character.element) {
      return null; 
    }

       if (Array.isArray(character.element)) {
      return character.element.map((element, index) => (
        <div className={styles.Block} key={index}>
          <img src={`${getElementImage(element)}`} alt={element} />
          <p>{getElementText(element)}</p>
        </div>
      ));
    } else {
      try {
        const elements = JSON.parse(character.element);
        return elements.map((element, index) => (
          <div className={styles.Block} key={index}>
            <img src={`${getElementImage(element)}`} alt={element} />
            <p>{getElementText(element)}</p>
          </div>
        ));
      } catch (error) {
        console.error("Error parsing element JSON:", error);
        return null;
      }
    }
  };

  return (
    <div className={styles.CharacterDetails}>
      <div className={styles.Block}>
        {character.rarity && <img src={`https://i.postimg.cc/${getRarityImage(character.rarity)}.png`} alt={character.rarity} />}
        <p>{character.rarity} rarity</p>
      </div>
      <div className={styles.Block}>
        {character.class && <img src={`${getClassImage(character.class)}`} alt={character.class} />}
        <p>{character.class} class</p>
      </div>
      <div className={styles.Block}>
        {character.position && <img src={`https://i.postimg.cc/${getPositionImage(character.position)}.png`} alt={character.position} />}
        <p>{character.position} position</p>
      </div>
      {renderElements()}
    </div>
  );
};
const getRarityImage = (rarity) => {
    switch (rarity) {
      case 'Common':
        return 'h4YTvtVr/Common';
      case 'Rare':
        return '8CwrSp1L/Rare';
      case 'Special':
        return 'mDD1ZvDJ/Special';
      case 'Epic':
        return 'VkqCK9pG/Epic';
      case 'Super epic':
        return '1XVgwDDK/Super-Epic';
      case 'Legendary':
        return '1tjn8vVt/Legendary';
      case 'Dragon':
        return '7YT72rVy/Dragon';
      case 'Ancient':
        return 'L8KPkQCg/Ancient';
      case 'Beast':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FSoulstone_beast.webp?alt=media&token=fa1a0b67-957f-49f2-8148-d1a722718d7a';
      case 'Guest':
        return 'YStmZGwp/Guest';
      default:
        return '5NPXQn9S/close';
    }
  };

  const getClassImage = (characterClass) => {
    switch (characterClass) {
      case 'Ambush':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FAmbush.webp?alt=media&token=5fa87ad0-f743-4054-b711-6108e40871fa';
      case 'Bomber':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FBomber.webp?alt=media&token=178ce04c-6563-4cac-8b8d-ce21e7a87957';
      case 'BTS':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FBTSclass.webp?alt=media&token=ac5500df-fa51-44b7-9c6c-12fd8a295a65';
      case 'Charge':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FCharge.webp?alt=media&token=95fa57ed-c8b5-444f-809e-f06443b1b208';
      case 'Defense':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FDefense.webp?alt=media&token=d2f7b16b-6b61-4128-95c7-f6500213ca4f';
      case 'Healing':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FHealing.webp?alt=media&token=7b65fa05-8427-4eea-bb60-5ae7584d4dca';
      case 'Magic':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FMagic.webp?alt=media&token=45b70eba-18c2-40c2-b994-50160369fad7';
      case 'Ranged':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FRanged.webp?alt=media&token=c9a4bba3-c61f-457f-8ac0-bc8ca74fc2c0';
      case 'Support':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclass%2FSupport.webp?alt=media&token=ea345fcc-f094-4cd4-8ec0-b8884882fa9b';
      default:
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclose.webp?alt=media&token=0e5444fa-bc2b-44dd-b8da-d71f6110c0ca';
      case none:
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclose.webp?alt=media&token=0e5444fa-bc2b-44dd-b8da-d71f6110c0ca';
    }
  };
  const getPositionImage = (position) => {
    switch (position) {
      case 'Front':
        return 'kXv2PMMw/Front';
      case 'Middle':
        return 'NjNLLNHH/Middle';
      case 'Rear':
        return 'W1phNRhV/Rear';
      default:
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclose.webp?alt=media&token=0e5444fa-bc2b-44dd-b8da-d71f6110c0ca';
    }
  };

const getElementImage = (element) => {
    switch (element) {
      case 'None':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_All.webp?alt=media&token=917fa46b-a576-42b8-aead-2404898aaae5';
      case 'poison':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Poison.webp?alt=media&token=26b59aaf-7ba5-481e-ab01-d8982cb34936';
      case 'light':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Light.webp?alt=media&token=8a7a17aa-665e-4f0d-b848-433d6006344b';
      case 'water':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Water.webp?alt=media&token=501d6721-054d-43f1-a0c8-9e7bd0b4952f';
      case 'earth':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Earth.webp?alt=media&token=e6b040a0-6178-4f44-b996-f0054ba71e91';
      case 'ice':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Ice.webp?alt=media&token=005c5b44-b8d6-4ab5-820c-7edac0690ade';
      case 'fire':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Fire.webp?alt=media&token=9a5d64d7-1a23-4498-95f3-16ca1da821ba';
      case 'electricity':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Light.webp?alt=media&token=8a7a17aa-665e-4f0d-b848-433d6006344b';
      case 'darkness':
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_Darkness.webp?alt=media&token=986d0fa8-054a-4cc4-8e98-7760fc8c6cd8';
      default:
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Fclose.webp?alt=media&token=0e5444fa-bc2b-44dd-b8da-d71f6110c0ca';
    }
  };

const getElementText = (element) => {
    switch (element) {
      case 'None':
        return 'Without element';
      case 'poison':
        return 'Poison element';
      case 'light':
        return 'Light element';
      case 'water':
        return 'Water element';
      case 'earth':
        return 'Earth element';
      case 'ice':
        return 'Ice element';
      case 'fire':
        return 'Fire element';
      case 'electricity':
        return 'Electricity element';
      default:
        return 'Without element';
    }
  };

export default CharacterDetails;
