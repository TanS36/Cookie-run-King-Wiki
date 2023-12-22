import './App.css'
import GlobalStyles from './assets/GlobalStyles.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import NoPage from "./components/pages/NoPage.jsx";
import StoryPage from "./components/pages/StoryPage.jsx";

function App() {
  return (
    <>
    <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Story" element={<StoryPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
