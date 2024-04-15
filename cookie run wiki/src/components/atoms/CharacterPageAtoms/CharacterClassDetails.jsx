import React from 'react';

const CharacterDetails = ({ character }) => {
  const renderElements = () => {
    if (!character || !character.element) {
      return null; // Return null or any other default content if character or character.element is undefined
    }

       if (Array.isArray(character.element)) {
      return character.element.map((element, index) => (
        <div className="Block" key={index}>
          <img src={`https://i.postimg.cc/${getElementImage(element)}.png`} alt={element} />
          <p>{getElementText(element)}</p>
        </div>
      ));
    } else {
      try {
        const elements = JSON.parse(character.element);
        return elements.map((element, index) => (
          <div className="Block" key={index}>
            <img src={`${getElementImage(element)}`} alt={element} />
            <p>{getElementText(element)}</p>
          </div>
        ));
      } catch (error) {
        console.error("Error parsing element JSON:", error);
        return null; // Return null or handle the error gracefully
      }
    }
  };

  return (
    <div className="character-details">
      <div className="Block">
        {character.rarity && <img src={`https://i.postimg.cc/${getRarityImage(character.rarity)}.png`} alt={character.rarity} />}
        <p>{character.rarity} rarity</p>
      </div>
      <div className="Block">
        {character.class && <img src={`https://i.postimg.cc/${getClassImage(character.class)}.png`} alt={character.class} />}
        <p>{character.class} class</p>
      </div>
      <div className="blockimage Block">
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
      case 'Guest':
        return 'YStmZGwp/Guest';
      default:
        return '5NPXQn9S/close';
    }
  };

  const getClassImage = (characterClass) => {
    switch (characterClass) {
      case 'Ambush':
        return 'gjXB6c4Z/Ambush';
      case 'Bomber':
        return 'MHC30krr/Bomber';
      case 'BTS':
        return 'K8mZjT62/BTS-Class';
      case 'Charge':
        return 'c1vscQbQ/Charge';
      case 'Defense':
        return 'Dzfh4sG4/Defense';
      case 'Healing':
        return 'kML7YB0L/Healing';
      case 'Magic':
        return 'htBcgNPr/Magic';
      case 'Ranged':
        return 'MKRqCzxH/Ranged';
      case 'Support':
        return 'pLJxdkmt/Support';
      default:
        return '5NPXQn9S/close';
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
        return '5NPXQn9S/close';
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
      default:
        return 'https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2FElement_All.webp?alt=media&token=917fa46b-a576-42b8-aead-2404898aaae5';
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
      default:
        return 'Without element';
    }
  };

export default CharacterDetails;
