//LoginPage.jsx
import React from 'react';
import Header from '../../templates/header/header.jsx';
import Footer from '../../templates/footer/footer.jsx';
import styles from '../../organisms/LoginPage.module.sass';

const UserSettingsPage = ( ) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h2>Setting Page</h2>
        <h2>Change user name</h2>
        <h2>Change profile image</h2>
      </div>
      <Footer />
    </div>
  );
};

export default UserSettingsPage;
