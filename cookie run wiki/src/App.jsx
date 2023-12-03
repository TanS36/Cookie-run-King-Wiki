import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlobalStyles from './assets/GlobalStyles.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";

function App() {
  return (
    <>
    <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
