import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import NoPage from "./components/pages/NoPage.jsx";
import StoryPage from "./components/pages/StoryPage.jsx";
import CharacterPage from "./components/pages/CharacterPage.jsx";
import ProfilePage from "./components/pages/ProfilePage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/characters/:characterName" element={<CharacterPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
