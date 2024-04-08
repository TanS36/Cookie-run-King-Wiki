export const rarityOrder = [
  "Common",
  "Rare",
  "Epic",
  "Super epic",
  "Legendary",
  "Dragon",
  "Ancient",
  "Special",
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
    selectedGame,
    selectedSeason
  } = options;

  const searchWords = searchTerm ? searchTerm.toLowerCase().split(" ").filter(word => word) : [];

  const filteredChars = characters.filter((character) => {
    return searchWords.every(word => {
      const regex = new RegExp(`\\b${word}`, 'i'); // Создаем регулярное выражение для поиска только в начале слова
      return character.title && regex.test(character.title.toLowerCase());
    });
  }).filter((character) =>
    selectedElement ? (character.element && character.element.includes(selectedElement)) : true
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
  ).filter((character) =>
    selectedGame ? character.game === selectedGame : true // Фильтрация по выбранной игре
  ).filter((character) =>
    selectedSeason // Фильтрация по выбранному сезону
      ? character.releaseDate >= selectedSeason.start && character.releaseDate <= selectedSeason.end
      : true
  );

  return filteredChars.sort((a, b) => {
    if (sortField === "rarity") {
      return (
        rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
      ) * (sortOrder === "asc" ? 1 : -1);
    } else if (sortField === "name") {
      return (sortOrder === "asc" ? 1 : -1) * (a.title && b.title && a.title.localeCompare(b.title));
    } else if (sortField === "id") {
      return (sortOrder === "asc" ? 1 : -1) * (a.id - b.id);
    }
    return 0;
  });
};
