import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import '../organisms/CharacterPage.sass';
import characters from '../templates/characters/Data_ch.js';


const CharacterPage = () => {
  const { characterId } = useParams();
  const [showSkillD, setShowSkillD] = useState(true);
  const [showCandyD, setShowCandyD] = useState(false);

  // Используем characterId для получения данных о конкретном персонаже
  const character = characters.find((char) => char.id === characterId);

  // Предположим, у вас есть переменная bg в данных о персонаже, представляющая ссылку на изображение фона
  const bgImage = character ? character.bg : '';

  let positionImage = '';

  // Устанавливаем путь к изображению в зависимости от позиции персонажа
  if (character) {
    switch (character.position) {
      case 'Front':
        positionImage = 'https://i.postimg.cc/kXv2PMMw/Front.png';
        break;
      case 'Middle':
        positionImage = 'https://i.postimg.cc/NjNLLNHH/Middle.png';
        break;
      case 'Rear':
        positionImage = 'https://i.postimg.cc/W1phNRhV/Rear.png';
        break;
      default:
        positionImage = 'https://i.postimg.cc/5NPXQn9S/close.png';
    }
  }

  let rarityImage = '';

  if (character) {
    switch (character.rarity) {
      case 'Common':
        rarityImage = 'https://i.postimg.cc/h4YTvtVr/Common.png';
        break;
      case 'Rare':
        rarityImage = 'https://i.postimg.cc/8CwrSp1L/Rare.png';
        break;
      case 'Special':
        rarityImage = 'https://i.postimg.cc/mDD1ZvDJ/Special.png';
        break;
      case 'Epic':
        rarityImage = 'https://i.postimg.cc/VkqCK9pG/Epic.png';
        break;
      case 'Super_epic':
        rarityImage = 'https://i.postimg.cc/1XVgwDDK/Super-Epic.png';
        break;
      case 'Legendary':
        rarityImage = 'https://i.postimg.cc/1tjn8vVt/Legendary.png';
        break;
      case 'Dragon':
        rarityImage = 'https://i.postimg.cc/7YT72rVy/Dragon.png';
        break;
      case 'Ancient':
        rarityImage = 'https://i.postimg.cc/L8KPkQCg/Ancient.png';
        break;
      case 'Guest':
        rarityImage = 'https://i.postimg.cc/YStmZGwp/Guest.png';
        break;
    }
  }

  let elementImage = '';
  let elementText = '';

  if (character) {
    switch (character.element) {
      case 'None':
        elementImage = 'https://i.postimg.cc/gjk2Y82D/Element-None.png';
        elementText = "Without element"
        break;
      case 'poison':
        elementImage = 'https://i.postimg.cc/PxHqRBG0/Element-Poison.png';
        elementText = "Poison element"
        break;
      case 'light':
        elementImage = 'https://i.postimg.cc/Kjqv4jKy/Element-Light.png';
        elementText = "Light element"
        break;
      case 'water':
        elementImage = 'https://i.postimg.cc/FK5FY2K1/Element-Water.png';
        elementText = "Water element"
        break;
      case 'earth':
        elementImage = 'https://i.postimg.cc/FK3RGh6j/Element-Earth.png';
        elementText = "Earth element"
        break;
      case 'ice':
        elementImage = 'https://i.postimg.cc/PxMqs2TJ/Element-Ice.png';
        elementText = "Ice element"
        break;
      case 'fire':
        elementImage = 'https://i.postimg.cc/ZKn528gY/Element-Fire.png';
        elementText = "Fire element"
        break;
        default:
          elementImage = 'https://i.postimg.cc/5NPXQn9S/close.png';
          elementText = "without element";
    }
  }

  let classImage = '';

  if (character) {
    switch (character.class) {
      case 'Ambush':
        classImage = 'https://i.postimg.cc/gjXB6c4Z/Ambush.png';
        break;
      case 'Bomber':
        classImage = 'https://i.postimg.cc/MHC30krr/Bomber.png';
        break;
      case 'BTS':
        classImage = 'https://i.postimg.cc/K8mZjT62/BTS-Class.png';
        break;
      case 'Charge':
        classImage = 'https://i.postimg.cc/c1vscQbQ/Charge.png';
        break;
      case 'Defense':
        classImage = 'https://i.postimg.cc/Dzfh4sG4/Defense.png';
        break;
      case 'Healing':
        classImage = 'https://i.postimg.cc/kML7YB0L/Healing.png';
        break;
      case 'Magic':
        classImage = 'https://i.postimg.cc/htBcgNPr/Magic.png';
        break;
      case 'Ranged':
        classImage = 'https://i.postimg.cc/MKRqCzxH/Ranged.png';
        break;
      case 'Support':
        classImage = 'https://i.postimg.cc/pLJxdkmt/Support.png';
        break;
      default: classImage = 'https://i.postimg.cc/5NPXQn9S/close.png';
    }
  }

  return (
    <div>
      <Header />
      <div className="character-page" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1>{character.name} cookie</h1>
        <img className="character-art" src={character.ga} alt={character.name} />
      </div>
      <div className="content">
      {character && (
          <div className="character-details">
            {/* <img src={character.img} alt={character.name} className="cookie"/> */}
            <div className="Block">
            {rarityImage && <img src={rarityImage} alt={character.rarity} />}
            <p>{character.rarity} rarity</p> 
            </div>
            <div className="Block">
            <img src={classImage} alt={character.class} /> 
            <p>{character.class} class</p> 
            </div>
            <div className="blockimage Block">
            {positionImage && <img src={positionImage} alt={character.position} />}
            <p>{character.position} position</p> 
            </div>
            <div className="blockimage Block">
            <img src={elementImage} alt={character.element} />
            <p>{elementText}</p> 
            </div>
          </div>
        )}
        {character && (
          <div className="skill-menu">
            <div className="SkillImage">
              {character.skill && (
                <img
                  src={character.skill}
                  alt={character.name}
                  onClick={() => {
                    setShowSkillD(true);
                    setShowCandyD(false);
                    
                  }}
                />
              )}
              {character.candy && (
                <img
                  src={character.candy}
                  alt={character.name}
                  onClick={() => {
                    setShowSkillD(false);
                    setShowCandyD(true);
                  }}
                />
              )}
            </div>
            {(showSkillD || showCandyD) && (
              <div className="SkillBlock">
                {showSkillD && character.skillD && <p>{character.skillD}</p>}
                {showCandyD && character.candyD && <p>{character.candyD}</p>}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CharacterPage;

