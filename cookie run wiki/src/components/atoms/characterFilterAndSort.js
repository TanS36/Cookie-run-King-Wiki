// characterFilterAndSort.js
export default function characterFilterAndSort() {
    // const [selectedElement, setSelectedElement] = useState(null);
    // const [selectedClass, setSelectedClass] = useState(null);
    // const [selectedPosition, setSelectedPosition] = useState(null);
    // const [selectedRarity, setSelectedRarity] = useState(null);
    // const [selectedGame, setSelectedGame] = useState(null);
    // const [selectedSeason, setSelectedSeason] = useState(null);
    // const [sortField, setSortField] = useState("rarity");
    // const [sortOrder, setSortOrder] = useState("asc");
    // const [searchTerm, setSearchTerm] = useState("");
    // const [showCharactersWithCandy, setShowCharactersWithCandy] = useState(null);
    // const [filteredCharacters, setFilteredCharacters] = useState([]);
    // const [characters, setCharacters] = useState([]);
    // const [favorites, setFavorites] = useState([]);


    // const showAllCharactersHandler = () => {
    //     if (showAllCharacters) {
    //       setCharactersPerPage(24);
    //       setShowAllCharacters(false);
    //       setPageNumber(1); 
    //       setFilteredCharacters(characters.slice(0, charactersPerPage));
    //     } else {
    //       setCharactersPerPage(characters.length);
    //       setShowAllCharacters(true);
    //       setPageNumber(1); 
    //       setFilteredCharacters(characters); 
    //     }
    //   };
    
    //   const showFavCharactersHandler = () => {
    //     if (showFavCharacters) {
    //       const favChars = characters.filter(character => favorites.includes(character.id));
    //       setFilteredCharacters(favChars);
    //       setPageNumber(1); 
    //     } else {
    //       setFilteredCharacters(characters);
    //       setCharactersPerPage(24); 
    //       setPageNumber(1); 
    //     }
    //   };
    //   const toggleFilters = () => {
    //     setShowFilters(!showFilters);
    //   };
    
    //   const handleElementChange = (element) => {
    //     setSelectedElement(element);
    //     setPageNumber(1); 
    //   };
    
    //   const handleClassChange = (characterClass) => {
    //     setSelectedClass(characterClass);
    //     setPageNumber(1); 
    //   };
    
    //   const handlePositionChange = (position) => {
    //     setSelectedPosition(position);
    //     setPageNumber(1); 
    //   };
    
    //   const handleRarityChange = (rarity) => {
    //     setSelectedRarity(rarity);
    //     setPageNumber(1); 
    //   };
    
    //   const handleGameChange = (game) => {
    //     setSelectedGame(game);
    //     setPageNumber(1);
    //   };
      
    //   const handleSeasonChange = (season) => {
    //     setSelectedSeason(seasons[season]);
    //     setPageNumber(1);
    //   };
      
    //   const handleSortOrderChange = (field, sortOrder) => {
    //     setSortOrder(sortOrder);
    //     setSortField(field);
    //     setPageNumber(1); 
    //   };
    
    //   const handleCandyFilterChange = (value) => {
    //     setShowCharactersWithCandy(value);
    //     setPageNumber(1); 
    //   };
      
    
    //   const resetFilters = () => {
    //     setSelectedElement(null);
    //     setSelectedClass(null);
    //     setSelectedPosition(null);
    //     setSelectedRarity(null);
    //     setSelectedGame(null); 
    //     setSelectedSeason(null);
    //     setSortField("rarity");
    //     setSortOrder("asc");
    //     setSearchTerm("");
    //     setShowCharactersWithCandy(null);
    //     setPageNumber(1); 
    //   };
    
    //   const handleSearchTermChange = (event) => {
    //     const searchTerm = event.target.value.toLowerCase().trim();
    //     setSearchTerm(searchTerm);
    //     const searchRegex = new RegExp(searchTerm.split(" ").map(word => `(?=.*${word})`).join(""), "i");
    //     const filteredChars = characters.filter(character =>
    //       searchRegex.test(character.name.toLowerCase())
    //     );
    //     setFilteredCharacters(filteredChars); 
    //     setPageNumber(1);
    //   };
  
};

