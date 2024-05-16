// LoginPage.jsx
import React from 'react';
import Header from '../../templates/header/header.jsx';
import Footer from '../../templates/footer/footer.jsx';
import styles from '../../organisms/LoginPage.module.sass';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, firestore } from '../../../../firebase.js';

const LoginPage = ({ setIsAuthenticated }) => {
  const [signInWithGoogle, user, loading, error2] = useSignInWithGoogle(auth);

  React.useEffect(() => {
    async function fetchData() {
      if (user) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          // Запрос дополнительных данных от пользователя
          const username = prompt('Please enter your username');
          const status = prompt('Please enter your status');
          const role = prompt('Please enter your role');
          const description = prompt('Please enter your description');
          const profileIcon = prompt('Please enter your profile icon URL');

          // Сохранение данных в Firestore с использованием серверного времени
          await setDoc(userDocRef, {
            username,
            status,
            role,
            description,
            profileIcon,
            registrationDate: serverTimestamp(), // Используем серверное время
            favorites: [] 
          });
        }

        history('/profile');
      }
    }

    fetchData();
  }, [user]);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <button className={styles.google_login_button} onClick={() => signInWithGoogle()}>
          <img src="https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Ficons8-google-48.png?alt=media&token=29de35f5-1d5b-4595-b7d5-3f1d8c0bab2d" alt="Exhausted"/>
          Login with Google
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;