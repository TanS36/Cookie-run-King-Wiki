import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import '../organisms/CharacterPage.sass';
import { firestore } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const CharacterPage = () => {
  const { characterName } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const charactersRef = collection(firestore, "Characters");
        const querySnapshot = await getDocs(charactersRef);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name === characterName) {
            setCharacter(data);
          }
        });
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [characterName]);

  if (!character) {
    return <div>Loading...</div>;
  }

  const renderElements = () => {
    if (Array.isArray(character.element)) {
      return character.element.map((element, index) => (
        <div className="Block" key={index}>
          <img src={`https://i.postimg.cc/${getElementImage(element)}.png`} alt={element} />
          <p>{getElementText(element)}</p>
        </div>
      ));
    } else {
      const elements = JSON.parse(character.element);
      return elements.map((element, index) => (
        <div className="Block" key={index}>
          <img src={`https://i.postimg.cc/${getElementImage(element)}.png`} alt={element} />
          <p>{getElementText(element)}</p>
        </div>
      ));
    }
  };

  const getElementImage = (element) => {
    switch (element) {
      case 'None':
        return 'gjk2Y82D/Element-None';
      case 'poison':
        return 'PxHqRBG0/Element-Poison';
      case 'light':
        return 'Kjqv4jKy/Element-Light';
      case 'water':
        return 'FK5FY2K1/Element-Water';
      case 'earth':
        return 'FK3RGh6j/Element-Earth';
      case 'ice':
        return 'PxMqs2TJ/Element-Ice';
      case 'fire':
        return 'ZKn528gY/Element-Fire';
      default:
        return '5NPXQn9S/close';
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

  return (
    <div>
      <Header />
      <div className="character-page" style={{ backgroundImage: `url(${character.bg})` }}>
        <h1>{character.name} cookie</h1>
        <img className="character-art" src={character.ga} alt={character.name} />
      </div>
      <div className="content">
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
      </div>
      <Footer />
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

export default CharacterPage;
