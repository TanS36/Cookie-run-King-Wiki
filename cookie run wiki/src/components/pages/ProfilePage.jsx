//ProfilePage.jsx
import React from 'react';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import styles from '../organisms/ProfilePage.module.sass';
import UserProfileInfo from '../molecules/profile/UserProfileInfo.jsx';
import { auth } from '../../../firebase';

const ProfilePage = () => {
  // Предположим, у вас есть данные пользователя
  const userData = {
    username: 'User123',
    profileIcon: 'https://i.postimg.cc/X7skwvYc/Cookie-gingerbrave-card.png',
    status: 'Active',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    registrationDate: '2024-02-15',
    editCount: 5,
    role: 'Admin'
  };

  return (
    <div className="story">
      <Header />
      <div className={styles.content}>
        <UserProfileInfo {...userData} />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
