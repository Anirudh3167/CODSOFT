// Package imports
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CSS imports
import './App.css';

// Component Imports
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';

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
        <Route path='/result' element={<Results />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
