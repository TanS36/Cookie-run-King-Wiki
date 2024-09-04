// ProfilePage.jsx
import React from 'react';
import Header from '../templates/header/header.jsx';
import Footer from '../templates/footer/footer.jsx';
import styles from '../organisms/ProfilePage.module.sass';
import UserProfileInfo from '../molecules/profile/UserProfileInfo.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../../../firebase';
import { doc } from 'firebase/firestore';

const ProfilePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, userDataLoading, userDataError] = useDocument(
    user ? doc(firestore, 'users', user.uid) : null
  );

  if (loading || userDataLoading) {
    return <div>Loading...</div>;
  }

  if (error || userDataError || !user) {
    return <div>Error: {error?.message || userDataError?.message || 'User not authenticated'}</div>;
  }

  return (
    <div className="story">
      <Header />
      <div className={styles.content}>
        {userData && <UserProfileInfo userData={userData.data()} />}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;