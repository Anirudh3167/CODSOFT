// Package imports
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CSS imports
import './App.css';

// Component Imports
import Home from './pages/Home/Home';
import CustomerDashboard from './pages/CustomerDashboard/CustomerDashboard';
import Signin from './pages/Signin/Signin';

function App() {
  // Setting the Title of the website
  useEffect(() => {
    document.title = "Job Board";
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<CustomerDashboard />} />
        
        <Route path='/signin' element={<Signin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
