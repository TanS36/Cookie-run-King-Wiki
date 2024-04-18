import React, { useState, useEffect } from 'react';
import { firestore } from "../../../../firebase";
import { collection, query, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase.js';

const FavCharacterFunction = ({ character }) => {
    const [user] = useAuthState(auth);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (user) {
            const fetchFavorites = async () => {
                const favoritesRef = doc(firestore, 'users', user.uid);
                const favoritesSnap = await getDoc(favoritesRef);
                if (favoritesSnap.exists()) {
                    const favoritesData = favoritesSnap.data();
                    setIsFavorite(favoritesData.favorites.includes(character.id));
                }
            };
            fetchFavorites();
        }
    }, [user, character.id]);

    const toggleFavorite = async () => {
        if (user) {
            const favoritesRef = doc(firestore, 'users', user.uid); 
            if (isFavorite) {
                await updateDoc(favoritesRef, {
                    favorites: arrayRemove(character.id)
                });
            } else {
                await updateDoc(favoritesRef, {
                    favorites: arrayUnion(character.id)
                });
            }
            setIsFavorite(!isFavorite);
        }
    };

    return (
        <button className="favorite_button" onClick={toggleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};

export default FavCharacterFunction;