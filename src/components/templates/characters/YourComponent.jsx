// YourComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './YourComponent.sass';

const YourComponent = ({ character }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(`/${character.name.toLowerCase()}`);
  };

  return (
    <div className={`image-container ${isHovered ? 'hovered' : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={handleClick}>
      <img src={character.img} alt={character.name} className="character-image" />
      {isHovered && (
        <div className="overlay">
          <div className="text">{character.name}</div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
