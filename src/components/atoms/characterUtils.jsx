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
  
    const searchWords = searchTerm ? searchTerm.toLowerCase().split(" ").filter(word => word) : [];
  
    const filteredChars = characters.filter((character) => {
      return searchWords.every(word => character.name.toLowerCase().startsWith(word));
    }).filter((character) =>
      selectedElement ? character.element.includes(selectedElement) : true
    ).filter((character) =>
      selectedClass ? character.class === selectedClass : true
    ).filter((character) =>
      selectedPosition ? character.position === selectedPosition : true
    ).filter((character) =>
      selectedRarity ? character.rarity === selectedRarity : true
    ).filter((character) =>
      showCharactersWithCandy !== null
        ? showCharactersWithCandy
          ? character.candy !== undefined
          : character.candy === undefined
        : true
    );
  
    return filteredChars.sort((a, b) => {
      if (sortField === "rarity") {
        return (
          rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
        ) * (sortOrder === "asc" ? 1 : -1);
      } else if (sortField === "name") {
        return (sortOrder === "asc" ? 1 : -1) * a.name.localeCompare(b.name);
      } else if (sortField === "id") {
        return (sortOrder === "asc" ? 1 : -1) * (a.id - b.id);
      }
      return 0;
    });
  };
  