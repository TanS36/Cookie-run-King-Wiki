import React, { useEffect, useState } from 'react';
import Header from '../../templates/header/header.jsx';
import Footer from '../../templates/footer/footer.jsx';
import styles from '../../organisms/LoginPage.module.sass';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {auth} from '../../../../firebase.js'

const LoginPage = ({ setIsAuthenticated }) => {
  const [signInWithGoogle, user, loading, error2] = useSignInWithGoogle(auth);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h2>Login Page</h2>
        <div>
          <button className={styles.google_login_button} onClick={() => signInWithGoogle()}>
          <img src="https://firebasestorage.googleapis.com/v0/b/kingdom-5919a.appspot.com/o/other%2Ficons8-google-48.png?alt=media&token=29de35f5-1d5b-4595-b7d5-3f1d8c0bab2d" alt="Exhausted"/>
          Login with Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
