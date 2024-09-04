// UserSettingsPage.jsx
import React, { useEffect, useState } from 'react';
import Header from '../../templates/header/header.jsx';
import Footer from '../../templates/footer/footer.jsx';
import UserSettingsForm from './UserSettingsForm.jsx';
import styles from '../../organisms/LoginPage.module.sass';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { auth } from '../../../../firebase'; 

const UserSettingsPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDocRef = doc(firestore, 'users', user.uid); 
          const userDocSnap = await getDoc(userDocRef);
    
          if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            setUserData({
              uid: user.uid,
              username: data.username || '',
              profileIcon: data.profileIcon || '',
              description: data.description || '',
              // Add other properties as needed
            });
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      }
    };

    fetchUserData();
  }, [user]); 

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h2>Setting Page</h2>
        {loading ? (
          <p>Loading...</p>
        ) : userData ? (
          <UserSettingsForm userData={userData} />
        ) : (
          <p>No user data available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserSettingsPage;