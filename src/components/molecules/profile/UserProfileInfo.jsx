import React from 'react';
import './UserProfileInfo.sass';

const UserProfileInfo = ({ username, profileIcon, status, role, description, registrationDate, editCount }) => {
  return (
    <div className="UserProfileInfo">
      <div className="MainProfile">
        <img src={profileIcon} alt="Profile Icon" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>{username}</h2>
          <p>Status: {status}</p>
          <p>Role: {role}</p>
          <button onClick={() => console.log('Logout')}>Logout</button>
          <button onClick={() => console.log('Settings')}>Settings</button>
        </div>
      </div>
      <div className="UserDetails">
        <p>Description: {description}</p>
        <p>Registration Date: {registrationDate}</p>
        <p>Edit Count: {editCount}</p>
      </div>
    </div>
  );
};

export default UserProfileInfo;