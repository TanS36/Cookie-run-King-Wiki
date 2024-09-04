// UserProfileInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfileInfo.sass';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase';

const UserProfileInfo = ({ userData }) => {
  const [signOut, loading, error] = useSignOut(auth);

  // Destructure the userData object to get individual properties
  const { username, profileIcon, status, role, description, registrationDate, editCount } = userData || {};

  // Format the registrationDate to a readable date string without time
  const formattedRegistrationDate = registrationDate ? new Date(registrationDate.seconds * 1000).toLocaleDateString() : 'N/A';

  return (
    <div className="UserProfileInfo">
      <div className="MainProfile">
        <img src={profileIcon} alt="Profile Icon" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>{username}</h2>
          <p>Status: {status}</p>
          <p>Role: {role}</p>
          <button onClick={() => signOut()}>Logout</button>
          <Link to="/settings">
            <button>Settings</button>
          </Link>
        </div>
      </div>
      <div className="SecondProfile">
        <div className="UserDetails">
          <p>Description: {description}</p>
          <p>Registration Date: {formattedRegistrationDate}</p> 
          <p>Edit Count: {editCount}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;