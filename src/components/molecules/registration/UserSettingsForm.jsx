// UserSettingsForm.jsx
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../../../firebase';

const UserSettingsForm = ({ userData }) => {
  const [username, setUsername] = useState(userData?.username || '');
  const [profileIcon, setProfileIcon] = useState(userData?.profileIcon || '');
  const [description, setDescription] = useState(userData?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (userData && userData.uid) {
      const userDocRef = doc(firestore, 'users', userData.uid);
      await updateDoc(userDocRef, {
        username,
        profileIcon,
        description,
      });
    } else {
      console.error('User data is missing or incomplete.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Profile Icon URL:
        <input type="text" value={profileIcon} onChange={(e) => setProfileIcon(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default UserSettingsForm;