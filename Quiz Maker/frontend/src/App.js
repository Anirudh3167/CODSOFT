// Package imports
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CSS imports
import './App.css';

// Component Imports
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import AttemptQuiz from './pages/attemptQuiz/AttemptQuiz';

function App() {
  // Setting the Title of the website
  useEffect(() => {
    document.title = "Quiz Maker";
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/quiz' element={<AttemptQuiz />} />
        <Route path='/result' element={<Results />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
