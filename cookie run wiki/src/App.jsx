//App.jsx
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import NoPage from './components/pages/NoPage.jsx';
import StoryPage from './components/pages/StoryPage.jsx';
import ProfilePage from './components/pages/ProfilePage.jsx';
import LoginPage from './components/molecules/registration/LoginPage.jsx';
import CharacterPage from './components/pages/CharacterPage.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/characters/:characterName" element={<CharacterPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
