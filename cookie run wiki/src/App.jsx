//App.jsx
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import NoPage from './components/pages/NoPage.jsx';
import StoryPage from './components/pages/StoryPage.jsx';
import ProfilePage from './components/pages/ProfilePage.jsx';
import LoginPage from './components/molecules/registration/LoginPage.jsx';
import PrivateRoute from './components/molecules/registration/PrivateRoute';
import CharacterPage from './components/pages/CharacterPage.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/profile" element={<ProfilePage />} isAuthenticated={isAuthenticated} />
        <Route path="/characters/:characterName" element={<CharacterPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
