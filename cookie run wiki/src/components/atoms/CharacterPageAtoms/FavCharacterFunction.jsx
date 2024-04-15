// В файле FavCharacterFunction.jsx
import React, { useState, useEffect } from 'react';
import { firestore } from "../../../../firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase.js';

const FavCharacterFunction = ({ character }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [user, loading, error] = useAuthState(auth);
  
    useEffect(() => {
      const checkIsFavorite = async () => {
        console.log("Checking if favorite...");
        if (!user) {
          console.log("User not logged in");
          return;
        }
        if (!character || !character.id) {
          console.log("Character not defined or does not have an id");
          return;
        }
        const favoriteQuery = query(collection(firestore, "Favorites"), where("userId", "==", user.uid));
  
        try {
          const querySnapshot = await getDocs(favoriteQuery);
          querySnapshot.forEach((doc) => {
            const favoritesData = doc.data();
            const isCharacterFavorite = favoritesData.characters.includes(character.id);
            setIsFavorite(isCharacterFavorite);
            console.log("Is favorite:", isCharacterFavorite);
          });
        } catch (error) {
          console.error("Error checking favorite:", error);
        }
      };
  
      checkIsFavorite();
    }, [character, user]);
  
    const toggleFavorite = async () => {
      console.log("Toggling favorite...");
      if (!user) {
        console.log("User not logged in");
        return;
      }
      if (!character || !character.id) {
        console.log("Character not defined or does not have an id");
        return;
      }
      const favoriteQuery = query(collection(firestore, "Favorites"), where("userId", "==", user.uid));
  
      try {
        const querySnapshot = await getDocs(favoriteQuery);
        const docId = querySnapshot.docs[0].id; // Assuming there's only one document for each user
  
        if (querySnapshot.size > 0) {
          const favoritesData = querySnapshot.docs[0].data();
          const isCharacterFavorite = favoritesData.characters.includes(character.id);
  
          if (isCharacterFavorite) {
            const updatedFavorites = favoritesData.characters.filter(id => id !== character.id);
            await setDoc(doc(firestore, "Favorites", docId), { characters: updatedFavorites });
            setIsFavorite(false);
            console.log("Removed from favorites");
          } else {
            const updatedFavorites = [...favoritesData.characters, character.id];
            await setDoc(doc(firestore, "Favorites", docId), { characters: updatedFavorites });
            setIsFavorite(true);
            console.log("Added to favorites");
          }
        } else {
          // If no document exists for the user, create a new one
          const newDocRef = doc(firestore, "Favorites");
          await setDoc(newDocRef, { userId: user.uid, characters: [character.id] });
          setIsFavorite(true);
          console.log("Added to favorites");
        }
      } catch (error) {
        console.error("Error toggling favorite:", error);
      }
    };
  
    return (
      <button className="favorite_button" onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    );
};

export default FavCharacterFunction;
