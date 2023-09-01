// Package imports
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CSS imports
import './App.css';

// Component Imports
import Home from './pages/Home/Home';
import CustomerDashboard from './pages/CustomerDashboard/CustomerDashboard';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Job from './pages/Job/Job';
import EmployerDashboard from './pages/EmployerDashboard/EmployerDashboard';
import Profile from './pages/Profile/Profile';

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
        <Route path='/jobs/:id' element={<Job />} />
        <Route path='/hire' element={<EmployerDashboard />} />
        <Route path='/profile/:username' element={<Profile />} />
        
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
