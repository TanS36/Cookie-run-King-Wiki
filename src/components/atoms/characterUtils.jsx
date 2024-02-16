// characterUtils.jsx

export const rarityOrder = [
    "Common",
    "Rare",
    "Special",
    "Epic",
    "Super_epic",
    "Legendary",
    "Dragon",
    "Ancient",
    "Guest",
  ];
  
  export const filterAndSortCharacters = (characters, options) => {
    const {
      searchTerm,
      selectedElement,
      selectedClass,
      selectedPosition,
      selectedRarity,
      showCharactersWithCandy,
      sortField,
      sortOrder,
    } = options;
  
    const filteredChars = characters
      .filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((character) =>
        selectedElement ? character.element === selectedElement : true
      )
      .filter((character) =>
        selectedClass ? character.class === selectedClass : true
      )
      .filter((character) =>
        selectedPosition ? character.position === selectedPosition : true
      )
      .filter((character) =>
        selectedRarity ? character.rarity === selectedRarity : true
      )
      .filter((character) =>
        showCharactersWithCandy === true
          ? character.candy !== undefined
          : showCharactersWithCandy === false
          ? character.candy === undefined
          : true
      );
  
    return filteredChars.sort((a, b) => {
      if (sortField === "rarity") {
        return (rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)) * (sortOrder === "asc" ? 1 : -1);
      } else if (sortField === "name") {
        return (sortOrder === "asc" ? 1 : -1) * a.name.localeCompare(b.name);
      } else if (sortField === "id") {
        return (sortOrder === "asc" ? 1 : -1) * (a.id - b.id);
      }
      return 0;
    });
  };
  